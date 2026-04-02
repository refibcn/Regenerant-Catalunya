# Safe (Multisig) Implementation Plan
## Network Treasury Management for Regenerant Catalunya Phase 2

**Tool:** Safe{Wallet} (multisig smart account interface)  \
**Purpose:** Secure, transparent multi-signature treasury management  \
**Networks:** Miceli Social & La Fundicio / Keras Buti (network-specific adaptations)  \
**Status:** Ready for validation and rollout  \
**Prepared by:** ReFi Barcelona Team  \
**Date:** February 23, 2026

---

## Executive Summary

This plan operationalizes Safe for Phase 2 network treasuries, combining Safe{Wallet} capabilities (multisig, spending limits, transaction simulation, multi-chain management) with democratic governance practices from Bread Cooperative’s multisig guide. The implementation is **validation-first**: we only proceed after network buy-in, and we prioritize one well-documented case study over partial rollouts.

---

## Table of Contents

1. Documentation Sources
2. Scope and Outcomes
3. Validation and Principles
4. Network Configuration
5. Tool Overview (Safe{Wallet})
6. Governance and Policy Layer
7. Implementation Steps
8. Training and Support
9. Security and Risk Management
10. Treasury Operations
11. Success Metrics
12. Risks and Mitigations
13. Appendices (Checklists)
14. Related Resources

---

## 1. Documentation Sources

- Safe{Wallet} product overview: https://safe.global/
- Safe docs (smart accounts, Safe{Wallet} vs Safe{Core}): https://docs.safe.global/home/what-is-safe
- Bread Cooperative guide: `03 Libraries/Regenerant-Catalunya/docs/Bread-Cooperative-Guide-to-Multisignature-Wallets.pdf`
- Phase 2 operating model: `03 Libraries/Regenerant-Catalunya/docs/phase-2/README.md`

---

## 2. Scope and Outcomes

**Scope**
- Network-level treasury management for Miceli Social and La Fundicio / Keras Buti.
- Safe{Wallet} (app.safe.global) for multisig governance and transparent disbursements.
- Minimal viable configuration first; expand to spending limits/roles once cadence is stable.

**Target Outcomes**
- One functioning Safe per network with confirmed signer set and threshold.
- Documented governance policy (approval flow, meeting cadence, emergency protocol).
- Successful test transaction and first real disbursement.
- Short internal guide for signers + public transparency note.

---

## 3. Validation and Principles

**Validation Before Commitment**
- Kickoff call confirms network interest and signer availability.
- Tool fit validated in workshop; no forced implementation.
- Pivot if Safe is not a fit for network capacity or governance culture.

**Guiding Principles (Phase 2)**
- Simplify as much as possible.
- Quality over quantity.
- Network-driven design.
- Documentation for future funding and replication.

---

## 4. Network Configuration

**Configuration is decided with each network. Defaults below are recommendations.**

| Network | Suggested Signers | Suggested Threshold | Support Level | Notes |
| --- | --- | --- | --- | --- |
| Miceli Social | 3-5 signers | 2-of-3 or 3-of-5 | Light | Tech-forward, can self-manage after onboarding |
| La Fundicio / Keras Buti | 4-6 signers | 3-of-5 or 4-of-6 | Moderate | Cooperative style, prioritize facilitation and consensus |

**Signer Selection Criteria (from Bread guide)**
- Mix of operational responsibility + community trust.
- Availability for approvals.
- Clear role expectations documented in governance policy.

---

## 5. Tool Overview (Safe{Wallet})

Safe{Wallet} is the interface used for treasury operations. Key features referenced from Safe global documentation:

- **Multisig wallet:** N-of-M approvals; no single point of failure.
- **Spending limits & roles:** Pre-approved budgets without full multisig each time.
- **Transaction simulation:** Scan and simulate before execution.
- **Multi-chain treasury:** Manage multiple chains from one interface.
- **Transaction builder:** Bundle complex actions into one signing flow.
- **Security posture:** Open source, audited contracts; Safe Shield (optional) for monitoring.

Note: Safe{Core} docs focus on developer integrations. For Phase 2 we use Safe{Wallet} at https://app.safe.global.

---

## 6. Governance and Policy Layer

