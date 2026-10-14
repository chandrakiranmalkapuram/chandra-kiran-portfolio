import React from 'react';
import { GraduationCap, BookOpen, MapPin, Calendar } from 'lucide-react';
import { education } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section" aria-label="Education & Qualifications">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education & Qualifications</h2>
          <p className="section-subtitle">
            Formal training in cloud architectures, distributed systems, containerisation, algorithms, and computational intelligence.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid-2">
          {education.map((item) => (
            <div key={item.id} className="glass-card education-card">
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <h3 className="education-degree">{item.degree}</h3>
                {item.status && (
                  <span className={`pill-tag ${item.status === 'In Progress' ? 'accent' : ''}`}>
                    {item.status}
                  </span>
                )}
              </div>

              <div className="education-institution">{item.institution}</div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <Calendar size={14} />
                  <span>{item.period}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <MapPin size={14} />
                  <span>{item.location}</span>
                </div>
              </div>

              {item.description && (
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {item.description}
                </p>
              )}

              {item.modules && item.modules.length > 0 && (
                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <div className="education-modules-title" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <BookOpen size={13} />
                    <span>Key Modules & Focus Areas</span>
                  </div>
                  <div className="education-modules-list">
                    {item.modules.map((mod) => (
                      <span key={mod} className="pill-tag">
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
