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

- `image-processing/apply-duotone.js` - Apply duotone/tritone color mapping to images
- `image-processing/apply-bayer-dither.js` - Apply Bayer dithering with color mapping (primary method)
- `image-processing/batch-process.js` - Batch process multiple images

#### Pattern Generation

- `pattern-generation/bayer-dither.js` - Generate Bayer dither patterns (ordered dither, primary)
- `pattern-generation/halftone-dots.js` - Generate halftone dot patterns (legacy)
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

**Primary Method: Bayer Dithering**

```bash
# Apply Bayer dithering with beige/green/orange color scheme (recommended)
node scripts/image-processing/apply-bayer-dither.js \
  --input image.jpg \
  --output output.png \
  --matrix-size 4

# Batch process images with Bayer dithering (default)
node scripts/image-processing/batch-process.js \
  --input-dir ./input \
  --output-dir ./output

# Apply Bayer dithering with custom colors
node scripts/image-processing/apply-bayer-dither.js \
  --input image.jpg \
  --output output.png \
  --dark-color "#214033" \
  --mid-color "#E6DFD7" \
  --light-color "#E67E50" \
  --matrix-size 4
```

**Legacy Methods:**

```bash
# Apply duotone/tritone color mapping
node scripts/image-processing/apply-duotone.js \
  --input image.jpg \
  --output output.png \
  --mid-color "#E6DFD7" \
  --use-beige-base

# Generate halftone dot patterns (legacy)
node scripts/pattern-generation/halftone-dots.js \
  --input image.jpg \
  --output output.png
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
