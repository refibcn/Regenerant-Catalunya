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
│ Step 4: Evaluate Report (Thaura)                           │
│                                                             │
│ Input: Report draft + File analysis                         │
│ Process: Evaluate quality, verify proofs, identify issues,  │
│          append evaluation section to report               │
│ Output: Report with evaluation section appended             │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ Step 5: Iterate on Report (Human + AI)                     │
│                                                             │
│ Input: Report with evaluation section                       │
│ Process: Use evaluation feedback to improve report,         │
│          re-run evaluation if needed                         │
│ Output: Improved report ready for Google Docs                │
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
- Project information section: `## Información básica del proyecto` (required before activities, NO numbering)
  - Required fields: Nombre del proyecto, Red, Personas de contacto, Descripción del proyecto, Web/redes sociales, Carpeta de documentación en Google Drive
  - Optional fields: Lugar/territorio, Problema a ser solucionado, Solución traída, Resúmen de la misión, Modelo de negócio, Estágio de desarrollo, ¿Han recibido fondos significativos?
  - Additional fields: Any fields from Google Doc not in template are included under "Informaciones adicionales"
- Activities: Each as `## Actividad [NUMBER] – [ACTIVITY_NAME]` (no subactivities)
- Proper indentation: 2 spaces for nested items (deliverables and metrics)
- Consistent structure across all reports

**Output:** A structured activity report draft ready for evaluation.

### Step 4: Evaluate Report

**Location:** [`prompts/03-evaluate-report.md`](./prompts/03-evaluate-report.md)

**Process:**
1. Open the activity report draft from Step 3
2. Copy the entire contents
3. Open the file analysis markdown from Step 2
4. Copy the entire contents
5. Open Prompt 3 and copy it
6. In Thaura, paste:
   - The activity report draft
   - The file analysis markdown
   - The prompt
7. Thaura will evaluate the report and append an evaluation section to it
8. Save the updated report (it overwrites `[project-name]-report-draft.md`)

**What it does:**
- **Evaluates report quality**: Completeness, format compliance, clarity
- **Verifies proofs**: Checks all file paths against file analysis, verifies files exist and match descriptions
- **Assesses content quality**: Reviews activity descriptions, deliverables, and metrics
- **Identifies issues**: Missing information, incorrect references, format problems
- **Provides recommendations**: Specific, actionable improvements for each activity
- **Creates iteration checklist**: Prioritized list of fixes needed

**Output Format:**
The evaluation section is appended to the end of the report, separated by a horizontal rule (`---`), containing:
- Executive summary with overall assessment
- Per-activity evaluation with proof verification
- Summary of proof verification results
- Format issues (if any)
- General recommendations (prioritized: Alta, Media, Baja)
- Iteration checklist with specific actions

**Output:** Activity report with evaluation section appended for iterative improvement.

### Step 5: Iterate on Report

**Process:**
1. Review the evaluation section appended to your report
2. Use the recommendations and checklist to improve the report:
   - Fix critical issues (Prioridad Alta) first
   - Address important improvements (Prioridad Media)
   - Consider optional improvements (Prioridad Baja)
3. Make improvements to the report based on evaluation feedback
4. **Re-run Step 4** if significant changes were made (the evaluation section will be updated/replaced)
5. Repeat until the evaluation shows the report is ready

**How to use evaluation feedback:**
- **Prioridad Alta items**: Must be fixed before report is ready for Google Docs
- **Prioridad Media items**: Important improvements that enhance report quality
- **Prioridad Baja items**: Optional enhancements
- **Checklist items**: Specific, actionable tasks - work through them systematically

**When to re-run evaluation:**
- After making significant changes to activities
- After fixing proof references
- After adding missing information
- When you want to verify improvements were effective

**When report is ready:**
- All Prioridad Alta items are resolved
- Proofs are verified and correct
- Format matches Google Docs template
- Content is accurate and complete
- **Remove the evaluation section** before transferring to Google Docs (it's for internal iteration only)

### Step 6: Transfer to Google Docs

Copy the structured content to the project's Google Docs report:

1. **Remove the evaluation section** from the report (it's for internal iteration only)
2. Open the project's Google Docs template
3. Copy each activity block from the draft
4. Paste into the appropriate section
5. Format according to Google Docs template structure
6. Add any additional details or corrections
7. Verify all file links work correctly

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

## Evaluation Process

The evaluation step (Step 4) replaces manual verification and review checklists with an AI-assisted evaluation that appends an evaluation section to your report. This provides structured, actionable feedback for iterative improvement.

### Purpose of Evaluation

The evaluation section helps you:
- **Verify proofs systematically**: All file references are checked against the file analysis
- **Identify issues early**: Problems are caught before transferring to Google Docs
- **Get actionable feedback**: Specific recommendations for each activity
- **Track improvements**: Clear checklist of what needs to be fixed

### What Gets Evaluated

- **Report Quality**: Completeness, format compliance, clarity
- **Proof Verification**: File paths, file existence, content matching
- **Content Quality**: Activity descriptions, deliverables, metrics
- **Format Compliance**: Structure matches Google Docs template

### How Evaluation Helps

- **Quick scanning**: Status table shows activity health at a glance
- **Focused feedback**: Only activities with issues are detailed, reducing noise
- **Prioritized actions**: Problems grouped by priority (Alta, Media) with clear actions
- **Concise format**: ~50% shorter than detailed evaluation while preserving critical information
- **Action-oriented**: Every item leads to a specific, actionable fix
- **Iterative improvement**: Re-run evaluation after making changes to verify improvements

### Evaluation Section Format

The evaluation section is appended to the end of your report and includes:
- **Resumen Ejecutivo**: Concise summary with status, activity count, and proof verification stats
- **Tabla de Estado Rápido**: Quick reference table showing status of each activity at a glance
- **Problemas y Acciones Requeridas**: Prioritized list of problems with required actions (Alta/Media priority)
- **Recomendaciones por Actividad**: Detailed recommendations for activities with issues only (activities without problems are skipped)
- **Checklist de Iteración**: Focused checklist of specific actions needed

The streamlined format focuses on problems and actions, reducing length by ~50% compared to detailed per-activity evaluation.

**Important**: The evaluation section is for internal iteration only. Remove it before transferring the report to Google Docs.

## File Organization

### Project Folder Structure

```
docs/project-reports/
├── README.md (this file)
├── prompts/
│   ├── 01-prepare-file-analysis.md  ← Step 2: Run in Cursor
│   ├── 02-generate-report.md         ← Step 3: Run in Thaura
│   └── 03-evaluate-report.md         ← Step 4: Run in Thaura
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

### For Evaluation
- ✅ Run evaluation after generating report: Use Prompt 3 to get structured feedback
- ✅ Review evaluation section carefully: Understand all recommendations
- ✅ Prioritize fixes: Address Prioridad Alta items first
- ✅ Re-run evaluation after changes: Verify improvements were effective
- ✅ Remove evaluation section: Before transferring to Google Docs

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
- **Prompt 3 (Thaura)**: [`prompts/03-evaluate-report.md`](./prompts/03-evaluate-report.md) - Report evaluation prompt
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
