# Agent Implementation Guide

**Version:** 1.0  
**Last Updated:** November 13, 2025  
**Purpose:** Complete guide for AI agents (Cursor/ChatGPT) to execute brand asset creation processes

---

## Overview

This guide provides agent-executable workflows for creating Regenerant Catalunya brand assets. All processes are code-based and automated, eliminating manual design tool dependencies.

---

## Prerequisites

### Required Tools

- **Node.js** (v22+) - Already available in project
- **Sharp** (v0.34.4) - Already available in project dependencies
- **Image Processing Libraries** - To be installed

### Setup

```bash
cd "03 Libraries/Regenerant-Catalunya"
npm install canvas jimp  # For pattern generation
```

---

## Pattern Generation Workflows

### 1. Halftone Dots Pattern (AM Screen)

**Script:** `scripts/brand-assets/pattern-generation/halftone-dots.js`

**Agent Command:**

```bash
node scripts/brand-assets/pattern-generation/halftone-dots.js \
  --input path/to/image.jpg \
  --output path/to/output.png \
  --dot-size 8 \
  --angle 45 \
  --intensity 0.6
```

**Parameters:**

- `--input`: Source image path
- `--output`: Output image path
- `--dot-size`: Dot size in pixels (default: 8)
- `--angle`: Pattern angle in degrees (default: 45)
- `--intensity`: Pattern intensity 0-1 (default: 0.6)

**Process:**

1. Load source image
2. Convert to grayscale
3. Generate amplitude-modulated halftone dots
4. Apply green duotone color mapping
5. Export result

### 2. Halftone Lines Pattern

**Script:** `scripts/brand-assets/pattern-generation/halftone-lines.js`

**Agent Command:**

```bash
node scripts/brand-assets/pattern-generation/halftone-lines.js \
  --input path/to/image.jpg \
  --output path/to/output.png \
  --line-spacing 4 \
  --angle 45 \
  --intensity 0.6
```

**Parameters:**

- `--line-spacing`: Line spacing in pixels (default: 4)
- `--angle`: Line angle in degrees (default: 45)
- Other parameters same as dots

### 3. Halftone Squares/Diamonds Pattern

**Script:** `scripts/brand-assets/pattern-generation/halftone-squares.js`

**Agent Command:**

```bash
node scripts/brand-assets/pattern-generation/halftone-squares.js \
  --input path/to/image.jpg \
  --output path/to/output.png \
  --square-size 6 \
  --diamond false \
  --intensity 0.6
```

**Parameters:**

- `--square-size`: Square size in pixels (default: 6)
- `--diamond`: Use diamond pattern instead of squares (default: false)
- Other parameters same as above

### 4. Halftone Cross-Hatch Pattern

**Script:** `scripts/brand-assets/pattern-generation/halftone-crosshatch.js`

**Agent Command:**

```bash
node scripts/brand-assets/pattern-generation/halftone-crosshatch.js \
  --input path/to/image.jpg \
  --output path/to/output.png \
  --line-spacing 4 \
  --angle1 45 \
  --angle2 135 \
  --intensity 0.5
```

**Parameters:**

- `--angle1`: First line screen angle (default: 45)
- `--angle2`: Second line screen angle (default: 135)
- Other parameters same as lines

### 5. Batch Image Processing

**Script:** `scripts/brand-assets/image-processing/batch-process.js`

**Agent Command:**

```bash
node scripts/brand-assets/image-processing/batch-process.js \
  --input-dir path/to/images \
  --output-dir path/to/output \
  --pattern dots \
  --config config.json
```

**Parameters:**

- `--input-dir`: Directory containing source images
- `--output-dir`: Directory for processed images
- `--pattern`: Pattern type (dots/lines/squares/crosshatch)
- `--config`: JSON config file with pattern settings

**Config File Format:**

```json
{
  "pattern": "dots",
  "dotSize": 8,
  "angle": 45,
  "intensity": 0.6,
  "duotone": {
    "darkColor": "#214033",
    "lightColor": "#E6DFD7"
  }
}
```

