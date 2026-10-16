import React from 'react';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ChevronRight,
  User,
  ExternalLink,
  Info,
  AlertTriangle,
  Lightbulb,
  FileText
} from 'lucide-react';
import type { Article } from '../../types';
import { articles } from '../../data/articlesData';

interface ArticleViewProps {
  article: Article;
  onNavigate: (path: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ article, onNavigate }) => {
  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
  };

  // Find next and previous articles
  const currentIndex = articles.findIndex((a) => a.slug === article.slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <div className="article-reader-container">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumbs" className="breadcrumbs-nav">
        <ol className="breadcrumbs-list">
          <li className="breadcrumb-item">
            <a href="/" onClick={(e) => handleLinkClick('/', e)}>
              Home
            </a>
          </li>
          <li className="breadcrumb-separator" aria-hidden="true">
            <ChevronRight size={14} />
          </li>
          <li className="breadcrumb-item">
            <a href="/articles/" onClick={(e) => handleLinkClick('/articles/', e)}>
              Articles
            </a>
          </li>
          <li className="breadcrumb-separator" aria-hidden="true">
            <ChevronRight size={14} />
          </li>
          <li className="breadcrumb-item current" aria-current="page">
            {article.title}
          </li>
        </ol>
      </nav>

      {/* Back to Articles Button */}
      <div style={{ marginBottom: '1.5rem' }}>
        <a
          href="/articles/"
          onClick={(e) => handleLinkClick('/articles/', e)}
          className="btn btn-secondary btn-sm"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <ArrowLeft size={14} />
          <span>Back to All Articles</span>
        </a>
      </div>

      {/* Article Header */}
      <header className="article-header">
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <span className="pill-tag accent">{article.category}</span>
          <div className="article-meta-inline">
            <span className="article-meta-item">
              <Clock size={13} />
              <span>{article.readTimeMinutes} min read</span>
            </span>
            <span className="article-meta-item">
              <Calendar size={13} />
              <span>Published {article.publishedDate}</span>
            </span>
          </div>
        </div>

        <h1 className="article-title">{article.title}</h1>
        <p className="article-subtitle">{article.subtitle}</p>

        {/* Author Byline Card */}
        <div className="article-author-card">
          <div className="navbar-logo-badge" style={{ width: '42px', height: '42px', fontSize: '1rem' }} aria-hidden="true">
            CK
          </div>
          <div>
            <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
              {article.author.name}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {article.author.title}
            </div>
          </div>
        </div>
      </header>

      {/* Related Interactive Tool Banner */}
      {article.relatedProject && (
        <div className="glass-card article-interactive-banner">
          <div>
            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-accent)', fontWeight: 600 }}>
              Interactive Companion System
            </div>
            <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
              {article.relatedProject.title}
            </div>
          </div>
          <a
            href={article.relatedProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <span>{article.relatedProject.label}</span>
            <ExternalLink size={13} />
          </a>
        </div>
      )}

      {/* Quick Table of Contents */}
      {article.sections.length > 2 && (
        <nav aria-label="Table of Contents" className="glass-card article-toc">
          <div className="article-toc-title">
            <FileText size={16} />
            <span>Table of Contents</span>
          </div>
          <ol className="article-toc-list">
            {article.sections.map((section) => (
              <li key={section.id} className="article-toc-item">
                <a href={`#${section.id}`}>{section.heading}</a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Article Body Content */}
      <article className="article-body">
        {article.sections.map((section) => (
          <section key={section.id} id={section.id} className="article-section">
            <h2 className="article-section-heading">{section.heading}</h2>

            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="article-paragraph">
                {p}
              </p>
            ))}

            {/* Callout Box */}
            {section.callout && (
              <aside className={`article-callout ${section.callout.type}`}>
                <div className="callout-icon" aria-hidden="true">
                  {section.callout.type === 'warning' ? (
                    <AlertTriangle size={18} />
                  ) : section.callout.type === 'tip' ? (
                    <Lightbulb size={18} />
                  ) : (
                    <Info size={18} />
                  )}
                </div>
                <div className="callout-content">
                  <p>{section.callout.text}</p>
                </div>
              </aside>
            )}

            {/* Code Block */}
            {section.codeBlock && (
              <figure className="article-code-figure">
                <div className="article-code-header">
                  <span className="article-code-lang">{section.codeBlock.language}</span>
                </div>
                <pre className="article-code-block">
                  <code>{section.codeBlock.code}</code>
                </pre>
                {section.codeBlock.caption && (
                  <figcaption className="article-code-caption">
                    {section.codeBlock.caption}
                  </figcaption>
                )}
              </figure>
            )}

            {/* Table */}
            {section.table && (
              <figure className="article-table-figure">
                <div className="table-responsive">
                  <table className="article-table">
                    {section.table.caption && <caption>{section.table.caption}</caption>}
                    <thead>
                      <tr>
                        {section.table.headers.map((h, hIdx) => (
                          <th key={hIdx} scope="col">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </figure>
            )}
          </section>
        ))}
      </article>

      {/* Tags */}
      <div className="article-footer-tags">
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Tags:</span>
        {article.tags.map((tag) => (
          <span key={tag} className="pill-tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Author Bio Section */}
      <section className="glass-card article-author-bio-section" aria-label="About the author">
        <div className="author-bio-header">
          <div className="navbar-logo-badge" style={{ width: '48px', height: '48px', fontSize: '1.2rem' }} aria-hidden="true">
            <User size={24} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
              About the Author: {article.author.name}
            </h3>
            <p style={{ margin: '0.2rem 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {article.author.title}
            </p>
          </div>
        </div>
        <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {article.author.bio}
        </p>
      </section>

      {/* Next / Previous Article Navigation */}
      <nav className="article-pagination-nav" aria-label="Article navigation">
        {prevArticle ? (
          <a
            href={`/articles/${prevArticle.slug}/`}
            onClick={(e) => handleLinkClick(`/articles/${prevArticle.slug}/`, e)}
            className="glass-card article-pagination-link prev"
          >
            <span className="pagination-label">
              <ArrowLeft size={14} /> Previous Guide
            </span>
            <span className="pagination-title">{prevArticle.title}</span>
          </a>
        ) : (
          <div />
        )}

        {nextArticle && (
          <a
            href={`/articles/${nextArticle.slug}/`}
            onClick={(e) => handleLinkClick(`/articles/${nextArticle.slug}/`, e)}
            className="glass-card article-pagination-link next"
          >
            <span className="pagination-label">
              Next Guide <ChevronRight size={14} />
            </span>
            <span className="pagination-title">{nextArticle.title}</span>
          </a>
        )}
      </nav>
    </div>
  );
};
