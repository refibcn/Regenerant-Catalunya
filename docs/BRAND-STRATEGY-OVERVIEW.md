# Regenerant Catalunya Brand Strategy - Overview

**Version:** 2.0 (Agent-Executable)  
**Last Updated:** November 13, 2025  
**Status:** Active  
**Purpose:** Quick reference guide to agent-executable brand strategy documentation

---

## Documentation Structure

This brand strategy is documented across three core documents, all designed for agent-executable workflows:

### 1. Brand Strategy (`BRAND-STRATEGY.md`)

**Streamlined strategic foundation covering:**

- Brand positioning and objectives
- Visual identity system
- Color palette and typography
- Halftone pattern system
- Logo system
- Agent-executable implementation approach

**Use When:** Need strategic overview, brand positioning, or high-level brand decisions

### 2. Agent Implementation Guide (`AGENT-IMPLEMENTATION-GUIDE.md`)

**Complete agent-executable workflows:**

- Pattern generation scripts and commands
- Image processing pipelines
- Template generation workflows
- Quality control automation
- Configuration files and examples
- Complete workflow examples

**Use When:** Executing brand asset creation processes via AI agents (Cursor/ChatGPT)

### 3. Procedural Specifications (`PROCEDURAL-SPECIFICATIONS.md`)

**Detailed technical procedures:**

- Pattern generation algorithms
- Color mapping procedures
- Logo generation workflows
- Template generation procedures
- Quality control procedures
- Integration procedures

**Use When:** Understanding technical implementation details or extending functionality

---

## Script Library

All brand asset creation scripts are located in `scripts/brand-assets/`:

### Pattern Generation

- `halftone-dots.js` - AM screen halftone dot patterns
- `halftone-lines.js` - Line screen halftone patterns
- Additional pattern types (squares, crosshatch, glyphs) - To be implemented

### Image Processing

- `apply-duotone.js` - Green duotone color mapping
- `batch-process.js` - Batch image processing pipeline

### Template Generation

- `social-media.js` - Social media post templates
- `web-banners.js` - Web banner templates with Quartz integration
- `event-materials.js` - Event material templates (to be implemented)

### Quality Control

- `check-brand-compliance.js` - Brand compliance validation
- `validate-assets.js` - Batch asset validation

See `scripts/brand-assets/README.md` for usage instructions.

---

## Configuration Files

All configuration files are in `brand-assets/`:

- **colors.json** - Brand color palette
- **pattern-config.json** - Pattern generation settings
- **brand-config.json** - Brand compliance rules

---

## Quick Start for Agents

### Process Event Photo with Halftone Pattern

```bash
# Step 1: Apply halftone pattern
node scripts/brand-assets/pattern-generation/halftone-dots.js \
  --input content/images/event-photo.jpg \
  --output content/images/event-photo-patterned.png \
  --config brand-assets/pattern-config.json

# Step 2: Apply green duotone
node scripts/brand-assets/image-processing/apply-duotone.js \
  --input content/images/event-photo-patterned.png \
  --output content/images/event-photo-final.png \
  --config brand-assets/pattern-config.json
```

### Generate Social Media Template

```bash
node scripts/brand-assets/template-generation/social-media.js \
  --platform instagram \
  --output-dir templates/social-media \
  --logo-path logos/round-logo/logo-128px.png \
  --languages en,es,cat
```

### Batch Process Images

```bash
node scripts/brand-assets/image-processing/batch-process.js \
  --input-dir content/images/event-photos \
  --output-dir content/images/processed \
  --config brand-assets/pattern-config.json
```

---

## Key Changes from Previous Version

**Eliminated:**

- Manual Canva/Figma workflows
- Manual design tool dependencies
- Step-by-step manual processes

**Replaced With:**

- Agent-executable scripts
- Automated processing pipelines
- Code-based workflows
- Procedural specifications

**Result:**

- Fully automated brand asset creation
- Agent-executable processes
- Consistent, repeatable results
- Scalable workflows

---

## Legacy Documentation

The following documents contain manual workflow references and are deprecated:

- `VISUAL-CREATION-PROCESS.md` - Replaced by `AGENT-IMPLEMENTATION-GUIDE.md`
- `ROUND-LOGO-SPECIFICATIONS.md` - Logo specs integrated into `BRAND-STRATEGY.md`
- `HALFTONE-PATTERN-SPECIFICATIONS.md` - Pattern specs integrated into `PROCEDURAL-SPECIFICATIONS.md`
- `TEMPLATE-INVENTORY.md` - Template generation now automated via scripts

These files are kept for reference but should not be used for new implementations.

---

## Related Documentation

- **Brand Design:** `BRAND-DESIGN.md` - Existing brand design system (Toolkit Style)
- **Contributing:** `CONTRIBUTING.md` - Contribution guidelines

---

**Maintained By:** ReFi Barcelona Brand Team  
**Last Review:** November 13, 2025
