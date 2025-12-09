---
name: Merge assets folders
overview: Merge brand-assets and visual-assets into a unified ./assets folder structure, consolidate scripts, update all references, and remove redundant files.
todos:
  - id: create-assets-structure
    content: Create new assets/ folder structure with config/, scripts/, generated/, and test-prototypes/ subdirectories
    status: completed
  - id: merge-config-files
    content: Copy visual-assets/config/*.json to assets/config/ (more complete versions)
    status: completed
  - id: consolidate-scripts
    content: Move visual-assets/scripts/* to assets/scripts/ and merge any unique scripts from scripts/brand-assets/
    status: pending
  - id: move-assets-prototypes
    content: Move visual-assets/assets/ to assets/generated/ and visual-assets/test-prototypes/ to assets/test-prototypes/
    status: completed
  - id: update-script-references
    content: Update all script file paths to reference assets/config/ instead of old locations
    status: pending
  - id: update-docs-references
    content: Update documentation files (AGENT-IMPLEMENTATION-GUIDE.md, PROCEDURAL-SPECIFICATIONS.md, etc.) to reference assets/ instead of brand-assets/ or visual-assets/
    status: completed
  - id: handle-visual-assets-docs
    content: Check visual-assets/docs/ - move unique content to docs/brand/ or merge, delete if duplicates
    status: completed
  - id: update-package-json
    content: Review and update visual-assets/package.json scripts or merge into root package.json if needed
    status: completed
  - id: cleanup-old-folders
    content: Delete brand-assets/, visual-assets/, and scripts/brand-assets/ folders after migration
    status: completed
  - id: verify-references
    content: Verify all references are updated and no broken paths remain
    status: completed
---

# Merge brand-assets and visual-assets into ./assets

## Current State Analysis

- **brand-assets/**: Contains 3 config JSON files (older versions)
- **visual-assets/**: Complete package with config, scripts, docs, generated assets, and test prototypes
- **scripts/brand-assets/**: Scripts referencing brand-assets/ folder
- Overlap exists between visual-assets/scripts/ and scripts/brand-assets/

## New Structure

```
assets/
├── config/              # Brand configuration files (merged, using visual-assets versions)
│   ├── brand-config.json
│   ├── colors.json      # (more complete with bayerDither support)
│   └── pattern-config.json
├── generated/          # Generated visual assets (from visual-assets/assets/)
├── test-prototypes/    # Test materials (from visual-assets/test-prototypes/)
└── README.md          # Updated documentation (note: manual processing via ditheringstudio.com)
```

**Note:** All image processing scripts are removed. Image processing will be done manually using [ditheringstudio.com](https://ditheringstudio.com/).

## Implementation Steps

### 1. Create new assets/ folder structure

- Create `assets/config/`, `assets/generated/`, `assets/test-prototypes/` (no scripts folder)

### 2. Merge configuration files

- Copy `visual-assets/config/*.json` to `assets/config/` (these are more complete)
- Verify config files are identical or merge differences

### 3. Move generated assets and test prototypes

- Move `visual-assets/assets/` → `assets/generated/`
- Move `visual-assets/test-prototypes/` → `assets/test-prototypes/`

### 4. Delete all scripts

- Delete `scripts/brand-assets/` folder completely
- Delete `visual-assets/scripts/` folder completely

### 5. Update documentation references

- Update `docs/AGENT-IMPLEMENTATION-GUIDE.md` - remove script references, update config paths to `assets/config/`, note manual processing via ditheringstudio.com
- Update `docs/PROCEDURAL-SPECIFICATIONS.md` - remove script references, note manual processing via ditheringstudio.com
- Update `docs/BRAND-STRATEGY.md` and `docs/BRAND-STRATEGY-OVERVIEW.md` - remove script library sections, update config paths to `assets/config/`
- Create `assets/README.md` with new structure and note about manual processing via ditheringstudio.com
- Update `docs/README.md` - change visual-assets reference to assets

### 6. Handle visual-assets/docs

- Check if `visual-assets/docs/` duplicates `docs/` content
- If unique, move to `docs/brand/` or merge appropriately
- If duplicates, delete visual-assets/docs/

### 7. Update package.json

- Delete `visual-assets/package.json` (no longer needed without scripts)
- Remove any script-related dependencies from root package.json if they were only used for asset generation

### 8. Clean up old folders

- Delete `brand-assets/` folder (configs moved to assets/config/)
- Delete `visual-assets/` folder (all content moved to assets/)
- Delete `scripts/brand-assets/` folder (scripts removed)

### 9. Verify and test

- Check all documentation references are updated
- Ensure no broken script references remain
- Verify config files are accessible at assets/config/