**Policy Elements (required before first disbursement)**
- Decision-making process (majority vs consensus) mapped to threshold.
- Meeting cadence for approvals (monthly/bi-weekly).
- Proposal format (what info is required to propose a payment).
- Emergency protocol (who can propose, how to handle urgent payments).
- Public transparency note (what will be shared externally and where).

**Bread Guide Practices to Apply**
- Regular meetings and budget reviews.
- Clear written policies for approvals.
- Transparent transaction records for accountability.

---

## 7. Implementation Steps

### Phase A: Pre-Validation
1. Confirm network interest + signer availability.
2. Collect signer wallet addresses (EOA addresses starting with 0x).
3. Confirm chain(s) for Safe (practice + production).

### Phase B: Setup (Safe{Wallet})
1. Create Safe at https://app.safe.global.
2. Choose network(s) (Gnosis Chain recommended for low-cost practice per Bread guide).
3. Add signers and set threshold.
4. Name the Safe and finalize setup.

### Phase C: Onboarding
1. Wallet readiness check (Rabby recommended in Bread guide; hardware wallets optional).
2. Security briefing: private keys, phishing, backups.
3. Review governance policy and approval flow.

### Phase D: Test Transaction
1. Propose a small transfer.
2. Collect required signatures.
3. Execute and document the process.

### Phase E: First Operational Cycle
1. Run first real disbursement.
2. Review outcomes and adjust policies.
3. Decide if spending limits are needed.

---

## 8. Training and Support

**Training Modules**
- Wallet basics (private vs public key, hot vs cold wallets).
- Safe onboarding (create Safe, add signers, approvals).
- Spending limits setup (for recurring expenses).

**Support Levels**
- Miceli: documentation + 1 onboarding call.
- La Fundicio: facilitated session + follow-up support.

---

## 9. Security and Risk Management

**Security Best Practices (from Bread guide)**
- Never share private keys.
- Keep backups in secure locations.
- Verify addresses carefully before sending.
- Start with small amounts for testing.
- Be cautious of phishing; verify URLs (app.safe.global).

**Safe-Specific Security Features**
- Multisig thresholds reduce single-point failure.
- Transaction simulation and Safe Shield for risk checks (optional).

---

## 10. Treasury Operations

**Receiving Funds**
- Share Safe address for inbound funds.

**Disbursements**
- Propose → sign → execute flow in Safe{Wallet}.

**Spending Limits (when needed)**
- Create limits for recurring expenses (salaries, operations).
- Requires multisig approval to set.

**Off-Ramping (from Bread guide)**
- Local exchanges, P2P networks, crypto-friendly vendors, or partners.
- ZKP2P supports Wise/Revolut/PayPal flows in many regions.

---

## 11. Success Metrics

- Safe created with confirmed signer set.
- Test transaction completed within one week of setup.
- First real disbursement executed and documented.
- Monthly treasury review occurs at least once.
- Signer participation rate above 80% for approvals.

---

## 12. Risks and Mitigations

| Risk | Mitigation |
| --- | --- |
| Signers unavailable | Choose majority thresholds; keep signer roster updated |
| Policy ambiguity | Document governance policy before first payment |
| Phishing or key loss | Security briefing + backup practices |
| Network friction | Reduce scope, start with low-stakes test tx |
| Over-complexity | Avoid extra modules until core flow is stable |

---

## 13. Appendices (Checklists)

### A. Pre-Setup Checklist
- [ ] Signers identified and confirmed
- [ ] Chain selected (practice + production)
- [ ] Wallets installed and tested

### B. Safe Setup Checklist
- [ ] Safe created in app.safe.global
- [ ] Signers added with correct addresses
- [ ] Threshold set and documented

### C. First Transaction Checklist
- [ ] Proposal documented
- [ ] Signatures collected
- [ ] Transaction executed and recorded

---

## 14. Related Resources

- Spanish translation (Bread guide): `03 Libraries/Regenerant-Catalunya/docs/260223 Bread Cooperative Guide to Multisignature Wallets_ES.md`
- Bread Cooperative guide (source): `03 Libraries/Regenerant-Catalunya/docs/Bread-Cooperative-Guide-to-Multisignature-Wallets.pdf`
- Safe app: https://app.safe.global
