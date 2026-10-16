import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, ArrowRight, Tag, Sparkles } from 'lucide-react';
import { articles } from '../../data/articlesData';
import type { Article } from '../../types';

interface ArticleListProps {
  onNavigate: (path: string) => void;
}

export const ArticleList: React.FC<ArticleListProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Voice Logistics', 'Algorithms & Verification', 'Acoustic Reliability', 'Systems Architecture'];

  const filteredArticles = selectedCategory === 'all'
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <div className="articles-page-container">
      {/* Hero Header */}
      <div className="section-header" style={{ textAlign: 'left', maxWidth: '800px', marginBottom: '2.5rem' }}>
        <div className="section-tag">
          <BookOpen size={14} />
          <span>Engineering Guides & Logistics Insights</span>
        </div>
        <h1 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Warehouse Voice Logistics & Algorithms Hub
        </h1>
        <p className="section-subtitle" style={{ textAlign: 'left', margin: 0 }}>
          Practical engineering breakdowns, mathematical checksum formulations, acoustic reliability research, and edge web architectures derived from high-volume retail warehouse operations.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="project-filters" role="group" aria-label="Filter articles by category" style={{ justifyContent: 'flex-start' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat === 'all' ? `All Articles (${articles.length})` : cat}
          </button>
        ))}
      </div>

      {/* Article Grid */}
      <div className="articles-grid">
        {filteredArticles.map((article: Article) => {
          const articleUrl = `/articles/${article.slug}/`;

          return (
            <article key={article.slug} className="glass-card article-card">
              <div className="article-card-header">
                <span className="pill-tag accent">
                  {article.category}
                </span>
                <div className="article-meta-inline">
                  <span className="article-meta-item">
                    <Clock size={13} />
                    <span>{article.readTimeMinutes} min read</span>
                  </span>
                  <span className="article-meta-item">
                    <Calendar size={13} />
                    <time dateTime={article.publishedDate}>{article.publishedDate}</time>
                  </span>
                </div>
              </div>

              <h2 className="article-card-title">
                <a
                  href={articleUrl}
                  onClick={(e) => handleLinkClick(articleUrl, e)}
                  className="article-card-link"
                >
                  {article.title}
                </a>
              </h2>

              <p className="article-card-subtitle">{article.subtitle}</p>
              <p className="article-card-summary">{article.summary}</p>

              {/* Tags */}
              <div className="article-tags">
                {article.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="pill-tag">
                    <Tag size={11} style={{ marginRight: '4px' }} />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Action */}
              <div className="article-card-footer">
                <div className="article-author-byline">
                  By <strong>{article.author.name}</strong>
                </div>
                <a
                  href={articleUrl}
                  onClick={(e) => handleLinkClick(articleUrl, e)}
                  className="btn btn-primary btn-sm"
                  aria-label={`Read ${article.title}`}
                >
                  <span>Read Guide</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* Highlight Box for Check Character Live App */}
      <div className="glass-card article-highlight-box" style={{ marginTop: '3.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <div className="navbar-logo-badge" aria-hidden="true" style={{ width: '32px', height: '32px', fontSize: '0.85rem' }}>
            <Sparkles size={16} />
          </div>
          <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
            Interactive Check Character Tool
          </h3>
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
          Want to see these algorithms in action? Test Store (modulo 26) and RFC (modulo 99) calculations, inverted reverse lookups, and phonetic voice mistake alerts directly in the live web application.
        </p>
        <a
          href="/checkcharacter/"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Launch Check Character Application</span>
          <ArrowRight size={15} />
        </a>
      </div>
    </div>
  );
};
