# Assets

Brand assets for Regenerant Catalunya, including configuration, generated images, and test prototypes.

## Structure

```
assets/
├── config/              # Brand configuration files
│   ├── brand-config.json   # Brand compliance rules
│   ├── colors.json         # Color palette (with Bayer dither settings)
│   └── pattern-config.json # Pattern generation settings
├── generated/           # Processed visual assets
│   ├── Keras Buti projects/
│   ├── Miceli projects/
│   └── valora-onboarding-screenshots/
└── test-prototypes/     # Test materials and experiments
    ├── input/           # Source test images
    ├── output/          # Test results
    └── templates/       # Template files
```

## Image Processing Workflow

All image processing is done manually using [ditheringstudio.com](https://ditheringstudio.com/).

### Steps

1. **Navigate** to [ditheringstudio.com](https://ditheringstudio.com/)
2. **Upload** source image
3. **Configure** dithering settings:
   - Matrix size: 4 (Bayer dithering)
   - Dark color: `#214033` (Forest Green)
   - Mid color: `#E6DFD7` (Warm Sand)
   - Light color: `#E67E50` (Orange accent)
4. **Export** processed image
5. **Save** to `assets/generated/` folder

### Brand Colors Reference

From `config/colors.json`:

| Color | Hex | Usage |
|-------|-----|-------|
| Forest Green | `#214033` | Dark tones, headers |
| Warm Sand | `#E6DFD7` | Mid tones, backgrounds |
| Midnight Navy | `#092045` | Text |
| Purple | `#6B4EA3` | Accent |
| Orange | `#E67E50` | Accent, highlights |

## Configuration Files

### colors.json

Complete brand color palette including:
- Base colors (forestGreen, warmSand, midnightNavy)
- Accent colors (purple, orange)
- Green variations (dark, medium, light)
- Bayer dither color mapping settings

### pattern-config.json

Pattern settings including:
- Default pattern type (bayerDither)
- Halftone patterns (dots, lines, squares, crosshatch)
- Duotone and Bayer dither parameters

### brand-config.json

Brand compliance rules including:
- Allowed colors and tolerance
- Logo size requirements
- Typography settings
- Pattern type restrictions

## Related Documentation

- [Agent Implementation Guide](../docs/AGENT-IMPLEMENTATION-GUIDE.md)
- [Brand Strategy](../docs/BRAND-STRATEGY.md)
- [Procedural Specifications](../docs/PROCEDURAL-SPECIFICATIONS.md)
- [Brand Design](../docs/brand/BRAND-DESIGN.md)

