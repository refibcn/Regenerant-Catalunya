---
name: Fix Landing Page Issues
overview: Fix hero section image duplication/display issues and restore carousel images to proper size by adding CSS exception for carousel images.
todos:
  - id: format-spanish
    content: "Improve formatting of Spanish version (content/es/resources/guia-informe-actividades.md): add icon, adjust spacing, improve headers, add visual breaks"
    status: completed
  - id: translate-catalan
    content: Create Catalan translation (content/ca/resources/guia-informe-actividades.md) with same formatting improvements
    status: completed
  - id: translate-english
    content: Create English translation (content/resources/activity-report-guide.md) with same formatting improvements
    status: completed
  - id: copy-icon
    content: Copy checklist icon to quartz/static/icons/ directory
    status: completed
  - id: update-resources-es
    content: Update Spanish resources index (content/es/resources/index.md) to link to the guide
    status: completed
  - id: update-resources-ca
    content: Update Catalan resources index (content/ca/resources/index.md) to link to the guide
    status: completed
  - id: update-resources-en
    content: Update English resources index (content/resources/index.md) to link to the guide
    status: completed
  - id: update-landing-pages
    content: Update all landing pages (index.md files in es/, ca/, and root) to reference the guide in Resources sections
    status: completed
---

# Fix Landing Page Hero and Carousel Issues

## Issue 1: Hero Section Consistency

**Problem**: English landing page has hero background image, but Spanish and Catalan don't, creating visual inconsistency.

**Solution**: Add the same hero background image structure to Spanish and Catalan landing pages.

### Files to Update:

1. **content/es/index.md** - Add hero-image div with background

   - Current: Simple `<div class="hero-section">` without background
   - Add: Background image div structure like English version (lines 6-9 of content/index.md)

2. **content/ca/index.md** - Add hero-image div with background  

   - Current: Simple `<div class="hero-section">` without background
   - Add: Background image div structure like English version

## Issue 2: Carousel Images Broken

**Problem**: Global CSS rule in `quartz/styles/custom.scss` (lines 25310-25315) applies `max-width: 80% !important` and `width: auto !important` to ALL images, overriding carousel's inline styles.

**Current problematic CSS**:

```scss
.page .center article img,
article img {
  max-width: 80% !important;
  width: auto !important;
```

**Solution**: Add exception for carousel images before the global img rule.

### File to Update:

**quartz/styles/custom.scss** (around line 25310)

Add exception BEFORE the global rule:

```scss
// Exception for carousel images - must come before general img rules
.carousel-card img,
.carousel-slide img {
  max-width: 100% !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
}

// Override base img styles with more specific selector
.page .center article img,
article img {
  max-width: 80% !important;
  width: auto !important;
```

## Implementation Steps

1. Update Spanish hero section (content/es/index.md)
2. Update Catalan hero section (content/ca/index.md)
3. Add carousel image CSS exception (quartz/styles/custom.scss)
4. Commit changes with message: "fix: restore hero background images and carousel image sizing"
5. Push changes
6. Verify on website

## Expected Results

- All three language versions have consistent hero sections with background images
- Carousel images display at full width/height within their containers
- Project cards in carousel look properly formatted with images filling the 180px height container