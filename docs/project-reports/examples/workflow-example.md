# Example Workflow: Generating Report for La Marmita

This walkthrough demonstrates the complete process of generating an activity report draft from downloaded Google Drive files, using La Marmita as an example.

## Project Overview

**Project:** La Marmita  
**Network:** Keras Buti  
**Territory:** Barcelona / L'Hospitalet de Llobregat  
**Files Location:** `docs/project-reports/la-marmita/`

## Step 1: Download & Organize Files

Files were downloaded from Google Drive and organized in the following structure:

```
la-marmita/
├── Evento 1_/
│   ├── 11img.jpg
│   └── 12imgg.jpg
├── Evento Castañada/
│   ├── 31.jpg
│   ├── 31img.jpg
│   └── 32img.jpg
├── Evento La Marmita con Jesus Pagan inventor Olla/
│   ├── 21imgg.jpg
│   ├── 22img.jpg
│   ├── 23img.jpg
│   ├── 24img.jpg
│   ├── 25img.jpg
│   ├── 26img.jpg
│   ├── 27img.jpg
│   ├── 28img.jpg
│   └── 29img.jpg
└── ReFi BCN notas.docx
```

## Step 2: Analyze Folder Structure

**Activity Identification:**

From the folder structure, we can identify three distinct activities:

1. **Evento 1** - A community event (2 photos)
2. **Evento Castañada** - A Castañada celebration event (3 photos)
3. **Evento La Marmita con Jesus Pagan inventor Olla** - An event featuring Jesus Pagan, inventor of the Olla (9 photos)
4. **ReFi BCN notas.docx** - Notes document (may contain additional context)

**Observations:**

- All folders represent events ("Evento")
- Each event has photo documentation
- The third event appears to be more substantial (9 photos vs 2-3)
- There's a notes document that might provide additional context
- No dates visible in folder names, but file names suggest sequential numbering

## Step 3: Extract Context

**Project Context:**
- Name: La Marmita
- Network: Keras Buti
- Territory: Barcelona / L'Hospitalet de Llobregat
- Language: Spanish/Catalan (primarily Spanish)

**File Analysis:**
- Total: 3 event folders + 1 notes document
- File types: Primarily images (JPG), one Word document
- Scale: Small to medium events (2-9 photos each)
- Dates: Not explicitly visible in folder names; may be in file metadata or notes document

## Step 4: Generate Project-Specific Prompt

Using the template from [`../prompt-template.md`](../prompt-template.md), we create this prompt:

```markdown
I need help generating an Activity Report draft for a project in Regenerant Catalunya, a regenerative finance program in Catalonia, Spain.

**Project Context:**
- **Project Name:** La Marmita
- **Network:** Keras Buti
- **Territory:** Barcelona / L'Hospitalet de Llobregat
- **Language:** Spanish/Catalan (respond in Spanish, with Catalan terms as appropriate)

**File Structure Analysis:**
I have downloaded files from Google Drive organized in the following structure:

- `Evento 1_/` - Contains 2 image files (JPG) from a community event
- `Evento Castañada/` - Contains 3 image files (JPG) from a Castañada celebration event
- `Evento La Marmita con Jesus Pagan inventor Olla/` - Contains 9 image files (JPG) from an event featuring Jesus Pagan, inventor of the Olla (traditional cooking pot)
- `ReFi BCN notas.docx` - Notes document that may contain additional context about activities

**Task:**
Analyze the folder structure and file organization to identify distinct activities. For each activity, generate a structured report following the format specified below.

**Output Format Requirements:**

Generate one activity block per identified activity. Use this exact structure:

## Actividad [NUMBER] – [ACTIVITY_NAME]

- **Descripción:** [Describe what the project did, detailing key processes, specific contributions, and distinguishing their work from partners/collaborators. Be specific about actions taken, processes followed, and outcomes. Write in Spanish.]

- **Fechas:** [When did the activity begin? If ongoing, note start date. Extract dates from file names, folder names, or file metadata when possible. Format: DD de MES de YYYY or "Desde [DATE] hasta [DATE]". If dates unavailable, note "Fecha por confirmar"]

- **Lugar:** [Barrio / pueblo / espacio where activity took place, if identifiable from files. If unclear, note "Lugar por confirmar"]

**Outputs – Entregables:**

[For each tangible deliverable created, list:]

- **Nombre del entregable:** [What was created?]
- **Enlace / prueba:** [Reference to specific file or folder]
- **Descripción breve:** [What it is / why it's important]

**Outputs – Métricas:**

[For each quantitative metric, list:]

- **Métrica:** [What are you measuring?]
- **Descripción:** [How was it counted / what does this number represent]
- **Valor:** [Actual measurement or reasonable estimate based on files]
- **Prueba (si existe):** [Reference to evidence]

**Guidance for AI:**

- **Be conservative**: Only report activities clearly evidenced by files
- **Be specific**: Use details from file names and folder structure
- **Evidence-based**: Every deliverable should reference specific files
- **Language**: Use Spanish terminology
- **Format**: Match the Google Docs template structure exactly
- **Activity identification**: Each "Evento" folder represents a distinct activity
- **Metrics**: Estimate conservatively based on photo counts. If unclear, note "Requiere verificación del proyecto"

**File Analysis:**

Key files and folders:

- `Evento 1_/11img.jpg`, `12imgg.jpg` - Photos from first event
- `Evento Castañada/31.jpg`, `31img.jpg`, `32img.jpg` - Photos from Castañada celebration
- `Evento La Marmita con Jesus Pagan inventor Olla/` - Multiple photos (21imgg.jpg through 29img.jpg) from event with Jesus Pagan
- `ReFi BCN notas.docx` - Notes document (content unknown, may provide dates or context)

**Important Notes:**

- This is a DRAFT report that will be reviewed and refined by humans
- Focus on activities clearly evidenced by the uploaded files
- Each "Evento" folder represents a distinct community event activity
- Reference files using relative paths: `docs/project-reports/la-marmita/[folder]/[file]`
- For images, note what they show if identifiable from file names or context

**Generate the activity report now:**
```

