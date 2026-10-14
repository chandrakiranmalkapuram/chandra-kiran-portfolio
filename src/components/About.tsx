import React from 'react';
import { Shield, Sparkles, Cloud, Code2, Layers, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="section" aria-label="About Chandra Kiran">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">Bridging Cloud Infrastructure & Applied AI</h2>
          <p className="section-subtitle">
            Focused on building dependable, cloud-native systems and conversational AI tools that solve real operational friction.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid-2" style={{ alignItems: 'start' }}>
          {/* Narrative Overview */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Engineering Philosophy & Background
            </h3>

            {personalInfo.fullBio.map((paragraph, index) => (
              <p key={index} style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {paragraph}
              </p>
            ))}

            <div style={{ marginTop: '0.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--accent-cyan)' }}>
                <Cloud size={18} />
                <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Location & Status</span>
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
                <Layers size={20} style={{ color: 'var(--accent-cyan)' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Core Competencies
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {personalInfo.coreCompetencies.map((comp) => (
                  <span key={comp} className="pill-tag accent">
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Principles */}
            <div className="glass-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                <Shield size={20} style={{ color: 'var(--accent-indigo)' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Production Discipline
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Cpu size={18} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      Distroless & Hardened Containers
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                      Minimising Docker attack surface and production vulnerabilities with minimal base images.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Cloud size={18} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      Repeatable CI/CD Workflows
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                      Multi-stage automated pipelines ensuring deterministic build, test, and release cycles.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Code2 size={18} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      Grounded LLM Integrations
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                      Strict prompt grounding against structured domain data to prevent hallucination.
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
