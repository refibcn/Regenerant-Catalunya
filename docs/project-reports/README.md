# AI-Assisted Activity Report Generation Process

This guide explains how to generate initial activity report drafts from downloaded Google Drive files using AI assistance. This process streamlines report preparation for projects that have uploaded documentation but haven't yet completed their Google Docs reports.

## Overview

When projects upload files to Google Drive (photos, PDFs, documents, presentations), we can use AI to analyze these files and generate structured activity report drafts. These drafts serve as starting points that require human review and refinement before being transferred to the project's Google Docs report.

## Visual Workflow

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
│ Input: File analysis markdown + Google Doc content +       │
│        Prompt 2                                             │
│ Process: Generate structured activity report                │
│ Output: [project-name]-report-draft.md                     │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ Step 3: Verify Proofs (Human)                              │
│                                                             │
│ Input: Generated report draft                               │
│ Process: Verify file paths, check proofs match             │
│          descriptions, ensure proofs support deliverables   │
│ Output: Verified report draft                               │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ Step 4: Review & Refine (Human)                            │
│                                                             │
│ Input: Verified report draft                                │
│ Process: Review accuracy, completeness, format              │
│ Output: Final report ready for Google Docs                  │
└─────────────────────────────────────────────────────────────┘
```

## Step-by-Step Process

### Step 1: Download & Organize Files

Download project files from Google Drive and organize them in the project folder structure:

```
docs/project-reports/
└── [project-name]/
    ├── [activity-folder-1]/
    │   ├── file1.jpg
    │   ├── file2.pdf
    │   └── ...
    ├── [activity-folder-2]/
    └── ...
```

**File Organization Guidelines:**
- Keep the folder structure from Google Drive to preserve activity groupings
- Note the project name, network (Miceli/Keras Buti/La Fundició), and any metadata
- Identify key dates from file names or folder names when possible

### Step 2: Run Prompt 1 - File Analysis (Cursor)

**Location:** [`prompts/01-prepare-file-analysis.md`](./prompts/01-prepare-file-analysis.md)

**Process:**
1. Navigate to the project folder in Cursor (e.g., `docs/project-reports/la-suculenta/`)
2. Open the prompt file and copy the prompt
3. Paste into Cursor's chat
4. Cursor will analyze all files and folders
5. Save the output as `[project-name]-file-analysis.md`

**What it does:**
- Analyzes complete folder structure
- Counts files by type per folder
- Extracts dates from file names and metadata
- Identifies potential activities based on folder names
- Creates a structured markdown summary

**Output:** A markdown file with complete file analysis ready for the next step.

### Step 3: Run Prompt 2 - Generate Report (Thaura)

**Location:** [`prompts/02-generate-report.md`](./prompts/02-generate-report.md)

**Process:**
1. Open the file analysis markdown from Step 2
2. Copy the entire contents
3. **Check for existing Google Doc content:**
   - If the project has already started filling out their Google Docs report, copy that content
   - This may include partial activity descriptions, dates, locations, or other information
   - If no Google Doc content exists yet, note "No Google Doc content available yet"
4. Open Prompt 2 and copy it
5. In Thaura, paste:
   - The file analysis markdown
   - Google Doc content (if available)
   - The prompt
6. Thaura will generate the structured activity report
7. Save the output as `[project-name]-report-draft.md`

**What it does:**
- **If Google Doc content exists**: Uses it as the primary source and enhances it with file analysis
- **If no Google Doc content**: Generates entirely from file analysis
- Merges information from both sources when they complement each other
- **Splits subactivities**: Converts "Actividad 1.1", "Actividad 1.2" into separate numbered activities
- Generates structured activity blocks with standardized format
- Extracts deliverables and metrics
- Formats output to match Google Docs template exactly
- References specific files as evidence

**Output Format:**
- Title: `# Informe de Actividades – [PROJECT_NAME]`
- Project information section: `## 1. Información básica del proyecto` (required before activities)
- Activities: Each as `## Actividad [NUMBER] – [ACTIVITY_NAME]` (no subactivities)
- Proper indentation: 2 spaces for nested items (deliverables and metrics)
- Consistent structure across all reports

