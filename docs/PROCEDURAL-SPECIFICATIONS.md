# Procedural Specifications

**Version:** 1.0  
**Last Updated:** November 13, 2025  
**Purpose:** Detailed procedural specifications for agent-executable brand asset creation

---

## Pattern Generation Procedures

### Procedure: Generate Halftone Dots Pattern (AM Screen)

**Algorithm:**

1. Load source image using Sharp
2. Convert to grayscale: `sharp(image).greyscale()`
3. Resize if needed for optimal processing
4. Generate halftone grid:
   - Calculate grid spacing based on dot size
   - For each grid cell:
     - Sample average brightness
     - Calculate dot radius: `radius = (brightness / 255) * maxRadius`
     - Draw circle at cell center with calculated radius
5. Apply rotation transformation (angle parameter)
6. Apply green duotone color mapping
7. Export result

**Technical Details:**

- Dot size: 8px default (configurable 4-16px)
- Grid spacing: dotSize + 2px padding
- Angle: 45° default (configurable 0-180°)
- Intensity: Controls dot size variation (0-1 scale)

**Code Reference:** `scripts/brand-assets/pattern-generation/halftone-dots.js`

### Procedure: Generate Halftone Lines Pattern

**Algorithm:**

1. Load source image using Sharp
2. Convert to grayscale
3. Generate line screen:
   - Calculate line spacing
   - For each horizontal line:
     - Sample brightness along line
     - Calculate line width: `width = (brightness / 255) * maxWidth`
     - Draw line with calculated width
4. Apply rotation transformation (angle parameter)
5. Apply green duotone color mapping
6. Export result

**Technical Details:**

- Line spacing: 4px default (configurable 2-8px)
- Max line width: lineSpacing - 1px
- Angle: 45° default (configurable 0-180°)

**Code Reference:** `scripts/brand-assets/pattern-generation/halftone-lines.js`

### Procedure: Generate Halftone Squares/Diamonds Pattern

**Algorithm:**

1. Load source image using Sharp
2. Convert to grayscale
3. Generate square/diamond grid:
   - Calculate grid spacing based on square size
   - For each grid cell:
     - Sample average brightness
     - Calculate square size: `size = (brightness / 255) * maxSize`
     - Draw square/diamond at cell center
4. Apply rotation if diamond mode
5. Apply green duotone color mapping
6. Export result

**Technical Details:**

- Square size: 6px default (configurable 4-12px)
- Diamond mode: Rotate squares 45°
- Grid spacing: squareSize + 1px padding

**Code Reference:** `scripts/brand-assets/pattern-generation/halftone-squares.js`

### Procedure: Generate Halftone Cross-Hatch Pattern

**Algorithm:**

1. Load source image using Sharp
2. Convert to grayscale
3. Generate first line screen (angle1)
4. Generate second line screen (angle2)
5. Combine line screens:
   - Multiply opacity values
   - Blend screens for cross-hatch effect
6. Apply green duotone color mapping
7. Export result

**Technical Details:**

- Line spacing: 4px default
- Angle1: 45° default
- Angle2: 135° default (perpendicular to angle1)
- Blend mode: Multiply

**Code Reference:** `scripts/brand-assets/pattern-generation/halftone-crosshatch.js`

### Procedure: Generate Custom Glyph Halftone

**Algorithm:**

1. Load source image using Sharp
2. Convert to grayscale
3. Load glyph set (characters, icons, emojis)
4. Generate glyph grid:
   - Calculate grid spacing based on glyph size
   - For each grid cell:
     - Sample average brightness
     - Select glyph based on brightness
     - Draw glyph at cell center
5. Apply green duotone color mapping
6. Export result

**Technical Details:**

- Glyph size: 8px default
- Glyph selection: Map brightness to glyph set
- Custom glyph sets: ASCII, icons, emojis

**Code Reference:** `scripts/brand-assets/pattern-generation/halftone-glyphs.js`

---

## Green Duotone Color Mapping Procedure

### Procedure: Apply Green Duotone

**Algorithm:**

