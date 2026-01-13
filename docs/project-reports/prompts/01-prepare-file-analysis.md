# Prompt 1: File Analysis (Run in Cursor)

**Purpose:** Analyze project files and create a structured markdown summary that will be used as input for the report generation prompt.

**When to use:** Run this in Cursor when you have downloaded project files from Google Drive and need to prepare them for AI analysis.

---

## Instructions

1. Navigate to the project folder in Cursor (e.g., `docs/project-reports/la-suculenta/`)
2. Copy the prompt below
3. Paste it into Cursor's chat
4. Cursor will analyze the files and generate a markdown file
5. Save the output as `[project-name]-file-analysis.md` in the project folder

---

## Prompt for Cursor

```markdown
I need you to analyze the files in the current project folder and create a structured markdown summary for generating an activity report.

**Project Context:**
- **Project Name:** [PROJECT_NAME - e.g., "La Suculenta"]
- **Network:** [NETWORK: Miceli / Keras Buti / La Fundició]
- **Territory:** [TERRITORY/LOCATION - e.g., "Barcelona / L'Hospitalet de Llobregat"]
- **Language:** [Spanish / Catalan / Mixed]

**Task:**
Analyze all files and folders in the current directory and create a comprehensive markdown document that includes:

1. **Complete folder structure** with file counts and types per folder
2. **Key file identification** - list important files with their paths and what they likely contain
3. **Date extraction** - extract any dates from file names, folder names, or file metadata
4. **Activity identification** - identify potential activities based on folder names and file organization
5. **File type analysis** - categorize files by type (PDFs, images, documents, etc.) and what they likely represent

**Output Format:**

Create a markdown file with the following structure:

```markdown
# File Analysis: [PROJECT_NAME]

## Project Information
- **Project Name:** [NAME]
- **Network:** [NETWORK]
- **Territory:** [TERRITORY]
- **Language:** [LANGUAGE]
- **Analysis Date:** [DATE]

## Folder Structure

### [Folder Name 1]
- **Path:** `[relative/path/to/folder]`
- **File Count:** [N] files
- **File Types:** [X JPEGs, Y PDFs, Z PNGs, etc.]
- **Likely Activity Type:** [Description based on folder name and contents]
- **Key Files:**
  - `[filename.ext]` - [Description of what this file likely contains]
  - `[filename.ext]` - [Description]
- **Dates Extracted:** [Any dates found in file names or metadata]
- **Notes:** [Any relevant observations]

[Repeat for each folder]

## Activity Identification

Based on folder structure and file organization, the following activities are likely:

1. **[Activity Name 1]** (from folder `[folder-name]`)
   - Evidence: [List files/folders that support this]
   - Estimated scale: [Small/Medium/Large based on file count]
   - Likely dates: [If available]

2. **[Activity Name 2]** (from folder `[folder-name]`)
   - Evidence: [List files/folders that support this]
   - Estimated scale: [Small/Medium/Large]
   - Likely dates: [If available]

[Continue for all identified activities]

## File Inventory

### PDFs
- `[path/to/file.pdf]` - [Likely content description]

### Images
- `[path/to/file.jpg]` - [Likely content description]

### Documents
- `[path/to/file.docx]` - [Likely content description]

[Continue for all file types]

## Date Patterns

- **Dates found in file names:** [List all dates found]
- **Dates found in folder names:** [List all dates found]
- **Date ranges:** [If multiple dates suggest a timeline]

## Observations

- [Any notable patterns, missing information, or special considerations]
- [File organization quality and clarity]
- [Any files that might contain additional context (notes, reports, etc.)]
```

**Guidelines:**

- **Be thorough**: List all folders and provide file counts
- **Extract dates**: Look for dates in file names (e.g., "2024-10-05", "15 JUNY 25", "4 ABRIL 2025")
- **Identify activities**: Use folder names to suggest activity types (e.g., "TALLERES" → workshops, "EVENTO" → events)
- **Categorize files**: Group by type and suggest what they represent
- **Be specific**: Include file paths relative to the project folder
- **Note uncertainties**: If something is unclear, note it in the observations

**Important:**
- Use relative paths from the project folder root
- Format dates consistently (extract and convert to readable format when possible)
- Focus on evidence-based analysis - only identify activities clearly supported by files
- If file content is unclear from names alone, note this

Generate the file analysis markdown now.
```

---

## Expected Output

After running this prompt in Cursor, you should have a markdown file like:

- `la-suculenta-file-analysis.md`
- `la-marmita-file-analysis.md`

This file will contain all the structured information needed for the next step.

---

## Next Step

Once you have the file analysis markdown, proceed to:
- **Prompt 2**: [`02-generate-report.md`](./02-generate-report.md) - Use the markdown file to generate the activity report in Thaura
