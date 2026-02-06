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

**Agents**: None (uses root-level agents as needed)

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
- `docs/planning/260128-phase-2-planning-session-outcomes.md` - Phase 2 planning
- `docs/networks/network-specific-adaptations.md` - Network adaptations (13,000 words)
- `docs/tools/` - Tool implementation plans (Safe, Home Community, IDK)
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
2. `README.md` - Project overview, program focus
3. `docs/program/master-document.md` - Master document (3 languages: EN/CA/ES)
4. `PHASE-2-EXECUTIVE-SUMMARY.md` - Executive summary (Jan 28, 2026)

### Architecture Understanding
- Quartz static site generator
- Multilingual: Catalan (primary), Spanish, English
- Content structure: Program documentation, workshops, tools, communications
- Phase 2 ready: All core planning complete (120,000+ words)

### Planning Context
- Master Document: `docs/program/master-document.md` (program design, funding structure, 11 project portfolio)
- Phase 2 Planning: `docs/planning/260128-phase-2-planning-session-outcomes.md`
- Network Adaptations: `docs/networks/network-specific-adaptations.md` (13,000 words)
- Tool Plans: `docs/tools/` (Safe, Home Community, IDK implementation plans)

### Code Navigation
- **Content**: `content/` (program documentation)
- **Workshops**: `docs/workshops/workshop-4-sense-making/`, `docs/workshops/workshop-5-biofi/`
- **Tools**: `docs/tools/safe-implementation-plan.md`, `docs/tools/home-community-implementation-plan.md`
- **Communications**: `docs/communications/phase-2/` (content calendar, templates)

### Search Patterns
**When looking for program design**: Check `docs/program/master-document.md` (3 languages)  
**When working on workshops**: See `docs/workshops/` (complete facilitation guides)  
**When implementing tools**: Reference `docs/tools/` (Safe, Home Community, IDK plans)

### Integration Points
- Depends on: ReFi BCN programs, Quartz framework
- Used by: Regenerant Catalunya program (Phase 2 implementation)
- Shares patterns with: ReFi-BCN-Website (Quartz + multilingual), Local-ReFi-Toolkit (content structure)

**For Complete Context**: See root `CONTEXT-GATHERING-GUIDE.md` for Regenerant-Catalunya section.

## Content
Edit `content/` markdown. Use Catalan for primary content.

## Integration
Part of ReFi BCN programs. Link to [[Regenerant Catalunya]] project.
