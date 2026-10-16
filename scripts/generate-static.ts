import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { articles, authorProfile } from '../src/data/articlesData.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Run "vite build" first.');
  process.exit(1);
}

const templatePath = path.join(distDir, 'index.html');
const templateHtml = fs.readFileSync(templatePath, 'utf-8');

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function ensureDir(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function injectMetadata(html: string, options: {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: string;
  schemaJson?: object;
  bodyContent: string;
}): string {
  let result = html;

  // Replace title
  result = result.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(options.title)}</title>`);

  // Replace description
  result = result.replace(
    /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="description" content="${escapeHtml(options.description)}" />`
  );

  // Replace canonical
  result = result.replace(
    /<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i,
    `<link rel="canonical" href="${options.canonicalUrl}" />`
  );

  // Replace og:title
  result = result.replace(
    /<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:title" content="${escapeHtml(options.title)}" />`
  );

  // Replace og:description
  result = result.replace(
    /<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:description" content="${escapeHtml(options.description)}" />`
  );

  // Replace og:url
  result = result.replace(
    /<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:url" content="${options.canonicalUrl}" />`
  );

  // Replace og:type if provided
  if (options.ogType) {
    result = result.replace(
      /<meta\s+property=["']og:type["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:type" content="${options.ogType}" />`
    );
  }

  // Inject schema JSON-LD right before </head>
  if (options.schemaJson) {
    const safeJson = JSON.stringify(options.schemaJson, null, 2).replace(/<\/script/gi, '<\\/script');
    const scriptTag = `\n    <script type="application/ld+json">\n${safeJson}\n    </script>\n  </head>`;
    result = result.replace('</head>', scriptTag);
  }

  // Inject prerendered body content inside <div id="root">...</div>
  result = result.replace(
    '<div id="root"></div>',
    `<div id="root">${options.bodyContent}</div>`
  );

  return result;
}

