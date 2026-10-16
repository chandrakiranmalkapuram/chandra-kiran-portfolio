import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  activeSection?: string;
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath = '/', onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = currentPath === '/' || currentPath === '';

  const navLinks = [
    { label: 'About', href: isHome ? '#about' : '/#about' },
    { label: 'Skills', href: isHome ? '#skills' : '/#skills' },
    { label: 'Projects', href: isHome ? '#projects' : '/#projects' },
    { label: 'Articles', href: '/articles/', isPage: true },
    { label: 'Experience', href: isHome ? '#experience' : '/#experience' },
    { label: 'Education', href: isHome ? '#education' : '/#education' },
    { label: 'Contact', href: isHome ? '#contact' : '/#contact' }
  ];

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      if (href.startsWith('/articles') || href === '/' || href.startsWith('/#') || !isHome) {
        e.preventDefault();
        onNavigate(href);
      }
    }
  };

  return (
    <header className="navbar-header" role="banner">
      <div className="container navbar-container">
        {/* Brand Logo & Domain */}
        <a
          href={isHome ? '#hero' : '/'}
          className="navbar-brand"
          aria-label="Chandra Kiran Malkapuram - Home"
          onClick={(e) => {
            if (!isHome && onNavigate) {
              e.preventDefault();
              onNavigate('/');
            }
          }}
        >
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
              key={link.label}
              href={link.href}
              className={`navbar-link ${currentPath.startsWith('/articles') && link.label === 'Articles' ? 'active' : ''}`}
              style={currentPath.startsWith('/articles') && link.label === 'Articles' ? { color: 'var(--accent-cyan)', fontWeight: 600 } : undefined}
              onClick={(e) => handleLinkClick(link.href, e)}
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
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(link.href, e)}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <a
              href={isHome ? '#contact' : '/#contact'}
              className="btn btn-primary btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={(e) => handleLinkClick(isHome ? '#contact' : '/#contact', e)}
            >
              Get in Touch
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