**Output:** A structured activity report draft ready for verification.

### Step 4: Verify Proofs

**Process:**
1. Review the generated report draft
2. For each activity, verify all proofs systematically:

**Deliverables Verification:**
- [ ] File/folder exists: Check that the referenced file or folder path is correct
- [ ] File matches description: Verify the file content matches what's described
- [ ] Proof is appropriate: Confirm the proof actually demonstrates the deliverable exists
- [ ] Accessibility: Ensure files are accessible in Google Drive (if using Drive links)

**Metrics Verification:**
- [ ] Proof exists: Check that the referenced proof file/folder exists
- [ ] Proof supports metric: Verify the proof actually demonstrates the metric value
- [ ] Value is reasonable: Check if the metric value makes sense given the proof
- [ ] Multiple proofs if needed: If metric is high, ensure there are sufficient proofs

**Additional Proofs Verification:**
- [ ] Files exist: Verify all referenced files/folders exist
- [ ] Not redundant: Check these aren't already linked to deliverables/metrics
- [ ] Should be linked: Consider if these proofs should be linked to specific deliverables/metrics instead

**File Path Verification:**
- [ ] Paths are correct: Verify all file paths match actual file locations
- [ ] Relative paths work: If using relative paths, ensure they're correct from report location
- [ ] Google Drive links: If using Drive links, verify they're accessible and correct

3. Document any issues found:
   - Missing files: Files referenced but not found
   - Incorrect paths: Wrong file paths
   - Mismatched content: Files that don't match their descriptions
   - Weak proofs: Proofs that don't adequately support deliverables/metrics
   - Missing proofs: Deliverables/metrics without adequate proof

4. Fix issues:
   - Fix file paths if incorrect
   - Remove invalid references if files don't exist
   - Add missing proofs if files exist but aren't referenced
   - Strengthen weak proofs by adding additional file references

**Output:** Verified report draft with corrected references

### Step 5: Review & Refine

**Critical**: AI-generated drafts are starting points, not final reports. Always review:

**Quality Review Checklist:**
- [ ] **Accuracy**: Verify activities match actual work done
- [ ] **Completeness**: Ensure all major activities are included
- [ ] **Evidence**: Check that file references are correct
- [ ] **Metrics**: Verify numbers are reasonable and supported
- [ ] **Language**: Ensure Spanish/Catalan usage is appropriate
- [ ] **Format**: Confirm structure matches Google Docs template
- [ ] **Clarity**: Check descriptions are clear and specific

**Common Issues to Fix:**
- Remove activities that don't match uploaded files
- Add missing activities if files suggest more work
- Correct dates extracted from file names
- Refine descriptions to be more specific
- Add or correct file paths/links
- Verify metric calculations

### Step 6: Transfer to Google Docs

Copy the structured content to the project's Google Docs report:

1. Open the project's Google Docs template
2. Copy each activity block from the draft
3. Paste into the appropriate section
4. Format according to Google Docs template structure
5. Add any additional details or corrections
6. Verify all file links work correctly

## Why Two Steps?

This system uses a **linear workflow** with two prompts:

1. **Prompt 1 (Cursor)**: Analyze files and create a structured markdown summary
2. **Prompt 2 (Thaura)**: Generate the activity report from that markdown

**Benefits:**
- **Thaura limitation**: Cannot upload entire folders/subfolders
- **Cursor advantage**: Has access to file system for analysis
- **Separation of concerns**: File analysis vs. report generation
- **Reusability**: File analysis can be reused or updated
- **Copy-paste ready**: Both prompts are self-contained
- **Linear workflow**: Clear step-by-step process
- **Markdown-based**: Easy to share and version control
- **Tool-optimized**: Each prompt designed for its specific tool
- **Evidence-based**: File analysis ensures accurate reporting

