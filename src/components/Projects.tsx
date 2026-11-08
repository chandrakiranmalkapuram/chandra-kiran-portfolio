import React, { useState } from 'react';
import { ExternalLink, FolderGit2, CheckCircle2, Star, Sparkles, BookOpen } from 'lucide-react';
import { GithubIcon } from './Icons';
import {
  CheckCharacterPreview,
  CommitFlowPreview,
  CreateRotaPreview,
  RetailAIPreview,
  LocationRecoveryPreview,
  DiabeticRetinopathyPreview
} from './ProjectPreviews';
import { projects } from '../data/portfolioData';
import type { Project } from '../types';

interface ProjectsProps {
  onNavigate?: (path: string) => void;
}

const renderProjectPreview = (projectId: string) => {
  switch (projectId) {
    case 'commitflow-ai':
      return <CommitFlowPreview />;
    case 'create-rota':
      return <CreateRotaPreview />;
    case 'retail-ai-assistant':
      return <RetailAIPreview />;
    case 'location-recovery-assistant':
      return <LocationRecoveryPreview />;
    case 'diabetic-retinopathy':
      return <DiabeticRetinopathyPreview />;
    default:
      return null;
  }
};

export const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'all' | 'ai-fullstack' | 'cloud-devops' | 'ml-research' | 'frontend'>('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="section" aria-label="Selected Projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={13} />
            <span>Selected Works &amp; Systems</span>
          </div>
          <h2 className="section-title">Engineered Systems &amp; Software</h2>
          <p className="section-subtitle">
            Selected engineering projects spanning logistics software, cloud platforms, distributed workflows, applied AI and machine learning research.
          </p>
        </div>

        {/* Filter Navigation */}
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
            AI &amp; Full-Stack
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'cloud-devops' ? 'active' : ''}`}
            onClick={() => setFilter('cloud-devops')}
          >
            Cloud &amp; Systems
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
          {filteredProjects.map((project: Project, index: number) => {
            const isCheckCharacter = project.id === 'check-character';
            const projectIndexStr = String(index + 1).padStart(2, '0');

            if (isCheckCharacter) {
              return (
                <article
                  key={project.id}
                  className="project-card flagship-project"
                >
                  <div className="flagship-grid">
                    {/* Left Column: Flagship Header, Architecture & Actions */}
                    <div className="flagship-main">
                      <div className="project-meta-row">
                        <span className="project-category-index">
                          {projectIndexStr} / {project.categoryLabel || project.category.replace('-', ' ')}
                        </span>
                        <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center' }}>
                          {project.status && (
                            <span className="project-status-badge">
                              {project.status}
                            </span>
                          )}
                          <span className="pill-tag accent">
                            <Sparkles size={10} /> Flagship Platform
                          </span>
                        </div>
                      </div>

                      <div style={{ marginTop: '0.85rem' }}>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-subtitle">{project.subtitle}</p>
                      </div>

                      <p className="project-description" style={{ marginTop: '0.95rem' }}>
                        {project.description}
                      </p>

                      {/* Flagship Problem & Solution Architecture */}
                      {(project.problem || project.solution) && (
                        <div className="flagship-architecture-block">
                          {project.problem && (
                            <div className="flagship-arch-item">
                              <span className="flagship-arch-label">The Operational Challenge</span>
                              <p className="flagship-arch-text">{project.problem}</p>
                            </div>
                          )}
                          {project.solution && (
                            <div className="flagship-arch-item">
                              <span className="flagship-arch-label">Engineered Solution</span>
                              <p className="flagship-arch-text">{project.solution}</p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Flagship Links */}
                      <div className="project-footer flagship-footer">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm"
                            aria-label={`Open live demo for ${project.title} in new tab`}
                          >
                            <span>Live Platform</span>
                            <ExternalLink size={13} />
                          </a>
                        )}

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
                          <BookOpen size={13} />
                          <span>Algorithm Guide</span>
                        </a>

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
                      </div>
                    </div>

                    {/* Right Column: Interactive Stockroom Inspector & Architectural Highlights */}
                    <div className="flagship-sidebar">
                      {/* Flagship Stockroom Terminal Preview */}
                      <CheckCharacterPreview />

                      <div className="flagship-spec-header" style={{ marginTop: '1.25rem' }}>
                        <CheckCircle2 size={16} className="project-highlight-bullet" />
                        <span>Key Engineering Highlights</span>
                      </div>

                      {project.highlights && project.highlights.length > 0 && (
                        <ul className="project-highlights-list" aria-label="Key architecture highlights">
                          {project.highlights.map((item, idx) => (
                            <li key={idx} className="project-highlight-item">
                              <span className="project-highlight-bullet" aria-hidden="true">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="flagship-stack-block">
                        <span className="flagship-stack-label">Core Technologies</span>
                        <div className="project-tags">
                          {project.tags.map((tag) => (
                            <span key={tag} className="pill-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            }

            // Secondary Project Cards
            return (
              <article
                key={project.id}
                className="project-card"
              >
                <div className="project-top">
                  {/* Category Index & Status */}
                  <div className="project-meta-row">
                    <span className="project-category-index">
                      {projectIndexStr} / {project.categoryLabel || project.category.replace('-', ' ')}
                    </span>
                    <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center' }}>
                      {project.status && (
                        <span className="project-status-badge">
                          {project.status}
                        </span>
                      )}
                      {project.featured && (
                        <span className="pill-tag featured">
                          <Star size={10} /> Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>

                  {/* Distinctive Technical Visual Preview for this Project */}
                  {renderProjectPreview(project.id) && (
                    <div className="card-visual-slot">
                      {renderProjectPreview(project.id)}
                    </div>
                  )}

                  {/* Clean Narrative Description */}
                  <p className="project-description">{project.description}</p>

                  {/* Key Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="project-highlights-list" aria-label="Key architecture highlights">
                      {project.highlights.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="project-highlight-item">
                          <CheckCircle2 size={14} className="project-highlight-bullet" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Stack Tags */}
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
                      <span>Live Platform</span>
                      <ExternalLink size={13} />
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
