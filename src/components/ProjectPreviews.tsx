import React from 'react';
import { GitCommit, ArrowRight, CheckCircle2, ShieldCheck, Radio, RefreshCw, Volume2, Sparkles, Layers } from 'lucide-react';

/**
 * 1. Check Character & Voice Confusion Platform Preview (Flagship)
 * Reflects verified stockroom shelf verification, 4-position weighted Modulo-26 calculation,
 * NATO phonetic speech synthesis, and categorical acoustic confusion tiers (Invariant I5).
 */
export const CheckCharacterPreview: React.FC = () => {
  return (
    <div className="project-visual-preview check-character-preview" aria-hidden="true">
      <div className="preview-header">
        <div className="preview-terminal-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="preview-title-tag">STOCKROOM LOCATOR // DUAL CALCULATION ENGINE</span>
        </div>
        <span className="preview-status-pill green">
          <span className="live-dot" /> Store Locations Indexed
        </span>
      </div>

      <div className="check-char-grid">
        {/* Input & Check Character Display */}
        <div className="check-char-card">
          <div className="preview-sublabel">Verified Store Location</div>
          <div className="check-char-input-sim">
            <span className="loc-segment">10</span>
            <span className="loc-divider">-</span>
            <span className="loc-segment">A</span>
            <span className="loc-divider">-</span>
            <span className="loc-segment highlight">K</span>
          </div>
          <div className="check-char-math">
            <code>(c0×5 + c1×7 + c2×7 + c3×3) mod 26 = 13</code>
          </div>
        </div>

        {/* Calculated Character & Phonetics */}
        <div className="check-char-card result-card">
          <div className="preview-sublabel">Calculated Check Character</div>
          <div className="check-char-value-row">
            <span className="check-char-large">N</span>
            <div className="check-char-phonetic">
              <span className="phonetic-badge">
                <Volume2 size={12} /> NATO Phonetic
              </span>
              <span className="phonetic-text">"NOVEMBER"</span>
            </div>
          </div>
        </div>
      </div>

      {/* Acoustic Confusion Safeguard Bar */}
      <div className="check-char-safeguard">
        <div className="safeguard-metric">
          <ShieldCheck size={14} className="icon-forest" />
          <span>Acoustic Tier: <strong>Model-Similar Checked</strong></span>
        </div>
        <div className="safeguard-metric">
          <Radio size={14} className="icon-champagne" />
          <span>Phonetic Collision Evaluated against: <code>[D, T, P, V]</code></span>
        </div>
        <div className="safeguard-metric">
          <CheckCircle2 size={14} className="icon-forest" />
          <span>Invariant I5 Compliant</span>
        </div>
      </div>
    </div>
  );
};

/**
 * 2. CommitFlow AI Preview
 * Reflects verified GitHub webhook -> BullMQ queue -> xAI Grok (grok-2-latest) -> LinkedIn v2 UGC flow.
 */
export const CommitFlowPreview: React.FC = () => {
  return (
    <div className="project-visual-preview commitflow-preview" aria-hidden="true">
      <div className="preview-header">
        <span className="preview-title-tag">COMMITFLOW // ASYNC CONTENT PIPELINE</span>
        <span className="preview-status-pill green">
          <span className="live-dot" /> BullMQ &amp; Grok Verified
        </span>
      </div>

      <div className="pipeline-flow-row">
        {/* Step 1: Git Commit */}
        <div className="pipeline-node">
          <div className="node-icon-box">
            <GitCommit size={14} />
          </div>
          <div className="node-meta">
            <span className="node-label">Git Push</span>
            <span className="node-code">webhook payload</span>
          </div>
        </div>

        <ArrowRight size={14} className="pipeline-arrow" />

        {/* Step 2: Queue */}
        <div className="pipeline-node">
          <div className="node-icon-box accent">
            <RefreshCw size={14} />
          </div>
          <div className="node-meta">
            <span className="node-label">BullMQ / Redis</span>
            <span className="node-code">worker queue</span>
          </div>
        </div>

        <ArrowRight size={14} className="pipeline-arrow" />

        {/* Step 3: LLM Synthesis */}
        <div className="pipeline-node">
          <div className="node-icon-box grok">
            <Sparkles size={14} />
          </div>
          <div className="node-meta">
            <span className="node-label">xAI Grok</span>
            <span className="node-code">grok-2-latest (Zod)</span>
          </div>
        </div>

        <ArrowRight size={14} className="pipeline-arrow" />

        {/* Step 4: Distribution */}
        <div className="pipeline-node">
          <div className="node-icon-box linkedin">
            <CheckCircle2 size={14} />
          </div>
          <div className="node-meta">
            <span className="node-label">LinkedIn v2</span>
            <span className="node-code">UGC API Post</span>
          </div>
        </div>
      </div>

      <div className="commitflow-post-snippet">
        <div className="snippet-meta">
          <span className="snippet-tag">Illustrative Synthesized Post Preview</span>
          <span className="snippet-badge">Awaiting Dispatch</span>
        </div>
        <p className="snippet-text">
          "Engineered an asynchronous background content pipeline using BullMQ and Redis to convert raw commit telemetry into validated architectural release notes..."
        </p>
      </div>
    </div>
  );
};