## File Organization

### Project Folder Structure

```
docs/project-reports/
├── README.md (this file)
├── prompts/
│   ├── 01-prepare-file-analysis.md  ← Step 2: Run in Cursor
│   └── 02-generate-report.md         ← Step 3: Run in Thaura
├── examples/
│   ├── workflow-example.md
│   └── sample-output.md
└── [project-name]/
    ├── [activity-folder-1]/
    ├── [activity-folder-2]/
    ├── [project-name]-file-analysis.md  ← Generated by Step 2
    └── [project-name]-report-draft.md   ← Generated by Step 3
```

### Naming Conventions

- **Project folders**: Use lowercase with hyphens (e.g., `la-marmita`, `la-suculenta`)
- **Activity folders**: Keep original names from Google Drive
- **Generated reports**: Save as `[project-name]-file-analysis.md` and `[project-name]-report-draft.md` in project folder

## Best Practices

### For File Processing
- ✅ Preserve folder structure from Google Drive
- ✅ Note dates and context from file names
- ✅ Group related activities logically
- ✅ Keep file paths relative for portability

### For AI Prompting
- ✅ Provide clear project context
- ✅ Describe folder structure explicitly
- ✅ Reference specific files as evidence
- ✅ Specify output format requirements
- ✅ Request conservative, evidence-based analysis

### For Verification
- ✅ Verify systematically: Go through each activity methodically
- ✅ Document issues: Keep track of all problems found
- ✅ Fix immediately: Correct issues as you find them
- ✅ Double-check: Verify fixes were applied correctly
- ✅ Note uncertainties: Mark items that need project verification

### For Review
- ✅ Always verify AI-generated content
- ✅ Cross-reference with original files
- ✅ Add missing context or details
- ✅ Correct any inaccuracies
- ✅ Ensure format matches template

## Troubleshooting

### Common Issues

**Issue**: AI doesn't identify activities correctly
- **Solution**: Provide more explicit folder structure description in prompt

**Issue**: Generated dates are incorrect
- **Solution**: Manually extract dates from files and include in prompt

**Issue**: Missing deliverables or metrics
- **Solution**: Review files manually and add missing items during review

**Issue**: Language mixing (Spanish/Catalan/English)
- **Solution**: Specify language preference in prompt, correct during review

**Issue**: File references don't work
- **Solution**: Use relative paths, verify links after transfer to Google Docs

**Issue**: File path doesn't exist
- **Solution**: Check if path is relative vs. absolute, verify folder structure matches report, check for typos in file/folder names

**Issue**: File exists but content doesn't match description
- **Solution**: Update description to match actual content, or find correct file and update reference

**Issue**: Proof doesn't adequately support deliverable/metric
- **Solution**: Add additional proof files if available, strengthen description of how proof supports claim

## Resources

- **Prompt 1 (Cursor)**: [`prompts/01-prepare-file-analysis.md`](./prompts/01-prepare-file-analysis.md) - File analysis prompt
- **Prompt 2 (Thaura)**: [`prompts/02-generate-report.md`](./prompts/02-generate-report.md) - Report generation prompt
- **Example Workflow**: [`examples/workflow-example.md`](./examples/workflow-example.md) - Step-by-step example
- **Sample Output**: [`examples/sample-output.md`](./examples/sample-output.md) - Example generated report
- **Project Guide**: [`../../content/es/resources/guia-informe-actividades.md`](../../content/es/resources/guia-informe-actividades.md) - Google Docs template guide
- **Reference Methodology**: [`from-regen-coordination/`](./from-regen-coordination/) - Source methodology

## Support

For questions or issues with this process:
- **Email**: hola@ReFiBCN.cat
- **Reference**: Check example workflow and sample output files

---

*This process is adapted from Regen Coordination's AI-assisted reporting methodology, tailored for Regenerant Catalunya's local context and optimized for a two-tool workflow (Cursor + Thaura).*
