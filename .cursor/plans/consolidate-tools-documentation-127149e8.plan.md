<!-- 127149e8-9cd0-40e7-999e-2c0b338884b4 7a4145c2-c566-49b3-8fca-3860d427246a -->
# Fix Tool Wiki Links Throughout Codebase

## Overview

The wiki links `[[...]]` should NOT be in section headers of tools.md files. Instead, they should be added throughout other content files where tools are mentioned, creating proper cross-references to the tools documentation sections.

## Tasks

### 1. Remove Wiki Links from Section Headers in tools.md Files

- **English** (`content/program/tools.md`): Remove `[[...]]` from section headers (e.g., `### [[Karma GAP]] `→ `### Karma GAP`)
- **Spanish** (`content/es/program/tools.md`): Same - remove wiki links from headers
- **Catalan** (`content/ca/program/tools.md`): Same - remove wiki links from headers
- **Keep wiki links in interoperability sections** - these are fine for cross-referencing tools within the document

### 2. Add Wiki Links in Key Content Files

#### Priority Files (Most Visible):

- **`content/index.md`**: Add wiki links for tools mentioned in:
- Line 62: `Karma GAP` → `[[Karma GAP]]`
- Line 71: `Gardens`, `Safe`, `Sarafu`, `Cycles` → `[[Gardens]]`, `[[Safe]]`, `[[Sarafu Network]]`, `[[Cycles]]`
- Line 354: `Valora`, `Minipay` → `[[Valora]]`, `[[Minipay]]`
- Line 359: `Karma GAP` → `[[Karma GAP]]`
- Line 373-376: `Silvi`, `Hypercerts/Ecocerts`, `Gainforest`, `Kokonut Network` → `[[Silvi]]`, `[[Hypercerts]]`/`[[Ecocerts]]`, `[[Gainforest]]`, `[[Kokonut Network]]`
- Line 387-408: `Gardens`, `Safe`, `Sarafu Network`, `Cycles` → Add wiki links

- **`content/program/project-guidebook.md`**: Add wiki links for:
- Line 99: `[[Valora]]` (already has it)
- Line 100: `Minipay` → `[[Minipay]]`
- Line 123: `Valora`, `Minipay` → `[[Valora]]`, `[[Minipay]]`
- Line 186: `Karma GAP` → `[[Karma GAP]]`
- Line 328-331: `Gardens`, `Safe`, `Sarafu`, `Cycles` → Add wiki links

- **`content/resources/index.md`**: Add wiki links for:
- Line 19: `Karma GAP` → `[[Karma GAP]]`
- Line 20: `Valora`, `Minipay` → `[[Valora]]`, `[[Minipay]]`
- Line 31: `Gardens`, `Safe`, `Sarafu`, `Cycles` → Add wiki links
- Line 66-87: All tool mentions → Add wiki links

#### Secondary Files:

- **`content/master-document.md`**: Add wiki links for tool mentions
- **`content/program/network-guidebook.md`**: Add wiki links for Phase 2 tools
- **`content/resources/evaluation-criteria-simple.md`**: Add wiki links for `Karma GAP`
- Other files as found in grep results

### 3. Multilingual Consistency

- Apply same changes to Spanish (`content/es/...`) and Catalan (`content/ca/...`) versions of files
- Ensure wiki links point to correct language versions (e.g., `[[Karma GAP]] `in Spanish files should link to `/es/program/tools#karma-gap`)

## Implementation Notes

- Wiki links format: `[[Tool Name]]` (e.g., `[[Karma GAP]]`, `[[Gardens]]`, `[[Safe]]`)
- Section anchors are auto-generated from headers (lowercase, hyphens for spaces)
- Keep existing wiki links that are already correct (like `[[Valora]]` in project-guidebook.md)
- In interoperability sections within tools.md, wiki links are appropriate for cross-referencing
- Focus on the most visible/public-facing pages first (index.md, project-guidebook.md, resources/index.md)