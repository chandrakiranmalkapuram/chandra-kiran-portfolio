import React from 'react';
import { Briefcase, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { CerevynPipelinePreview } from './ProjectPreviews';
import { experience } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section" aria-label="Professional Experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={13} />
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
                <p className="experience-description">
                  {item.description}
                </p>

                {/* Visual Pipeline Illustration for Cloud/DevOps Internship */}
                {item.id === 'cerevyn' && (
                  <div style={{ margin: '1.25rem 0' }}>
                    <CerevynPipelinePreview />
                  </div>
                )}

                {/* Detailed Deliverables & Achievements */}
                <ul className="experience-achievements" aria-label="Key responsibilities and achievements">
                  {item.achievements.map((ach, idx) => (
                    <li key={idx} className="experience-achievement-item">
                      <CheckCircle2 size={15} style={{ color: 'var(--accent-forest)', flexShrink: 0, marginTop: '3px' }} />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="experience-tags">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="pill-tag">
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
