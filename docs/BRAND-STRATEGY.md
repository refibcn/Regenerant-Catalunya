# Regenerant Catalunya Brand Strategy

**Version:** 2.0 (Agent-Executable)  
**Last Updated:** November 13, 2025  
**Status:** Active Development  
**Source:** Meeting notes from October 30, 2025 brand strategy session

---

## Strategic Foundation

### Brand Positioning

**Regenerant Catalunya** serves as a proof-of-concept testing ground for the long-term organizational brand while meeting immediate event needs.

**Core Objectives:**

- Create cohesive identity supporting immediate event needs and long-term organizational positioning
- Test brand direction through Regenerant Catalunya implementation before full organizational rebrand
- Establish scalable visual system enabling automated, agent-executable processes
- Maintain conceptual relationship between mini-brand and future full rebrand

### Immediate Needs

1. **Round Logo Design** - Primary visual identifier for event materials
2. **Mini Visual Language System** - Pattern/filter applications across event imagery
3. **Web Banner** - Event marketing and digital communication
4. **Tone of Voice** (optional) - Multi-language communication guidelines (EN/ES/CAT)

### Multi-Language Strategy

**Languages:** English, Spanish, Catalan

**Requirements:**

- All brand materials support EN/ES/CAT
- Translation impact assessment for naming candidates
- Avoid location-specific terms in main organizational brand name

### Ecosystem Positioning

**Differentiation:**

- Avoid Resilience Earth organic pattern similarity
- Avoid generic environmental movement green color schemes
- Align with EchoHub model (acceptable reference)
- Establish unique visual identity within cooperative/regenerative space

**Color Strategy:**

- Distinct highlight color for Regenerant Catalunya (related to org palette)
- ReFi Barcelona: one distinct color
- Regenerant Catalunya: another distinct color
- Strong color association for visual navigation

### Integration Points

- **Existing Brand:** Forest Green (#214033), Purple (#6B4EA3), Orange (#E67E50), Inter font
- **Website:** Quartz-based at regenerant.refibcn.cat
- **Research:** Canvas Social stakeholder analysis, Value proposition (Propositive Valor)

---

## Visual Identity System

### Color Palette

**Base Organizational Colors:**

```css
Forest Green:  #214033  /* Structural elements */
Warm Sand:     #E6DFD7  /* Background */
Midnight Navy: #092045  /* Text */
Activist Purple: #6B4EA3  /* Accents */
Regenerative Orange: #E67E50  /* Accents */
```

**Regenerant Catalunya Highlight Color:** To be determined by Andrea

**Green Palette (Monochromatic UI):**

```css
Green Dark:      #214033
Green Medium:    #3A6655
Green Light:     #568F79
Green Highlight: rgba(33, 64, 51, 0.15)
```

### Typography

**Font Family:** Inter (unified throughout)

- Headers: Inter Bold/Semi-bold
- Body: Inter Regular/Medium (18px base, line-height 1.7)
- Code: IBM Plex Mono

### Halftone Pattern System

**Core Technique:** AM screen (amplitude-modulated halftone) with green duotone color map

**Pattern Types:**

1. **Dots** → Newsprint look (AM screen)
2. **Lines** → Line screen (directional shading)
3. **Squares/Diamonds** → Ordered-dither/Bayer matrix
4. **Crosses/Cross-Hatch** → Two line screens at angles
5. **Custom Glyphs** → ASCII/glyph halftone

**Green Duotone Mapping:** To be finalized by Andrea

**Implementation:** Agent-executable scripts (see `AGENT-IMPLEMENTATION-GUIDE.md`)

### Logo System

**Round Logo:** Primary event identifier

- Format: Round (circular or square with rounded elements)
- Status: Design phase (Andrea)
- Requirements: Works across digital/print, establishes visual relationship with future brand

**Implementation:** Agent-executable generation workflow (see `PROCEDURAL-SPECIFICATIONS.md`)

---

## Visual Style Direction

**Core Principles:**

- Elegance and sophistication over visual chaos
- "Techy fun innovation" with professional credibility
- Nature-technology collaboration (without cliché)
- Practical, maintainable, agent-executable processes

**Technical Requirements:**

- Low-energy website capability (minimal data usage)
- Lightweight imagery strategy
- Automated pattern application
- Batch processing capabilities

**Avoid:**

- Visual complexity suggesting chaos
- Resilience Earth pattern similarity
- Generic green color schemes
- Manual design tool dependencies

---

## Implementation Approach

### Agent-Executable Processes

All visual creation processes are designed to be executed by AI agents (Cursor/ChatGPT) using code-based workflows:

1. **Pattern Application:** Automated halftone pattern generation scripts
2. **Image Processing:** Batch image processing pipelines
3. **Logo Generation:** Procedural logo creation workflows
4. **Template Generation:** Code-based template creation
5. **Quality Control:** Automated brand compliance checks

### Tool Strategy

**Primary:** Code-based scripts (Python/Node.js)

- Pattern generation scripts
- Image processing pipelines
- Template generation
- Quality control automation

**Secondary:** Figma MCP integration (when available)

- Advanced design work
- Template component creation
- Design system management

**Eliminated:** Manual Canva/Figma workflows

- Replaced with agent-executable procedures
- Automated processing pipelines
- Code-based asset generation

### File Organization

```
scripts/brand-assets/
├── pattern-generation/
│   ├── halftone-dots.js
│   ├── halftone-lines.js
│   ├── halftone-squares.js
│   ├── halftone-crosshatch.js
│   └── halftone-glyphs.js
├── image-processing/
│   ├── apply-pattern.js
│   ├── apply-duotone.js
│   └── batch-process.js
├── logo-generation/
│   └── generate-logo-variants.js
├── template-generation/
│   ├── social-media.js
│   ├── web-banners.js
│   └── event-materials.js
└── quality-control/
    ├── check-brand-compliance.js
    └── validate-assets.js
```

---

## Timeline and Priorities

### Immediate (Next 7-14 Days)

- Round logo design (Andrea)
- Pattern system finalization (Andrea)
- Agent-executable script development
- Initial template generation

### Medium-Term (30 Days)

- Complete script library
- Automated processing pipelines
- Quality control automation
- Template generation automation

### Long-Term (60-90 Days)

- Full brand system automation
- Ecosystem differentiation implementation
- Long-term brand maintenance workflows

---

## Related Documentation

- **Agent Implementation Guide:** `AGENT-IMPLEMENTATION-GUIDE.md`
- **Procedural Specifications:** `PROCEDURAL-SPECIFICATIONS.md`
- **Script Library:** `scripts/brand-assets/`

---

**Maintained By:** ReFi Barcelona Brand Team  
**Last Review:** November 13, 2025