1. Load image (with halftone pattern applied)
2. Extract luminance channel
3. Normalize luminance values (0-1 range)
4. Create color mapping:
   - Dark tones (0-0.5): Map to dark color (#214033)
   - Light tones (0.5-1): Map to light color (#E6DFD7)
   - Apply balance parameter for transition point
5. Apply color mapping to image
6. Export result

**Technical Details:**

- Dark color: #214033 (Forest Green)
- Light color: #E6DFD7 (Warm Sand)
- Balance: 0.5 default (configurable 0-1)
- Transition: Smooth gradient between colors

**Color Mapping Formula:**

```
if (luminance < balance) {
  color = interpolate(darkColor, midColor, luminance / balance)
} else {
  color = interpolate(midColor, lightColor, (luminance - balance) / (1 - balance))
}
```

**Code Reference:** `scripts/brand-assets/image-processing/apply-duotone.js`

---

## Logo Generation Procedures

### Procedure: Generate Logo Variants

**Algorithm:**

1. Load logo design (SVG format)
2. Parse SVG structure
3. Generate color variants:
   - Full color: Original colors
   - Single color: Convert to single brand color
   - Reversed: Invert colors for dark backgrounds
   - Monochrome: Grayscale version
4. Generate size variants:
   - For each requested size:
     - Scale SVG proportionally
     - Export as PNG
     - Export as PDF (vector)
5. Generate format variants:
   - SVG: Original vector format
   - PNG: Rasterized at each size
   - PDF: Vector format for print
6. Create usage guidelines document
7. Export all variants

**Technical Details:**

- Default sizes: 32, 64, 128, 256, 512, 1024px
- PNG format: RGBA with transparency
- PDF format: Vector (preserves scalability)
- SVG format: Original vector format

**Code Reference:** `scripts/brand-assets/logo-generation/generate-logo-variants.js`

### Procedure: Validate Logo Usage

**Algorithm:**

1. Load logo file
2. Check dimensions (width/height)
3. Check color values against brand palette
4. Check transparency (if required)
5. Check file format
6. Check file size
7. Generate compliance report

**Validation Rules:**

- Minimum size: 32px
- Maximum size: 1024px
- Colors must match brand palette (within tolerance)
- Format must be SVG or PNG
- File size must be reasonable (< 500KB for PNG)

**Code Reference:** `scripts/brand-assets/quality-control/validate-logo.js`

---

## Template Generation Procedures

### Procedure: Generate Social Media Template

**Algorithm:**

1. Load platform specifications:
   - Dimensions (width x height)
   - Safe zones
   - Text area specifications
2. Create canvas with platform dimensions
3. Apply brand colors:
   - Background color
   - Accent colors
   - Text colors
4. Place logo:
   - Calculate logo position (top-left, top-right, bottom-left, bottom-right)
   - Scale logo appropriately
   - Apply logo variant (full color/single color)
5. Create text areas:
   - Title area
   - Body text area
   - Call-to-action area
6. Apply typography:
   - Font family: Inter
   - Font sizes per platform
   - Line heights
7. Generate for each language:
   - Create template variant
   - Add language-specific text placeholders
8. Export templates (SVG/PNG)

**Platform Specifications:**

- Instagram: 1080x1080px (square), 1080x1350px (portrait)
- Twitter: 1200x675px (landscape)
- LinkedIn: 1200x627px (landscape)
- Facebook: 1200x630px (landscape)

**Code Reference:** `scripts/brand-assets/template-generation/social-media.js`

### Procedure: Generate Web Banner Template

**Algorithm:**

1. Load banner type specifications:
   - Hero: Full width, 1200x400px
   - Section: Content width, 800x200px
   - Sidebar: 300x250px
   - Mobile: Responsive, 600x300px
2. Create canvas with banner dimensions
3. Apply Quartz integration points:
   - CSS class names
   - Image optimization markers
   - Responsive breakpoints
4. Place logo and brand elements
5. Create text areas with Quartz-compatible structure
6. Apply brand colors and typography
7. Generate responsive variants
8. Export templates (SVG/PNG/HTML)

**Quartz Integration:**

- Use Quartz image optimization
- Generate WebP variants
- Include responsive image markup
- Add CSS classes for styling

**Code Reference:** `scripts/brand-assets/template-generation/web-banners.js`

### Procedure: Generate Event Material Template

**Algorithm:**

1. Load material type specifications:
   - Poster: A4 (210x297mm) or A3 (297x420mm)
   - Flyer: A5 (148x210mm) or A6 (105x148mm)
   - Booklet: A4 folded
   - Name badge: 90x50mm
   - Slides: 16:9 (1920x1080px)
2. Create canvas with print dimensions:
   - Add bleed (3mm)
   - Add safe zone (5mm from edge)
   - Set DPI (300 for print)
3. Apply CMYK color conversion:
   - Convert RGB brand colors to CMYK
   - Apply color profiles
4. Place logo and brand elements
5. Create text areas:
   - Event title
   - Event details
   - Date/time/location
   - Speaker information
6. Apply typography (print-optimized)
7. Generate for each language
8. Export templates (PDF/SVG)

**Print Specifications:**

- DPI: 300 for print, 150 for preview
- Bleed: 3mm on all sides
- Safe zone: 5mm from edge
- Color mode: CMYK for print, RGB for preview

**Code Reference:** `scripts/brand-assets/template-generation/event-materials.js`

---

## Quality Control Procedures

### Procedure: Check Brand Compliance

**Algorithm:**

1. Load asset file
2. Extract image data
3. Check colors:
   - Extract color palette from image
   - Compare with brand color palette
   - Calculate color distance (Delta E)
   - Flag colors outside tolerance
4. Check logo usage:
   - Detect logo presence
   - Check logo size
   - Check logo position
   - Check logo variant (color/reversed)
5. Check typography:
   - Detect text elements
   - Check font family
   - Check font sizes
   - Check line heights
6. Check pattern consistency:
   - Detect pattern type
   - Check pattern settings
   - Check pattern quality
7. Check file format:
   - Verify format (PNG/SVG/PDF)
   - Check file size
   - Check compression
8. Generate compliance report

**Compliance Rules:**

- Colors must match brand palette (Delta E < 5)
- Logo must be present and correctly sized
- Typography must use Inter font family
- Patterns must be consistent
- File format must be valid

**Code Reference:** `scripts/brand-assets/quality-control/check-brand-compliance.js`

### Procedure: Validate Pattern Consistency

**Algorithm:**

1. Load image directory
2. For each image:
   - Detect pattern type
   - Extract pattern parameters
   - Check pattern quality
3. Compare patterns across images:
   - Check pattern type consistency
   - Check parameter consistency
   - Check color mapping consistency
4. Generate validation report

**Validation Rules:**

- Pattern type must be consistent across set
- Pattern parameters must match configuration
- Color mapping must be consistent
- Pattern quality must meet standards

**Code Reference:** `scripts/brand-assets/quality-control/validate-patterns.js`

### Procedure: Validate Assets

**Algorithm:**

1. Load asset directory
2. For each asset:
   - Check file format
   - Check file size
   - Check dimensions
   - Check color accuracy
   - Check logo compliance
   - Check naming convention
3. Generate validation report

**Validation Rules:**

- File formats: SVG, PNG, PDF, WebP
- File sizes: Reasonable limits per format
- Dimensions: Match specifications
- Colors: Match brand palette
- Naming: Follow convention (kebab-case)

**Code Reference:** `scripts/brand-assets/quality-control/validate-assets.js`

---

## Batch Processing Procedures

### Procedure: Batch Process Images

**Algorithm:**

1. Load input directory
2. Load configuration file
3. For each image:
   - Detect image format
   - Validate image
   - Apply pattern generation
   - Apply color mapping
   - Optimize image
   - Save to output directory
4. Generate processing report:
   - Success/failure count
   - Processing time
   - Output locations
   - Error details

**Optimization:**

- Process images in parallel (worker pool)
- Cache intermediate results
- Progress reporting
- Error handling and recovery

**Code Reference:** `scripts/brand-assets/image-processing/batch-process.js`

---

## Integration Procedures

### Procedure: Quartz Website Integration

**Algorithm:**

1. Load banner template
2. Optimize for web:
   - Convert to WebP format
   - Compress image
   - Generate responsive variants
3. Generate Quartz-compatible assets:
   - Create static asset files
   - Generate image metadata
   - Create responsive image markup
4. Update Quartz static assets:
   - Copy to static directory
   - Update asset references
5. Generate integration documentation

**Quartz Integration Points:**

- Static asset directory: `quartz/static/`
- Image optimization: Sharp
- Responsive images: srcset generation
- Metadata: Frontmatter integration

**Code Reference:** `scripts/brand-assets/integration/quartz-integration.js`

### Procedure: Figma MCP Integration

**Algorithm:**

1. Connect to Figma MCP server
2. Authenticate session
3. Load design node:
   - Get node metadata
   - Get design context
   - Export design elements
4. Process exported elements:
   - Convert to brand asset formats
   - Apply brand processing
   - Validate compliance
5. Save to asset directory
6. Generate integration report

**Figma MCP Integration:**

- Server: `http://127.0.0.1:3845/mcp`
- Protocol: JSON-RPC 2.0
- Actions: Export, Get Design Context, Get Metadata

**Code Reference:** `scripts/brand-assets/integration/figma-mcp.js`

---

## Error Handling Procedures

### Procedure: Handle Processing Errors

**Algorithm:**

1. Catch error during processing
2. Classify error type:
   - File not found
   - Invalid format
   - Processing error
   - Configuration error
3. Log error details:
   - Error type
   - Error message
   - Stack trace
   - Context (file, parameters)
4. Generate error report
5. Continue processing (if batch)
6. Return error status

**Error Types:**

- File errors: Not found, permission denied, invalid format
- Processing errors: Memory, timeout, invalid parameters
- Configuration errors: Missing config, invalid values

---

## Performance Optimization Procedures

### Procedure: Optimize Image Processing

**Algorithm:**

1. Analyze image characteristics:
   - Dimensions
   - File size
   - Format
   - Complexity
2. Select optimization strategy:
   - Resize if oversized
   - Compress if large
   - Convert format if beneficial
3. Apply optimizations:
   - Resize to target dimensions
   - Compress with quality settings
   - Convert to optimal format
4. Validate output:
   - Check file size
   - Check quality
   - Check format compatibility

**Optimization Strategies:**

- Web: WebP format, 80% quality, resize to max 1920px
- Print: PNG format, 100% quality, maintain dimensions
- Social: JPEG format, 85% quality, platform-specific dimensions

---

**Maintained By:** ReFi Barcelona Brand Team  
**Last Review:** November 13, 2025