/**
 * 3. Create Rota Preview
 * Reflects verified multi-tenant scheduling engine, Google OR-Tools CP-SAT constraint satisfaction,
 * and weekly employee roster shift matrix.
 */
export const CreateRotaPreview: React.FC = () => {
  return (
    <div className="project-visual-preview rota-preview" aria-hidden="true">
      <div className="preview-header">
        <span className="preview-title-tag">ROSTER ENGINE // OR-TOOLS CP-SAT SOLVER</span>
        <span className="preview-status-pill green">
          <span className="live-dot" /> Verified CP-SAT Solver
        </span>
      </div>

      <div className="rota-matrix-table">
        <div className="rota-header-row">
          <span className="rota-col-emp">Team Member (Demo)</span>
          <span className="rota-col-day">Mon</span>
          <span className="rota-col-day">Tue</span>
          <span className="rota-col-day">Wed</span>
          <span className="rota-col-day">Thu</span>
          <span className="rota-col-day">Fri</span>
        </div>

        <div className="rota-data-row">
          <span className="rota-emp-name">Alex M. <span className="emp-role">Lead</span></span>
          <span className="rota-shift morning">08:00</span>
          <span className="rota-shift morning">08:00</span>
          <span className="rota-shift off">REST</span>
          <span className="rota-shift morning">08:00</span>
          <span className="rota-shift morning">08:00</span>
        </div>

        <div className="rota-data-row">
          <span className="rota-emp-name">Sarah T. <span className="emp-role">DevOps</span></span>
          <span className="rota-shift evening">13:00</span>
          <span className="rota-shift evening">13:00</span>
          <span className="rota-shift evening">13:00</span>
          <span className="rota-shift off">REST</span>
          <span className="rota-shift evening">13:00</span>
        </div>

        <div className="rota-data-row">
          <span className="rota-emp-name">Elena R. <span className="emp-role">Cloud</span></span>
          <span className="rota-shift off">REST</span>
          <span className="rota-shift morning">08:00</span>
          <span className="rota-shift morning">08:00</span>
          <span className="rota-shift morning">08:00</span>
          <span className="rota-shift morning">08:00</span>
        </div>
      </div>

      <div className="rota-solver-footer">
        <span>Solver: <strong>Google OR-Tools CP-SAT</strong></span>
        <span>Hard Constraints: <strong>11h Rest · 0 Overlaps</strong></span>
        <span>Isolation: <strong>Multi-Tenant PostgreSQL</strong></span>
      </div>
    </div>
  );
};

/**
 * 4. Retail AI Assistant Preview
 * Reflects verified Google Gemini 2.5 grounding layer, store stock & hardware accessory compatibility matcher.
 */
