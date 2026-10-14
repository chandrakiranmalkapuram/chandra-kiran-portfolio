import React from 'react';
import { Briefcase, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { experience } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section" aria-label="Professional Experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Work History</span>
          </div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Hands-on delivery of production cloud infrastructure, automated CI/CD pipelines, containerised microservices, and database administration.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="experience-timeline">
          {experience.map((item) => (
            <div key={item.id} className="experience-item">
              <span className="experience-marker" aria-hidden="true" />

              <div className="glass-card">
                {/* Header: Role & Period */}
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{item.role}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.25rem' }}>
                      <span className="experience-company">{item.company}</span>
                      <span className="pill-tag">{item.type}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      <Calendar size={14} />
                      <span className="experience-period">{item.period}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      <MapPin size={14} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary Description */}
                <p style={{ color: 'var(--text-secondary)', margin: '1rem 0', lineHeight: 1.6 }}>
                  {item.description}
                </p>

                {/* Detailed Deliverables & Achievements */}
                <ul className="experience-achievements" aria-label="Key responsibilities and achievements">
                  {item.achievements.map((ach, idx) => (
                    <li key={idx} className="experience-achievement-item">
                      <CheckCircle2 size={16} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  {item.technologies.map((tech) => (
                    <span key={tech} className="pill-tag accent">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
