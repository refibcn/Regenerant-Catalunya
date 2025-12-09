# Regenerant Catalunya Brand Strategy - Overview

**Version:** 2.0  
**Last Updated:** December 2025  
**Status:** Active  
**Purpose:** Quick reference guide to brand strategy documentation

---

## Documentation Structure

This brand strategy is documented across three core documents:

### 1. Brand Strategy (`BRAND-STRATEGY.md`)

**Streamlined strategic foundation covering:**

- Brand positioning and objectives
- Visual identity system
- Color palette and typography
- Halftone pattern system
- Logo system
- Implementation approach

**Use When:** Need strategic overview, brand positioning, or high-level brand decisions

### 2. Agent Implementation Guide (`AGENT-IMPLEMENTATION-GUIDE.md`)

**Brand asset creation workflows:**

- Manual image processing via ditheringstudio.com
- Configuration file references
- Asset organization guidelines
- Quality control checklists

**Use When:** Creating brand assets or understanding the workflow

### 3. Procedural Specifications (`PROCEDURAL-SPECIFICATIONS.md`)

**Detailed technical specifications:**

- Pattern generation parameters
- Color mapping specifications
- Logo requirements
- Template dimensions
- Brand compliance rules

**Use When:** Understanding technical specifications or requirements

---

## Configuration Files

All configuration files are in `assets/config/`:

- **colors.json** - Brand color palette (including Bayer dither settings)
- **pattern-config.json** - Pattern generation settings
- **brand-config.json** - Brand compliance rules

---

## Image Processing Workflow

All image processing is done manually using [ditheringstudio.com](https://ditheringstudio.com/):

1. Navigate to [ditheringstudio.com](https://ditheringstudio.com/)
2. Upload source image
3. Configure dithering settings based on `assets/config/pattern-config.json`
4. Apply brand colors from `assets/config/colors.json`
5. Export and save to `assets/generated/`

---

## Key Changes from Previous Version

**Eliminated:**

- Local Node.js scripts for image processing
- Manual Canva/Figma workflows for dithering
- Complex script-based pipelines

**Replaced With:**

- Manual processing via [ditheringstudio.com](https://ditheringstudio.com/)
- Simplified configuration files
- Streamlined asset organization

**Result:**

- Simpler workflow with no local dependencies
- Consistent results via web-based tool
- Easy to use for non-technical team members

---

## Asset Organization

```
assets/
├── config/              # Brand configuration
│   ├── brand-config.json
│   ├── colors.json
│   └── pattern-config.json
├── generated/           # Processed visual assets
│   ├── Keras Buti projects/
│   ├── Miceli projects/
│   └── ...
└── test-prototypes/     # Test materials
    ├── input/
    ├── output/
    └── templates/
```

---

## Legacy Documentation

The following documents are kept for reference but use outdated workflows:

- `VISUAL-CREATION-PROCESS.md` - Manual workflow references
- `ROUND-LOGO-SPECIFICATIONS.md` - Logo specs (still valid)
- `HALFTONE-PATTERN-SPECIFICATIONS.md` - Pattern specs (still valid)

---

## Related Documentation

- **Brand Design:** `docs/brand/BRAND-DESIGN.md` - Existing brand design system (Toolkit Style)
- **Contributing:** `docs/development/CONTRIBUTING.md` - Contribution guidelines

---

**Maintained By:** ReFi Barcelona Brand Team  
**Last Review:** December 2025
