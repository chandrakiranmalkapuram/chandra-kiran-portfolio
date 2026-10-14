import React from 'react';
import { Cloud, Terminal, Cpu, Layout, Database, ShieldCheck, Wrench } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  Cloud: <Cloud size={20} />,
  Terminal: <Terminal size={20} />,
  Cpu: <Cpu size={20} />,
  Layout: <Layout size={20} />,
  Database: <Database size={20} />,
  ShieldCheck: <ShieldCheck size={20} />
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section" aria-label="Technical Skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Wrench size={14} />
            <span>Technical Stack</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of cloud platforms, DevOps automation tooling, AI frameworks, and full-stack languages applied across production and research.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass-card skill-category-card">
              <div className="skill-category-header">
                <div className="skill-category-icon" aria-hidden="true">
                  {iconMap[category.icon] || <Cpu size={20} />}
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>

              <div className="skill-pills-wrap">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-pill">
                    <span>{skill.name}</span>
                    {skill.tag && (
                      <span className="skill-pill-level">{skill.tag}</span>
                    )}
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
