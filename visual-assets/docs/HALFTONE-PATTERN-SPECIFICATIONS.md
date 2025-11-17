# Halftone Pattern Technical Specifications

**Version:** 1.0  
**Last Updated:** November 13, 2025  
**Status:** Active Development  
**Purpose:** Technical specifications for halftone pattern system with green duotone color mapping

---

## Table of Contents

1. [Technical Overview](#technical-overview)
2. [Pattern Type Specifications](#pattern-type-specifications)
3. [Green Duotone Color Mapping](#green-duotone-color-mapping)
4. [Implementation Guidelines](#implementation-guidelines)
5. [Pattern Selection Guidelines](#pattern-selection-guidelines)

---

## Technical Overview

### Primary Method: Bayer Dithering (Ordered Dither)

**Bayer Matrix Ordered Dithering with Beige/Green/Orange Color Map**

**Definition:**

- **Bayer Dithering:** Ordered dithering using Bayer matrix for pixelated, digital aesthetic
- **Color Scheme:** Three-color mapping (beige base, green dark, orange light)
- **Short Name:** Bayer Dither / Ordered Dither

**Technical Description:**
The primary visual processing method uses Bayer matrix ordered dithering combined with a three-color scheme. The Bayer matrix creates an ordered, pixelated pattern that preserves image detail while creating a distinctive digital aesthetic. Colors are mapped using beige (#E6DFD7) as the base color, forest green (#214033) for dark tones, and orange (#E67E50) for light accents.

**Implementation:**

- Standard 4x4 or 8x8 Bayer matrix
- Threshold-based color quantization
- Three-color mapping (dark → mid → light)
- Beige used as base/background color instead of white

### Legacy Method: AM Screen (Amplitude-Modulated Halftone)

**AM Screen (Amplitude-Modulated Halftone) with Green Duotone Color Map**

**Definition:**

- **AM Screen:** Amplitude-modulated halftone where dot/pattern size varies with image tone
- **Green Duotone:** Two-color (green-based) color mapping applied to halftone pattern
- **Short Name:** Halftone (aka newsprint)

**Technical Description:**
Legacy method using AM screen (amplitude-modulated halftone) plus a green duotone color map. The pattern creates the halftone effect, and the green duotone color mapping applies the brand colors.

### Pattern System Philosophy

**Purpose:**

- Create consistent brand application across diverse content
- Enable easy imagery creation without complex illustration skills
- Maintain brand consistency achievable by non-design team members
- Support low-energy website capability with minimal data usage

**Key Principles:**

- Pattern systems easily applicable to any base image
- Filter-based approach enables brand application across diverse content
- Must be achievable with accessible design tools (Canva primary)
- Scalable across web, print, social media formats

---

## Pattern Type Specifications

### 0. Bayer Dithering → "Ordered Dither" Look (PRIMARY METHOD)

**Technical Name:** Bayer Matrix Ordered Dithering

**Description:**
Ordered dithering using Bayer matrix creates a pixelated, digital aesthetic with geometric precision. This is the primary method for visual asset production, matching the reference image aesthetic.

**Visual Characteristics:**

- Ordered, grid-based pixelated pattern
- Creates digital/tech aesthetic
- Geometric precision
- Good resolution preservation
- Distinctive ordered dither texture

**Use Cases:**

- Primary method for all visual assets
- Web banners and social media
- Event materials
- Digital-first content
- Modern, tech-forward aesthetic

**Technical Specifications:**

**Implementation:**

- Matrix Size: 4x4 (fine detail) or 8x8 (coarser)
- Color Mapping:
  - Dark tones (< 0.33): Forest Green (#214033)
  - Mid tones (0.33-0.66): Beige (#E6DFD7)
  - Light tones (> 0.66): Orange (#E67E50)
- Base Color: Beige (#E6DFD7) instead of white

**Command Line Usage:**

```bash
# Apply Bayer dithering (default)
node scripts/image-processing/apply-bayer-dither.js \
  --input image.jpg \
  --output output.png \
  --matrix-size 4 \
  --dark-color "#214033" \
  --mid-color "#E6DFD7" \
  --light-color "#E67E50"
```

**Configuration:**

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

**Settings Template:**

```
Pattern Type: Bayer Dithering (Ordered Dither)
Tool: Node.js Script
Settings:
  - Matrix Size: 4x4 (fine) or 8x8 (coarse)
  - Dark Color: #214033 (Forest Green)
  - Mid Color: #E6DFD7 (Beige/Warm Sand)
  - Light Color: #E67E50 (Orange)
  - Dark Threshold: 0.33
  - Light Threshold: 0.66
Color Mapping: Three-color scheme with beige base
Use Cases: Primary method for all visual assets
```

### 1. Dots → "Newsprint" Look (AM Screen) - LEGACY

**Technical Name:** Amplitude-Modulated Halftone Dots

**Description:**
Classic halftone dot pattern where dot size varies with image tone. Creates newsprint/newspaper aesthetic.

**Visual Characteristics:**

- Circular dots of varying sizes
- Larger dots in dark areas, smaller dots in light areas
- Creates smooth tonal gradation
- Most recognizable halftone style

**Use Cases:**

- General purpose imagery
- Editorial aesthetic
- Classic, timeless look
- Event photos
- Web banners
- General promotional materials

**Technical Specifications:**

**Canva Implementation:**

- Effect: Halftone/Dots
- Pattern Size: Medium (adjust based on image size)
  - Small images (< 800px): Small dots
  - Medium images (800-1600px): Medium dots
  - Large images (> 1600px): Medium to large dots
- Intensity: 50-70% (adjust for desired effect)
- Angle: 0° (standard) or 45° (diagonal)
- Color Mode: Apply green duotone after pattern

**Figma Implementation:**

- Use halftone plugin or manual dot pattern
- Create dot pattern overlay
- Adjust dot size based on image tone
- Apply green duotone color mapping

**Settings Template:**

```
Pattern Type: Dots (Newsprint/AM Screen)
Tool: Canva/Figma
Settings:
  - Pattern Size: Medium
  - Intensity: 50-70%
  - Angle: 0° or 45°
  - Dot Shape: Circular
Color Mapping: [See Green Duotone section]
Use Cases: General purpose, editorial aesthetic
Examples: [To be added]
```

### 2. Lines → "Line Screen" Look

**Technical Name:** Line Screen Halftone

**Description:**
Directional line pattern creating shading with direction. Great for adding movement or flow to imagery.

**Visual Characteristics:**

- Parallel lines of varying thickness/spacing
- Thicker/closer lines in dark areas
- Thinner/farther lines in light areas
- Creates directional texture
- Adds movement and flow

**Use Cases:**

- Action imagery
- Dynamic content
- Flow diagrams
- Movement-focused content
- Energetic imagery

**Technical Specifications:**

**Canva Implementation:**

- Effect: Lines/Line Screen
- Line Spacing: Medium (adjust based on image)
  - Fine lines: Closer spacing
  - Bold lines: Wider spacing
- Line Thickness: Thin to medium
- Angle: Choose based on image composition
  - 0°: Horizontal
  - 45°: Diagonal (most common)
  - 90°: Vertical
  - Custom angles as needed
- Intensity: 50-70%

**Figma Implementation:**

- Create line pattern overlay
- Adjust line spacing based on image tone
- Set line angle for desired direction
- Apply green duotone color mapping

**Settings Template:**

```
Pattern Type: Lines (Line Screen)
Tool: Canva/Figma
Settings:
  - Line Spacing: Medium
  - Line Thickness: Thin to medium
  - Angle: 0°, 45°, 90°, or custom
  - Intensity: 50-70%
Color Mapping: [See Green Duotone section]
Use Cases: Directional emphasis, movement, flow
Examples: [To be added]
```

### 3. Squares/Diamonds → Ordered-Dither Vibe (Bayer Matrix)

**Technical Name:** Ordered Dither / Bayer Matrix Halftone

**Description:**
Pixelated, ordered pattern creating digital/tech aesthetic. Creates Bayer matrix feel with geometric precision.

**Visual Characteristics:**

- Square or diamond-shaped pattern elements
- Ordered, grid-based pattern
- Creates pixelated, digital aesthetic
- Tech-forward appearance
- Geometric precision

**Use Cases:**

- Technology imagery
- Innovation content
- Digital tools
- Tech-forward materials
- Modern, digital aesthetic

**Technical Specifications:**

**Canva Implementation:**

- Effect: Pixelate/Grid
- Square Size: Small to medium
  - Small squares: Fine detail
  - Medium squares: Bold effect
- Pattern Intensity: 50-70%
- Grid Alignment: Standard grid
- May need to rotate 45° for diamond effect

**Figma Implementation:**

- Create grid pattern overlay
- Use square or diamond shapes
- Adjust grid size based on image
- Apply green duotone color mapping

**Settings Template:**

```
Pattern Type: Squares/Diamonds (Ordered-Dither/Bayer Matrix)
Tool: Canva/Figma
Settings:
  - Square Size: Small to medium
  - Pattern Intensity: 50-70%
  - Grid Alignment: Standard
  - Rotation: 0° (squares) or 45° (diamonds)
Color Mapping: [See Green Duotone section]
Use Cases: Tech-forward, digital aesthetic, innovation
Examples: [To be added]
```

### 4. Crosses/Cross-Hatch → Two Line Screens

**Technical Name:** Cross-Hatch Halftone

**Description:**
Two line screens at different angles creating cross-hatch texture. More complex visual interest for detailed imagery.

**Visual Characteristics:**

- Two sets of parallel lines at different angles
- Creates cross-hatch texture
- More complex visual interest
- Good for detailed imagery
- Sophisticated appearance

**Use Cases:**

- Complex photos
- Detailed illustrations
- Rich imagery
- Sophisticated content
- High-detail applications

**Technical Specifications:**

**Canva Implementation:**

- Step 1: Apply first line screen at 45°
- Step 2: Duplicate image layer
- Step 3: Apply second line screen at 135° (or -45°)
- Step 4: Adjust opacity to blend layers (50-70% each)
- Step 5: Combine layers
- Line Spacing: Medium
- Line Thickness: Thin to medium
- Intensity: 50-70% per layer

**Figma Implementation:**

- Create first line screen layer at 45°
- Create second line screen layer at 135°
- Adjust opacity and blending modes
- Combine layers
- Apply green duotone color mapping

**Settings Template:**

```
Pattern Type: Crosses/Cross-Hatch (Two Line Screens)
Tool: Canva/Figma
Settings:
  - First Line Angle: 45°
  - Second Line Angle: 135° (or -45°)
  - Line Spacing: Medium
  - Line Thickness: Thin to medium
  - Layer Opacity: 50-70% each
  - Blending Mode: Multiply or Overlay
Color Mapping: [See Green Duotone section]
Use Cases: Complex imagery, detailed content, sophisticated aesthetic
Examples: [To be added]
```

### 5. Custom Glyphs → "ASCII/Glyph Halftone"

**Technical Name:** Glyph-Based Halftone

**Description:**
Letters, icons, emojis, or custom shapes used as halftone elements. Most unique and customizable option.

**Visual Characteristics:**

- Custom shapes/elements instead of standard patterns
- Can incorporate brand elements
- Most unique appearance
- Highly customizable
- Requires more design expertise

**Use Cases:**

- Unique brand moments
- Special campaigns
- Brand-specific content
- Memorable imagery
- Advanced applications

**Technical Specifications:**

**Canva Implementation:**

- Advanced technique requiring:
  - Custom overlay creation
  - Text or icon elements converted to pattern
  - May need external tools or advanced Canva features
- Consult Andrea for custom glyph creation

**Figma Implementation:**

- Create custom glyph elements
- Convert to pattern overlay
- Adjust glyph size based on image tone
- Apply green duotone color mapping
- More precise control in Figma

**Settings Template:**

```
Pattern Type: Custom Glyphs (ASCII/Glyph Halftone)
Tool: Figma (primary), Canva (advanced)
Settings:
  - Glyph Type: [Custom - letters, icons, emojis, shapes]
  - Glyph Size: Varies with image tone
  - Pattern Density: Medium
  - Customization: High
Color Mapping: [See Green Duotone section]
Use Cases: Unique brand moments, special campaigns
Examples: [To be added]
Note: Requires more design expertise, consult Andrea
```

---

## Color Mapping

### Bayer Dither Color Mapping (Primary)

**Color Scheme:**

- **Base Color:** Beige/Warm Sand (#E6DFD7) - used as background/base instead of white
- **Dark Color:** Forest Green (#214033) - for dark tones
- **Mid Color:** Beige/Warm Sand (#E6DFD7) - for mid tones
- **Light Color:** Orange (#E67E50) - for light accents

**Mapping Structure:**

```
Dark Tones (< 0.33) → Forest Green (#214033)
Mid Tones (0.33-0.66) → Beige (#E6DFD7)
Light Tones (> 0.66) → Orange (#E67E50)
Background/Base → Beige (#E6DFD7)
```

**Implementation:**
The Bayer dithering algorithm applies ordered dithering using a Bayer matrix, then maps the quantized luminance values to the three-color palette. The beige color serves as both the mid-tone color and the base/background color, replacing white in the output.

### Green Duotone Color Mapping (Legacy)

### Overview

**Status:** Legacy method - use Bayer dithering for new assets

**General Approach:**
Green duotone color mapping applies brand colors to the halftone pattern, creating a cohesive brand aesthetic while maintaining image readability.

### Color Mapping Structure

**Base Colors (Current Brand):**

- Forest Green: `#214033` (dark)
- Green Medium: `#3A6655` (medium)
- Green Light: `#568F79` (light)
- Warm Sand: `#E6DFD7` (background/light)

**Regenerant Catalunya Distinct Highlight Color:**

- **Status:** To be determined by Andrea
- Must be distinct from main org colors
- Should complement existing palette
- Must work with halftone patterns

### Duotone Mapping Approach

**General Mapping Structure:**

```
Dark Tones → [Green color TBD - darker green]
Mid Tones  → [Green color TBD - medium green]
Light Tones → [Green/Warm Sand TBD - lighter green or warm sand]
Background → [Color TBD - background color]
```

**Mapping Principles:**

- Dark image areas map to darker green
- Mid-tone areas map to medium green
- Light areas map to lighter green or warm sand
- Maintain contrast for readability
- Ensure brand color accuracy

### Implementation in Canva

**Process:**

1. Apply halftone pattern first
2. Access color adjustment tools
3. Select "Duotone" or "Color Overlay" effect
4. Map dark tones to darker green
5. Map light tones to lighter green/warm sand
6. Adjust color balance
7. Fine-tune for brand accuracy

**Settings (To Be Finalized):**

- Dark Tone Color: [TBD]
- Light Tone Color: [TBD]
- Balance: [TBD]
- Intensity: [TBD]

### Implementation in Figma

**Process:**

1. Apply halftone pattern overlay
2. Create color mapping layer
3. Use Figma color styles
4. Apply green duotone mapping
5. Adjust opacity and blending modes
6. Fine-tune color balance

**Settings (To Be Finalized):**

- Color Styles: [TBD]
- Blending Mode: [TBD]
- Opacity: [TBD]
- Color Balance: [TBD]

### Color Accuracy Requirements

**Requirements:**

- Colors must match brand palette exactly
- Test on different displays
- Verify RGB values for web
- Verify CMYK values for print
- Maintain contrast ratios (WCAG AA)

**Testing:**

- Test color mapping on various images
- Verify brand consistency
- Check readability
- Test on light and dark backgrounds

---

## Implementation Guidelines

### Canva Implementation (Primary Tool)

**Step-by-Step Process:**

1. **Prepare Image**
   - Upload image to Canva
   - Ensure appropriate resolution (minimum 1200px width for web)
   - Check image contrast and composition

2. **Select Pattern Type**
   - Choose appropriate pattern based on content and aesthetic goals
   - Refer to pattern selection guidelines
   - Consider use case and brand direction

3. **Apply Pattern**
   - Access Effects menu
   - Select appropriate pattern effect
   - Adjust pattern settings (size, intensity, angle)
   - Preview and fine-tune

4. **Apply Green Duotone**
   - Access color adjustment tools
   - Select duotone or color overlay effect
   - Apply green color mapping
   - Adjust color balance
   - Fine-tune for brand accuracy

5. **Quality Control**
   - Check pattern clarity and consistency
   - Verify color mapping accuracy
   - Test at various sizes
   - Ensure brand consistency
   - Complete quality control checklist

**Tool-Specific Notes:**

- Canva effects may vary by plan level
- Some advanced patterns may require Pro features
- Consult Canva help documentation for latest features
- Contact Andrea for pattern preset values

### Figma Implementation (Advanced Tool)

**Step-by-Step Process:**

1. **Set Up File**
   - Open ReFi DAO pro Figma account
   - Create new design file or use brand template
   - Import base image

2. **Create Pattern Overlay**
   - Create pattern overlay layer
   - Use Figma plugins for halftone effects (if available)
   - Or create pattern manually using shapes/text
   - Adjust pattern based on image tone

3. **Apply Color Mapping**
   - Create color mapping layer
   - Use Figma color styles
   - Apply green duotone color mapping
   - Adjust opacity and blending modes
   - Fine-tune color balance

4. **Create Template**
   - Save as reusable component
   - Document settings and process
   - Export for team use
   - Create usage guidelines

**Advanced Techniques:**

- Custom pattern creation
- Multiple pattern layers
- Precise color mapping
- Export optimization
- Template component creation

### Pattern Presets Documentation

**Status:** To be documented by Andrea after pattern system is finalized

**Documentation Format:**

```markdown
## Pattern Preset: [Pattern Name]

**Pattern Type:** [Dots/Lines/Squares/Crosses/Glyphs]
**Tool:** Canva/Figma
**Use Case:** [General purpose/Specific use]

### Settings:

- Pattern Size: [value]
- Intensity: [value]
- Angle: [value]
- Other Settings: [values]

### Color Mapping:

- Dark Tones: [color code]
- Mid Tones: [color code]
- Light Tones: [color code]
- Background: [color code]

### Examples:

- [Link to example 1]
- [Link to example 2]

### Notes:

[Any specific notes or considerations]
```

---

## Pattern Selection Guidelines

### Decision Framework

**Consider Content Type:**

- **General/Editorial:** Use Dots (newsprint)
- **Dynamic/Action:** Use Lines
- **Tech/Digital:** Use Squares/Diamonds
- **Complex/Detailed:** Use Crosses/Cross-Hatch
- **Unique/Branded:** Use Custom Glyphs

**Consider Aesthetic Goals:**

- **Classic/Timeless:** Dots
- **Modern/Tech:** Squares/Diamonds
- **Energetic/Dynamic:** Lines
- **Sophisticated/Detailed:** Crosses/Cross-Hatch
- **Unique/Memorable:** Custom Glyphs

**Consider Brand Direction:**

- **Elegance/Sophistication:** Dots, Crosses
- **Tech Innovation:** Squares/Diamonds
- **Movement/Flow:** Lines
- **Brand Moments:** Custom Glyphs

### Pattern Selection Matrix

| Content Type      | Aesthetic Goal          | Recommended Pattern |
| ----------------- | ----------------------- | ------------------- |
| Event photos      | Classic, editorial      | Dots (Newsprint)    |
| Action imagery    | Dynamic, energetic      | Lines               |
| Tech content      | Modern, digital         | Squares/Diamonds    |
| Complex photos    | Sophisticated, detailed | Crosses/Cross-Hatch |
| Special campaigns | Unique, memorable       | Custom Glyphs       |
| General purpose   | Versatile, professional | Dots (Newsprint)    |

### Consistency Guidelines

**Maintain Consistency:**

- Use same pattern type for related materials
- Keep pattern settings consistent across materials
- Follow brand guidelines strictly
- Document pattern choices for reference

**When to Vary:**

- Different content types may use different patterns
- Special campaigns may use unique patterns
- Test different patterns for best results
- Consult Andrea for pattern selection

---

## Quality Control

### Pattern Quality Checklist

**Pattern Application:**

- [ ] Pattern is clearly visible and consistent
- [ ] Pattern density is appropriate
- [ ] Pattern works at intended size
- [ ] Pattern maintains image readability
- [ ] Pattern type matches content and aesthetic goals

**Color Mapping:**

- [ ] Color mapping is accurate and on-brand
- [ ] Colors match brand palette
- [ ] Contrast is maintained
- [ ] Readability is preserved
- [ ] Colors work on intended background

**Overall Quality:**

- [ ] Brand consistency is maintained
- [ ] Aesthetic matches brand direction (elegance over chaos)
- [ ] Image quality is appropriate
- [ ] File size is optimized
- [ ] Export format is correct

### Testing Requirements

**Size Testing:**

- Test pattern at thumbnail size
- Test pattern at medium size
- Test pattern at large size
- Verify pattern clarity at all sizes

**Background Testing:**

- Test on light backgrounds
- Test on dark backgrounds
- Test on pattern backgrounds
- Verify contrast and readability

**Platform Testing:**

- Test for web applications
- Test for social media
- Test for print (if applicable)
- Verify format compatibility

---

## Troubleshooting

### Common Issues

**Issue: Pattern Not Applying Correctly**

- Check tool version (ensure latest)
- Try different effect options
- Adjust pattern settings
- Consult tool documentation
- Contact Andrea for preset values

**Issue: Color Mapping Not Accurate**

- Verify brand color codes
- Check color mode (RGB/CMYK)
- Adjust color balance
- Test on different displays
- Consult Andrea for color mapping values

**Issue: Pattern Too Intense or Too Subtle**

- Adjust pattern intensity/density
- Modify pattern size
- Change pattern angle
- Test different settings
- Refer to pattern presets

### Getting Help

**Contact Andrea When:**

- Pattern not working as expected
- Need pattern preset values
- Need color mapping values
- Creating custom patterns
- Quality control issues

**Consult Guidelines:**

- Pattern selection questions
- Implementation questions
- Quality control questions
- General pattern questions

---

## Best Practices

### Pattern Application Best Practices

1. **Choose Appropriate Pattern**
   - Match pattern to content type
   - Consider aesthetic goals
   - Test pattern before finalizing

2. **Maintain Consistency**
   - Use same pattern for related materials
   - Keep settings consistent
   - Follow brand guidelines

3. **Ensure Quality**
   - Test at various sizes
   - Verify color accuracy
   - Check readability
   - Complete quality control checklist

4. **Document Your Work**
   - Note pattern type used
   - Document settings
   - Keep track of what works
   - Share learnings with team

---

**Document Status:** This document will be updated when pattern presets and color mapping values are finalized by Andrea.

**Next Steps:**

1. Andrea to finalize pattern presets and settings
2. Andrea to define green duotone color mapping values
3. Create pattern preset documentation
4. Develop training materials
5. Test patterns with team

---

**Maintained By:** ReFi Barcelona Brand Team  
**Last Review:** November 13, 2025
