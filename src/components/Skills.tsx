import React from 'react';
import { Cloud, Terminal, Cpu, Code2, Database, Wrench } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Cloud: <Cloud size={18} />,
  Terminal: <Terminal size={18} />,
  Code2: <Code2 size={18} />,
  Cpu: <Cpu size={18} />,
  Database: <Database size={18} />,
  Wrench: <Wrench size={18} />
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section" aria-label="Technical Skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Wrench size={13} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Technical Skills &amp; Architecture</h2>
          <p className="section-subtitle">
            A comprehensive overview of cloud platforms, DevOps automation tooling, applied AI models, and software engineering technologies applied in production and research.
          </p>
        </div>

        {/* 6 Skill Categories Grid */}
        <div className="grid-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass-card skill-category-card">
              <div className="skill-category-header">
                <div className="skill-category-icon" aria-hidden="true">
                  {iconMap[category.icon] || <Cpu size={18} />}
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>

              <div className="skill-pills-wrap">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-pill">
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
