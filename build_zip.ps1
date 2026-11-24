$ProgressPreference = 'SilentlyContinue'
Add-Type -AssemblyName System.IO.Compression.FileSystem

$dist = "C:\Users\prave\rise-with-nandhini\dist"
$zip = "C:\Users\prave\rise-with-nandhini\rise-with-nandhini-cpanel.zip"
$rootZip = "C:\Users\prave\rise-with-nandhini-cpanel.zip"

if (Test-Path $zip) { Remove-Item $zip -Force }
if (Test-Path $rootZip) { Remove-Item $rootZip -Force }

Write-Host "Creating ZIP from $dist directly using .NET ZipFile..."
[System.IO.Compression.ZipFile]::CreateFromDirectory($dist, $zip, [System.IO.Compression.CompressionLevel]::Optimal, $false)

Copy-Item -Path $zip -Destination $rootZip -Force

Write-Host "Verifying ZIP contents:"
$archive = [System.IO.Compression.ZipFile]::OpenRead($zip)
Write-Host "Total entries in ZIP: $($archive.Entries.Count)"
foreach ($entry in $archive.Entries) {
    if ($entry.FullName -notmatch '/') {
        Write-Host " - Root file: $($entry.FullName)"
    }
}
$archive.Dispose()

$zipSize = (Get-Item $zip).Length
Write-Host "SUCCESS! Archive created: $zip ($zipSize bytes)"