// 1. Generate /articles/index.html
function generateArticlesIndex() {
  const articlesListHtml = `
    <header class="navbar-header" role="banner">
      <div class="container navbar-container">
        <a href="/" class="navbar-brand">
          <div class="navbar-logo-badge" aria-hidden="true">CK</div>
          <div>
            <span style="font-weight: 700;">Chandra Kiran</span>
            <span class="navbar-domain" style="display: block;">chandrakiran.dev</span>
          </div>
        </a>
        <nav class="navbar-links">
          <a href="/#about" class="navbar-link">About</a>
          <a href="/#skills" class="navbar-link">Skills</a>
          <a href="/#projects" class="navbar-link">Projects</a>
          <a href="/articles/" class="navbar-link active" style="color: var(--accent-cyan); font-weight: 600;">Articles</a>
          <a href="/#experience" class="navbar-link">Experience</a>
          <a href="/#contact" class="navbar-link">Contact</a>
        </nav>
      </div>
    </header>
    <main id="main-content">
      <div class="articles-page-container">
        <div class="section-header" style="text-align: left; max-width: 800px; margin-bottom: 2.5rem;">
          <div class="section-tag">
            <span>Engineering Guides &amp; Logistics Insights</span>
          </div>
          <h1 class="section-title" style="font-size: 2.5rem; margin-bottom: 1rem;">
            Warehouse Voice Logistics &amp; Algorithms Hub
          </h1>
          <p class="section-subtitle" style="text-align: left; margin: 0;">
            Practical engineering breakdowns, mathematical checksum formulations, acoustic reliability research, and edge web architectures derived from high-volume retail warehouse operations.
          </p>
        </div>
        <div class="articles-grid">
          ${articles.map(a => `
            <article class="glass-card article-card">
              <div class="article-card-header">
                <span class="pill-tag accent">${escapeHtml(a.category)}</span>
                <div class="article-meta-inline">
                  <span>${a.readTimeMinutes} min read</span> ·
                  <time datetime="${a.publishedDate}">${a.publishedDate}</time>
                </div>
              </div>
              <h2 class="article-card-title">
                <a href="/articles/${a.slug}/" class="article-card-link">${escapeHtml(a.title)}</a>
              </h2>
              <p class="article-card-subtitle">${escapeHtml(a.subtitle)}</p>
              <p class="article-card-summary">${escapeHtml(a.summary)}</p>
              <div class="article-tags">
                ${a.tags.map(t => `<span class="pill-tag">${escapeHtml(t)}</span>`).join('')}
              </div>
              <div class="article-card-footer">
                <span class="article-author-byline">By <strong>${escapeHtml(a.author.name)}</strong></span>
                <a href="/articles/${a.slug}/" class="btn btn-primary btn-sm">Read Guide &rarr;</a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="container">
        <div class="footer-nav-links" style="margin-bottom: 1.5rem;">
          <a href="/articles/" class="footer-nav-link">Articles</a> ·
          <a href="/privacy/" class="footer-nav-link">Privacy Policy</a> ·
          <a href="/terms/" class="footer-nav-link">Terms of Use</a> ·
          <a href="/checkcharacter/" class="footer-nav-link">Check Character Tool</a>
        </div>
        <div class="footer-bottom">
          <div>&copy; 2026 Chandra Kiran Malkapuram. All rights reserved.</div>
        </div>
      </div>
    </footer>
  `;

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Warehouse Voice Logistics & Algorithms Hub',
    description: 'Technical engineering guides, checksum algorithms, and acoustic reliability research for warehouse voice picking systems.',
    url: 'https://chandrakiran.dev/articles/',
    author: {
      '@type': 'Person',
      name: authorProfile.name,
      jobTitle: authorProfile.title
    }
  };

  const finalHtml = injectMetadata(templateHtml, {
    title: 'Warehouse Voice Logistics & Algorithms Hub | Chandra Kiran Malkapuram',
    description: 'Practical engineering breakdowns, mathematical checksum formulations (modulo 26 & 99), acoustic confusion analysis, and edge web architectures for warehouse logistics.',
    canonicalUrl: 'https://chandrakiran.dev/articles/',
    ogType: 'website',
    schemaJson,
    bodyContent: articlesListHtml
  });

  const targetDir = path.join(distDir, 'articles');
  ensureDir(targetDir);
  fs.writeFileSync(path.join(targetDir, 'index.html'), finalHtml, 'utf-8');
  console.log('✓ Generated dist/articles/index.html');
}

// 2. Generate each article /articles/:slug/index.html
function generateArticlePages() {
  for (const article of articles) {
    const articleBodyHtml = `
      <header class="navbar-header" role="banner">
        <div class="container navbar-container">
          <a href="/" class="navbar-brand">
            <div class="navbar-logo-badge" aria-hidden="true">CK</div>
            <div>
              <span style="font-weight: 700;">Chandra Kiran</span>
              <span class="navbar-domain" style="display: block;">chandrakiran.dev</span>
            </div>
          </a>
          <nav class="navbar-links">
            <a href="/#about" class="navbar-link">About</a>
            <a href="/#skills" class="navbar-link">Skills</a>
            <a href="/#projects" class="navbar-link">Projects</a>
            <a href="/articles/" class="navbar-link active" style="color: var(--accent-cyan); font-weight: 600;">Articles</a>
            <a href="/#contact" class="navbar-link">Contact</a>
          </nav>
        </div>
      </header>
      <main id="main-content">
        <div class="article-reader-container">
          <nav aria-label="Breadcrumbs" class="breadcrumbs-nav">
            <ol class="breadcrumbs-list">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-separator">&gt;</li>
              <li class="breadcrumb-item"><a href="/articles/">Articles</a></li>
              <li class="breadcrumb-separator">&gt;</li>
              <li class="breadcrumb-item current">${escapeHtml(article.title)}</li>
            </ol>
          </nav>
          <header class="article-header">
            <span class="pill-tag accent">${escapeHtml(article.category)}</span>
            <span style="margin-left: 0.75rem; font-size: 0.85rem; color: var(--text-muted);">${article.readTimeMinutes} min read · Published ${article.publishedDate}</span>
            <h1 class="article-title" style="margin-top: 1rem;">${escapeHtml(article.title)}</h1>
            <p class="article-subtitle">${escapeHtml(article.subtitle)}</p>
            <div class="article-author-card">
              <div class="navbar-logo-badge" aria-hidden="true">CK</div>
              <div>
                <div style="font-weight: 600; color: var(--text-primary);">${escapeHtml(article.author.name)}</div>
                <div style="font-size: 0.85rem; color: var(--text-muted);">${escapeHtml(article.author.title)}</div>
              </div>
            </div>
          </header>
          <article class="article-body">
            ${article.sections.map(section => `
              <section id="${section.id}" class="article-section">
                <h2 class="article-section-heading">${escapeHtml(section.heading)}</h2>
                ${section.paragraphs.map(p => `<p class="article-paragraph">${escapeHtml(p)}</p>`).join('')}
                ${section.callout ? `
                  <aside class="article-callout ${section.callout.type}">
                    <p>${escapeHtml(section.callout.text)}</p>
                  </aside>
                ` : ''}
                ${section.codeBlock ? `
                  <figure class="article-code-figure">
                    <div class="article-code-header">
                      <span class="article-code-lang">${escapeHtml(section.codeBlock.language)}</span>
                    </div>
                    <pre class="article-code-block"><code>${escapeHtml(section.codeBlock.code)}</code></pre>
                    ${section.codeBlock.caption ? `<figcaption class="article-code-caption">${escapeHtml(section.codeBlock.caption)}</figcaption>` : ''}
                  </figure>
                ` : ''}
                ${section.table ? `
                  <figure class="article-table-figure">
                    <div class="table-responsive">
                      <table class="article-table">
                        ${section.table.caption ? `<caption>${escapeHtml(section.table.caption)}</caption>` : ''}
                        <thead>
                          <tr>${section.table.headers.map(h => `<th scope="col">${escapeHtml(h)}</th>`).join('')}</tr>
                        </thead>
                        <tbody>
                          ${section.table.rows.map(r => `<tr>${r.map(c => `<td>${escapeHtml(c)}</td>`).join('')}</tr>`).join('')}
                        </tbody>
                      </table>
                    </div>
                  </figure>
                ` : ''}
              </section>
            `).join('')}
          </article>
          <div class="article-footer-tags">
            ${article.tags.map(t => `<span class="pill-tag">${escapeHtml(t)}</span>`).join('')}
          </div>
          <div class="article-author-bio-section glass-card">
            <h3>About the Author: ${escapeHtml(article.author.name)}</h3>
            <p>${escapeHtml(article.author.bio)}</p>
          </div>
        </div>
      </main>
      <footer class="footer">
        <div class="container">
          <div class="footer-nav-links" style="margin-bottom: 1.5rem;">
            <a href="/articles/" class="footer-nav-link">Articles</a> ·
            <a href="/privacy/" class="footer-nav-link">Privacy Policy</a> ·
            <a href="/terms/" class="footer-nav-link">Terms of Use</a> ·
            <a href="/checkcharacter/" class="footer-nav-link">Check Character Tool</a>
          </div>
          <div class="footer-bottom">
            <div>&copy; 2026 Chandra Kiran Malkapuram. All rights reserved.</div>
          </div>
        </div>
      </footer>
    `;

    const schemaJson = {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: article.title,
      description: article.summary,
      datePublished: article.publishedDate,
      dateModified: article.lastUpdated,
      inLanguage: 'en-GB',
      author: {
        '@type': 'Person',
        name: article.author.name,
        jobTitle: article.author.title
      },
      publisher: {
        '@type': 'Person',
        name: 'Chandra Kiran Malkapuram'
      },
      url: `https://chandrakiran.dev/articles/${article.slug}/`
    };

    const finalHtml = injectMetadata(templateHtml, {
      title: `${article.title} | Chandra Kiran Malkapuram`,
      description: article.summary,
      canonicalUrl: `https://chandrakiran.dev/articles/${article.slug}/`,
      ogType: 'article',
      schemaJson,
      bodyContent: articleBodyHtml
    });

    const targetDir = path.join(distDir, 'articles', article.slug);
    ensureDir(targetDir);
    fs.writeFileSync(path.join(targetDir, 'index.html'), finalHtml, 'utf-8');
    console.log(`✓ Generated dist/articles/${article.slug}/index.html`);
  }
}

