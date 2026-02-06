# Prompt 2: Generate Activity Report (Run in Thaura)

**Purpose:** Generate a structured activity report draft from the file analysis markdown and existing Google Doc content (if available).

**When to use:** After completing Prompt 1, copy the file analysis markdown, any existing Google Doc content, and this prompt into Thaura.

---

## Instructions

1. Open the file analysis markdown created in Prompt 1 (e.g., `la-suculenta-file-analysis.md`)
2. Copy the entire contents of that file
3. **Check for existing Google Doc content:**
   - If the project has already started filling out their Google Docs report, copy that content
   - This may include partial activity descriptions, dates, or other information
   - If no Google Doc content exists yet, skip this step
4. Copy the prompt below
5. Paste the file analysis markdown, Google Doc content (if available), and the prompt into Thaura
6. Thaura will generate the activity report
7. Save the output as `[project-name]-report-draft.md`

---

## Prompt for Thaura

```markdown
I need help generating an Activity Report draft for a project in Regenerant Catalunya, a regenerative finance program in Catalonia.

I have two sources of information:

1. **File Analysis**: Analysis of files uploaded to Google Drive
2. **Google Doc Content** (if available): Information the project has already started filling in their Google Docs report

Use BOTH sources to generate a comprehensive structured activity report. When information conflicts or overlaps:
- **Prioritize Google Doc content** - This is what the project has already prepared
- **Use file analysis to fill gaps** - Add missing activities, deliverables, or metrics from files
- **Cross-reference both sources** - Verify dates, locations, and details match

---

## File Analysis

[PASTE THE ENTIRE FILE ANALYSIS MARKDOWN HERE]

---

## Google Doc Content (if available)

[PASTE GOOGLE DOC CONTENT HERE - If the project has already started filling their Google Docs report, paste that content here. If not, write "No Google Doc content available yet."]

---

**Task:**
Based on both the file analysis and Google Doc content (if available), generate a structured activity report following the format specified below.

**Important:**
- If Google Doc content exists, use it as the primary source and enhance it with file analysis
- If no Google Doc content exists, generate the report entirely from file analysis
- Merge information from both sources when they complement each other
- If there are conflicts, note them in the report for human review

**Output Format Requirements:**

The report must follow this EXACT structure. Start with project information, then list activities. Use proper indentation (2 spaces for nested items).

# Informe de Actividades – [PROJECT_NAME]

## Información básica del proyecto

- **Nombre del proyecto:** [PROJECT_NAME]
- **Red:** [NETWORK: Miceli Social • La Fundició / Keras Buti]
- **Personas de contacto:** [Nombre, teléfono/WhatsApp, correo]
- **Descripción del proyecto:** [Description]
- **Web / redes sociales:**
  [URL 1]
  [URL 2]
  [URL 3]
- **Carpeta de documentación en Google Drive:** [URL]

**Informaciones adicionales (opcionales):**
- **Lugar / territorio:** [TERRITORY/LOCATION]
- **Problema a ser solucionado:** [Description]
- **Solución traída:** [Description]
- **Resúmen de la misión:** [Description]
- **Modelo de negócio:** [Description]
- **Estágio de desarrollo:** [Description]
- **¿Han recibido fondos significativos?:** [Yes/No/Description]
- **[Cualquier otra información adicional que el proyecto haya proporcionado]:** [Value]

---

## Actividad [NUMBER] – [ACTIVITY_NAME]

**IMPORTANT - Activity Structure:**
- **NO subactivities**: If Google Doc or file analysis mentions subactivities (e.g., "Actividad 1.1", "Actividad 1.2"), split them into SEPARATE activities
- **Grouping**: If multiple related activities exist, you can mention the grouping in the activity title or description (e.g., "Actividad 1 – Participación en ferias y eventos (grupo de actividades de difusión)")
- **Each activity is independent**: Each activity block should be complete and standalone

- **Descripción:** [Describe what the project did, detailing key processes, specific contributions, and distinguishing their work from partners/collaborators. Be specific about actions taken, processes followed, and outcomes. Write in Spanish or Catalan as appropriate to the project's language.]

- **Fechas:** [When did the activity begin? If ongoing, note start date. Use dates extracted from the file analysis. Format: DD de MES de YYYY or "Desde [DATE] hasta [DATE]" or "Fecha por confirmar" if unavailable]

- **Lugar:** [Barrio / pueblo / espacio where activity took place, if identifiable from files. Use "Lugar por confirmar" if unclear]

**Outputs – Entregables:**

[For each tangible deliverable created/achieved, list:]

  - **Nombre del entregable:** [What was actually created or achieved? e.g., "Presentación educativa sobre agroecología", "Taller realizado", "Cesión de uso legalizada", "Espacio asambleario organizado" - NOT "Carpeta de fotos" or "Fotos del evento"]
  - **Descripción breve:** [What it is / why it's important / how it can be reused]
  - **Prueba / Enlace:** [Reference to specific file or folder that PROVES this deliverable exists: "docs/project-reports/[project]/[folder]/[file]" or "Carpeta [folder] en Google Drive con [description of proof]"]

**Outputs – Métricas:**

[For each quantitative metric, list:]

  - **Métrica:** [What are you measuring? e.g., "Personas participantes", "Sesiones realizadas", "Talleres realizados"]
  - **Descripción:** [How was it counted / what does this number represent]
  - **Valor:** [Actual measurement or reasonable estimate based on files. If exact number unavailable, note as "Aproximadamente [X]" or "Entre [X] y [Y]" or "Requiere verificación del proyecto"]
  - **Prueba (si existe):** [Reference to evidence that PROVES this metric: "Foto de grupo en [file]", "Lista de asistencia en [folder]", "Carpeta [folder] con [N] archivos que documentan [what]", etc.]

**Pruebas adicionales (si aplica):**

[If there are images, links, or files that don't directly link to a specific deliverable or metric above, list them here as general proof of the activity:]

  - **Tipo de prueba:** [e.g., "Fotografías adicionales", "Documentos complementarios"]
  - **Descripción:** [What these proofs show]
  - **Enlace / Referencia:** [File paths or folder references]

**Guidance for AI:**

- **Prioritize Google Doc content**: If Google Doc content exists, use it as the primary source. It represents what the project has already documented.
- **Extract project information**: When extracting "Información básica del proyecto" from Google Doc:
  - Extract ALL required fields (Nombre, Red, Personas de contacto, Descripción, Web/redes sociales, Carpeta Google Drive)
  - Extract optional fields only if they are present in Google Doc
  - If Google Doc has fields not in the template, include them under "Informaciones adicionales" with their original field names
  - Ensure NO information is lost - capture everything from Google Doc, even if it's not in the standard template
  - If information is missing, mark as "Por confirmar" or "No disponible" rather than omitting the field
- **Enhance with file analysis**: Use file analysis to:
  - Add missing activities not yet in Google Doc
  - Add deliverables and metrics from uploaded files
  - Verify and cross-reference information
  - Fill in gaps where Google Doc is incomplete
  - Supplement project information if Google Doc is incomplete
- **Merge sources intelligently**: 
  - If Google Doc has an activity description, use it and add file references from analysis
  - If file analysis identifies activities not in Google Doc, include them
  - If both sources mention the same activity, merge the information
- **Be conservative**: Only report activities clearly evidenced by either source. If uncertain, note as "[ACTIVITY] (requiere verificación)"
- **Be specific**: Use details from both sources - Google Doc descriptions and file analysis details
- **Evidence-based**: Every deliverable and metric should reference specific files or folders from the analysis, or information from Google Doc
- **Deliverables vs. Proofs**: 
  - **Deliverables** are what was CREATED or ACHIEVED (e.g., "Taller realizado", "Documento legal", "Espacio organizado")
  - **Proofs** are the EVIDENCE that proves deliverables/metrics exist (e.g., photos, PDFs, links)
  - Do NOT list proofs as deliverables themselves (e.g., don't say "Carpeta de fotos" as a deliverable - say "Evento realizado" with photos as proof)
  - Extract what was actually achieved from the files, then link the files as proof
- **Proper indentation**: Use 2 spaces for indentation in nested lists (deliverables and metrics should be indented under their sections)
- **Language**: Use Spanish or Catalan terminology appropriate to the project's language (as indicated in the file analysis or Google Doc)
- **Format**: Match the Google Docs template structure exactly
  - **REQUIRED**: Start with "## Información básica del proyecto" section before any activities (NO numbering)
  - **REQUIRED**: Include ALL required fields from Google Doc template:
    - Nombre del proyecto
    - Red (format: "Miceli Social • La Fundició / Keras Buti")
    - Personas de contacto (Nombre, teléfono/WhatsApp, correo)
    - Descripción del proyecto
    - Web / redes sociales (list all URLs provided)
    - Carpeta de documentación en Google Drive (URL)
  - **OPTIONAL**: Include optional fields only if present in Google Doc or file analysis:
    - Lugar / territorio
    - Problema a ser solucionado
    - Solución traída
    - Resúmen de la misión
    - Modelo de negócio
    - Estágio de desarrollo
    - ¿Han recibido fondos significativos?
  - **ADDITIONAL INFO**: If Google Doc contains fields not in the template, include them under "Informaciones adicionales" with their original field names
  - **NO INFORMATION LOST**: Ensure all information from Google Doc is captured - if a field exists in Google Doc but not in template, add it to "Informaciones adicionales"
  - **REQUIRED**: Use horizontal rule (`---`) to separate project info from activities
  - **REQUIRED**: Title format: `# Informe de Actividades – [PROJECT_NAME]`
  - If required fields are missing, mark as "Por confirmar" or "No disponible" rather than omitting them
