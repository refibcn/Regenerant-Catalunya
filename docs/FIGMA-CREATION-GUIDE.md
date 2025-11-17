# Figma Creation Guide - Hero Section Variations

## Step-by-Step Instructions

### 1. Setup

1. Open Figma and create a new file (or use an existing design file)
2. Create a new frame:
   - **Desktop**: 1920px × 1080px (or 1440px × 900px)
   - **Mobile**: 375px × 812px (iPhone standard)
   - Name it "Hero Variation 1" (repeat for each variation)

### 2. Background Setup

1. Import the background image:
   - File: `quartz/static/hero-background.png`
   - Place it as the background layer
   - Set fill to "Fill" (cover the entire frame)
   - Position: Center

### 3. Card Component Creation

Create a reusable card component with these specifications:

**Card Frame:**

- **Width**:
  - Mobile: 42rem (672px) max-width
  - Desktop: 45rem (720px) max-width
- **Padding**:
  - Mobile: 32px 24px (2rem 1.5rem)
  - Desktop: 48px 40px (3rem 2.5rem)
- **Background**:
  - Fill: `rgba(33, 64, 51, 0.15)` (15% opacity green)
  - Or use a solid color with 15% opacity overlay
- **Border**:
  - Width: 2px
  - Color: `#214033`
  - Style: Solid
- **Position**:
  - Top-left aligned
  - Mobile: 24px from top, 24px from left
  - Desktop: 48px from top, 48px from left

### 4. Typography Setup

**Title (h1):**

- Font Size: 44px (2.75rem)
- Font Weight: Bold (700)
- Color: `#214033`
- Line Height: 1.2
- Letter Spacing: 0

**Subtitle (p):**

- Font Size: 16px (1rem)
- Font Weight: Regular (400)
- Color: `#214033`
- Line Height: 1.6
- Letter Spacing: 0

### 5. Create Each Variation

For each variation, duplicate the card component and update the text:

#### Variation 1: "Regenerant Catalunya"

- **Title**: "Regenerant Catalunya"
- **Subtitle**: "[Subtitle to be specified]"
- **Buttons**: None

#### Variation 2: "Powering Regeneration" (Original)

- **Title**: "Powering Regeneration in Catalonia"
- **Subtitle**: "A participatory funding round connecting local regenerative projects with global Web3 infrastructure."
- **Buttons**: None

#### Variation 3: "Powering Regeneration" - Alternate 1

- **Title**: "Powering Regeneration in Catalonia"
- **Subtitle**: "A collaborative funding round uniting Catalan initiatives with matched contributions and web3 tools that make regeneration visible and scalable."
- **Buttons**: None

#### Variation 4: "Powering Regeneration" - Alternate 2

- **Title**: "Powering Regeneration in Catalonia"
- **Subtitle**: "Connecting local regenerative projects with global Web3 infrastructure to power bioregional regeneration."
- **Buttons**: None

#### Variation 5: "Bioregional Funding Program" - Version 1

- **Title**: "Powering Regeneration in Catalonia"
- **Subtitle**: "A bioregional funding program connecting local regenerative projects with global Web3 infrastructure."
- **Buttons**: None

#### Variation 6: "Bioregional Funding Program" - Version 2

- **Title**: "Regenerant Catalunya"
- **Subtitle**: "A bioregional funding program connecting local regenerative projects with global Web3 infrastructure."
- **Buttons**: None

#### Variation 7: "Bioregional Funding Program" - Version 3

- **Title**: "Powering Regeneration in Catalonia"
- **Subtitle**: "A bioregional funding program uniting Catalan initiatives with matched contributions and web3 tools that make regeneration visible and scalable."
- **Buttons**: None

### 6. Organization Tips

- Create a page called "Hero Variations"
- Arrange variations in a grid (2-3 columns)
- Name each frame clearly: "Hero Variation 1", "Hero Variation 2", etc.
- Add labels above each variation for easy reference
- Consider creating both desktop and mobile versions

### 7. Color Swatches

Create these color styles in Figma:

- **Green Dark**: `#214033`
- **Green Highlight**: `rgba(33, 64, 51, 0.15)` (or create a solid color with 15% opacity)

### 8. Text Styles

Create these text styles:

- **Hero Title**: 44px, Bold, `#214033`
- **Hero Subtitle**: 16px, Regular, `#214033`

## Quick Reference

### Exact Measurements

- **Card Max Width**: 672px (mobile) / 720px (desktop)
- **Card Padding**: 32px 24px (mobile) / 48px 40px (desktop)
- **Card Margin**: 24px top/left (mobile) / 48px top/left (desktop)
- **Border**: 2px solid `#214033`
- **Title Size**: 44px
- **Subtitle Size**: 16px

### Background Image

- Path: `quartz/static/hero-background.png`
- Fill mode: Cover
- Position: Center

## Notes

- All variations should be full-width sections
- No buttons should appear in any variation
- Maintain consistent card styling across all variations
- The background image should be consistent across all variations
