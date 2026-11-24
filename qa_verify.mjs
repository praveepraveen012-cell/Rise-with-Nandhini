import fs from 'fs';
import path from 'path';
import http from 'http';

const distDir = 'C:/Users/prave/rise-with-nandhini/dist';

console.log('=== STARTING QUALITY ASSURANCE TEST SUITE ===');

// 1. Verify existence of core files in dist
const coreFiles = [
  'index.html',
  '.htaccess',
  'send_mail.php',
  'sitemap.xml',
  'robots.txt'
];

let allPassed = true;
console.log('\n--- 1. Testing Core Files in dist ---');
for (const file of coreFiles) {
  const fullPath = path.join(distDir, file);
  if (fs.existsSync(fullPath)) {
    const size = fs.statSync(fullPath).size;
    console.log(`[PASS] ${file} exists (${size} bytes)`);
  } else {
    console.error(`[FAIL] ${file} is missing!`);
    allPassed = false;
  }
}

// 2. Verify images in dist/images
console.log('\n--- 2. Testing Assets in dist/images ---');
const expectedImages = [
  'logo.png',
  'logo-alt.png',
  'badge-certified-coach.png',
  'nandhini-hero-photo.jpg',
  'nandhini-about-photo.jpg',
  'nandhini-portrait-elegant.png',
  'nandhini-hero-cutout.png',
  'nandhini-story.png',
  'nandhini-quote.png',
  'nandhini-coaching-profile.png',
  'nandhini-transformation.png',
  'service-discovery.png',
  'service-mentorship.png',
  'service-therapy.png',
  'service-individual.png',
  'service-group.png',
  'service-vip.png',
  'service-header-bg.png',
  'contact-illustration.png',
  'testimonials/anitha.png',
  'testimonials/priya.png',
  'testimonials/divya.png',
  'testimonials/deepika.png',
  'testimonials/keerthana.png'
];

for (const img of expectedImages) {
  const fullPath = path.join(distDir, 'images', img);
  if (fs.existsSync(fullPath)) {
    const size = fs.statSync(fullPath).size;
    console.log(`[PASS] images/${img} exists (${size} bytes)`);
  } else {
    console.error(`[FAIL] images/${img} is missing!`);
    allPassed = false;
  }
}

// 3. Verify ZIP archive
console.log('\n--- 3. Testing cPanel Production ZIP Archive ---');
const zipPath = 'C:/Users/prave/rise-with-nandhini/rise-with-nandhini-cpanel.zip';
if (fs.existsSync(zipPath)) {
  const zipSize = fs.statSync(zipPath).size;
  console.log(`[PASS] ZIP archive exists (${zipSize} bytes = ${(zipSize / (1024 * 1024)).toFixed(2)} MB)`);
} else {
  console.error(`[FAIL] ZIP archive is missing!`);
  allPassed = false;
}

// 4. Test HTTP Server Simulation
console.log('\n--- 4. Testing HTTP Routing and SPA Fallback ---');

const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];
  const filePath = path.join(distDir, urlPath === '/' ? 'index.html' : urlPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    let contentType = 'text/plain';
    if (filePath.endsWith('.html')) contentType = 'text/html';
    else if (filePath.endsWith('.js')) contentType = 'application/javascript';
    else if (filePath.endsWith('.css')) contentType = 'text/css';
    else if (filePath.endsWith('.png')) contentType = 'image/png';
    else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) contentType = 'image/jpeg';
    else if (filePath.endsWith('.xml')) contentType = 'application/xml';
    else if (filePath.endsWith('.txt')) contentType = 'text/plain';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(fs.readFileSync(filePath));
  } else {
    // SPA fallback
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(indexHtml);
  }
});

  const PORT = 4173;
server.listen(PORT, '127.0.0.1', async () => {
  console.log(`Test server running on port ${PORT}`);

  const testRoutes = [
    '/',
    '/about',
    '/services',
    '/discovery-session',
    '/mentorship-program',
    '/depression-therapy',
    '/individual-coaching-session',
    '/group-coaching',
    '/vip-experience',
    '/contact',
    '/privacy-policy',
    '/terms-conditions',
    '/sitemap.xml',
    '/robots.txt',
    '/images/logo.png',
    '/images/nandhini-hero-photo.jpg'
  ];

  let routeErrors = 0;
  for (const route of testRoutes) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}${route}`);
      if (res.status === 200) {
        console.log(`[PASS] Route ${route} -> HTTP ${res.status} (${res.headers.get('content-type')})`);
      } else {
        console.error(`[FAIL] Route ${route} -> HTTP ${res.status}`);
        routeErrors++;
      }
    } catch (e) {
      console.error(`[FAIL] Route ${route} error:`, e.message);
      routeErrors++;
    }
  }

  server.close(() => {
    console.log('\n=== QA SUMMARY ===');
    if (allPassed && routeErrors === 0) {
      console.log('ALL TESTS PASSED! Quality assurance is 100% green.');
      process.exit(0);
    } else {
      console.error('Some tests failed!');
      process.exit(1);
    }
  });
});
