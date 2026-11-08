import { ArrowDown, Mail, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { HeroArchitectureVisual } from './HeroArchitectureVisual';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="container">
        <div className="hero-content">
          {/* Editorial Split Composition */}
          <div className="hero-split-grid">
            {/* Left: Professional Introduction & Calls to Action */}
            <div className="hero-content-left">
              {/* Status Indicator */}
              <div className="hero-status-badge">
                <span className="hero-status-dot" aria-hidden="true" />
                <span>{personalInfo.badge}</span>
              </div>

              <div className="hero-greeting">
                Software Engineer · Cloud &amp; Applied AI
              </div>

              {/* Name & Title */}
              <h1 className="hero-name">
                {personalInfo.name}
              </h1>

              <p className="hero-tagline">
                {personalInfo.tagline}
              </p>

              {/* Core Engineering Focus Areas */}
              <div className="hero-domains-row" aria-label="Core Engineering Domains">
                <span className="domain-pill">Cloud Computing</span>
                <span className="domain-pill">DevOps &amp; CI/CD</span>
                <span className="domain-pill">Software Engineering</span>
                <span className="domain-pill">Applied AI Systems</span>
              </div>

              <p className="hero-bio">
                {personalInfo.shortBio}
              </p>

              {/* Call to Actions */}
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary" id="hero-view-projects-btn">
                  <span>Explore Selected Projects</span>
                  <ArrowDown size={15} />
                </a>

                <a href="#contact" className="btn btn-secondary" id="hero-contact-btn">
                  <Mail size={15} />
                  <span>Get in Touch</span>
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                  <ExternalLink size={13} style={{ opacity: 0.6 }} />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                  <ExternalLink size={13} style={{ opacity: 0.6 }} />
                </a>
              </div>
            </div>

            {/* Right: Restrained Technical Architecture & CI/CD Blueprint */}
            <div className="hero-technical-showcase">
              <HeroArchitectureVisual />
            </div>
          </div>

          {/* Architecture Specifications Grid */}
          <div className="hero-stats-row">
            <div className="stat-item" data-index="01 / CLOUD & DEVOPS">
              <span className="stat-value">Azure Cloud &amp; Containers</span>
              <span className="stat-label">Hands-on internship &amp; project experience in CI/CD, ACR, and Container Apps</span>
            </div>

            <div className="stat-item" data-index="02 / APPLIED AI & SYSTEMS">
              <span className="stat-value">Grounded LLM Integrations</span>
              <span className="stat-label">Conversational retail intelligence &amp; acoustic confusion mitigation</span>
            </div>

            <div className="stat-item" data-index="03 / EDUCATION & RESEARCH">
              <span className="stat-value">MSc in Cloud Computing</span>
              <span className="stat-label">University of East London · London, United Kingdom</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
