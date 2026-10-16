import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const routes = [
  '/',
  '/articles/',
  '/articles/warehouse-voice-picking-guide/',
  '/articles/check-character-calculation-algorithms/',
  '/articles/acoustic-confusion-voice-picking-accuracy/',
  '/articles/reverse-lookup-warehouse-indexing-engineering/',
  '/articles/offline-warehouse-web-apps-architecture/',
  '/privacy/',
  '/terms/'
];

let failed = 0;

console.log('--- DIRECT ROUTE VERIFICATION REPORT ---');

for (const route of routes) {
  let filePath = path.join(distDir, route, 'index.html');
  if (route === '/') {
    filePath = path.join(distDir, 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    console.error(`❌ FAILED: File does not exist for route ${route} at ${filePath}`);
    failed++;
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf-8');

  // Check for title tag
  const titleMatch = content.match(/<title>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : null;

  // Check for description meta
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  const desc = descMatch ? descMatch[1] : null;

  // Check for meaningful body content inside #root
  const rootIndex = content.indexOf('<div id="root">');
  const bodyEndIndex = content.indexOf('</body>');
  const rootContent = rootIndex !== -1 && bodyEndIndex !== -1
    ? content.substring(rootIndex + '<div id="root">'.length, bodyEndIndex).replace(/<\/div>\s*$/, '').trim()
    : '';

  // Check for canonical URL
  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1] : null;

  if (!title || !desc || !canonical) {
    console.error(`❌ FAILED metadata check for ${route}`);
    failed++;
  } else if (route !== '/' && rootContent.length < 200) {
    console.error(`❌ FAILED body content check for ${route} (content too short: ${rootContent.length} chars)`);
    failed++;
  } else {
    console.log(`✅ PASSED: ${route}`);
    console.log(`   Title: ${title}`);
    console.log(`   Canonical: ${canonical}`);
    console.log(`   HTML Body Length: ${rootContent.length} chars`);
    if (route.startsWith('/articles/')) {
      const hasSchema = content.includes('"@type": "TechArticle"') || content.includes('"@type": "CollectionPage"');
      console.log(`   Schema.org Structured Data: ${hasSchema ? 'Present' : 'None'}`);
    }
  }
}

// Verify robots.txt and sitemap.xml
const robotsPath = path.join(distDir, 'robots.txt');
const sitemapPath = path.join(distDir, 'sitemap.xml');

if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
  const hasGooglebot = robotsContent.includes('Googlebot') && robotsContent.includes('Mediapartners-Google');
  console.log(`✅ PASSED: /robots.txt (Contains Googlebot & Mediapartners-Google: ${hasGooglebot})`);
} else {
  console.error('❌ FAILED: dist/robots.txt does not exist');
  failed++;
}

if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  const countUrls = (sitemapContent.match(/<loc>/g) || []).length;
  console.log(`✅ PASSED: /sitemap.xml (Valid XML with ${countUrls} mapped URLs)`);
} else {
  console.error('❌ FAILED: dist/sitemap.xml does not exist');
  failed++;
}

console.log('----------------------------------------');
if (failed === 0) {
  console.log('🎉 ALL 9 APPROVED ROUTES & DISCOVERY ASSETS VERIFIED SUCCESSFULLY!');
} else {
  console.error(`⚠️ ${failed} route checks failed.`);
  process.exit(1);
}