## Step 5: Run AI Analysis

**Process:**

1. Copy the prompt above
2. Paste into AI tool (ChatGPT, Claude, etc.)
3. Optionally upload or describe image files if AI tool supports image analysis
4. Review generated output

**Expected Output Structure:**

The AI should generate 3 activity blocks (one per event folder), each following the specified format.

## Step 6: Review Generated Draft

**Sample AI Output (excerpt):**

```markdown
## Actividad 1 – Evento comunitario La Marmita

- **Descripción:** Organización de un evento comunitario en el marco del proyecto La Marmita. El evento reunió a miembros de la comunidad para actividades relacionadas con el proyecto. (Nota: Descripción limitada por falta de contexto adicional en los archivos. Requiere verificación del proyecto para detalles específicos.)

- **Fechas:** Fecha por confirmar

- **Lugar:** Lugar por confirmar

**Outputs – Entregables:**

- **Nombre del entregable:** Documentación fotográfica del evento
- **Enlace / prueba:** `docs/project-reports/la-marmita/Evento 1_/11img.jpg`, `12imgg.jpg`
- **Descripción breve:** Fotografías que documentan el desarrollo del evento comunitario.

**Outputs – Métricas:**

- **Métrica:** Eventos realizados
- **Descripción:** Número de eventos comunitarios documentados
- **Valor:** 1
- **Prueba (si existe):** Carpeta `Evento 1_/` con 2 fotografías

[... continues for other activities ...]
```

## Step 7: Refine Draft

**Issues to Address:**

1. **Missing Dates**: Extract dates from file metadata or notes document
2. **Vague Descriptions**: Add specific details about each event type
3. **Missing Context**: Review `ReFi BCN notas.docx` for additional information
4. **Location**: Confirm locations if available in notes or file metadata
5. **Metrics**: Refine participant counts if visible in photos

**Refinement Actions:**

- [ ] Open `ReFi BCN notas.docx` to extract dates and context
- [ ] Review photos to estimate participant counts
- [ ] Add specific event descriptions based on folder names
- [ ] Verify file references are correct
- [ ] Add any missing deliverables or metrics

**Refined Example (after review):**

```markdown
## Actividad 1 – Evento comunitario La Marmita

- **Descripción:** Organización de un evento comunitario en el marco del proyecto La Marmita, enfocado en actividades relacionadas con alimentación y comunidad. El evento incluyó participación de miembros de la red Keras Buti y la comunidad local.

- **Fechas:** [Fecha extraída de notas o metadata]

- **Lugar:** Barcelona / L'Hospitalet de Llobregat

**Outputs – Entregables:**

- **Nombre del entregable:** Documentación fotográfica del evento
- **Enlace / prueba:** Carpeta `Evento 1_/` en Google Drive (archivos: 11img.jpg, 12imgg.jpg)
- **Descripción breve:** Fotografías que documentan el desarrollo del evento comunitario, útiles para memoria y comunicación del proyecto.

**Outputs – Métricas:**

- **Métrica:** Eventos comunitarios realizados
- **Descripción:** Número de eventos comunitarios documentados y organizados por el proyecto
- **Valor:** 1
- **Prueba (si existe):** Carpeta `Evento 1_/` con 2 fotografías del evento
```

## Step 8: Transfer to Google Docs

**Process:**

1. Open La Marmita's Google Docs template
2. Copy each refined activity block
3. Paste into the template structure
4. Format according to Google Docs template
5. Add any additional details
6. Verify file links work (update to Google Drive links if needed)

**Final Structure in Google Docs:**

```
Informe de actividades – La Marmita

[Información básica del proyecto]

Actividad 1 – Evento comunitario La Marmita
[Refined content]

Actividad 2 – Evento Castañada
[Refined content]

Actividad 3 – Evento con Jesus Pagan inventor Olla
[Refined content]
```

## Key Learnings

### What Worked Well

✅ Folder names clearly indicated activities  
✅ Photo counts helped estimate event scale  
✅ Structured prompt generated consistent output format  

### Challenges Encountered

⚠️ **Missing dates**: Had to extract from file metadata or notes  
⚠️ **Limited context**: Photos alone don't provide full activity descriptions  
⚠️ **File references**: Needed to convert to Google Drive links for final report  

### Recommendations

1. **Always review notes documents** - They often contain dates and context
2. **Check file metadata** - Dates may be in EXIF data or file properties
3. **Be conservative** - Don't invent details not evidenced by files
4. **Request project verification** - Always note items requiring project confirmation

## Next Steps

After completing this workflow:

1. Share draft with La Marmita project for review
2. Incorporate project feedback
3. Finalize Google Docs report
4. Prepare for transfer to Karma GAP (future step)

## Related Resources

- **Process Guide**: [`../README.md`](../README.md)
- **Prompt Template**: [`../prompt-template.md`](../prompt-template.md)
- **Sample Output**: [`sample-output.md`](./sample-output.md)
- **Project Guide**: [`../../content/es/resources/guia-informe-actividades.md`](../../content/es/resources/guia-informe-actividades.md)

---

*This example demonstrates the workflow for a project with relatively simple file organization. Projects with more complex structures may require additional analysis steps.*
