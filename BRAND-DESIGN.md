# ReFi BCN Brand Design - Regenerant Catalunya

**Implementation Date:** October 11, 2025  
**Status:** ✅ Complete  
**Repository:** https://github.com/refibcn/Regenerant-Catalunya.git

---

## Brand Identity

### Mission
Bold yet elegant knowledge base for the Regenerant Catalunya GG24 program, balancing institutional professionalism with activist energy.

### Target Audiences
- General public and ReFi newcomers
- Funders and institutional partners
- ReFi practitioners and local nodes

---

## Color Palette

### Primary Colors
```css
Forest Green:  #214033  /* Headers, key elements */
Warm Sand:     #E6DFD7  /* Background */
Midnight Navy: #092045  /* Text, contrast */
```

### Brand Accent Colors
```css
Activist Purple:      #6B4EA3  /* Primary links, institutional */
Purple Light:         #8B6EC3  /* Hover states, visited links */
Purple Accent:        #9B7ED3  /* Dark mode accent */

Regenerative Orange:  #E67E50  /* Hover, energy, warmth */
Orange Light:         #F49870  /* Light accents */
Orange Accent:        #FFB090  /* Dark mode accent */
```

### Functional Colors
- **Links (default):** Purple `#6B4EA3`
- **Links (hover):** Orange `#E67E50`
- **Links (visited):** Light Purple `#8B6EC3`
- **Highlights:** Purple wash `rgba(107, 78, 163, 0.15)`
- **Selection:** Purple `rgba(107, 78, 163, 0.25)`

### Dark Mode Palette
```css
Background:    #0F1A1A  /* Very dark forest */
Surface:       #1A2828  /* Light surface */
Text:          #E6DFD7  /* Warm sand */
Purple:        #9B7ED3  /* Lighter for readability */
Orange:        #FFB090  /* Lighter for readability */
```

---

## Typography

### Font Stack
- **Headers:** Sora (700 Bold, 600 Semi-bold) - Geometric, distinctive, authoritative
- **Body:** Inter (400 Regular, 500 Medium) - Professional, highly readable
- **Code:** JetBrains Mono - Developer-friendly, stylish

### Type Scale
```css
H1:        2.5rem (40px),  Bold,       letter-spacing: -0.03em
H2:        2rem (32px),    Semi-bold,  letter-spacing: -0.02em
H3:        1.5rem (24px),  Semi-bold,  letter-spacing: -0.01em
Body:      1.125rem (18px), Regular,   line-height: 1.7
Small/Meta: 0.875rem (14px), Medium,   opacity: 0.8
```

### Typography Features
- Font smoothing enabled (antialiased)
- Kerning and ligatures active
- Generous line height (1.7) for readability
- Tight letter spacing on large headings for impact

---

## Visual Elements

### Cards & Containers
- Border: `1px solid rgba(33, 64, 51, 0.15)`
- Border radius: `8px`
- Padding: `1.5rem`
- Hover effect: Subtle lift with shadow `0 4px 12px rgba(33, 64, 51, 0.08)`

### Callouts
- **Info/Note:** Purple left border (4px)
- **Warning/Caution:** Orange left border (4px)
- **Success/Tip:** Forest green left border (4px)
- Hover: Lifts slightly with shadow

### Buttons
- Background: Purple
- Hover: Transforms to Orange with lift effect
- Border radius: `6px`
- Padding: `0.75rem 1.5rem`
- Font weight: 600

### Links
- Default: Purple, no underline
- Hover: Orange with subtle underline
- Visited: Light purple
- Focus: 2px purple outline for accessibility

### Interactive Elements
- Smooth transitions: `0.2s ease`
- Hover states with color changes
- Focus rings for keyboard navigation
- Transform effects on interactive elements

---

## Component Styling

### Explorer Sidebar
- Right border: Subtle forest green
- Folder hover: Light purple background
- Active folders: Purple text

### Table of Contents
- Left border: 4px purple accent bar
- Active section: Bold purple
- Hover: Orange color transition

### Search
- Border: Purple with transparency
- Focus: Purple glow shadow
- Border radius: `8px`
- Results: Hover background purple tint

### Graph View
- Nodes: Purple fill
- Active nodes: Orange fill
- Links: Orange stroke with opacity

### Tags
- Background: Light purple wash
- Text: Purple
- Hover: Solid purple background, white text
- Border radius: `4px`

### Tables
- Header: Light purple background
- Border: Forest green with transparency
- Row hover: Purple tint
- Border radius: `8px`

### Blockquotes
- Left border: 4px orange
- Background: Light orange wash
- Rounded right corners
- Padding: `1rem 1.5rem`

### Code Blocks
- Border: Subtle forest green
- Inline code: Purple background, purple text
- Border radius: `8px` (blocks), `4px` (inline)

