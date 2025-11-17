---
title: "Presentation Title"
subtitle: "Optional Subtitle"
author: "Your Name"
date: "2025-11-19"
institute: "Regenerant Catalunya"
---

<!--
  PANDOC PRESENTATION TEMPLATE
  =============================

  This template demonstrates how to create presentations using pandoc
  with the Regenerant Catalunya visual style.

  Slide breaks are created by horizontal rules (---) at slide-level 2.
  Use ## for slide titles (h2).

  To build:
  - HTML: ./build-presentation.sh your-file.md html
  - PDF:  ./build-presentation.sh your-file.md pdf
-->

# Title Slide

<!--
  The first slide is automatically a title slide.
  Frontmatter metadata (title, subtitle, author, date) is used here.
-->

---

## Introduction

<!-- Regular content slide -->

Welcome to this presentation about **Regenerant Catalunya**.

This template demonstrates various slide types and formatting options.

---

## Section Slide {.section-slide}

<!--
  Use .section-slide class for section dividers.
  These are typically centered and larger.
-->

# Section Title

---

## Typography Examples

### Headings

# H1 Heading

## H2 Heading

### H3 Heading

#### H4 Heading

### Text Formatting

- **Bold text** for emphasis
- _Italic text_ for subtle emphasis
- `Code inline` for technical terms
- Regular paragraph text with normal formatting

---

## Lists

### Bullet Points

- First item
- Second item
  - Nested item
  - Another nested item
- Third item

### Numbered Lists

1. First step
2. Second step
3. Third step

---

## Two-Column Layout {.two-column}

<!-- Use .two-column class for side-by-side content -->

### Left Column

Content on the left side of the slide.

- Point one
- Point two
- Point three

### Right Column

Content on the right side of the slide.

- Point A
- Point B
- Point C

---

## Code Examples

### Inline Code

Use `code inline` for technical terms or short code snippets.

### Code Blocks

```javascript
// Example JavaScript code
function greet(name) {
  return `Hello, ${name}!`
}

const message = greet("Regenerant Catalunya")
console.log(message)
```

```python
# Example Python code
def calculate_funding(pool, projects):
    """Calculate funding per project."""
    return pool / projects

total_pool = 29200
num_projects = 11
per_project = calculate_funding(total_pool, num_projects)
print(f"€{per_project:.2f} per project")
```

---

## Tables

| Tool     | Purpose              | Status   |
| -------- | -------------------- | -------- |
| Valora   | Web3 Wallet          | Required |
| KarmaGap | Impact Documentation | Required |
| Gardens  | Network Governance   | Phase 2  |
| Safe     | Multisig Wallet      | Phase 2  |

---

## Highlight Boxes

### Regular Highlight

::: {.highlight-box}
This is a regular highlight box with important information.
Use it to draw attention to key points.
:::

### Info Box

::: {.info-box}
This is an info box for informational content.
Use purple accent color for notes and tips.
:::

### Warning Box

::: {.warning-box}
This is a warning box for important cautions.
Use orange accent color for warnings.
:::

---

## Blockquotes

> This is a blockquote example.
>
> Use blockquotes for quotes, important notes, or callouts.
> They have an orange left border and green highlight background.

---

## Images

<!--
  Images should be placed in the same directory or referenced relatively.
  For reveal.js, images are automatically sized.
-->

![Alt text](path/to/image.png)

---

## Centered Content {.centered}

<!-- Use .centered class for centered slides -->

# Centered Title

This content is centered on the slide.

Useful for:

- Title slides
- Section dividers
- Important announcements

---

## Mixed Content Example

### Combining Elements

This slide shows how to combine different elements:

1. **Numbered lists** with formatting
2. `Code snippets` inline
3. Regular paragraphs

::: {.highlight-box}
Important note in a highlight box.
:::

| Feature   | Status         |
| --------- | -------------- |
| Feature A | ✅ Complete    |
| Feature B | 🔄 In Progress |

---

## Final Slide

### Thank You

Questions?

**Contact:** hola@refibcn.cat

**Website:** regenerant-catalunya.refibcn.cat

---

## Appendix: Slide Types Reference

### Available Slide Classes

- `.section-slide` - Large centered section divider
- `.two-column` - Two-column layout
- `.centered` - Centered content

### Available Box Types

- `.highlight-box` - Green highlight box
- `.info-box` - Purple info box
- `.warning-box` - Orange warning box

### Markdown Features

- Headings (`##`, `###`, etc.)
- Lists (bulleted and numbered)
- Code blocks (fenced with language)
- Tables (pipe-separated)
- Blockquotes (`>`)
- Images (`![alt](url)`)
- Links (`[text](url)`)
- Emphasis (`**bold**`, `*italic*`)
