import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header" role="banner">
      <div className="container navbar-container">
        {/* Brand Logo & Domain */}
        <a href="#hero" className="navbar-brand" aria-label="Chandra Kiran Malkapuram - Home">
          <div className="navbar-logo-badge" aria-hidden="true">CK</div>
          <div>
            <span style={{ fontWeight: 700 }}>{personalInfo.preferredName}</span>
            <span className="navbar-domain" style={{ display: 'block' }}>{personalInfo.domain}</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-links" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar-link"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons & Socials */}
        <div className="navbar-actions">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-icon-only"
            aria-label="GitHub Profile (opens in new tab)"
            title="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-icon-only"
            aria-label="LinkedIn Profile (opens in new tab)"
            title="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="#contact"
            className="btn btn-primary btn-sm btn-contact"
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <nav className="mobile-nav-drawer" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <a
              href="#contact"
              className="btn btn-primary btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={handleLinkClick}
            >
              Get in Touch
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
