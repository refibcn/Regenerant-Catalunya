# AI Prompt Template for Activity Report Generation

This document provides a **two-step prompt system** for generating activity reports from downloaded Google Drive files.

## Overview

This system uses a **linear workflow** with two prompts:

1. **Prompt 1 (Cursor)**: Analyze files and create a structured markdown summary
2. **Prompt 2 (Thaura)**: Generate the activity report from that markdown

This approach works around Thaura's limitation of not being able to upload entire folders, by doing file analysis in Cursor first.

## Quick Start

1. **Step 1**: Run [`prompts/01-prepare-file-analysis.md`](./prompts/01-prepare-file-analysis.md) in Cursor
2. **Step 2**: Copy the generated markdown file and run [`prompts/02-generate-report.md`](./prompts/02-generate-report.md) in Thaura

## Workflow

```
┌─────────────────────────────────────────────────────────────┐
│ Step 1: File Analysis (Cursor)                             │
│                                                             │
│ Input: Project folder with downloaded files                │
│ Process: Analyze folder structure, extract dates,          │
│          identify activities                                │
│ Output: [project-name]-file-analysis.md                    │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ Step 2: Report Generation (Thaura)                         │
│                                                             │
│ Input: File analysis markdown + Prompt 2                   │
│ Process: Generate structured activity report                │
│ Output: [project-name]-report-draft.md                      │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ Step 3: Review & Refine (Human)                            │
│                                                             │
│ Input: Generated report draft                               │
│ Process: Review, verify, refine                            │
│ Output: Final report in Google Docs                         │
└─────────────────────────────────────────────────────────────┘
```

## Prompt Files

### Prompt 1: File Analysis (Cursor)

**File:** [`prompts/01-prepare-file-analysis.md`](./prompts/01-prepare-file-analysis.md)

**Purpose:** Analyze project files and create a structured markdown summary.

**When to use:** 
- After downloading files from Google Drive
- When you need to prepare files for AI analysis
- Run in Cursor where you have access to the file system

**Output:** A markdown file with:
- Complete folder structure
- File counts and types
- Date extraction
- Activity identification
- File inventory

### Prompt 2: Report Generation (Thaura)

**File:** [`prompts/02-generate-report.md`](./prompts/02-generate-report.md)

**Purpose:** Generate structured activity report from file analysis markdown.

**When to use:**
- After completing Prompt 1
- When you have the file analysis markdown ready
- Run in Thaura (or other AI tool that accepts markdown input)

**Input:** 
- File analysis markdown from Prompt 1
- Prompt 2 instructions

**Output:** Structured activity report draft matching Google Docs template

## Usage Example

### Example: La Suculenta Project

**Step 1 - In Cursor:**

1. Navigate to `docs/project-reports/la-suculenta/`
2. Open [`prompts/01-prepare-file-analysis.md`](./prompts/01-prepare-file-analysis.md)
3. Copy the prompt
4. Paste into Cursor chat
5. Cursor analyzes files and generates `la-suculenta-file-analysis.md`

**Step 2 - In Thaura:**

1. Open `la-suculenta-file-analysis.md` and copy entire contents
2. **Check Google Docs**: If the project has already started filling their report, copy that content
3. Open [`prompts/02-generate-report.md`](./prompts/02-generate-report.md)
4. Copy the prompt
5. In Thaura, paste:
   - File analysis markdown
   - Google Doc content (if available, or write "No Google Doc content available yet")
   - Prompt 2
6. Thaura generates `la-suculenta-report-draft.md` (merging both sources if Google Doc content exists)

**Step 3 - Review:**

1. Review generated draft
2. Refine based on project knowledge
3. Transfer to Google Docs
4. Share with project for verification

## Key Features

### Why Two Steps?

- **Thaura limitation**: Cannot upload entire folders/subfolders
- **Cursor advantage**: Has access to file system for analysis
- **Separation of concerns**: File analysis vs. report generation
- **Reusability**: File analysis can be reused or updated

### Benefits

✅ **Copy-paste ready**: Both prompts are self-contained  
✅ **Linear workflow**: Clear step-by-step process  
✅ **Markdown-based**: Easy to share and version control  
✅ **Tool-optimized**: Each prompt designed for its specific tool  
✅ **Evidence-based**: File analysis ensures accurate reporting  

## File Structure

```
docs/project-reports/
├── prompts/
│   ├── 01-prepare-file-analysis.md  ← Step 1: Run in Cursor
│   └── 02-generate-report.md         ← Step 2: Run in Thaura
├── [project-name]/
│   ├── [project-name]-file-analysis.md  ← Generated by Step 1
│   └── [project-name]-report-draft.md   ← Generated by Step 2
└── ...
```

## Customization

### For Different Projects

Both prompts include placeholders for:
- Project name
- Network (Miceli / Keras Buti / La Fundició)
- Territory/location
- Language (Spanish / Catalan)

Simply replace these when copying the prompts.

### For Different Tools

- **Prompt 1**: Can be adapted for any tool with file system access
- **Prompt 2**: Can be used with any AI tool that accepts markdown input

## Tips

### For Prompt 1 (File Analysis)

- ✅ Be thorough - list all folders and files
- ✅ Extract dates from file names when possible
- ✅ Identify activities based on folder names
- ✅ Note any uncertainties in observations

### For Prompt 2 (Report Generation)

- ✅ Copy the entire file analysis markdown
- ✅ Ensure file paths are preserved
- ✅ Review generated output carefully
- ✅ Verify dates and metrics

## Troubleshooting

### Issue: File analysis is incomplete

**Solution:** Check that Cursor has access to all project files. Ensure you're in the correct directory.

### Issue: Generated report is missing activities

**Solution:** Review the file analysis markdown - it may need more detail. Re-run Prompt 1 with more specific instructions.

### Issue: Dates are incorrect

**Solution:** Check the file analysis for date extraction. Manually correct dates in the final report.

### Issue: File references don't work

**Solution:** Verify file paths in the file analysis match actual file locations. Update paths in final report.

## Related Documentation

- **Process Guide**: [`README.md`](./README.md) - Complete workflow documentation
- **Example Workflow**: [`examples/workflow-example.md`](./examples/workflow-example.md) - Step-by-step example
- **Sample Output**: [`examples/sample-output.md`](./examples/sample-output.md) - Example generated report
- **Project Guide**: [`../../content/es/resources/guia-informe-actividades.md`](../../content/es/resources/guia-informe-actividades.md) - Google Docs template guide

## References

- **Source Methodology**: [`from-regen-coordination/How to Use AI for Activity & Output Reporting 2aebf304370a81de8c99c47088f1a600.md`](./from-regen-coordination/How%20to%20Use%20AI%20for%20Activity%20&%20Output%20Reporting%202aebf304370a81de8c99c47088f1a600.md)

---

*This template system is adapted from Regen Coordination's AI-assisted reporting methodology, tailored for Regenerant Catalunya's local context and optimized for a two-tool workflow (Cursor + Thaura).*
