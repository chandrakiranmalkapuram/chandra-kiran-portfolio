import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-domain">{personalInfo.domain}</div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              {personalInfo.name} · {personalInfo.title}
            </p>
          </div>

          <div className="footer-socials">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-icon-only"
              aria-label="GitHub Profile (opens in new tab)"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-icon-only"
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-secondary btn-icon-only"
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>

            <button
              type="button"
              className="btn btn-secondary btn-icon-only"
              onClick={scrollToTop}
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {CURRENT_YEAR} {personalInfo.name}. All rights reserved.
          </div>
          <div>
            Crafted with React, TypeScript & Vite. Configured for Cloudflare Pages.
          </div>
        </div>
      </div>
    </footer>
  );
};
