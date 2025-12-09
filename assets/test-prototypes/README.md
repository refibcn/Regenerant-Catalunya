# Brand Asset Prototypes

This directory contains test outputs and prototypes from brand asset experimentation.

## Directory Structure

```
test-prototypes/
├── input/              # Test input images
├── output/             # Pattern generation outputs
├── templates/          # Generated templates
├── reports/            # Test reports
└── README.md           # This file
```

## Generated Prototypes

### Pattern Variations

**Halftone Dots:**

- `prototype-dots-{4,8,12,16}px.png` - Different dot sizes
- `prototype-intensity-{0.3,0.5,0.7,0.9}.png` - Different intensities
- `prototype-angle-{0,45,90,135}deg.png` - Different angles

**Halftone Lines:**

- `prototype-lines-{2,4,6,8}px.png` - Different line spacing

**Complete Workflow:**

- `prototype-complete-final.png` - Pattern + duotone example

### Templates

**Social Media:**

- `{instagram,twitter,linkedin,facebook}-{en,es,cat}.png`
- `{platform}-template.svg` - Editable SVG templates

**Web Banners:**

- `banner-{hero,section,sidebar,mobile}.png`
- `banner-{type}.webp` - Optimized WebP
- `banner-{type}.svg` - Scalable SVG

## Current Workflow

Image processing is now done manually via [ditheringstudio.com](https://ditheringstudio.com/).

### Process Event Photo

1. Upload photo to [ditheringstudio.com](https://ditheringstudio.com/)
2. Apply Bayer dithering with brand colors:
   - Dark: `#214033` (Forest Green)
   - Mid: `#E6DFD7` (Warm Sand)
   - Light: `#E67E50` (Orange)
3. Export and save to `assets/generated/`

## Related Files

- **Configuration:** `assets/config/` - Brand color and pattern settings
- **Generated Assets:** `assets/generated/` - Production-ready assets

---

**Status:** Reference materials from previous testing
