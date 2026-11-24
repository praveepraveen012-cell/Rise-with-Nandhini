import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const distDir = 'C:\\Users\\prave\\rise-with-nandhini\\dist';
const zipOutput = 'C:\\Users\\prave\\rise-with-nandhini\\rise-with-nandhini-cpanel.zip';
const rootZipOutput = 'C:\\Users\\prave\\rise-with-nandhini-cpanel.zip';

// Clean old zips if any
if (fs.existsSync(zipOutput)) fs.unlinkSync(zipOutput);
if (fs.existsSync(rootZipOutput)) fs.unlinkSync(rootZipOutput);

console.log('Archiving dist files into cPanel ZIP package...');

// Use PowerShell with explicitly added files including .htaccess
const psScript = `
$dist = "${distDir}"
$zip = "${zipOutput}"
if (Test-Path $zip) { Remove-Item $zip -Force }

# Get all items in dist including hidden/system (.htaccess)
$files = Get-ChildItem -Path $dist -Force | Select-Object -ExpandProperty FullName
Compress-Archive -Path $files -DestinationPath $zip -Force
`;

execSync(`powershell -Command "${psScript.replace(/\n/g, ' ')}"`, { stdio: 'inherit' });

// Also copy to root for extra convenience
fs.copyFileSync(zipOutput, rootZipOutput);

console.log(`Successfully created ZIP archive:`);
console.log(`- ${zipOutput} (${fs.statSync(zipOutput).size} bytes)`);
console.log(`- ${rootZipOutput} (${fs.statSync(rootZipOutput).size} bytes)`);

// Verify contents of the ZIP
const verifyScript = `
Add-Type -AssemblyName System.IO.Compression.FileSystem
$archive = [System.IO.Compression.ZipFile]::OpenRead("${zipOutput}")
Write-Host "=== ZIP ENTRY COUNT: $($archive.Entries.Count) ==="
foreach ($entry in $archive.Entries) {
    if ($entry.FullName -notmatch '/') {
        Write-Host "Root file: $($entry.FullName)"
    }
}
$archive.Dispose()
`;

execSync(`powershell -Command "${verifyScript.replace(/\n/g, ' ')}"`, { stdio: 'inherit' });
