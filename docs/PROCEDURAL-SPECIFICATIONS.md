# Procedural Specifications

**Version:** 2.0  
**Last Updated:** December 2025  
**Purpose:** Reference specifications for brand asset creation (manual workflow via ditheringstudio.com)

---

## Overview

This document contains the technical specifications for Regenerant Catalunya brand assets. All image processing is now done manually using [ditheringstudio.com](https://ditheringstudio.com/).

---

## Pattern Specifications

### Halftone Dots Pattern (AM Screen)

**Technical Details:**

- Dot size: 8px default (configurable 4-16px)
- Grid spacing: dotSize + 2px padding
- Angle: 45° default (configurable 0-180°)
- Intensity: Controls dot size variation (0-1 scale)

**Process:**

1. Load source image
2. Convert to grayscale
3. Generate halftone grid with dots sized by brightness
4. Apply rotation transformation
5. Apply green duotone color mapping

### Halftone Lines Pattern

**Technical Details:**

- Line spacing: 4px default (configurable 2-8px)
- Max line width: lineSpacing - 1px
- Angle: 45° default (configurable 0-180°)

### Halftone Squares/Diamonds Pattern

**Technical Details:**

- Square size: 6px default (configurable 4-12px)
- Diamond mode: Rotate squares 45°
- Grid spacing: squareSize + 1px padding

### Cross-Hatch Pattern

**Technical Details:**

- Line spacing: 4px default
- Angle1: 45° default
- Angle2: 135° default (perpendicular to angle1)
- Blend mode: Multiply

---

## Green Duotone Color Mapping

### Color Mapping Formula

```
if (luminance < balance) {
  color = interpolate(darkColor, midColor, luminance / balance)
} else {
  color = interpolate(midColor, lightColor, (luminance - balance) / (1 - balance))
}
```

**Parameters:**

- Dark color: #214033 (Forest Green)
- Light color: #E6DFD7 (Warm Sand)
- Balance: 0.5 default (configurable 0-1)

---

## Bayer Dithering (Primary Method)

Bayer dithering is the primary method for image processing via [ditheringstudio.com](https://ditheringstudio.com/).

### Configuration (from `assets/config/pattern-config.json`)

```json
{
  "bayerDither": {
    "matrixSize": 4,
    "darkColor": "#214033",
    "midColor": "#E6DFD7",
    "lightColor": "#E67E50",
    "darkThreshold": 0.33,
    "lightThreshold": 0.66
  }
}
```

### Manual Workflow

1. Open [ditheringstudio.com](https://ditheringstudio.com/)
2. Upload source image
3. Select Bayer dithering algorithm
4. Configure matrix size (4 recommended)
5. Set colors to match brand palette
6. Export and save to `assets/generated/`

---

## Logo Specifications

### Round Logo Requirements

- Format: Round (circular or square with rounded elements)
- Minimum size: 32px
- Maximum size: 1024px
- Required formats: SVG, PNG
- Colors must match brand palette

### Size Variants

Default sizes: 32, 64, 128, 256, 512, 1024px

---

## Template Specifications

### Social Media Dimensions

- Instagram: 1080x1080px (square), 1080x1350px (portrait)
- Twitter: 1200x675px (landscape)
- LinkedIn: 1200x627px (landscape)
- Facebook: 1200x630px (landscape)

### Web Banner Dimensions

- Hero: Full width, 1200x400px
- Section: Content width, 800x200px
- Sidebar: 300x250px
- Mobile: Responsive, 600x300px

### Print Specifications

- DPI: 300 for print, 150 for preview
- Bleed: 3mm on all sides
- Safe zone: 5mm from edge
- Color mode: CMYK for print, RGB for preview

---

## Brand Compliance Rules

### Color Compliance

- Colors must match brand palette (Delta E < 5)
- Tolerance: 5 units

### Allowed Colors

From `assets/config/brand-config.json`:

```json
["#214033", "#E6DFD7", "#092045", "#6B4EA3", "#E67E50"]
```

### Typography

- Font family: Inter
- H1: 2.5rem
- H2: 2rem
- Body: 1.125rem

### Pattern Requirements

- Allowed types: dots, lines, squares, crosshatch
- Required consistency: true

---

## Configuration Files

All configuration is stored in `assets/config/`:

- `colors.json` - Brand color palette
- `pattern-config.json` - Pattern generation settings
- `brand-config.json` - Brand compliance rules

---

## Related Documentation

- **Agent Implementation Guide:** `docs/AGENT-IMPLEMENTATION-GUIDE.md`
- **Brand Strategy:** `docs/BRAND-STRATEGY.md`
- **Visual Creation Process:** `docs/VISUAL-CREATION-PROCESS.md`

---

**Maintained By:** ReFi Barcelona Brand Team  
**Last Review:** December 2025
