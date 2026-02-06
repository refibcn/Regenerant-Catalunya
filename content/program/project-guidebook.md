---
title: "Project Guidebook"
description: "Comprehensive guide for participating projects in Regenerant Catalunya"
showSidebars: false
---

<style>
/* Step Cards with Status-Based Tints */
.step-card {
  position: relative;
  transition: all 0.3s ease;
  background-image: 
    radial-gradient(circle at 2px 2px, rgba(33, 64, 51, 0.08) 1px, transparent 0);
  background-size: 24px 24px;
  box-shadow: 
    0 2px 4px rgba(33, 64, 51, 0.08),
    0 4px 8px rgba(33, 64, 51, 0.06),
    0 8px 16px rgba(33, 64, 51, 0.04);
  padding: 0.75rem 1.5rem;
  margin: 1.5rem 0;
}

/* Status-based Card Background Tints */
.step-card[data-status="completed"] {
  background: linear-gradient(to bottom, rgba(45, 125, 50, 0.08) 0%, rgba(45, 125, 50, 0.03) 100%),
              radial-gradient(circle at 2px 2px, rgba(33, 64, 51, 0.08) 1px, transparent 0);
  background-size: 100% 100%, 24px 24px;
  border-left: 4px solid #2d7d32;
}

.step-card[data-status="active"],
.step-card[data-status="upcoming"] {
  background: linear-gradient(to bottom, rgba(229, 126, 80, 0.08) 0%, rgba(229, 126, 80, 0.03) 100%),
              radial-gradient(circle at 2px 2px, rgba(33, 64, 51, 0.08) 1px, transparent 0);
  background-size: 100% 100%, 24px 24px;
  border-left: 4px solid #E67E50;
}

.step-card[data-status="coming-soon"] {
  background: linear-gradient(to bottom, rgba(107, 78, 163, 0.08) 0%, rgba(107, 78, 163, 0.03) 100%),
              radial-gradient(circle at 2px 2px, rgba(33, 64, 51, 0.08) 1px, transparent 0);
  background-size: 100% 100%, 24px 24px;
  border-left: 4px solid #6B4EA3;
}

.step-card[data-status="future"] {
  background: var(--green-highlight),
              radial-gradient(circle at 2px 2px, rgba(33, 64, 51, 0.08) 1px, transparent 0);
  background-size: 100% 100%, 24px 24px;
  border-left: 4px solid rgba(158, 158, 158, 0.5);
}

.step-card:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 4px 8px rgba(33, 64, 51, 0.12),
    0 8px 16px rgba(33, 64, 51, 0.08),
    0 16px 32px rgba(33, 64, 51, 0.04);
}

/* Step Number Container with Connecting Line */
.step-number-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
}

.step-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.step-header h3 {
  display: flex;
  align-items: center;
}

.step-number {
  background: transparent !important;
  color: var(--green-dark) !important;
  border: 2px solid var(--green-dark) !important;
  box-shadow: none !important;
  position: relative;
  z-index: 2;
}

