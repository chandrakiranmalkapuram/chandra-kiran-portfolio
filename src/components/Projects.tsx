import React, { useState } from 'react';
import { ExternalLink, FolderGit2, CheckCircle2, Star, Sparkles, BookOpen } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import type { Project } from '../types';

interface ProjectsProps {
  onNavigate?: (path: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'all' | 'ai-fullstack' | 'cloud-devops' | 'ml-research' | 'frontend'>('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="section" aria-label="Featured Projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Portfolio</span>
          </div>
          <h2 className="section-title">Featured Projects & Systems</h2>
          <p className="section-subtitle">
            Engineered systems spanning production stockroom validation, grounded Generative AI retail assistants, cloud architecture designs, and machine learning pipelines.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="project-filters" role="group" aria-label="Filter projects by domain">
          <button
            type="button"
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects ({projects.length})
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'ai-fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('ai-fullstack')}
          >
            AI & Full-Stack
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'cloud-devops' ? 'active' : ''}`}
            onClick={() => setFilter('cloud-devops')}
          >
            Cloud & Systems
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'ml-research' ? 'active' : ''}`}
            onClick={() => setFilter('ml-research')}
          >
            Machine Learning
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
            onClick={() => setFilter('frontend')}
          >
            Creative Frontend
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid-2">
          {filteredProjects.map((project: Project) => {
            const isCheckCharacter = project.id === 'check-character';

            return (
              <article
                key={project.id}
                className={`glass-card project-card ${isCheckCharacter ? 'flagship-project' : ''}`}
                style={
                  isCheckCharacter
                    ? {
                        borderColor: 'rgba(0, 198, 255, 0.4)',
                        background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.85) 0%, rgba(11, 20, 38, 0.9) 100%)',
                        boxShadow: '0 8px 30px rgba(0, 198, 255, 0.12)'
                      }
                    : undefined
                }
              >
                <div className="project-top">
                  {/* Badge row */}
                  <div className="project-badges">
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {project.featured && (
                        <span className="pill-tag featured">
                          <Star size={11} /> Featured
                        </span>
                      )}
                      {isCheckCharacter && (
                        <span className="pill-tag accent">
                          <Sparkles size={11} /> High-Volume Retail Tool
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>

                  {/* Descriptions */}
                  <p className="project-description">{project.description}</p>

                  {/* Key Architecture Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="project-highlights-list" aria-label="Key highlights">
                      {project.highlights.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="project-highlight-item">
                          <CheckCircle2 size={14} className="project-highlight-bullet" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Tags */}
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="pill-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links Footer */}
                <div className="project-footer">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      aria-label={`Open live demo for ${project.title} in new tab`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  )}

                  {isCheckCharacter && (
                    <a
                      href="/articles/check-character-calculation-algorithms/"
                      onClick={(e) => {
                        if (onNavigate) {
                          e.preventDefault();
                          onNavigate('/articles/check-character-calculation-algorithms/');
                        }
                      }}
                      className="btn btn-secondary btn-sm"
                      aria-label="Read technical algorithm guide for Check Character"
                    >
                      <BookOpen size={14} />
                      <span>Algorithm Guide</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      aria-label={`View source code for ${project.title} on GitHub`}
                    >
                      <GithubIcon size={14} />
                      <span>Source Code</span>
                    </a>
                  )}

                  {!project.liveUrl && !project.githubUrl && (
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      System Design Specification
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
