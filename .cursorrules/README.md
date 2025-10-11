# Regenerant Catalunya GG24 - Cursor Rules

**Repository:** Quartz Website (https://github.com/refibcn/Regenerant-Catalunya.git)  
**Purpose:** Public documentation and website for the Regenerant Catalunya GG24 program  
**Created:** October 11, 2025  
**Rules:** 5 specialized context files

---

## 📋 Available Rules

### 1. **project-overview.mdc** (Always Applied)
Loads automatically when working in this folder.

**Provides:**
- Project context and current status
- Team structure and roles
- Critical priorities this week (Oct 9-13)
- Quick reference to key documents
- Current phase: 75% complete, 6 days to launch

### 2. **communications-tools.mdc**
**Fetch with:** "communication", "tools", "WhatsApp", "Notion"

**Provides:**
- WhatsApp groups strategy (2 groups minimum)
- Minimal Notion approach (one-pagers only)
- Oct 7 communication decisions
- Meeting structure (weekly Thursdays starting Oct 20)

### 3. **program-design.mdc**
**Fetch with:** "program design", "theory of change", "projects"

**Provides:**
- Core design principles (network-driven, cosmo-local, depth over breadth)
- 12 project portfolio with descriptions
- Funding architecture (~€30k total)
- Technology stack (required + optional tools)
- Impact measurement framework
- 4-workshop capacity building program

### 4. **financial-mgmt.mdc**
**Fetch with:** "finance", "funding", "treasury", "Safe Multisig"

**Provides:**
- Complete funding breakdown (€11k local + ~$20k global)
- Safe Multisig setup details (DUE OCT 9)
- Fund flow processes (local on-ramping + global matching)
- Two-phase distribution methodology
- Critical financial deadlines
- Entity naming status (pending)

### 5. **execution-ops.mdc**
**Fetch with:** "execution", "operations", "timeline", "team roles"

**Provides:**
- Current week priorities by team member
- 5-phase program timeline with milestones
- Meeting structure and cadence
- Operational infrastructure
- Emergency protocols
- Critical deadlines

---

## 🎯 How to Use

### **Automatic Context**
The **project-overview** rule loads automatically when you work in this folder, giving you immediate context about:
- Where you are (Phase 2, 75% complete)
- What's critical this week
- Who's responsible for what
- Where to find information

### **Fetch Specific Context**
Use natural language to load specialized rules:
- "Show me communication strategy" → Loads communications-tools
- "What's the funding plan?" → Loads financial-mgmt
- "Explain program design" → Loads program-design
- "Show me the timeline" → Loads execution-ops

### **Quick Reference by Task**

**Working on finances:**
- Auto-loaded overview + Fetch "financial management"
- Critical: Safe Multisig due Oct 9

**Setting up communications:**
- Fetch "communications tools"
- Remember: WhatsApp + minimal Notion (NOT databases)

**Planning operations:**
- Auto-loaded overview + Fetch "execution operations"
- Use: CRITICAL WEEK Action Plan for daily tasks

**Understanding strategy:**
- Fetch "program design"
- Reference: content/program/design/index.md for full details
- Quick overview: content/program/design/summary.md

---

## 📚 Document Integration

**Notion Resources (Source of Truth):**
- 🔗 [Master Document](https://www.notion.so/REGENERANT-CATALUNYA-GG24-MASTER-DOC-26c6ed0845cb80a29615cc480f969597)
- 🔗 [Project Page](https://www.notion.so/Regenerant-Catalunya-GG24-21c6ed0845cb805088e6c743b4ed53dc)
- 🔗 [Application Form](https://www.notion.so/26b6ed0845cb8059ad40de78fb40108d)

**Website Content (in content/ folder):**
- `content/index.md` - Homepage (Master Document)
- `content/program/` - Program design and execution
- `content/database/` - Database guides and CSV files
- `content/updates/` - Latest updates and action plans
- `content/internal/` - Analysis and internal docs

**Always Check First:**
- content/updates/UPDATES - Oct 7 Ops Sync Decisions.md
- content/internal/ANALYSIS SUMMARY - Start Here.md
- content/updates/CRITICAL WEEK - Oct 9-14 Action Plan.md

---

## 🔑 Key Principles (Oct 7 Decisions)

**Tools Approach:**
- ✅ WhatsApp groups (2 minimum) - primary coordination
- ✅ Minimal Notion one-pagers - documentation only
- ❌ NOT comprehensive databases or complex workflows

**Financial Timeline:**
- Oct 9: Safe Multisig setup (CRITICAL)
- Oct 13: €5k on-ramped
- End Oct: All local funds on-chain (for global matching)

**Meeting Structure:**
- Weekly internal: Thursdays (start Oct 20)
- Biweekly partners: With Oriol & Mariló (start late Oct)

**Critical This Week (Oct 9-13):**
1. Safe Multisig setup (Luiz) - Oct 9 🔴
2. Project #12 finalization (Giulio) - Oct 9 🔴
3. €10k application (Giulio) - Oct 10 🔴
4. Entity naming (Giulio) - Oct 10 🔴
5. Gitcoin registration (Giulio) - Oct 11-12 🔴
6. €5k on-ramping (Giulio) - Oct 13 🔴
7. Marketing materials (Andrea) - Oct 9-13 🔴

---

## 💡 Benefits

**Efficiency:**
- Instant project context when working
- Relevant information loaded on demand
- No searching through multiple docs

**Accuracy:**
- Reflects Oct 7 ops sync decisions
- Updated with critical priorities
- References authoritative sources

**Team Alignment:**
- Shared understanding
- Consistent approach
- Clear roles and deadlines

---

## 🔄 Keeping Updated

**Current as of:** October 8, 2025

**Update when:**
- Major team decisions made (after weekly meetings)
- Phase transitions occur
- Timeline or priorities change
- Tooling or processes modified

**Who updates:**
- Any team member can request updates
- Best practice: Update after significant meetings
- Always reference latest UPDATES documents

---

## ⚡ Quick Start

1. **Just start working** - Overview loads automatically
2. **Edit content** - Files in `content/` folder
3. **Preview locally** - `npx quartz build --serve`
4. **Sync to GitHub** - `npx quartz sync`
5. **Ask questions** - "What's our communication strategy?"
6. **Get instant context** - Rules provide relevant information

---

## 🌐 Workflow: Notion → Website

1. **Source:** Update content in Notion (linked above)
2. **Sync:** When ready to publish, update files in `content/` folder
3. **Preview:** Run `npx quartz build --serve` to preview locally
4. **Publish:** Run `npx quartz sync` to push to GitHub
5. **Deploy:** Configure GitHub Pages/Cloudflare/Netlify for public access

---

**These rules only apply when working in the `03 Libraries/Regenerant-Catalunya/` repository.**

For questions or updates, refer to the Notion workspace or content/updates/ folder.
