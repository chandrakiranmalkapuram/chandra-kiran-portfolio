import React, { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in your name, email and message.');
      return;
    }

    // Build mailto link for static deployment (no backend required)
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Open mail client
    window.location.href = mailtoUrl;

    setStatusMessage('Opening your email client to send message...');
    setTimeout(() => setStatusMessage(null), 5000);
  };

  return (
    <section id="contact" className="section" aria-label="Contact Chandra Kiran">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">Let's Connect & Collaborate</h2>
          <p className="section-subtitle">
            Whether discussing cloud architecture, Generative AI applications, software engineering opportunities, or technical inquiries — feel free to reach out.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-grid">
          {/* Left: Contact Info Cards */}
          <div className="contact-info-panel">
            {/* Email Card with Copy Button */}
            <div className="contact-card-item">
              <div className="contact-icon-box" aria-hidden="true">
                <Mail size={22} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span className="contact-card-label">Direct Email</span>
                <div className="contact-card-value" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {personalInfo.email}
                </div>
              </div>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? <Check size={14} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Location Card */}
            <div className="contact-card-item">
              <div className="contact-icon-box" aria-hidden="true">
                <MapPin size={22} />
              </div>
              <div>
                <span className="contact-card-label">Location</span>
                <div className="contact-card-value">{personalInfo.location}</div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Open to Greater London, UK & Hybrid / Remote roles
                </span>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-item"
            >
              <div className="contact-icon-box" aria-hidden="true">
                <LinkedinIcon size={22} />
              </div>
              <div>
                <span className="contact-card-label">LinkedIn</span>
                <div className="contact-card-value">linkedin.com/in/chandra-kiran-malkapuram</div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Connect on LinkedIn &rarr;
                </span>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-item"
            >
              <div className="contact-icon-box" aria-hidden="true">
                <GithubIcon size={22} />
              </div>
              <div>
                <span className="contact-card-label">GitHub</span>
                <div className="contact-card-value">github.com/chandrakiranmalkapuram</div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Explore repositories & open source &rarr;
                </span>
              </div>
            </a>
          </div>

          {/* Right: Contact Form */}
          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <MessageSquare size={20} style={{ color: 'var(--accent-cyan)' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Send a Message
              </h3>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="grid-2">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Your Name <span style={{ color: 'var(--accent-cyan)' }}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Your Email <span style={{ color: 'var(--accent-cyan)' }}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="e.g. Engineering Opportunity / Cloud Infrastructure"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message <span style={{ color: 'var(--accent-cyan)' }}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  placeholder="Type your message here..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {statusMessage && (
                <div
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(0, 198, 255, 0.1)',
                    border: '1px solid rgba(0, 198, 255, 0.3)',
                    color: 'var(--text-primary)',
                    fontSize: '0.875rem'
                  }}
                  role="status"
                >
                  {statusMessage}
                </div>
              )}

              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                <Send size={16} />
                <span>Send Message via Email</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
