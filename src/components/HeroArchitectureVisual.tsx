import React from 'react';
import { GitBranch, Box, Cloud, Database, Cpu, ShieldCheck, ArrowRight, Activity } from 'lucide-react';

export const HeroArchitectureVisual: React.FC = () => {
  return (
    <div className="hero-tech-visual" aria-hidden="true" role="presentation">
      {/* Blueprint Header */}
      <div className="tech-visual-header">
        <div className="tech-visual-title-row">
          <span className="tech-visual-tag">CLOUD ENGINEERING // ARCHITECTURE OVERVIEW</span>
          <span className="tech-status-indicator">
            <span className="tech-status-dot" />
            <span>PRACTICAL WORKFLOWS &amp; ARCHITECTURAL PATTERNS</span>
          </span>
        </div>
        <div className="tech-visual-caption">
          CI/CD Automation, Container Runtimes &amp; Applied Systems Architecture
        </div>
      </div>

      {/* Primary Pipeline: GitHub Actions → Docker → Azure Container Apps */}
      <div className="arch-schematic-grid">
        {/* Stage 1: GitHub Actions */}
        <div className="arch-node-group">
          <div className="group-label">01 / AUTOMATION</div>
          <div className="arch-node">
            <div className="node-header">
              <GitBranch size={15} className="node-icon" />
              <span className="node-title">GitHub Actions</span>
            </div>
            <p className="node-description">
              Multi-job CI/CD workflows with automated lint, build matrix, and Vitest test suites.
            </p>
            <div className="node-meta-tag">Deterministic CI/CD</div>
          </div>
        </div>

        {/* Animated Connector 1: 01 -> 02 */}
        <div className="arch-connector-column" aria-hidden="true">
          <div className="connector-track">
            <span className="connector-pulse pulse-1" />
          </div>
          <ArrowRight size={13} className="connector-arrow" />
        </div>

        {/* Stage 2: Docker Containers */}
        <div className="arch-node-group">
          <div className="group-label">02 / CONTAINERS</div>
          <div className="arch-node highlight">
            <div className="node-header">
              <Box size={15} className="node-icon" />
              <span className="node-title">Docker Containers</span>
            </div>
            <p className="node-description">
              Multi-stage builds using python:3.11-slim base images, minimising vulnerability footprint.
            </p>
            <div className="node-meta-tag">Slim Base Images</div>
          </div>
        </div>

        {/* Animated Connector 2: 02 -> 03 */}
        <div className="arch-connector-column" aria-hidden="true">
          <div className="connector-track">
            <span className="connector-pulse pulse-2" />
          </div>
          <ArrowRight size={13} className="connector-arrow" />
        </div>

        {/* Stage 3: Azure Container Apps */}
        <div className="arch-node-group">
          <div className="group-label">03 / CLOUD INGRESS</div>
          <div className="arch-node">
            <div className="node-header">
              <Cloud size={15} className="node-icon" />
              <span className="node-title">Azure Container Apps</span>
            </div>
            <p className="node-description">
              Managed microservice ingress, private ACR image registry, and HTTPS termination.
            </p>
            <div className="node-meta-tag">Scalable Ingress</div>
          </div>
        </div>
      </div>

      {/* Secondary Supporting Layer: AI Grounding & Persistence */}
      <div className="arch-secondary-section">
        <div className="secondary-section-header">
          <span className="secondary-section-label">SUPPORTING CAPABILITIES</span>
        </div>
        <div className="arch-sublayer-row">
          <div className="sublayer-item">
            <Cpu size={14} className="sublayer-icon" />
            <div className="sublayer-text">
              <strong>Applied AI Layer:</strong> Grounded prompt builders with Zod schema validation (Gemini 2.5 &amp; xAI Grok).
            </div>
          </div>
          <div className="sublayer-item">
            <Database size={14} className="sublayer-icon" />
            <div className="sublayer-text">
              <strong>Persistence Layer:</strong> PostgreSQL &amp; Supabase with workspace-scoped queries and RLS.
            </div>
          </div>
        </div>
      </div>

      {/* Engineering Discipline Footer Ribbon */}
      <div className="tech-visual-footer">
        <div className="footer-spec">
          <ShieldCheck size={13} className="icon-forest" />
          <span>Core Flow: <strong>Pipeline → Container → Cloud Ingress</strong></span>
        </div>
        <div className="footer-spec">
          <Activity size={13} className="icon-champagne" />
          <span>Security Model: <strong>Multi-Stage Slim Builds</strong></span>
        </div>
      </div>
    </div>
  );
};
