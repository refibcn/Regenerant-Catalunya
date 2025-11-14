# Carles Rabada Image - Processing Results

**Source Image:** `Carles Rabada Unsplash (1)..jpg`  
**Date:** November 13, 2025  
**Status:** ✅ Successfully Processed

---

## Overview

Processed the Carles Rabada landscape image with multiple halftone pattern variations and green duotone color mapping. The image features a beautiful mountain landscape at sunrise/sunset, perfect for demonstrating the brand's halftone pattern system.

## Generated Variations

### 1. Standard Halftone Dots (8px)
- **Pattern:** `carles-rabada-dots.png`
- **Final:** `carles-rabada-final.png`
- **Settings:** 8px dots, 45° angle, 0.6 intensity
- **Result:** Clean, classic halftone pattern with good detail preservation

### 2. Fine Halftone Dots (6px)
- **Pattern:** `carles-rabada-dots-fine.png`
- **Final:** `carles-rabada-fine-final.png`
- **Settings:** 6px dots, 45° angle, 0.7 intensity
- **Result:** Finer detail, more subtle pattern effect

### 3. Coarse Halftone Dots (12px)
- **Pattern:** `carles-rabada-dots-coarse.png`
- **Final:** `carles-rabada-coarse-final.png`
- **Settings:** 12px dots, 45° angle, 0.5 intensity
- **Result:** Bold, graphic pattern with strong visual impact

### 4. Halftone Lines
- **Pattern:** `carles-rabada-lines.png`
- **Final:** `carles-rabada-lines-final.png`
- **Settings:** 4px spacing, 45° angle, 0.6 intensity
- **Result:** Elegant line screen pattern with directional shading

## Color Mapping

All variations use the brand's green duotone palette:
- **Dark Color:** #214033 (Forest Green)
- **Light Color:** #E6DFD7 (Warm Sand)
- **Balance:** 0.5 (50% transition point)

The duotone mapping beautifully transforms the warm sunset colors into the brand's green palette while maintaining the dramatic lighting and contrast of the original landscape.

## Visual Impact

The halftone patterns work exceptionally well with this landscape image:

✅ **Mountain Details:** The pattern preserves the rugged texture of the mountain faces  
✅ **Sky Gradients:** Smooth transitions in the sky are maintained  
✅ **Valley Details:** Olive groves and fields retain their structure  
✅ **Lighting:** Dramatic sunrise/sunset lighting is preserved through the pattern  
✅ **Brand Colors:** Green duotone creates a cohesive brand aesthetic

## File Locations

All processed images are in: `test-prototypes/output/`

- `carles-rabada-dots.png` - Pattern only (standard)
- `carles-rabada-final.png` - Pattern + duotone (standard)
- `carles-rabada-dots-fine.png` - Pattern only (fine)
- `carles-rabada-fine-final.png` - Pattern + duotone (fine)
- `carles-rabada-dots-coarse.png` - Pattern only (coarse)
- `carles-rabada-coarse-final.png` - Pattern + duotone (coarse)
- `carles-rabada-lines.png` - Lines pattern only
- `carles-rabada-lines-final.png` - Lines pattern + duotone

## Usage Recommendations

**For Web/Event Materials:**
- **Standard dots (8px)** - Best balance of detail and brand identity
- **Fine dots (6px)** - For high-resolution prints or detailed presentations
- **Coarse dots (12px)** - For bold, graphic applications or smaller sizes

**For Social Media:**
- **Standard dots** - Recommended for Instagram, Twitter
- **Lines pattern** - Great for LinkedIn, more sophisticated look

**For Print:**
- **Fine dots** - Best for high-quality print materials
- **Standard dots** - Good for standard print resolutions

## Processing Commands Used

```bash
# Standard halftone dots
node scripts/brand-assets/pattern-generation/halftone-dots.js \
  --input "test-prototypes/input/Carles Rabada Unsplash (1)..jpg" \
  --output test-prototypes/output/carles-rabada-dots.png \
  --dot-size 8 --angle 45 --intensity 0.6

# Apply duotone
node scripts/brand-assets/image-processing/apply-duotone.js \
  --input test-prototypes/output/carles-rabada-dots.png \
  --output test-prototypes/output/carles-rabada-final.png \
  --dark-color "#214033" --light-color "#E6DFD7" --balance 0.5
```

---

**Status:** ✅ Complete  
**Quality:** Excellent  
**Ready for:** Production Use

