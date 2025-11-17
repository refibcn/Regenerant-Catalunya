# Presentation Template Guide

**Regenerant Catalunya Presentation Template System**

This guide explains how to create presentations using the pandoc-based template system that matches the Regenerant Catalunya website visual style.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Prerequisites](#prerequisites)
3. [Creating a Presentation](#creating-a-presentation)
4. [Slide Types](#slide-types)
5. [Formatting Options](#formatting-options)
6. [Building Presentations](#building-presentations)
7. [Customization](#customization)
8. [Troubleshooting](#troubleshooting)

---

## Quick Start

1. **Copy the template:**

   ```bash
   cp docs/workshops/templates/presentation-template.md my-presentation.md
   ```

2. **Edit your content** in `my-presentation.md`

3. **Build HTML presentation:**

   ```bash
   ./docs/workshops/build-presentation.sh my-presentation.md html
   ```

4. **Open** `my-presentation.html` in your browser

---

## Prerequisites

### Required Software

- **Pandoc** (v2.10+)
  - Installation: https://pandoc.org/installing.html
  - macOS: `brew install pandoc`
  - Linux: `sudo apt-get install pandoc` or `sudo yum install pandoc`
  - Windows: Download from pandoc.org

- **For PDF output:** LaTeX distribution
  - **XeLaTeX** (recommended for custom fonts)
    - macOS: `brew install --cask mactex`
    - Linux: `sudo apt-get install texlive-xetex`
  - **PDFLaTeX** (fallback, limited font support)
    - Usually included with LaTeX distributions

### Verify Installation

```bash
pandoc --version
xelatex --version  # Optional, for PDF
```

---

## Creating a Presentation

### Basic Structure

A presentation starts with frontmatter (YAML metadata) followed by slides:

```markdown
---
title: "My Presentation"
subtitle: "Optional Subtitle"
author: "Your Name"
date: "2025-11-19"
institute: "Regenerant Catalunya"
---

# Title Slide

<!-- The first slide is automatically a title slide -->

---

## First Content Slide

Your content here.

---

## Second Slide

More content.
```

### Slide Breaks

- Use `---` (three dashes) to create a new slide
- Use `##` (h2) for slide titles
- Everything between `---` markers becomes one slide

---

## Slide Types

### Regular Content Slide

```markdown
---

## Slide Title

Your content here.

- Bullet point one
- Bullet point two
```

### Section Slide (Centered, Large)

```markdown
---

## Section Title {.section-slide}

# Large Centered Title
```

### Two-Column Layout

```markdown
---

## Two Columns {.two-column}

### Left Column

Content on the left.

### Right Column

Content on the right.
```

### Centered Content

```markdown
---

## Centered Slide {.centered}

# Centered Title

All content is centered.
```

---

## Formatting Options

### Headings

```markdown
# H1 (for title slides)

## H2 (slide titles)

### H3 (subheadings)

#### H4 (smaller subheadings)
```

### Text Formatting

```markdown
**Bold text** for emphasis
_Italic text_ for subtle emphasis
`Code inline` for technical terms
```

### Lists

**Bullet Points:**

```markdown
- First item
- Second item
  - Nested item
- Third item
```

**Numbered Lists:**

```markdown
1. First step
2. Second step
3. Third step
```

### Code Blocks

**Fenced code blocks:**

````markdown
```javascript
function example() {
  return "Hello"
}
```
````

Supported languages: `javascript`, `python`, `bash`, `html`, `css`, `json`, `yaml`, etc.

### Tables

```markdown
| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Row 1    | Data     | Data     |
| Row 2    | Data     | Data     |
```

### Blockquotes

```markdown
> This is a blockquote.
>
> Use for quotes or important notes.
```

### Images

```markdown
![Alt text](path/to/image.png)
```

**Note:** Place images in the same directory as your Markdown file or use relative paths.

### Links

```markdown
[Link text](https://example.com)
```

---

## Highlight Boxes

### Regular Highlight Box

```markdown
::: {.highlight-box}
Important information goes here.
Use this for key points.
:::
```

### Info Box (Purple Accent)

```markdown
::: {.info-box}
Informational content.
Use for tips and notes.
:::
```

### Warning Box (Orange Accent)

```markdown
::: {.warning-box}
Warning or caution information.
Use for important alerts.
:::
```

---

## Building Presentations

### HTML Output (Reveal.js)

**Command:**

```bash
./docs/workshops/build-presentation.sh my-presentation.md html
```

**Output:** `my-presentation.html`

**Features:**

- Interactive slides with navigation
- Speaker notes support
- Responsive design
- Works offline (after initial load)

**Viewing:**

- Open `my-presentation.html` in any modern web browser
- Use arrow keys or click controls to navigate
- Press `F` for fullscreen
- Press `S` for speaker notes view

### PDF Output (Beamer)

**Command:**

```bash
./docs/workshops/build-presentation.sh my-presentation.md pdf
```

**Output:** `my-presentation.pdf`

**Requirements:**

- XeLaTeX (recommended) or PDFLaTeX
- LaTeX packages: `fontspec`, `xcolor`, `tikz`, `listings`, `booktabs`

**Note:** PDF output may require multiple compilation passes. The script handles this automatically.

---

## Visual Style

The templates match the Regenerant Catalunya website design:

### Colors

- **Forest Green** (`#214033`) - Primary color, headers, borders
- **Warm Sand** (`#E6DFD7`) - Background
- **Green Medium** (`#3A6655`) - Links, accents
- **Green Light** (`#568F79`) - Hover states
- **Purple** (`#6B4EA3`) - Info callouts
- **Orange** (`#E67E50`) - Warning callouts

### Typography

- **Font:** Inter (Google Fonts)
- **Headers:** Inter Bold (700) / Semi-bold (600)
- **Body:** Inter Regular (400) / Medium (500)
- **Code:** IBM Plex Mono

### Design Principles

- **No border-radius** - Straight edges everywhere
- **Bold graphic lines** - 2-3px borders
- **Clean, editorial aesthetic**
- **Strong typographic hierarchy**

---

## Customization

### Modifying Colors

**For HTML (reveal.js):**
Edit `docs/workshops/templates/revealjs-custom.css`:

```css
:root {
  --green-dark: #214033;
  /* Modify colors here */
}
```

**For PDF (beamer):**
Edit `docs/workshops/templates/beamer-template.tex`:

```latex
\definecolor{greenDark}{RGB}{33, 64, 51}
/* Modify colors here */
```

### Adding Custom Slide Classes

**For HTML:**
Add CSS in `revealjs-custom.css`:

```css
.reveal .slides section.my-custom-class {
  /* Your styles */
}
```

**For PDF:**
Add LaTeX environment in `beamer-template.tex`:

```latex
\newenvironment{mycustomslide}{%
  % Your LaTeX code
}{%
  % Closing code
}
```

---

## Examples

### Complete Example

````markdown
---
title: "Workshop 1: Web3 Wallet Setup"
subtitle: "Regenerant Catalunya"
author: "ReFi Barcelona"
date: "2025-11-19"
---

# Title Slide

---

## Introduction

Welcome to **Workshop 1: Web3 Wallet Setup**.

Today we'll learn:

- Setting up Web3 wallets
- Understanding social recovery
- Managing funds transparently

---

## Why Web3 Wallets? {.section-slide}

# Key Benefits

---

## Two Approaches {.two-column}

### Traditional Wallets

- Private keys only
- No recovery options
- High risk of loss

### Modern Wallets

- Social recovery
- Transparent transactions
- Global access

---

## Code Example

```javascript
// Wallet setup example
const wallet = new Wallet({
  recovery: "social",
  network: "celo",
})
```
````

---

## Important Note

::: {.info-box}
Remember to set up social recovery contacts!
This prevents permanent loss of access.
:::

---

## Thank You

Questions?

**Contact:** hola@refibcn.cat

```

---

## Troubleshooting

### Common Issues

**Problem:** Pandoc not found
- **Solution:** Install pandoc from https://pandoc.org/installing.html

**Problem:** CSS not loading in HTML
- **Solution:** Ensure `revealjs-custom.css` is in the same directory as the HTML file

**Problem:** PDF build fails
- **Solution:**
  - Install XeLaTeX: `brew install --cask mactex` (macOS) or `sudo apt-get install texlive-xetex` (Linux)
  - Check LaTeX packages are installed
  - Try running `xelatex --version` to verify installation

**Problem:** Fonts not working in PDF
- **Solution:**
  - Ensure XeLaTeX is used (not PDFLaTeX)
  - Install Inter font system-wide, or
  - The template will fall back to Latin Modern if Inter is not available

**Problem:** Images not displaying
- **Solution:** Use relative paths from the Markdown file location

### Getting Help

- Check pandoc documentation: https://pandoc.org/MANUAL.html
- Review template files in `docs/workshops/templates/`
- Check build script output for error messages

---

## File Structure

```

docs/workshops/
├── templates/
│ ├── revealjs-template.html # HTML template
│ ├── revealjs-custom.css # Custom CSS
│ ├── beamer-template.tex # PDF template
│ └── presentation-template.md # Reference template
├── build-presentation.sh # Build script
└── PRESENTATION-TEMPLATE-GUIDE.md # This file

````

---

## Best Practices

1. **Keep slides focused** - One main idea per slide
2. **Use consistent formatting** - Follow the template structure
3. **Test both formats** - HTML for presentations, PDF for sharing
4. **Use highlight boxes sparingly** - For truly important information
5. **Keep code examples short** - Long code can be hard to read
6. **Use section slides** - To break up long presentations
7. **Include speaker notes** - Add notes in HTML comments if needed

---

## Advanced Features

### Speaker Notes (HTML only)

Add notes using HTML comments:

```markdown
---

## Slide Title

Content here.

<!-- .element: class="fragment" data-notes="Speaker notes here" -->
````

### Fragments (HTML only)

Reveal content progressively:

```markdown
- Point 1 <!-- .element: class="fragment" -->
- Point 2 <!-- .element: class="fragment" -->
- Point 3 <!-- .element: class="fragment" -->
```

### Math Equations

Use LaTeX math syntax:

```markdown
Inline math: $E = mc^2$

Block math:

$$
\sum_{i=1}^{n} x_i = \text{total}
$$
```

---

## License

This template system is part of the Regenerant Catalunya project and follows the same license as the main repository.

---

**Last Updated:** November 2025  
**Template Version:** 1.0
