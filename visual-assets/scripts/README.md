# Brand Assets Scripts

Agent-executable scripts for creating and managing Regenerant Catalunya brand assets.

## Quick Start

### Prerequisites

```bash
cd "03 Libraries/Regenerant-Catalunya"
npm install canvas jimp  # If not already installed
```

### Basic Usage

**Process a single image with halftone pattern:**
```bash
node scripts/brand-assets/pattern-generation/halftone-dots.js \
  --input path/to/image.jpg \
  --output path/to/output.png
```

**Batch process images:**
```bash
node scripts/brand-assets/image-processing/batch-process.js \
  --input-dir content/images/event-photos \
  --output-dir content/images/processed \
  --config brand-assets/pattern-config.json
```

**Generate social media template:**
```bash
node scripts/brand-assets/template-generation/social-media.js \
  --platform instagram \
  --output-dir templates/social-media \
  --logo-path logos/round-logo/logo-128px.png \
  --languages en,es,cat
```

**Check brand compliance:**
```bash
node scripts/brand-assets/quality-control/check-brand-compliance.js \
  --input path/to/asset.png \
  --config brand-assets/brand-config.json
```

## Scripts Overview

### Pattern Generation

- **halftone-dots.js** - AM screen halftone dot patterns
- **halftone-lines.js** - Line screen halftone patterns
- **halftone-squares.js** - Square/diamond halftone patterns (to be implemented)
- **halftone-crosshatch.js** - Cross-hatch halftone patterns (to be implemented)
- **halftone-glyphs.js** - Custom glyph halftone patterns (to be implemented)

### Image Processing

- **apply-duotone.js** - Apply green duotone color mapping
- **batch-process.js** - Batch process images with patterns and duotone

### Template Generation

- **social-media.js** - Generate social media post templates
- **web-banners.js** - Generate web banner templates with Quartz integration
- **event-materials.js** - Generate event material templates (to be implemented)

### Quality Control

- **check-brand-compliance.js** - Validate brand asset compliance
- **validate-assets.js** - Batch validate assets in directory
- **validate-patterns.js** - Validate pattern consistency (to be implemented)

## Configuration Files

All configuration files are located in `brand-assets/`:

- **colors.json** - Brand color palette
- **pattern-config.json** - Pattern generation settings
- **brand-config.json** - Brand compliance rules

## Agent Usage

These scripts are designed to be executed by AI agents (Cursor/ChatGPT). See `docs/AGENT-IMPLEMENTATION-GUIDE.md` for complete agent-executable workflows.

## Documentation

- **Agent Implementation Guide:** `../docs/development/AGENT-IMPLEMENTATION-GUIDE.md`
- **Procedural Specifications:** `../docs/brand/PROCEDURAL-SPECIFICATIONS.md`
- **Brand Strategy:** `../docs/brand/BRAND-STRATEGY.md`

