# Visual Assets Package

This package contains all visual assets, scripts, documentation, and configuration files for the Regenerant Catalunya brand identity and visual design system.

## 📁 Structure

```
visual-assets/
├── scripts/          # Image processing and generation scripts
├── docs/             # Brand and design documentation
├── assets/           # Generated visual assets (outputs)
├── config/           # Brand configuration files (colors, patterns, etc.)
└── test-prototypes/  # Prototype testing and results
```

## 🎨 Brand Assets

### Configuration Files (`config/`)
- `brand-config.json` - Brand configuration settings
- `colors.json` - Color palette definitions
- `pattern-config.json` - Pattern generation settings

### Scripts (`scripts/`)

#### Image Processing
- `image-processing/apply-duotone.js` - Apply duotone effects to images
- `image-processing/batch-process.js` - Batch process multiple images

#### Pattern Generation
- `pattern-generation/halftone-dots.js` - Generate halftone dot patterns
- `pattern-generation/halftone-lines.js` - Generate halftone line patterns

#### Template Generation
- `template-generation/social-media.js` - Generate social media templates
- `template-generation/web-banners.js` - Generate web banner templates

#### Quality Control
- `quality-control/check-brand-compliance.js` - Validate brand compliance
- `quality-control/validate-assets.js` - Validate asset quality

### Documentation (`docs/`)
- Brand strategy and design guidelines
- Logo specifications
- Pattern specifications
- Visual creation process documentation

### Test Prototypes (`test-prototypes/`)
- Prototype generation scripts
- Test results and analysis
- Input/output examples
- Template files

## 🚀 Usage

### Generate Brand Assets

```bash
# Generate social media templates
node scripts/template-generation/social-media.js

# Generate web banners
node scripts/template-generation/web-banners.js

# Apply duotone effects
node scripts/image-processing/apply-duotone.js input.jpg output.jpg

# Generate halftone patterns
node scripts/pattern-generation/halftone-dots.js
```

### Validate Assets

```bash
# Check brand compliance
node scripts/quality-control/check-brand-compliance.js

# Validate asset quality
node scripts/quality-control/validate-assets.js
```

### Test Prototypes

```bash
cd test-prototypes
node generate-prototypes.js
```

## 📋 Requirements

- Node.js (v18+)
- Required npm packages (see `package.json` in root)
- Image processing libraries (Sharp, Canvas, etc.)

## 📖 Related Documentation

- [Brand Strategy Overview](../docs/brand/BRAND-STRATEGY-OVERVIEW.md)
- [Logo Specifications](../docs/brand/ROUND-LOGO-SPECIFICATIONS.md)
- [Pattern Specifications](../docs/brand/HALFTONE-PATTERN-SPECIFICATIONS.md)
- [Visual Creation Process](../docs/brand/VISUAL-CREATION-PROCESS.md)

## 🔧 Configuration

Brand configuration is managed through JSON files in the `config/` directory. Update these files to modify:
- Color palettes
- Pattern parameters
- Template dimensions
- Quality settings

## 📝 Notes

- All generated assets should be validated using quality control scripts
- Brand compliance checks should be run before publishing assets
- Test prototypes are for experimentation and may not reflect final brand standards