// 3. Generate /privacy/index.html
function generatePrivacyPage() {
  const privacyHtml = `
    <header class="navbar-header" role="banner">
      <div class="container navbar-container">
        <a href="/" class="navbar-brand">
          <div class="navbar-logo-badge" aria-hidden="true">CK</div>
          <div>
            <span style="font-weight: 700;">Chandra Kiran</span>
            <span class="navbar-domain" style="display: block;">chandrakiran.dev</span>
          </div>
        </a>
      </div>
    </header>
    <main id="main-content">
      <div class="article-reader-container">
        <nav aria-label="Breadcrumbs" class="breadcrumbs-nav">
          <ol class="breadcrumbs-list">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-separator">&gt;</li>
            <li class="breadcrumb-item current">Privacy Policy</li>
          </ol>
        </nav>
        <header class="article-header">
          <h1 class="article-title">Privacy Policy</h1>
          <p class="article-subtitle">Last Updated: 16 October 2026 · Effective Date: 16 October 2026</p>
        </header>
        <article class="article-body">
          <section class="article-section">
            <h2>1. Introduction</h2>
            <p>This Privacy Policy explains how chandrakiran.dev, operated by Chandra Kiran Malkapuram, handles visitor data, privacy, and technical logging.</p>
          </section>
          <section class="article-section">
            <h2>2. Information We Collect and Technical Processing</h2>
            <p>The Website is an informational engineering portfolio, educational technical publication, and software demonstration platform. Standard HTTP request headers (IP address, user agent, URL, timestamp) are processed at the network edge by Cloudflare Pages/Workers solely for security monitoring, DDoS mitigation, and traffic routing.</p>
            <p>Interactive tools (such as Check Character) may store recent calculation history locally in browser localStorage on the user's device. This data is never transmitted to our servers.</p>
            <p>If you voluntarily email the operator, your email address is used solely to reply. No automated marketing databases or contact lists are maintained.</p>
          </section>
          <section class="article-section">
            <h2>3. Advertising Disclosures (Future Monetisation Notice)</h2>
            <aside class="article-callout info">
              <p><strong>Current Status:</strong> No commercial advertisements, Google AdSense tags, or ad-tracking scripts are currently active or loaded on this website.</p>
            </aside>
            <p>In preparation for future Google AdSense monetisation, this section provides advance disclosure that if advertising is enabled, third-party vendors (including Google) may use cookies to serve ads based on prior visits. Users may opt out at adssettings.google.com or aboutads.info.</p>
          </section>
          <section class="article-section">
            <h2>4. Cookies and Tracking Technologies</h2>
            <p><strong>The portfolio website itself does not set any first-party or third-party cookies.</strong> No analytics tracking suites (such as Google Analytics) are loaded on this portfolio.</p>
          </section>
          <section class="article-section">
            <h2>5. Data Controller &amp; Your Rights</h2>
            <p>Under the UK Data Protection Act 2018 and the GDPR, visitors have statutory rights regarding personal data provided via direct email (access, correction, or deletion). Contact: chandrakiranmalkapuram2000@gmail.com</p>
          </section>
        </article>
      </div>
    </main>
    <footer class="footer">
      <div class="container">
        <div class="footer-nav-links" style="margin-bottom: 1.5rem;">
          <a href="/articles/" class="footer-nav-link">Articles</a> ·
          <a href="/privacy/" class="footer-nav-link">Privacy Policy</a> ·
          <a href="/terms/" class="footer-nav-link">Terms of Use</a> ·
          <a href="/checkcharacter/" class="footer-nav-link">Check Character Tool</a>
        </div>
        <div class="footer-bottom">
          <div>&copy; 2026 Chandra Kiran Malkapuram. All rights reserved.</div>
        </div>
      </div>
    </footer>
  `;

  const finalHtml = injectMetadata(templateHtml, {
    title: 'Privacy Policy | Chandra Kiran Malkapuram',
    description: 'Privacy Policy and data processing disclosures for chandrakiran.dev, covering edge infrastructure, advertising cookies, and contact information.',
    canonicalUrl: 'https://chandrakiran.dev/privacy/',
    ogType: 'website',
    bodyContent: privacyHtml
  });

  const targetDir = path.join(distDir, 'privacy');
  ensureDir(targetDir);
  fs.writeFileSync(path.join(targetDir, 'index.html'), finalHtml, 'utf-8');
  console.log('✓ Generated dist/privacy/index.html');
}