.step-number-line {
  width: 3px;
  height: 50px;
  margin: 0.5rem 0;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.step-number-line[data-status="completed"] {
  background: linear-gradient(to bottom, #2d7d32, #3A6655);
}

.step-number-line[data-status="active"],
.step-number-line[data-status="upcoming"] {
  background: linear-gradient(to bottom, #E67E50, #f57c00);
}

.step-number-line[data-status="coming-soon"] {
  background: linear-gradient(to bottom, #6B4EA3, #8B6EC3);
}

.step-number-line[data-status="future"] {
  background: linear-gradient(to bottom, rgba(158, 158, 158, 0.4), rgba(158, 158, 158, 0.2));
}

/* Header Links with Brand Colors */
.step-header a {
  color: #6B4EA3;
  text-decoration: none;
  transition: all 0.2s ease;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.step-header a:hover {
  color: #E67E50;
  text-decoration: underline;
}

/* Status Labels - Enhanced Color Coding */
.status-label {
  padding: 0.4rem 1rem;
  border-radius: 0;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  white-space: nowrap;
}

.status-label[data-status="completed"] {
  background: #2d7d32;
  color: white;
  border: 2px solid #2d7d32;
}

.status-label[data-status="active"],
.status-label[data-status="upcoming"] {
  background: #E67E50;
  color: white;
  border: 2px solid #E67E50;
}

.status-label[data-status="coming-soon"] {
  background: #6B4EA3;
  color: white;
  border: 2px solid #6B4EA3;
}

.status-label[data-status="future"] {
  background: #616161;
  color: white;
  border: 2px solid #616161;
}

/* Header Divider */
.step-header-divider {
  height: 1px;
  background: rgba(33, 64, 51, 0.3);
  margin: 0.75rem 0;
  border: none;
  width: 100%;
}

/* Timeline Enhancement - Quote Block Style */
.step-timeline {
  padding: 0.5rem 1rem;
  margin: 0.75rem 0;
  border-left: 3px solid var(--green-medium);
  background: rgba(33, 64, 51, 0.03);
  font-style: italic;
  border-radius: 0;
  font-size: 0.9rem;
}

.step-timeline strong {
  color: var(--green-dark);
  font-weight: 600;
  font-style: normal;
}

/* Enhanced Typography */
.step-content {
  margin-top: 0.5rem;
}

.step-content p {
  line-height: 1.6;
  letter-spacing: 0.01em;
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
}

/* Two-Column Lists with Arrows */
.step-content ul {
  columns: 2;
  column-gap: 2rem;
  list-style: none;
  padding-left: 0;
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 0.95rem;
}

.step-content li {
  margin-bottom: 0.4rem;
  padding-left: 1.2rem;
  position: relative;
  break-inside: avoid;
}

.step-content li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--green-dark);
  font-weight: 600;
}

@media (max-width: 768px) {
  .step-content ul {
    columns: 1;
  }
}

/* Button Styling - Bigger, Lighter, More Subtle */
.step-content .button {
  margin-top: 1rem;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid var(--green-dark);
  color: var(--green-dark);
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
  display: inline-block;
  text-decoration: none;
  border-radius: 0;
}

.step-content .button:hover {
  background: rgba(33, 64, 51, 0.05);
  border-color: var(--green-medium);
  color: var(--green-medium);
  transform: translateY(-1px);
}

/* Flow Arrows Between Steps - Updated */
.step-arrow {
  position: relative;
  height: 50px;
  margin: -1rem auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.step-arrow::before {
  content: '';
  width: 3px;
  height: 40px;
  background: linear-gradient(to bottom, #214033 0%, #3A6655 100%);
  position: absolute;
}

.step-arrow::after {
  content: '';
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 12px solid #3A6655;
  position: absolute;
  top: 38px;
}
</style>

# Regenerant Catalunya - Project Guidebook

Welcome to **Regenerant Catalunya**! This guidebook provides everything you need to know as a participating project in this bioregional funding round.

---

## Welcome & Program Overview

**Regenerant Catalunya** is a participatory funding round dedicated to channeling resources into projects that are regenerating life in the Catalan bioregion. As a participating project, you'll receive:

- **Direct funding** through a two-phase distribution model
- **Capacity-building workshops** in Web3 tools and impact documentation
- **Hands-on mentorship** from global Web3 experts
- **Network connections** with other regenerative projects across Catalonia

**Total Program Budget:** €27,380 (€11,000 local + Estimated Disbursement $18,000 global matching)

**For complete program overview:** See [[Program]]

---

## Two-Phase Funding Structure

### Phase 1: Baseline Allocation (November–December 2025)

**Funding Range:** Minimum €1,000 per project, up to €1,500 per project

**Minimum Participation Requirements** (required for €1,000 minimum):

- ✅ Participate in at least **2 workshops** (including the documentation-focused workshop for your network)
- ✅ Prepare an **activities report in Google Docs** (following the program template) that can be used later for Karma GAP
- ✅ In later hands-on sessions: open a **Web3 wallet** on Celo and submit at least **3 past activities** and **3 future plans** to **Karma**

**Impact Evaluation:** Simplified impact evaluation determines allocation up to €1,500. Evaluation continues but won't dictate distribution much since the 50% split with €1k minimum leaves limited variance for allocation differences.

**Disbursement:** End of December 2025

**Important:** Projects can receive less than €1,000 if they don't meet minimum participation requirements.

### Phase 2: Network-Level Collective Governance (January–February 2026)

**Funding:** €1,000 per project allocated to network-level pools:

- **[[Miceli Social]] network:** ~€6,000 collective pool
- **[[La Fundició]] / [[Keras Buti]] network:** ~€5,000 collective pool

**Governance:** Networks collectively govern funds using Web3 governance tools ([[Gardens]], [[Safe]] multisigs, [[Sarafu Network]], [[Cycles]])

**Activation:** End of February 2026

---

## Phase 1 – Step-by-Step Guide

**Visual Overview:** Your complete Phase 1 journey from program kickoff to fund disbursement. Each step below provides essential information and links to detailed guides. The process is intentionally split into **documentation-first workshops** and **later hands-on Web3/Karma GAP sessions**.

<div class="step-card" data-status="completed" style="border: 2px solid var(--green-dark); border-radius: 0;">
  <div class="step-header" style="margin-bottom: 0.75rem;">
    <div class="step-number-container">
      <span class="step-number" style="display: inline-flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; border-radius: 50%; font-weight: 700; font-size: 1.25rem; flex-shrink: 0;">1</span>
      <div class="step-number-line" data-status="completed"></div>
    </div>
    <h3 style="margin: 0; flex-grow: 1; font-size: 1.5rem;">
      <a href="/resources/workshops/workshop-1-kickoff">→ Kickoff Workshop</a>
    </h3>
    <span class="status-label" data-status="completed">COMPLETED</span>
  </div>
  <blockquote class="step-timeline">
    <strong>Timeline:</strong> November 19, 2025 (1.5 hours, online)
  </blockquote>
  <hr class="step-header-divider">
  <div class="step-content">
    <p>Program introduction workshop covering [[ReFi Barcelona]], Web3 basics, and program structure.</p>
    <ul>
      <li>Understand program structure and timeline</li>
      <li>Introduction to [[ReFi Barcelona]] and program partners</li>
      <li>Why Web3 for regeneration (addressing myths and concerns)</li>
      <li>Long-term vision (BioFi and Bioregional Finance Infrastructure)</li>
      <li>Begin wallet setup process</li>
    </ul>
    <a href="/resources/workshops/workshop-1-kickoff" class="button">View Workshop Notes →</a>
  </div>
</div>
<div class="step-arrow"></div>

<div class="step-card" data-status="active" style="border: 2px solid var(--green-dark); border-radius: 0;">
  <div class="step-header" style="margin-bottom: 0.75rem;">
    <div class="step-number-container">
      <span class="step-number" style="display: inline-flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; border-radius: 50%; font-weight: 700; font-size: 1.25rem; flex-shrink: 0;">2</span>
      <div class="step-number-line" data-status="active"></div>
    </div>
    <h3 style="margin: 0; flex-grow: 1; font-size: 1.5rem;">
      <a href="/es/recursos/valora-guide">→ Open Web3 Wallet on Celo</a>
    </h3>
    <span class="status-label" data-status="active">CAN START NOW</span>
  </div>
  <blockquote class="step-timeline">
    <strong>Timeline:</strong> Can be done independently until end of January 2026 (decoupled from documentation workshops)
  </blockquote>
  <hr class="step-header-divider">
  <div class="step-content">
    <p>Set up a Web3 wallet to receive funds securely on the Celo blockchain. [[Valora]] is recommended for its social recovery feature. **Wallet setup is decoupled from documentation workshops** — you can complete it independently until the end of January 2026. You don't need a wallet to create a Karma GAP account (you can use Google/email login).</p>
    <a href="/es/recursos/valora-guide" class="button">View Wallet Setup Guide →</a>
  </div>
</div>
<div class="step-arrow"></div>

<div class="step-card" data-status="coming-soon" style="border: 2px solid var(--green-dark); border-radius: 0;">
  <div class="step-header" style="margin-bottom: 0.75rem;">
    <div class="step-number-container">
      <span class="step-number" style="display: inline-flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; border-radius: 50%; font-weight: 700; font-size: 1.25rem; flex-shrink: 0;">3</span>
      <div class="step-number-line" data-status="coming-soon"></div>
    </div>
    <h3 style="margin: 0; flex-grow: 1; font-size: 1.5rem;">
      <a href="/es/recursos/guia-informe-actividades">→ Prepare Activities Report (Google Doc)</a>
    </h3>
    <span class="status-label" data-status="coming-soon">ACTIVE NOW</span>
  </div>
  <blockquote class="step-timeline">
    <strong>Timeline:</strong> Complete by January 12, 2026 — Main focus of documentation workshops
  </blockquote>
  <hr class="step-header-divider">
  <div class="step-content">
    <p>Organize your project information and documentation in the shared Google Doc. This is the main focus of the documentation workshops and must be completed before transferring to Karma GAP.</p>
    <ul>
      <li>Access your project's Google Doc template (or section) when shared</li>
      <li>Fill in project information (name, description, contact, network affiliation)</li>
      <li>Gather documentation (reports, photos, metrics)</li>
      <li>Identify and describe your key activities, deliverables and metrics</li>
      <li>Makes future Karma GAP submission easier and enables self-assessment</li>
    </ul>
    <a href="/es/recursos/guia-informe-actividades" class="button">View Activity Report Guide →</a>
  </div>
</div>
<div class="step-arrow"></div>

<div class="step-card" data-status="upcoming" style="border: 2px solid var(--green-dark); border-radius: 0;">
  <div class="step-header" style="margin-bottom: 0.75rem;">
    <div class="step-number-container">
      <span class="step-number" style="display: inline-flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; border-radius: 50%; font-weight: 700; font-size: 1.25rem; flex-shrink: 0;">4</span>
      <div class="step-number-line" data-status="upcoming"></div>
    </div>
    <h3 style="margin: 0; flex-grow: 1; font-size: 1.5rem;">
      <a href="/program/evaluation-criteria">→ Workshop #2: Documenting Impact</a>
    </h3>
    <span class="status-label" data-status="upcoming">UPCOMING</span>
  </div>
  <blockquote class="step-timeline">
    <strong>Timeline:</strong> December 8-14, 2025 (2 hours, online) — <a href="#" style="color: #6B4EA3; text-decoration: underline;">[Add LettuceMeet Link]</a> to share your availability
  </blockquote>
  <hr class="step-header-divider">
  <div class="step-content">
    <p>Learn how to document your impact effectively using [[Karma GAP]], understand evaluation criteria, and prepare your activity submissions.</p>
    <ul>
      <li>Create [[Karma GAP]] account and connect your wallet</li>
      <li>Learn how to document impact effectively</li>
      <li>Understand evaluation criteria and how to align your reporting</li>
      <li>Hands-on [[Karma GAP]] setup and navigation</li>
      <li>Learn how to log past activities and future plans</li>
      <li>Use Google Doc to organize information before submission</li>
    </ul>
    <a href="/program/evaluation-criteria" class="button">View Evaluation Guide →</a>
  </div>
</div>
<div class="step-arrow"></div>

<div class="step-card" data-status="future" style="border: 2px solid var(--green-dark); border-radius: 0;">
  <div class="step-header" style="margin-bottom: 0.75rem;">
    <div class="step-number-container">
      <span class="step-number" style="display: inline-flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; border-radius: 50%; font-weight: 700; font-size: 1.25rem; flex-shrink: 0;">5</span>
      <div class="step-number-line" data-status="future"></div>
    </div>
    <h3 style="margin: 0; flex-grow: 1; font-size: 1.5rem;">
      <a href="/es/recursos/guia-karma-gap">→ Submit Activities to Karma GAP</a>
    </h3>
    <span class="status-label" data-status="future">UPCOMING</span>
  </div>
  <blockquote class="step-timeline">
    <strong>Timeline:</strong> January 12-16, 2026 (with support available January 5-9)
  </blockquote>
  <hr class="step-header-divider">
  <div class="step-content">
    <p>Transfer your Google Doc activities report to [[Karma GAP]] for transparent, on-chain impact reporting. You can create a Karma GAP account with Google/email — no wallet needed initially.</p>
    <ul>
      <li>Create [[Karma GAP]] account using Google/email login (no wallet required)</li>
      <li>Find or create your project profile on Karma GAP</li>
      <li>Transfer information from Google Doc to [[Karma GAP]]</li>
      <li>Publish activities with deliverables and metrics</li>
      <li>[[Karma GAP]] creates a public, on-chain "project resume"</li>
      <li>Builds your on-chain reputation and discoverability</li>
      <li>Support available: Office hours January 5-9, 2026</li>
    </ul>
    <a href="/es/recursos/guia-karma-gap" class="button">View Karma GAP Guide →</a>
  </div>
</div>
<div class="step-arrow"></div>

<div class="step-card" data-status="future" style="border: 2px solid var(--green-dark); border-radius: 0;">
  <div class="step-header" style="margin-bottom: 0.75rem;">
    <div class="step-number-container">
      <span class="step-number" style="display: inline-flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; border-radius: 50%; font-weight: 700; font-size: 1.25rem; flex-shrink: 0;">6</span>
      <div class="step-number-line" data-status="future"></div>
    </div>
    <h3 style="margin: 0; flex-grow: 1; font-size: 1.5rem;">
      <a href="mailto:hola@ReFiBCN.cat">→ Optional Support Session</a>
    </h3>
    <span class="status-label" data-status="future">FUTURE</span>
  </div>
  <blockquote class="step-timeline">
    <strong>Timeline:</strong> December 15-31, 2025 (scheduled individually as needed)
  </blockquote>
  <hr class="step-header-divider">
  <div class="step-content">
    <p>Additional hands-on support for submitting your activities to [[Karma GAP]]. Available for projects needing extra help.</p>
    <ul>
      <li>Request session if needed (optional but recommended)</li>
      <li>One-on-one or small group sessions</li>
      <li>Hands-on assistance with [[Karma GAP]] submission</li>
      <li>Review of activity documentation</li>
      <li>Help transferring information from Google Doc</li>
      <li>Troubleshooting technical issues</li>
    </ul>
    <a href="mailto:hola@ReFiBCN.cat" class="button">Request Support Session →</a>
  </div>
</div>
<div class="step-arrow"></div>

<div class="step-card" data-status="future" style="border: 2px solid var(--green-dark); border-radius: 0;">
  <div class="step-header" style="margin-bottom: 0.75rem;">
    <div class="step-number-container">
      <span class="step-number" style="display: inline-flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; border-radius: 50%; font-weight: 700; font-size: 1.25rem; flex-shrink: 0;">7</span>
      <div class="step-number-line" data-status="future"></div>
    </div>
    <h3 style="margin: 0; flex-grow: 1; font-size: 1.5rem;">
      <a href="/program/evaluation-criteria">→ Evaluation</a>
    </h3>
    <span class="status-label" data-status="future">FUTURE</span>
  </div>
  <blockquote class="step-timeline">
    <strong>Timeline:</strong> December 20-31, 2025
  </blockquote>
  <hr class="step-header-divider">
  <div class="step-content">
    <p>Projects are evaluated based on 4 criteria after submitting activities to [[Karma GAP]]. Evaluation determines final allocation (€1,000-€1,500).</p>
    <ul>
      <li>Activities submitted to [[Karma GAP]]</li>
      <li>Evaluation based on 4 criteria: Local Impact (35%), Web3 Adoption (25%), Resource Efficiency (25%), Clear Plans (15%)</li>
      <li>Council members review [[Karma GAP]] submissions independently</li>
      <li>Projects scored on 1-10 scale per criterion</li>
      <li>Scores averaged across evaluators</li>
      <li>Allocation determined based on weighted scores</li>
    </ul>
    <a href="/program/evaluation-criteria" class="button">View Evaluation Guide →</a>
  </div>
</div>
<div class="step-arrow"></div>

<div class="step-card" data-status="future" style="border: 2px solid var(--green-dark); border-radius: 0;">
  <div class="step-header" style="margin-bottom: 0.75rem;">
    <div class="step-number-container">
      <span class="step-number" style="display: inline-flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; border-radius: 50%; font-weight: 700; font-size: 1.25rem; flex-shrink: 0;">8</span>
    </div>
    <h3 style="margin: 0; flex-grow: 1; font-size: 1.5rem;">
      <a href="/program/timeline">→ Disbursement</a>
    </h3>
    <span class="status-label" data-status="future">FUTURE</span>
  </div>
  <blockquote class="step-timeline">
    <strong>Timeline:</strong> End of December 2025 — <strong>Amount:</strong> €1,000-€1,500 per project based on evaluation
  </blockquote>
  <hr class="step-header-divider">
  <div class="step-content">
    <p>Phase 1 funds distributed on-chain to project wallets at end of December 2025.</p>
    <ul>
      <li>Wallet address shared with ReFi Barcelona</li>
      <li>Receive funds in your Web3 wallet</li>
      <li>Funds distributed on-chain (public, verifiable)</li>
      <li>Transaction records publicly available</li>
      <li>Projects notified of disbursement</li>
      <li>Off-ramp support available if needed (converting crypto to euros, without legal liabilities)</li>
    </ul>
    <a href="/program/timeline" class="button">View Complete Timeline →</a>
  </div>
</div>

---

## Program Timeline

<div class="section-content-wide">
  <div class="table-container">
    <table>
      <thead>
        <tr style="background: var(--green-highlight);">
          <th>Date</th>
          <th>Milestone</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background: var(--green-highlight);">
          <td colspan="3" style="text-align: center; font-weight: 600; font-size: 0.9rem; padding: 0.6rem;">
            Phase 0: Planning & Preparation – <em>Oct-Nov 2025</em>
          </td>
        </tr>
        <tr>
          <td><strong>Oct 31, 2025</strong></td>
          <td>Local funds (€11k) secured on-chain</td>
          <td style="color: var(--green-dark); font-weight: 600;">✅ Completed</td>
        </tr>
        <tr>
          <td><strong>Mid-Nov 2025</strong></td>
          <td>Global matching funds secured on-chain</td>
          <td style="color: var(--green-dark); font-weight: 600;">🔄 In Progress</td>
        </tr>
        <tr style="background: var(--green-highlight);">
          <td colspan="3" style="text-align: center; font-weight: 600; font-size: 0.9rem; padding: 0.6rem;">
            Phase 1: Baseline Allocation – <em>Nov-Dec 2025</em>
          </td>
        </tr>
        <tr>
          <td><strong>Nov 19, 2025</strong></td>
          <td>Workshop #1 — Program kickoff</td>
          <td style="color: var(--green-dark); font-weight: 600;">✅ Completed</td>
        </tr>
        <tr>
          <td><strong>Dec 3, 11, 19, 2025</strong></td>
          <td>Documentation workshops (by network)</td>
          <td style="color: var(--green-dark); font-weight: 600;">✅ Completed</td>
        </tr>
        <tr>
          <td><strong>Jan 5-9, 2026</strong></td>
          <td>Office hours for Karma GAP support</td>
          <td>📅 Upcoming</td>
        </tr>
        <tr>
          <td><strong>Jan 12, 2026</strong></td>
          <td>Deadline: Complete Google Doc activities report</td>
          <td>📅 Upcoming</td>
        </tr>
        <tr>
          <td><strong>Jan 12-16, 2026</strong></td>
          <td>Submit activities to Karma GAP</td>
          <td>📅 Upcoming</td>
        </tr>
        <tr>
          <td><strong>Jan 19, 2026</strong></td>
          <td>Final closeout workshop (Barcelona, 10:00 AM)</td>
          <td>📅 Upcoming</td>
        </tr>
        <tr>
          <td><strong>Late Jan 2026</strong></td>
          <td>Completion check & Phase 1 disbursement</td>
          <td>📅 Upcoming</td>
        </tr>
        <tr style="background: var(--green-highlight);">
          <td colspan="3" style="text-align: center; font-weight: 600; font-size: 0.9rem; padding: 0.6rem;">
            Phase 2: Network-Level Governance – <em>Jan-Feb 2026</em>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div style="text-align: center; margin-top: 2rem;">
    <a href="/program/timeline" class="cta-button" style="font-size: 1rem; padding: 0.75rem 1.5rem; display: inline-block;">View Complete Timeline</a>
  </div>
</div>

---

## Phase 2 Overview: Network-Level Governance

In Phase 2, your network ([[Miceli Social]] or [[La Fundició]] / [[Keras Buti]]) will collectively govern a pool of funds using Web3 tools.

**What to Expect:**

- **Workshop #4 (January 2026):** Learn about advanced Web3 governance tools
  - [[Gardens]] (conviction voting)
  - [[Safe]] (multisigs)
  - [[Sarafu Network]] (local currency / commitment pooling)
  - [[Cycles]] (open clearing protocol)
- **Workshop #5 (January/February 2026):** Explore BioFi and long-term vision
- **Collective Decision-Making:** Networks decide how to allocate Phase 2 funds together

**Benefits:**

- Learn practical Web3 governance tools
- Build capacity for future rounds
- Create portable, verifiable governance structures
- Strengthen network coordination

---

## Support & Resources

### Communication Channels

- **WhatsApp Group:** ADD LINK
- **Workshops:** ADD LINK

### Quick Navigation

- **Program Website:** [regenerant.refibcn.cat](https://regenerant.refibcn.cat/)

**Essential Guides:**

- **[Activity Report Guide](/es/recursos/guia-informe-actividades)** — Complete guide for documenting activities in Google Docs
- **[Karma GAP Guide](/es/recursos/guia-karma-gap)** — Step-by-step guide for publishing activities on Karma GAP
- **[[Program Overview]]** — Complete program overview
- **[[Program Resources]]** — All tool documentation and guides

---

**Welcome to Regenerant Catalunya!** We're excited to support your regenerative work and build capacity together. If you have any questions, don't hesitate to reach out.

_Together, let's finance the future we want to see — one bioregion at a time._