---

## Green Duotone Color Mapping

### Color Mapping Script

**Script:** `scripts/brand-assets/image-processing/apply-duotone.js`

**Agent Command:**

```bash
node scripts/brand-assets/image-processing/apply-duotone.js \
  --input path/to/image.png \
  --output path/to/output.png \
  --dark-color "#214033" \
  --light-color "#E6DFD7" \
  --balance 0.5
```

**Parameters:**

- `--dark-color`: Hex color for dark tones (default: #214033)
- `--light-color`: Hex color for light tones (default: #E6DFD7)
- `--balance`: Color balance 0-1 (default: 0.5)

**Process:**

1. Load image (with halftone pattern applied)
2. Analyze image tones
3. Map dark tones to dark color
4. Map light tones to light color
5. Apply color mapping
6. Export result

---

## Logo Generation Workflow

### Procedural Logo Creation

**Script:** `scripts/brand-assets/logo-generation/generate-logo-variants.js`

**Agent Command:**

```bash
node scripts/brand-assets/logo-generation/generate-logo-variants.js \
  --design logo-design.svg \
  --output-dir logos/round-logo \
  --sizes 32,64,128,256,512,1024 \
  --formats svg,png,pdf \
  --variants fullcolor,singlecolor,reversed,monochrome
```

**Parameters:**

- `--design`: Source logo design file (SVG)
- `--output-dir`: Output directory
- `--sizes`: Comma-separated sizes for PNG (default: 32,64,128,256,512,1024)
- `--formats`: Comma-separated formats (svg,png,pdf)
- `--variants`: Color variants to generate

**Process:**

1. Load logo design (SVG)
2. Generate color variants
3. Export in requested formats and sizes
4. Create usage guidelines document
5. Generate template files

---

## Template Generation Workflows

### Social Media Template Generation

**Script:** `scripts/brand-assets/template-generation/social-media.js`

**Agent Command:**

```bash
node scripts/brand-assets/template-generation/social-media.js \
  --platform instagram \
  --output-dir templates/social-media \
  --logo-path logos/round-logo/logo-256px.png \
  --colors colors.json \
  --languages en,es,cat
```

**Parameters:**

- `--platform`: Platform (instagram/twitter/linkedin/facebook)
- `--output-dir`: Output directory
- `--logo-path`: Path to logo file
- `--colors`: JSON file with brand colors
- `--languages`: Comma-separated language codes

**Process:**

1. Load platform specifications (dimensions, requirements)
2. Create template structure
3. Apply brand colors and typography
4. Place logo according to guidelines
5. Create text areas for each language
6. Export template files (SVG/PNG)

### Web Banner Template Generation

**Script:** `scripts/brand-assets/template-generation/web-banners.js`

**Agent Command:**

```bash
node scripts/brand-assets/template-generation/web-banners.js \
  --type hero \
  --output-dir templates/web-banners \
  --logo-path logos/round-logo/logo-256px.png \
  --colors colors.json \
  --quartz-integration true
```

**Parameters:**

- `--type`: Banner type (hero/section/sidebar/mobile)
- `--quartz-integration`: Generate Quartz-compatible templates
- Other parameters same as social media

**Process:**

1. Load banner specifications
2. Create responsive template structure
3. Apply Quartz integration points
4. Place logo and brand elements
5. Create text areas
6. Export template files

### Event Material Template Generation

**Script:** `scripts/brand-assets/template-generation/event-materials.js`

**Agent Command:**

```bash
node scripts/brand-assets/template-generation/event-materials.js \
  --type poster \
  --format A4 \
  --output-dir templates/event-materials \
  --logo-path logos/round-logo/logo-256px.png \
  --colors colors.json \
  --languages en,es,cat
```

**Parameters:**

- `--type`: Material type (poster/flyer/booklet/namebadge/slides)
- `--format`: Print format (A4/A3/A5/etc.)
- Other parameters same as above

**Process:**

1. Load print specifications
2. Create template structure with bleed/safe zones
3. Apply brand colors (CMYK for print)
4. Place logo and brand elements
5. Create text areas for event information
6. Export template files (PDF/SVG)

---

## Quality Control Automation

### Brand Compliance Check

**Script:** `scripts/brand-assets/quality-control/check-brand-compliance.js`

**Agent Command:**

```bash
node scripts/brand-assets/quality-control/check-brand-compliance.js \
  --input path/to/asset.png \
  --config brand-config.json \
  --output report.json
```

**Checks:**

- Color accuracy (matches brand palette)
- Logo usage compliance
- Typography compliance
- Pattern consistency
- File format validation
- Size specifications

**Output:** JSON report with compliance status and issues

### Pattern Consistency Validation

**Script:** `scripts/brand-assets/quality-control/validate-patterns.js`

**Agent Command:**

```bash
node scripts/brand-assets/quality-control/validate-patterns.js \
  --input-dir path/to/images \
  --pattern-type dots \
  --config pattern-config.json \
  --output report.json
```

**Validates:**

- Pattern type consistency
- Pattern settings consistency
- Color mapping accuracy
- Pattern quality

### Asset Validation

**Script:** `scripts/brand-assets/quality-control/validate-assets.js`

**Agent Command:**

```bash
node scripts/brand-assets/quality-control/validate-assets.js \
  --asset-dir brand-assets/ \
  --config brand-config.json \
  --output validation-report.json
```

**Validates:**

- File formats
- File sizes
- Color accuracy
- Logo compliance
- Naming conventions

---

## Complete Workflow Examples

### Example 1: Process Event Photo with Halftone Pattern

**Agent Task:**
"Process event photo with halftone dots pattern and green duotone"

**Agent Execution:**

```bash
# Step 1: Apply halftone pattern
node scripts/brand-assets/pattern-generation/halftone-dots.js \
  --input content/images/event-photo.jpg \
  --output content/images/event-photo-patterned.png \
  --dot-size 8 \
  --angle 45 \
  --intensity 0.6

# Step 2: Apply green duotone
node scripts/brand-assets/image-processing/apply-duotone.js \
  --input content/images/event-photo-patterned.png \
  --output content/images/event-photo-final.png \
  --dark-color "#214033" \
  --light-color "#E6DFD7" \
  --balance 0.5

# Step 3: Quality control
node scripts/brand-assets/quality-control/check-brand-compliance.js \
  --input content/images/event-photo-final.png \
  --config brand-config.json
```

### Example 2: Generate Social Media Post Template

**Agent Task:**
"Generate Instagram post template with logo and brand colors"

**Agent Execution:**

```bash
node scripts/brand-assets/template-generation/social-media.js \
  --platform instagram \
  --output-dir templates/social-media \
  --logo-path logos/round-logo/logo-128px.png \
  --colors brand-assets/colors.json \
  --languages en,es,cat
```

### Example 3: Batch Process Event Images

**Agent Task:**
"Process all images in event-photos directory with halftone dots pattern"

**Agent Execution:**

```bash
# Create config file
cat > pattern-config.json << EOF
{
  "pattern": "dots",
  "dotSize": 8,
  "angle": 45,
  "intensity": 0.6,
  "duotone": {
    "darkColor": "#214033",
    "lightColor": "#E6DFD7",
    "balance": 0.5
  }
}
EOF

# Run batch processing
node scripts/brand-assets/image-processing/batch-process.js \
  --input-dir content/images/event-photos \
  --output-dir content/images/event-photos-processed \
  --pattern dots \
  --config pattern-config.json
```

---

## Configuration Files

### Brand Colors Configuration

**File:** `brand-assets/colors.json`

```json
{
  "base": {
    "forestGreen": "#214033",
    "warmSand": "#E6DFD7",
    "midnightNavy": "#092045"
  },
  "accents": {
    "purple": "#6B4EA3",
    "orange": "#E67E50"
  },
  "green": {
    "dark": "#214033",
    "medium": "#3A6655",
    "light": "#568F79",
    "highlight": "rgba(33, 64, 51, 0.15)"
  },
  "regenerantCatalunya": {
    "highlight": "#TBD"
  },
  "duotone": {
    "dark": "#214033",
    "light": "#E6DFD7",
    "balance": 0.5
  }
}
```

### Pattern Configuration

**File:** `brand-assets/pattern-config.json`

```json
{
  "default": {
    "type": "dots",
    "dotSize": 8,
    "angle": 45,
    "intensity": 0.6
  },
  "patterns": {
    "dots": {
      "dotSize": 8,
      "angle": 45,
      "intensity": 0.6
    },
    "lines": {
      "lineSpacing": 4,
      "angle": 45,
      "intensity": 0.6
    },
    "squares": {
      "squareSize": 6,
      "diamond": false,
      "intensity": 0.6
    },
    "crosshatch": {
      "lineSpacing": 4,
      "angle1": 45,
      "angle2": 135,
      "intensity": 0.5
    }
  }
}
```

### Brand Compliance Configuration

**File:** `brand-assets/brand-config.json`

```json
{
  "colors": {
    "allowed": ["#214033", "#E6DFD7", "#092045", "#6B4EA3", "#E67E50"],
    "tolerance": 5
  },
  "logo": {
    "minSize": 32,
    "maxSize": 1024,
    "requiredFormats": ["svg", "png"]
  },
  "typography": {
    "fontFamily": "Inter",
    "sizes": {
      "h1": "2.5rem",
      "h2": "2rem",
      "body": "1.125rem"
    }
  },
  "patterns": {
    "allowedTypes": ["dots", "lines", "squares", "crosshatch"],
    "requiredConsistency": true
  }
}
```

---

## Integration with Existing Tools

### Quartz Website Integration

**Script:** `scripts/brand-assets/integration/quartz-integration.js`

**Agent Command:**

```bash
node scripts/brand-assets/integration/quartz-integration.js \
  --banner-path templates/web-banners/hero-banner.png \
  --output-dir quartz/static \
  --optimize true
```

**Process:**

1. Load banner template
2. Optimize for web (compress, convert to WebP)
3. Generate Quartz-compatible assets
4. Update Quartz static assets
5. Generate responsive variants

### Figma MCP Integration (When Available)

**Script:** `scripts/brand-assets/integration/figma-mcp.js`

**Agent Command:**

```bash
node scripts/brand-assets/integration/figma-mcp.js \
  --action export \
  --node-id "8:8316" \
  --output-dir brand-assets/figma-exports
```

**Process:**

1. Connect to Figma MCP server
2. Export design elements
3. Convert to brand asset formats
4. Apply brand processing
5. Save to asset directory

---

## Error Handling and Validation

### Input Validation

All scripts validate:

- File existence and accessibility
- Image format compatibility
- Parameter ranges and types
- Configuration file validity

### Error Reporting

**Format:** JSON error reports

```json
{
  "status": "error",
  "errors": [
    {
      "type": "file_not_found",
      "file": "path/to/file.jpg",
      "message": "Input file not found"
    }
  ]
}
```

### Logging

All scripts output:

- Processing progress
- Success/failure status
- Error details
- Output file locations

---

## Performance Optimization

### Batch Processing

- Process multiple images in parallel
- Optimize memory usage
- Cache intermediate results
- Progress reporting

### Image Optimization

- Automatic compression
- Format conversion (WebP for web)
- Size optimization
- Quality preservation

---

## Maintenance and Updates

### Adding New Patterns

1. Create new pattern script in `pattern-generation/`
2. Follow existing script structure
3. Document parameters
4. Add to pattern config
5. Update documentation

### Updating Brand Colors

1. Update `colors.json`
2. Regenerate templates
3. Update processed images if needed
4. Run quality control checks

---

**Maintained By:** ReFi Barcelona Brand Team  
**Last Review:** November 13, 2025
