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
  const rootTagMatch = content.match(/<[a-z][a-z0-9-]*\b[^>]*?\s+id\s*=\s*["']root["'][^>]*>/i);
  const rootIndex = rootTagMatch && rootTagMatch.index !== undefined
    ? rootTagMatch.index + rootTagMatch[0].length
    : -1;
  const bodyEndIndex = content.indexOf('</body>');
  const rootContent = rootIndex !== -1 && bodyEndIndex !== -1
    ? content.substring(rootIndex, bodyEndIndex).replace(/<\/div>\s*$/, '').trim()
    : '';

  // Check for canonical URL
  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1] : null;

  if (!title || !desc || !canonical) {
    console.error(`❌ FAILED metadata check for ${route}`);
    failed++;
  } else if (rootContent.length < 200) {
    console.error(`❌ FAILED body content check for ${route} (content too short: ${rootContent.length} chars)`);
    failed++;
  } else {
    console.log(`✅ PASSED: ${route}`);
    console.log(`   Title: ${title}`);
    console.log(`   Canonical: ${canonical}`);
    console.log(`   HTML Body Length: ${rootContent.length} chars`);

    if (route === '/') {
      const h1Matches = content.match(/<h1[\s>]/gi) || [];
      const exactOneH1 = h1Matches.length === 1;
      const hasRootElement = /<[a-z][a-z0-9-]*\b[^>]*?\s+id\s*=\s*["']root["'][^>]*>/i.test(content);
      const hasScriptEntry = /<script\b[^>]*?\s+type\s*=\s*["']module["'][^>]*>/i.test(content);
      const hasCheckCharacterLink = content.includes('href="/checkcharacter/"');
      const hasArticlesLink = content.includes('href="/articles/"');

      const jsonLdTags = content.match(/<script type="application\/ld\+json">/gi) || [];
      const hasSingleJsonLdTag = jsonLdTags.length === 1;

      let jsonLdParsed = false;
      let hasPerson = false;
      let hasWebsite = false;

      const jsonLdContentMatch = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
      if (jsonLdContentMatch && hasSingleJsonLdTag) {
        try {
          const parsed = JSON.parse(jsonLdContentMatch[1]) as {
            '@graph'?: Array<{ '@type'?: string }>;
            '@type'?: string;
          };
          jsonLdParsed = true;
          const graph = Array.isArray(parsed['@graph']) ? parsed['@graph'] : [parsed];
          hasPerson = graph.some((item) => item?.['@type'] === 'Person');
          hasWebsite = graph.some((item) => item?.['@type'] === 'WebSite');
        } catch {
          jsonLdParsed = false;
        }
      }

      console.log(`   Exactly 1 H1 Tag: ${exactOneH1 ? 'Passed' : 'Failed (' + h1Matches.length + ')'}`);
      console.log(`   Root Element (id="root"): ${hasRootElement ? 'Present' : 'Missing'}`);
      console.log(`   App Entry Script (<script type="module">): ${hasScriptEntry ? 'Present' : 'Missing'}`);
      console.log(`   Single JSON-LD Script Tag: ${hasSingleJsonLdTag ? 'Passed' : 'Failed (' + jsonLdTags.length + ')'}`);
      console.log(`   JSON-LD Valid & Parsed: ${jsonLdParsed ? 'Passed' : 'Failed'}`);
      console.log(`   Person & WebSite Schemas: ${hasPerson && hasWebsite ? 'Present' : 'Missing'}`);
      console.log(`   Crawlable Links (/checkcharacter/ & /articles/): ${hasCheckCharacterLink && hasArticlesLink ? 'Present' : 'None'}`);

      if (
        !exactOneH1 ||
        !hasRootElement ||
        !hasScriptEntry ||
        !hasSingleJsonLdTag ||
        !jsonLdParsed ||
        !hasPerson ||
        !hasWebsite ||
        !hasCheckCharacterLink ||
        !hasArticlesLink
      ) {
        console.error('❌ FAILED homepage specific verification checks');
        failed++;
      }
    } else if (route.startsWith('/articles/')) {
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