export const RetailAIPreview: React.FC = () => {
  return (
    <div className="project-visual-preview retail-ai-preview" aria-hidden="true">
      <div className="preview-header">
        <span className="preview-title-tag">GROUNDED CONVERSATION // GEMINI 2.5 FLASH</span>
        <span className="preview-status-pill green">
          <span className="live-dot" /> Grounding Layer Active
        </span>
      </div>

      <div className="chat-simulation">
        <div className="chat-bubble user">
          <span className="chat-sender">Store Associate</span>
          <p className="chat-text">"Customer looking for Brother HL-L2350DW and compatible high-yield toner cartridge."</p>
        </div>

        <div className="chat-grounding-indicator">
          <Layers size={11} />
          <span>Grounded Lookup: Queried Store Inventory &amp; compatibility.json Catalog</span>
        </div>

        <div className="chat-bubble assistant">
          <span className="chat-sender">Retail AI</span>
          <p className="chat-text">
            "Verified in catalog: <strong>Brother HL-L2350DW</strong> supports <strong>Brother TN-2410</strong> and <strong>Brother TN-2420 High Yield</strong> cartridges. Checking active store inventory for availability."
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * 5. Location Recovery Assistant Preview
 * Reflects verified categorical confidence ranking and read-only overlay architecture.
 */
export const LocationRecoveryPreview: React.FC = () => {
  return (
    <div className="project-visual-preview recovery-preview" aria-hidden="true">
      <div className="preview-header">
        <span className="preview-title-tag">ACOUSTIC RECOVERY // MULTI-FACTOR RANKING</span>
        <span className="preview-status-pill blue">Read-Only Overlay</span>
      </div>

      <div className="recovery-ranking-box">
        <div className="recovery-query-row">
          <span className="query-label">Misheard Location Input:</span>
          <code className="query-code">08-D-14</code>
        </div>

        <div className="ranking-items">
          <div className="ranking-item best">
            <span className="rank-num">#1</span>
            <div className="rank-info">
              <span className="rank-target">08-T-14</span>
              <span className="rank-reason">Acoustic D/T confusion pair · Model-Similar Tier</span>
            </div>
            <span className="rank-confidence">Confidence: High</span>
          </div>

          <div className="ranking-item">
            <span className="rank-num">#2</span>
            <div className="rank-info">
              <span className="rank-target">08-B-14</span>
              <span className="rank-reason">Phonetic D/B confusion pair · Distance checked</span>
            </div>
            <span className="rank-confidence">Confidence: Medium</span>
          </div>
        </div>
      </div>

      <div className="recovery-footer">
        <ShieldCheck size={12} className="icon-forest" />
        <span>Safe Read-Only Overlay · Zero Live Inventory Drift</span>
      </div>
    </div>
  );
};

/**
 * 6. Diabetic Retinopathy Preview
 * Reflects verified empirical results from MSc Dissertation results_summary.csv and results_improved.csv.
 */
export const DiabeticRetinopathyPreview: React.FC = () => {
  return (
    <div className="project-visual-preview ml-pipeline-preview" aria-hidden="true">
      <div className="preview-header">
        <span className="preview-title-tag">FUZZY FUSION PIPELINE // APTOS 2019</span>
        <span className="preview-status-pill green">Empirical CNN AUC: 0.901</span>
      </div>

      <div className="ml-pipeline-flow">
        <div className="ml-step">
          <span className="ml-step-name">GLCM Texture</span>
          <span className="ml-step-val">Contrast &amp; Energy</span>
        </div>
        <ArrowRight size={12} className="pipeline-arrow" />
        <div className="ml-step">
          <span className="ml-step-name">Classifiers</span>
          <span className="ml-step-val">CNN (AUC 0.901) + SVM + ANN</span>
        </div>
        <ArrowRight size={12} className="pipeline-arrow" />
        <div className="ml-step highlight">
          <span className="ml-step-name">Fuzzy Fusion</span>
          <span className="ml-step-val">Fusion+SMOTE AUC: 0.882</span>
        </div>
      </div>
    </div>
  );
};

/**
 * 7. Cerevyn DevOps Internship Pipeline Preview
 * Reflects automated GitHub Actions Docker build and Python 3.11 slim containerization.
 */
export const CerevynPipelinePreview: React.FC = () => {
  return (
    <div className="project-visual-preview cerevyn-preview" aria-hidden="true">
      <div className="preview-header">
        <span className="preview-title-tag">CLOUD INFRASTRUCTURE // CEREVAKYANET</span>
        <span className="preview-status-pill green">
          <span className="live-dot" /> Automated Build Verified
        </span>
      </div>

      <div className="cerevyn-stages">
        <div className="cerevyn-stage">
          <div className="stage-status-icon">✓</div>
          <div className="stage-content">
            <span className="stage-title">GitHub Actions CI</span>
            <span className="stage-desc">Automated Docker Build on Push</span>
          </div>
        </div>

        <div className="cerevyn-stage">
          <div className="stage-status-icon">✓</div>
          <div className="stage-content">
            <span className="stage-title">Optimised Python Container</span>
            <span className="stage-desc">python:3.11-slim Base Image</span>
          </div>
        </div>

        <div className="cerevyn-stage">
          <div className="stage-status-icon">✓</div>
          <div className="stage-content">
            <span className="stage-title">Gunicorn Service</span>
            <span className="stage-desc">2 Workers · 4 Threads on Port 8000</span>
          </div>
        </div>

        <div className="cerevyn-stage">
          <div className="stage-status-icon">✓</div>
          <div className="stage-content">
            <span className="stage-title">Azure Services</span>
            <span className="stage-desc">Azure OpenAI &amp; Speech Cognitive API</span>
          </div>
        </div>
      </div>
    </div>
  );
};
