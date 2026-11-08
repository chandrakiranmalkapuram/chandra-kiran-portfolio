import React from 'react';
import { Shield, Sparkles, MapPin, Code2, Layers, Cpu, GitBranch } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="section" aria-label="About Chandra Kiran">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={13} />
            <span>Profile &amp; Philosophy</span>
          </div>
          <h2 className="section-title">Bridging Cloud Infrastructure &amp; Applied AI</h2>
          <p className="section-subtitle">
            Focused on building dependable, cloud-native architectures and grounded conversational AI systems that solve genuine operational friction.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid-2" style={{ alignItems: 'start' }}>
          {/* Narrative Overview */}
          <div className="glass-card about-narrative">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--text-primary)' }}>
              Engineering Philosophy &amp; Background
            </h3>

            {personalInfo.fullBio.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}

            <div style={{ marginTop: '0.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-forest)' }}>
                <MapPin size={16} />
                <span style={{ fontWeight: 600, fontSize: '0.9rem', fontFamily: 'var(--font-sans)' }}>Location &amp; Engagement</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                Based in {personalInfo.location}. {personalInfo.availability}.
              </p>
            </div>
          </div>

          {/* Core Competencies & Architecture Focus */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Core Competencies */}
            <div className="glass-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                <Layers size={18} style={{ color: 'var(--accent-forest)' }} />
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Core Competencies
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {personalInfo.coreCompetencies.map((comp) => (
                  <span key={comp} className="pill-tag">
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Principles */}
            <div className="glass-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                <Shield size={18} style={{ color: 'var(--accent-forest)' }} />
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Production Discipline
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="about-principle-card">
                  <div className="about-principle-icon" aria-hidden="true">
                    <Cpu size={16} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      Hardened &amp; Slim Containers
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                      Minimising container attack surface with optimised slim images and safeguarding cloud microservices.
                    </p>
                  </div>
                </div>

                <div className="about-principle-card">
                  <div className="about-principle-icon" aria-hidden="true">
                    <GitBranch size={16} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      Repeatable CI/CD Workflows
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                      Multi-stage automated pipelines ensuring deterministic build, security audit, and zero-downtime release cycles.
                    </p>
                  </div>
                </div>

                <div className="about-principle-card">
                  <div className="about-principle-icon" aria-hidden="true">
                    <Code2 size={16} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      Grounded LLM Integrations
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                      Strict prompt grounding against structured domain data to guarantee factual accuracy and prevent hallucinations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