// 4. Generate /terms/index.html
function generateTermsPage() {
  const termsHtml = `
    <header class="navbar-header" role="banner">
      <div class="container navbar-container">
        <a href="/" class="navbar-brand">
          <div class="navbar-logo-badge" aria-hidden="true">CK</div>
          <div>
            <span style="font-weight: 700;">Chandra Kiran</span>
            <span class="navbar-domain" style="display: block;">chandrakiran.dev</span>
          </div>
        </a>
      </div>
    </header>
    <main id="main-content">
      <div class="article-reader-container">
        <nav aria-label="Breadcrumbs" class="breadcrumbs-nav">
          <ol class="breadcrumbs-list">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-separator">&gt;</li>
            <li class="breadcrumb-item current">Terms of Use &amp; Disclaimers</li>
          </ol>
        </nav>
        <header class="article-header">
          <h1 class="article-title">Terms of Use &amp; Editorial Disclaimers</h1>
          <p class="article-subtitle">Last Updated: 16 October 2026 · Effective Date: 16 October 2026</p>
        </header>
        <article class="article-body">
          <aside class="article-callout note" style="margin-bottom: 2rem;">
            <h3>Independent Educational Disclaimer</h3>
            <p>The Check Character web application and the technical articles on chandrakiran.dev are completely independent research, educational, and developer productivity resources. They are not affiliated with, sponsored by, or endorsed by Argos or J Sainsbury plc.</p>
          </aside>
          <section class="article-section">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using chandrakiran.dev and its related web tools, you agree to comply with these Terms of Use.</p>
          </section>
          <section class="article-section">
            <h2>2. Purpose of Technical Articles and Demonstrations</h2>
            <p>Articles, diagrams, and code snippets are presented solely for informational and educational purposes without professional warranty.</p>
          </section>
          <section class="article-section">
            <h2>3. Intellectual Property &amp; Open Source Code</h2>
            <p>Original engineering articles and commentary are the intellectual property of Chandra Kiran Malkapuram. Connected open-source repositories are released under their respective repository licenses (MIT License).</p>
          </section>
          <section class="article-section">
            <h2>4. Limitation of Liability</h2>
            <p>The services and tools are provided "as is" without warranty of any kind. Governing law: England and Wales.</p>
          </section>
        </article>
      </div>
    </main>
    <footer class="footer">
      <div class="container">
        <div class="footer-nav-links" style="margin-bottom: 1.5rem;">
          <a href="/articles/" class="footer-nav-link">Articles</a> ·
          <a href="/privacy/" class="footer-nav-link">Privacy Policy</a> ·
          <a href="/terms/" class="footer-nav-link">Terms of Use</a> ·
          <a href="/checkcharacter/" class="footer-nav-link">Check Character Tool</a>
        </div>
        <div class="footer-bottom">
          <div>&copy; 2026 Chandra Kiran Malkapuram. All rights reserved.</div>
        </div>
      </div>
    </footer>
  `;

  const finalHtml = injectMetadata(templateHtml, {
    title: 'Terms of Use & Disclaimers | Chandra Kiran Malkapuram',
    description: 'Terms of use, intellectual property details, and independent educational disclaimers for chandrakiran.dev and the Check Character tool.',
    canonicalUrl: 'https://chandrakiran.dev/terms/',
    ogType: 'website',
    bodyContent: termsHtml
  });

  const targetDir = path.join(distDir, 'terms');
  ensureDir(targetDir);
  fs.writeFileSync(path.join(targetDir, 'index.html'), finalHtml, 'utf-8');
  console.log('✓ Generated dist/terms/index.html');
}

console.log('Building pre-rendered static routes for SEO...');
generateArticlesIndex();
generateArticlePages();
generatePrivacyPage();
generateTermsPage();
console.log('Static route pre-rendering complete!');
