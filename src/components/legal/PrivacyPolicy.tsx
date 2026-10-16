import React from 'react';
import { Shield, ChevronRight, Mail, ArrowLeft } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface PrivacyPolicyProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <div className="article-reader-container">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="breadcrumbs-nav">
        <ol className="breadcrumbs-list">
          <li className="breadcrumb-item">
            <a href="/" onClick={(e) => handleLinkClick('/', e)}>
              Home
            </a>
          </li>
          <li className="breadcrumb-separator" aria-hidden="true">
            <ChevronRight size={14} />
          </li>
          <li className="breadcrumb-item current" aria-current="page">
            Privacy Policy
          </li>
        </ol>
      </nav>

      <div style={{ marginBottom: '1.5rem' }}>
        <a
          href="/"
          onClick={(e) => handleLinkClick('/', e)}
          className="btn btn-secondary btn-sm"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <ArrowLeft size={14} />
          <span>Back to Portfolio</span>
        </a>
      </div>

      <header className="article-header">
        <div className="section-tag" style={{ width: 'fit-content', marginBottom: '0.75rem' }}>
          <Shield size={14} />
          <span>Transparency & Data Protection</span>
        </div>
        <h1 className="article-title">Privacy Policy</h1>
        <p className="article-subtitle">
          Last Updated: 16 October 2026 · Effective Date: 16 October 2026
        </p>
      </header>

      <article className="article-body">
        <section className="article-section">
          <h2 className="article-section-heading">1. Introduction</h2>
          <p className="article-paragraph">
            This Privacy Policy explains how <strong>{personalInfo.domain}</strong> (the "Website"), operated by <strong>{personalInfo.name}</strong> ("we", "us", or "our"), handles visitor data, privacy, and technical logging. We respect your privacy and are committed to clear, transparent disclosure of all technical and operational data flows.
          </p>
        </section>

        <section className="article-section">
          <h2 className="article-section-heading">2. Information We Collect and Technical Processing</h2>
          <p className="article-paragraph">
            The Website is an informational engineering portfolio, educational technical publication, and software demonstration platform. We handle technical data in the following specific ways:
          </p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            <li>
              <strong>Edge Infrastructure & Server Logs:</strong> The Website is served via Cloudflare Pages and Workers. Standard HTTP request headers (IP address, browser user agent, operating system, requested URL, and timestamp) are processed at the network edge strictly for DDoS protection, network routing, and security monitoring.
            </li>
            <li>
              <strong>Client-Side Local Storage:</strong> Interactive demonstration tools (such as the Check Character application) may use your browser’s native <code>localStorage</code> to store recent calculation history locally on your device. This data is stored strictly on your local browser and is never transmitted to our servers. You can clear this data at any time via your browser settings or in-app buttons.
            </li>
            <li>
              <strong>Direct Communications:</strong> If you voluntarily send an email to {personalInfo.email}, we receive your email address and any message content you include. This information is used solely to respond to your inquiry and is never shared, rented, or sold. This site does not operate automated mailing lists or marketing databases.
            </li>
            <li>
              <strong>Crowd-Sourced Reports (Check Character):</strong> Public submissions to the Voice Confusion Risk system submit user-provided descriptions of warehouse speech recognition errors. These community observations do not require user account registration.
            </li>
          </ul>
        </section>

        <section className="article-section">
          <h2 className="article-section-heading">3. Advertising Disclosures (Future Monetisation Notice)</h2>
          <div className="article-callout info" style={{ margin: '1rem 0 1.25rem' }}>
            <p style={{ margin: 0 }}>
              <strong>Current Status:</strong> No commercial advertisements, Google AdSense tags, or ad-tracking scripts are currently active or loaded on this website.
            </p>
          </div>
          <p className="article-paragraph">
            In preparation for future Google AdSense monetisation to support hosting and ongoing technical writing, this section provides advance disclosure of planned advertising policies:
          </p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            <li>
              If third-party advertising is enabled, third-party vendors, including Google, will use cookies to serve ads based on prior visits to this Website or other websites across the Internet.
            </li>
            <li>
              Google's use of advertising cookies enables it and its partners to serve ads based on visits to this site and other sites on the Internet.
            </li>
            <li>
              Users may opt out of personalized advertising by visiting <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-accent)' }}>Google Ads Settings</a>.
            </li>
            <li>
              Alternatively, users can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-accent)' }}>www.aboutads.info</a>.
            </li>
          </ul>
        </section>

        <section className="article-section">
          <h2 className="article-section-heading">4. Cookies and Tracking Technologies</h2>
          <p className="article-paragraph">
            <strong>The portfolio website itself does not set any first-party or third-party cookies.</strong> No analytics tracking suites (such as Google Analytics) are loaded on this portfolio. If third-party advertising partners are enabled in the future, cookie usage will be governed by the disclosures in Section 3 above.
          </p>
        </section>

        <section className="article-section">
          <h2 className="article-section-heading">5. Data Controller & Your Rights (UK Data Protection Act / GDPR)</h2>
          <p className="article-paragraph">
            Under the UK Data Protection Act 2018 and the General Data Protection Regulation (GDPR), visitors in the United Kingdom and European Economic Area have specific statutory rights regarding any personal data they provide via email communication (including rights of access, rectification, or deletion).
          </p>
          <p className="article-paragraph">
            Because this Website does not maintain user accounts or personal profiles, the operator does not collect identifiable personal data from general website browsing.
          </p>
        </section>

        <section className="article-section">
          <h2 className="article-section-heading">6. Contact Information</h2>
          <p className="article-paragraph">
            For questions about this Privacy Policy or technical disclosures, contact:
          </p>
          <div className="glass-card" style={{ padding: '1.25rem', marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Mail size={22} style={{ color: 'var(--text-accent)' }} />
            <div>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{personalInfo.name}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Email: <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--text-accent)' }}>{personalInfo.email}</a>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Greater London, United Kingdom</div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};