- **Activity identification**: 
  - Start with activities from Google Doc (if available)
  - Add activities from file analysis that aren't in Google Doc
  - **NO subactivities**: If Google Doc has "Actividad 1.1", "Actividad 1.2", etc., split them into separate numbered activities (Actividad 1, Actividad 2, etc.)
  - **Grouping**: If multiple related activities exist, mention the grouping in the activity title or description, but keep them as separate activity blocks
  - Each activity must be a complete, standalone block
- **Dates**: 
  - Use dates from Google Doc if available (they're likely more accurate)
  - Supplement with dates from file analysis
  - Convert formats consistently (e.g., "2024-10-05" → "5 de octubre de 2024", "15 JUNY 25" → "15 de junio de 2025")
- **Metrics**: 
  - Use metrics from Google Doc if available
  - Add metrics from file analysis (e.g., file counts suggesting scale)
  - Estimate conservatively based on file counts when Google Doc doesn't have metrics
  - If unclear, note "Requiere verificación del proyecto"
- **File references**: Use the exact file paths from the file analysis to provide evidence for deliverables

**Important Notes:**

- This is a DRAFT report that will be reviewed and refined by humans
- **When Google Doc content exists**: Use it as the foundation and enhance with file analysis
- **When no Google Doc content exists**: Generate entirely from file analysis
- Focus on activities clearly evidenced by either source
- If file content is unclear (e.g., images without context), note this in the description
- Reference files using relative paths from the file analysis: `docs/project-reports/[project]/[folder]/[file]`
- For images, note what they likely show based on file names and context
- Group related folders if the file analysis suggests they represent parts of the same activity
- If the file analysis notes uncertainties, reflect those in the report
- If Google Doc and file analysis conflict, note the conflict for human review

**Output Structure Summary:**

1. **Title**: `# Informe de Actividades – [PROJECT_NAME]`
2. **Project Information Section**: `## Información básica del proyecto` (NO numbering, with all required fields)
3. **Separator**: `---` (horizontal rule)
4. **Activities**: Each activity as `## Actividad [NUMBER] – [ACTIVITY_NAME]` (no subactivities, split them)
5. **Consistent formatting**: Use exact indentation (2 spaces) and structure shown above

**Generate the activity report now, following the format above exactly.**
```

---

## Expected Output

After running this prompt in Thaura with the file analysis markdown (and Google Doc content if available), you should get:

- A structured activity report with one block per identified activity
- Activities from Google Doc (if available) enhanced with file references
- Additional activities from file analysis not yet in Google Doc
- Each activity includes description, dates, location, deliverables, and metrics
- All references point to specific files from the analysis
- Format matches the Google Docs template structure
- Merged information from both sources where applicable

---

## Next Steps

After generating the report:

1. **Review** the draft using the quality checklist in [`../README.md`](../README.md)
2. **Refine** based on project knowledge and file verification
3. **Transfer** to Google Docs using the project's template
4. **Share** with the project for final verification

---

## Example Usage

### Scenario A: With Google Doc Content

1. **In Cursor**: Run Prompt 1 on `docs/project-reports/la-suculenta/`
   - Output: `la-suculenta-file-analysis.md`

2. **Get Google Doc content**: 
   - Open the project's Google Docs report
   - Copy any content they've already filled in
   - Note which activities are complete vs. partial

3. **In Thaura**: 
   - Open `la-suculenta-file-analysis.md` and copy entire contents
   - Copy Google Doc content
   - Copy Prompt 2 above
   - Paste all three into Thaura (file analysis, Google Doc content, prompt)
   - Output: Enhanced activity report draft that merges both sources

4. **Review & Refine**: Use the generated draft to complete/update the Google Docs report

### Scenario B: Without Google Doc Content

1. **In Cursor**: Run Prompt 1 on `docs/project-reports/la-suculenta/`
   - Output: `la-suculenta-file-analysis.md`

2. **In Thaura**: 
   - Open `la-suculenta-file-analysis.md`
   - Copy entire contents
   - Copy Prompt 2 above
   - In the Google Doc section, write "No Google Doc content available yet."
   - Paste both into Thaura
   - Output: Activity report draft generated from file analysis

3. **Review & Refine**: Use the generated draft to create initial report in Google Docs

---

## Related Files

- **Prompt 1**: [`01-prepare-file-analysis.md`](./01-prepare-file-analysis.md)
- **Process Guide**: [`../README.md`](../README.md)
- **Example Workflow**: [`../examples/workflow-example.md`](../examples/workflow-example.md)
- **Sample Output**: [`../examples/sample-output.md`](../examples/sample-output.md)
