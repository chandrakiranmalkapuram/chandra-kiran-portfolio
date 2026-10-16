import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ArticleList } from './components/articles/ArticleList';
import { ArticleView } from './components/articles/ArticleView';
import { PrivacyPolicy } from './components/legal/PrivacyPolicy';
import { TermsAndDisclaimer } from './components/legal/TermsAndDisclaimer';
import { articles } from './data/articlesData';

function normalizePathname(pathname: string): string {
  // Normalize path ensuring consistent trailing slash comparison
  if (!pathname || pathname === '') return '/';
  // Remove duplicate slashes
  const clean = pathname.replace(/\/+/g, '/');
  return clean;
}

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return normalizePathname(window.location.pathname);
    }
    return '/';
  });

  const navigate = (to: string) => {
    // Handle hash links on home vs external paths
    if (to.startsWith('/#')) {
      const hash = to.substring(1);
      window.history.pushState(null, '', to);
      setCurrentPath('/');
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    if (to.startsWith('#')) {
      const el = document.querySelector(to);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const normalized = normalizePathname(to);
    window.history.pushState(null, '', normalized);
    setCurrentPath(normalized);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePathname(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update dynamic meta tags and titles on route changes
  useEffect(() => {
    const cleanPath = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;

    if (cleanPath === '/' || cleanPath === '') {
      document.title = 'Chandra Kiran Malkapuram | AI & Cloud / DevOps Engineer';
    } else if (cleanPath === '/articles/') {
      document.title = 'Warehouse Voice Logistics & Algorithms Hub | Chandra Kiran Malkapuram';
    } else if (cleanPath.startsWith('/articles/')) {
      const slug = cleanPath.replace('/articles/', '').replace(/\/$/, '');
      const matched = articles.find((a) => a.slug === slug);
      if (matched) {
        document.title = `${matched.title} | Chandra Kiran Malkapuram`;
      }
    } else if (cleanPath === '/privacy/') {
      document.title = 'Privacy Policy | Chandra Kiran Malkapuram';
    } else if (cleanPath === '/terms/') {
      document.title = 'Terms of Use & Disclaimers | Chandra Kiran Malkapuram';
    }
  }, [currentPath]);

  // Route Dispatcher
  const renderContent = () => {
    const clean = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;

    // 1. Articles Hub
    if (clean === '/articles/') {
      return <ArticleList onNavigate={navigate} />;
    }

    // 2. Single Article View
    if (clean.startsWith('/articles/')) {
      const slug = clean.replace('/articles/', '').replace(/\/$/, '');
      const matchedArticle = articles.find((a) => a.slug === slug);

      if (matchedArticle) {
        return <ArticleView article={matchedArticle} onNavigate={navigate} />;
      }

      // If article slug not found, fallback to Article List
      return (
        <div className="article-reader-container" style={{ textAlign: 'center', padding: '8rem 1.5rem' }}>
          <h2>Article Not Found</h2>
          <p style={{ color: 'var(--text-muted)', margin: '1rem 0 2rem' }}>
            The requested article could not be located.
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate('/articles/')}
          >
            Browse All Articles
          </button>
        </div>
      );
    }

    // 3. Privacy Policy
    if (clean === '/privacy/') {
      return <PrivacyPolicy onNavigate={navigate} />;
    }

    // 4. Terms of Use
    if (clean === '/terms/') {
      return <TermsAndDisclaimer onNavigate={navigate} />;
    }

    // 5. Default Home Page (Portfolio sections)
    return (
      <>
        <Hero />
        <About />
        <Skills />
        <Projects onNavigate={navigate} />
        <Experience />
        <Education />
        <Contact />
      </>
    );
  };

  return (
    <>
      {/* Accessibility: Skip Link for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Navigation Header */}
      <Navbar currentPath={currentPath} onNavigate={navigate} />

      {/* Main Landmark */}
      <main id="main-content" tabIndex={-1}>
        {renderContent()}
      </main>

      {/* Footer Landmark */}
      <Footer onNavigate={navigate} />
    </>
  );
};

export default App;
