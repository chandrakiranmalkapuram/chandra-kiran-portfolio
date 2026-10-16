import React from 'react';
import { FileText, ChevronRight, AlertCircle, ArrowLeft } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface TermsProps {
  onNavigate: (path: string) => void;
}

export const TermsAndDisclaimer: React.FC<TermsProps> = ({ onNavigate }) => {
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
            Terms of Use & Disclaimers
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
          <FileText size={14} />
          <span>Legal & Editorial Disclaimers</span>
        </div>
        <h1 className="article-title">Terms of Use & Editorial Disclaimers</h1>
        <p className="article-subtitle">
          Last Updated: 16 October 2026 · Effective Date: 16 October 2026
        </p>
      </header>

      <article className="article-body">
        {/* Important Independent Disclaimer Callout */}
        <aside className="article-callout note" style={{ marginBottom: '2rem' }}>
          <div className="callout-icon" aria-hidden="true">
            <AlertCircle size={20} />
          </div>
          <div className="callout-content">
            <h3 style={{ margin: '0 0 0.5rem', color: 'var(--text-primary)', fontSize: '1rem' }}>
              Independent Educational Disclaimer
            </h3>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.6 }}>
              The <strong>Check Character</strong> web application and the technical articles hosted on <strong>chandrakiran.dev</strong> are completely independent research, educational, and developer productivity resources. They are not affiliated with, sponsored by, authorized by, or endorsed by Argos, J Sainsbury plc, or any proprietary warehouse management system vendor. All product names, logos, and brands mentioned are property of their respective owners.
            </p>
          </div>
        </aside>

        <section className="article-section">
          <h2 className="article-section-heading">1. Acceptance of Terms</h2>
          <p className="article-paragraph">
            By accessing or using <strong>{personalInfo.domain}</strong> and its related web tools, you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please discontinue use of the site.
          </p>
        </section>

        <section className="article-section">
          <h2 className="article-section-heading">2. Purpose of Technical Articles and Demonstrations</h2>
          <p className="article-paragraph">
            All written articles, architectural diagrams, mathematical formulations, and interactive calculators published on this site are presented solely for informational, engineering research, and educational purposes. While every effort has been made to verify algorithm formulas and operational explanations against real-world logistics standards, the material does not constitute professional enterprise consulting or formal corporate warranty.
          </p>
        </section>

        <section className="article-section">
          <h2 className="article-section-heading">3. Intellectual Property & Open Source Code</h2>
          <p className="article-paragraph">
            Original engineering articles, commentary, and custom diagrams are the intellectual property of <strong>{personalInfo.name}</strong>, protected under international copyright law.
          </p>
          <p className="article-paragraph">
            Open-source source code repositories published in connection with this portfolio (hosted at <code>github.com/chandrakiranmalkapuram</code>) are released under their respective open-source licenses (predominantly the MIT License). You may study, modify, and implement these algorithm patterns for personal learning and non-infringing software systems in accordance with the repository licenses.
          </p>
        </section>

        <section className="article-section">
          <h2 className="article-section-heading">4. Community Voice Confusion Submissions</h2>
          <p className="article-paragraph">
            Users who submit incident observations to the Voice Confusion Risk system grant us an irrevocable, perpetual, non-exclusive license to review, normalize, aggregate, and publish these technical observations to help logistics workers prevent speech recognition picking errors. Submissions must not contain confidential proprietary data, customer personal information, or defamatory statements.
          </p>
        </section>

        <section className="article-section">
          <h2 className="article-section-heading">5. Disclaimer of Warranties and Limitation of Liability</h2>
          <p className="article-paragraph">
            THE SERVICES, ARTICLES, AND TOOLS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>
          <p className="article-paragraph">
            IN NO EVENT SHALL THE AUTHOR OR OPERATOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, LOSS OF USE, DATA, OR OPERATIONAL DOWNTIME) ARISING IN ANY WAY OUT OF THE USE OF THIS SITE OR ITS TOOLS.
          </p>
        </section>

        <section className="article-section">
          <h2 className="article-section-heading">6. Governing Law</h2>
          <p className="article-paragraph">
            These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law principles.
          </p>
        </section>

        <section className="article-section">
          <h2 className="article-section-heading">7. Inquiries and Notices</h2>
          <p className="article-paragraph">
            For questions or inquiries regarding these Terms or editorial content, please contact <strong>{personalInfo.email}</strong>.
          </p>
        </section>
      </article>
    </div>
  );
};
