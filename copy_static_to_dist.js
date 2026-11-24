const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '..', 'rise-with-nandhini-static');
const altSrcDir = path.resolve(__dirname, 'static');
const source = fs.existsSync(altSrcDir) ? altSrcDir : (fs.existsSync(srcDir) ? srcDir : null);
const dist = path.resolve(__dirname, 'dist');

if (!source) {
  console.log('Source directory already in dist or not found, keeping dist intact.');
  process.exit(0);
}

function copyRec(s, d) {
  if (fs.statSync(s).isDirectory()) {
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
    for (const f of fs.readdirSync(s)) copyRec(path.join(s, f), path.join(d, f));
  } else {
    fs.copyFileSync(s, d);
  }
}

if (source !== dist) {
  if (fs.existsSync(dist)) fs.rmSync(dist, { recursive: true, force: true });
  fs.mkdirSync(dist, { recursive: true });
  copyRec(source, dist);
  fs.writeFileSync(path.join(dist, '.nojekyll'), '');
  if (fs.existsSync(path.join(dist, 'index.html'))) {
    fs.copyFileSync(path.join(dist, 'index.html'), path.join(dist, '404.html'));
  }
  console.log('Static site synced to dist.');
}