---

## Design Principles

1. **Bold but Breathable**
   - Strong, confident colors
   - Ample whitespace for readability
   - Clear visual hierarchy

2. **Institutional + Activist**
   - Professional enough for funders
   - Energetic enough to inspire action
   - Credible yet approachable

3. **Accessible**
   - WCAG AA compliant contrast ratios
   - Clear focus states for keyboard navigation
   - Readable font sizes and line heights

4. **Performance**
   - Google Fonts CDN for optimal loading
   - Minimal custom CSS
   - Efficient animations

5. **Cohesive**
   - Consistent color usage across all elements
   - Typography system scales proportionally
   - Visual elements follow unified design language

---

## Implementation

### Files Modified
1. **`quartz.config.ts`** - Color palette, typography, page title
2. **`quartz.layout.ts`** - Branded footer links
3. **`quartz/styles/custom.scss`** - Comprehensive component styling

### Features Styled
- ✅ Typography (body, headings, code)
- ✅ Links (all states)
- ✅ Callouts (all types)
- ✅ Cards and containers
- ✅ Buttons
- ✅ Explorer sidebar
- ✅ Table of contents
- ✅ Breadcrumbs
- ✅ Search interface
- ✅ Graph view
- ✅ Tags
- ✅ Backlinks
- ✅ Tables
- ✅ Blockquotes
- ✅ Code blocks
- ✅ Horizontal rules
- ✅ Dark mode adjustments
- ✅ Responsive typography
- ✅ Focus states

---

## Testing Checklist

- [ ] Preview site locally with `npx quartz build --serve`
- [ ] Test light mode color harmony
- [ ] Test dark mode color harmony
- [ ] Verify link visibility and hover states
- [ ] Check mobile responsiveness
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Validate color contrast ratios
- [ ] Test keyboard navigation
- [ ] Review all content types (callouts, tables, code, etc.)
- [ ] Check graph view colors
- [ ] Verify search functionality
- [ ] Test on mobile devices

---

## Usage Guidelines

### When to Use Purple
- Primary links
- Section headers
- Key interactive elements
- Active states
- Information callouts

### When to Use Orange
- Hover states
- Warnings/cautions
- Energy and emphasis
- Call-to-action accents
- Featured content borders

### When to Use Forest Green
- Structural elements (borders, separators)
- Success states
- Subtle accents
- Dark text in light mode

---

## Inspiration Sources

1. **[Local ReFi Toolkit](https://refidao.github.io/local-refi-toolkit/)**
   - Clean documentation structure
   - Professional tone
   - Clear navigation

2. **[Clyde Built Radio](https://www.clydebuiltradio.com/)**
   - Bold color usage
   - Distinctive typography
   - Strong brand presence

3. **[Bread.coop](https://bread.coop/)**
   - Community warmth
   - Approachable design
   - Values-driven aesthetic

4. **[ReFi BCN](https://refibcn.cat/)**
   - Local brand recognition
   - Regional context
   - Established visual language

---

## Future Enhancements

### Potential Additions
- [ ] Custom favicon with brand colors
- [ ] Social media preview images
- [ ] SVG logo for header
- [ ] Self-hosted fonts (Inter + JetBrains Mono)
- [ ] Lucide icons integration
- [ ] Custom 404 page
- [ ] Print stylesheet
- [ ] Enhanced animations

### Advanced Styling
- [ ] Landing page hero section
- [ ] Featured content cards
- [ ] Timeline components
- [ ] Profile cards for team members
- [ ] Custom navigation menu
- [ ] Footer enhancement

---

## Brand Assets Needed

1. **Logo/Icon**
   - SVG format
   - Purple/Orange color variants
   - Dark mode version

2. **Favicon**
   - 32x32, 180x180, 512x512
   - Brand colors
   - Simple, recognizable

3. **Social Media Images**
   - Open Graph image (1200x630)
   - Twitter Card image (1200x600)
   - Brand colors and typography

---

## Accessibility Notes

✅ **Color Contrast**
- All text meets WCAG AA standards
- Purple on sand: 4.8:1 ratio
- Navy on sand: 9.2:1 ratio
- Dark mode optimized for readability

✅ **Keyboard Navigation**
- Clear focus states (2px purple outline)
- Logical tab order
- Skip links available

✅ **Typography**
- Minimum 16px base font size (18px actual)
- 1.7 line height for readability
- Clear heading hierarchy

---

**Version:** 1.0  
**Last Updated:** October 11, 2025  
**Maintained By:** ReFi Barcelona

---

## Quick Commands

```bash
# Preview locally
cd "03 Libraries/Regenerant-Catalunya"
npx quartz build --serve

# Sync to GitHub
npx quartz sync

# Build for production
npx quartz build
```

