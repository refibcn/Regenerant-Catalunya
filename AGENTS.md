# Regenerant Catalunya Agent Guide

Quartz website for Regenerant Catalunya program.

## Quick Facts
- **Type**: Quartz static site
- **Purpose**: Regenerant Catalunya program site
- **Language**: Catalan (primary), Spanish/English (secondary)

## Commands
```bash
npx quartz build --serve    # Local dev
npx quartz build            # Production
```

## Cursor AI Resources

### Project-Specific Resources

**Skills**: None (uses inherited resources)

**Agents**:
- `regenerant-catalunya-program-operator` - Program-focused subagent for Phase 2 execution, workshop planning, partner coordination docs, comms/content publishing, and meeting→action-item extraction with owner/deadline tracking

**Rules**: None (follows root-level rules)

**Plans** (`.cursor/plans/` - 4 plans):
- `consolidate-tools-documentation-127149e8.plan.md`
- `create-spanish-workshop-1-kickoff-page-69a0baae.plan.md`
- `fix_landing_page_issues_f9fcda66.plan.md`
- `merge_assets_folders_93426557.plan.md`

**Master Plans**:
- `docs/program/master-document.md` - Program master document (English)
- `docs/program/ca/master-document.md` - Master document (Catalan)
- `docs/program/es/master-document.md` - Master document (Spanish)
- `PHASE-2-EXECUTIVE-SUMMARY.md` - Executive summary (Jan 28, 2026)
- `docs/phase-2/README.md` - Active Phase 2 operational model (Feb 3, 2026)
- `docs/phase-2/planning/260128-phase-2-planning-session-outcomes.md` - Phase 2 planning decisions
- `docs/networks/network-specific-adaptations.md` - Network adaptations (13,000 words)
- `docs/phase-2/tools/` - Tool implementation plans (Safe, Hum/Home Community, IDK)
- `docs/communications/phase-2/` - Communications strategy

### Inherited Resources

**From Root-Level** (`.cursor/` in Zettelkasten root):
- `refi-content-generation` - Generate ReFi ecosystem content
- `quick-push` - Quick git workflow operations
- `knowledge-curator` - Deep research and synthesis
- `meeting-processor` - Process meeting transcripts
- `docs-consolidator` - Consolidate documentation
- `project-reviewer` - Analyze project status

**From User-Level** (`~/.cursor/skills/`):
- `quartz-publishing` - Build, develop, and deploy Quartz static sites
- `git-workflows` - Git operations and PR creation
- `knowledge-synthesis` - Curate and synthesize content

## Context Gathering

### Essential Reading (First Pass)
1. This `AGENTS.md` file
2. `.cursor/context/regenerant-catalunya-current-state.md` - Current state snapshot (refresh first)
3. `README.md` - Project overview, program focus
4. `docs/program/master-document.md` - Master document (3 languages: EN/CA/ES)
5. `PHASE-2-EXECUTIVE-SUMMARY.md` - Executive summary (Jan 28, 2026)
6. `docs/phase-2/README.md` - Active plan and interaction model (Feb 3, 2026)

### Architecture Understanding
- Quartz static site generator
- Multilingual: Catalan (primary), Spanish, English
- Content structure: Program documentation, workshops, tools, communications
- Phase 2 ready: All core planning complete (120,000+ words)

### Planning Context
- Master Document: `docs/program/master-document.md` (program design, funding structure, 11 project portfolio)
- Current State Snapshot: `.cursor/context/regenerant-catalunya-current-state.md`
- Phase 2 Planning: `docs/phase-2/planning/260128-phase-2-planning-session-outcomes.md`
- Phase 2 Operational Model: `docs/phase-2/README.md`
- Network Adaptations: `docs/networks/network-specific-adaptations.md` (13,000 words)
- Tool Plans: `docs/phase-2/tools/` (Safe, Hum/Home Community, IDK implementation plans)

### Code Navigation
- **Content**: `content/` (program documentation)
- **Phase 2 Workshops**: `docs/phase-2/workshops/workshop-4-sense-making/`, `docs/phase-2/workshops/workshop-5-biofi/`
- **Phase 2 Tools**: `docs/phase-2/tools/safe-implementation-plan.md`, `docs/phase-2/tools/hum-community-implementation-plan.md`, `docs/phase-2/tools/idk-mini-program-plan.md`
- **Communications**: `docs/communications/phase-2/` (content calendar, execution guide, templates)

### Search Patterns
**When looking for current status**: Start with `.cursor/context/regenerant-catalunya-current-state.md`  
**When looking for program design**: Check `docs/program/master-document.md` (3 languages)  
**When working on Phase 2 workshops**: See `docs/phase-2/workshops/`  
**When implementing tools**: Reference `docs/phase-2/tools/` (Safe, Hum/Home Community, IDK plans)

### Integration Points

**Federation** (see `federation.yaml`):
- **Network:** regen-coordination
- **Hub:** [regen-coordination-hub](../regen-coordination-hub/)
- **Upstream:** [organizational-os-template](../organizational-os-template/), [quartz-refi-template](../quartz-refi-template/)

**Related repos:**
- [regen-coordination-hub](../regen-coordination-hub/) — coordinates this node
- [openclaw-source](../openclaw-source/) — planned agent runtime
- [grants-os](https://github.com/luizfernandosg/grants-os) — grants platform integration
- ReFi-BCN-Website (Quartz + multilingual), Local-ReFi-Toolkit (content structure)

**Cross-repo map:** [ECOSYSTEM-MAP.md](../ECOSYSTEM-MAP.md)

**For Complete Context**: See root `CONTEXT-GATHERING-GUIDE.md` for Regenerant-Catalunya section.

## Content
Edit `content/` markdown. Use Catalan for primary content.

## Integration
Part of ReFi BCN programs. Link to [[Regenerant Catalunya]] project.
