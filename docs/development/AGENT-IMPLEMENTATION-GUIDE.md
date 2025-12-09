# Agent Implementation Guide

**Version:** 2.0  
**Last Updated:** December 2025  
**Purpose:** Guide for brand asset creation using manual tools

---

## Overview

This guide covers the Regenerant Catalunya brand asset creation process. Image processing is done manually using [ditheringstudio.com](https://ditheringstudio.com/), eliminating the need for local scripts.

---

## Image Processing Workflow

### Manual Dithering via Dithering Studio

All image dithering and pattern effects are created manually using [ditheringstudio.com](https://ditheringstudio.com/).

**Process:**

1. Navigate to [ditheringstudio.com](https://ditheringstudio.com/)
2. Upload source image
3. Configure dithering settings based on brand guidelines:
   - Use brand colors from `assets/config/colors.json`
   - Apply Bayer dithering or halftone patterns as needed
4. Export processed image
5. Save to `assets/generated/` folder

### Brand Color Reference

Reference `assets/config/colors.json` for the brand palette:

- **Forest Green:** `#214033` (dark color)
- **Warm Sand:** `#E6DFD7` (mid/light color)
- **Orange:** `#E67E50` (accent)
- **Midnight Navy:** `#092045` (text)
- **Purple:** `#6B4EA3` (accent)

### Recommended Dithering Settings

From `assets/config/pattern-config.json`:

- **Matrix Size:** 4 (Bayer dithering)
- **Dark Threshold:** 0.33
- **Light Threshold:** 0.66

---

## Configuration Files

All brand configuration is stored in `assets/config/`:

### colors.json

Contains the complete brand color palette including:
- Base colors (forestGreen, warmSand, midnightNavy)
- Accent colors (purple, orange)
- Green variations (dark, medium, light)
- Bayer dither color mapping settings

### pattern-config.json

Pattern generation settings including:
- Default pattern type (bayerDither)
- Halftone patterns (dots, lines, squares, crosshatch)
- Duotone and Bayer dither parameters

### brand-config.json

Brand compliance rules including:
- Allowed colors and tolerance
- Logo size requirements
- Typography settings
- Pattern type restrictions

---

## Asset Organization

### Generated Assets

Store all processed images in `assets/generated/`:

```
assets/generated/
├── cover.png                    # Main cover image (dithered)
├── Keras Buti projects/         # Partner project images
├── Miceli projects/             # Partner project images
└── valora-onboarding-screenshots/  # App screenshots
```

### Test Prototypes

Experimental outputs are in `assets/test-prototypes/`:

```
assets/test-prototypes/
├── input/          # Source test images
├── output/         # Test results
└── templates/      # Template files
```

---

## Brand Compliance

### Manual Verification

When creating assets, verify:

1. **Colors:** Only use colors from `assets/config/colors.json`
2. **Patterns:** Use approved pattern types (dots, lines, squares, crosshatch)
3. **Logo:** Follow size requirements (32px min, 1024px max)
4. **Typography:** Use Inter font family

### Quality Checklist

- [ ] Colors match brand palette
- [ ] Pattern style is consistent
- [ ] Image resolution is appropriate
- [ ] File format is correct (PNG preferred for web)

---

## Related Documentation

- **Brand Strategy:** `docs/BRAND-STRATEGY.md`
- **Brand Design:** `docs/brand/BRAND-DESIGN.md`
- **Visual Creation Process:** `docs/VISUAL-CREATION-PROCESS.md`
- **Pattern Specifications:** `docs/HALFTONE-PATTERN-SPECIFICATIONS.md`
