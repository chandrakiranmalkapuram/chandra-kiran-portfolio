import { ArrowDown, Mail, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="container">
        <div className="hero-content">
          {/* Status Indicator */}
          <div className="hero-status-badge">
            <span className="hero-status-dot" aria-hidden="true" />
            <span>{personalInfo.badge}</span>
          </div>

          {/* Name & Title */}
          <h1 className="hero-name">
            Hi, I'm <span className="hero-gradient-text">{personalInfo.preferredName}</span>
          </h1>

          <p className="hero-tagline">
            {personalInfo.tagline}
          </p>

          <p className="hero-bio">
            {personalInfo.shortBio}
          </p>

          {/* Call to Actions */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" id="hero-view-projects-btn">
              <span>Explore Projects</span>
              <ArrowDown size={16} />
            </a>

            <a href="#contact" className="btn btn-secondary" id="hero-contact-btn">
              <Mail size={16} />
              <span>Contact Me</span>
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
              <ExternalLink size={14} style={{ opacity: 0.6 }} />
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
              <ExternalLink size={14} style={{ opacity: 0.6 }} />
            </a>
          </div>

          {/* Quick Stats & Architecture Anchors */}
          <div className="hero-stats-row">
            <div className="stat-item">
              <span className="stat-value">Azure & Docker</span>
              <span className="stat-label">Cloud-Native CI/CD & Containers</span>
            </div>

            <div className="stat-item">
              <span className="stat-value">LLMs & Gemini</span>
              <span className="stat-label">Applied AI & Prompt Engineering</span>
            </div>

            <div className="stat-item">
              <span className="stat-value">MSc Cloud</span>
              <span className="stat-label">University of East London</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
