# Prompt 3: Evaluate Activity Report (Run in Thaura)

**Purpose:** Evaluate the generated activity report draft, verify proofs, identify issues, and append an evaluation section to the end of the report for iterative improvement.

**When to use:** After completing Prompt 2, copy the activity report draft, file analysis markdown, and this prompt into Thaura.

---

## Instructions

1. Open the activity report draft created in Prompt 2 (e.g., `la-suculenta-report-draft.md`)
2. Copy the entire contents of that file
3. Open the file analysis markdown from Prompt 1 (e.g., `la-suculenta-file-analysis.md`)
4. Copy the entire contents of that file
5. Copy the prompt below
6. Paste the activity report draft, file analysis markdown, and the prompt into Thaura
7. Thaura will evaluate the report and append an evaluation section to it
8. Save the updated report (it will overwrite `[project-name]-report-draft.md`)

---

## Prompt for Thaura

```markdown
I need help evaluating an Activity Report draft for a project in Regenerant Catalunya, a regenerative finance program in Catalonia.

I have two sources of information:

1. **Activity Report Draft**: The generated report that needs to be evaluated
2. **File Analysis**: The original file analysis used to generate the report (for cross-referencing proofs)

Your task is to:
- Assess the **reporting quality** of the activity report (structure, completeness, clarity, evidence, information fidelity)
- Systematically verify all information against the file analysis to detect AI hallucinations
- Identify specific, actionable improvements for the report
- Provide structured, scannable evaluation with clear actionables
- Append an evaluation section to the END of the report (after all activities)

---

## Activity Report Draft

[PASTE THE ENTIRE ACTIVITY REPORT DRAFT HERE]

---

## File Analysis

[PASTE THE ENTIRE FILE ANALYSIS MARKDOWN HERE]

---

**Task:**

Evaluate the activity report draft above and append an evaluation section to the end of the report. The evaluation should focus on **reporting quality** assessment with structured dimensions and specific, actionable items. **CRITICAL**: Systematically cross-reference ALL claims in the report against the file analysis to detect any AI hallucinations or invented information.

The evaluation section should follow this exact format:

---

## Evaluación del Informe

### Resumen Ejecutivo

- **Estado:** [✅ Listo / ⚠️ Requiere correcciones / ❌ Requiere revisión mayor]
- **Calidad de reporte:** [Breve descripción: "Excelente", "Buena con áreas de mejora", "Requiere trabajo significativo"]
- **Actividades evaluadas:** [N]
- **Aspectos a mejorar:** [Lista breve de temas principales: ej. "Fechas específicas, precisión de métricas, fidelidad de información"]

### Calidad del Reporte - Evaluación Estructurada

#### Estructura y Organización
- **Estado:** [✅ / ⚠️ / ❌]
- **Observaciones:** [Breve descripción: ¿Cumple con formato? ¿Flujo lógico? ¿Secciones completas?]
- **Acciones:** 
  - [ ] [Acción específica y concreta - ej. "Agregar sección faltante de información básica"]
  - [ ] [Acción específica y concreta]

#### Completitud de Información
- **Estado:** [✅ / ⚠️ / ❌]
- **Observaciones:** [Qué falta, qué está completo - campos vacíos, actividades incompletas, información pendiente]
- **Acciones:**
  - [ ] [Acción específica - ej. "Completar campo 'Carpeta de documentación en Google Drive' en información básica"]
  - [ ] [Acción específica]

#### Calidad de Evidencia
- **Estado:** [✅ / ⚠️ / ❌]
- **Observaciones:** [Estado de pruebas/enlaces - ¿accesibles? ¿válidos? ¿apropiados?]
- **Acciones:**
  - [ ] [Acción específica - ej. "Corregir enlace roto en Actividad 2: [enlace específico]"]
  - [ ] [Acción específica]

#### Claridad y Precisión
- **Estado:** [✅ / ⚠️ / ❌]
- **Observaciones:** [Aspectos de claridad - descripciones claras, métricas precisas, fechas exactas]
- **Acciones:**
  - [ ] [Acción específica - ej. "Especificar fecha exacta para Actividad 1 (actualmente dice 'septiembre-diciembre 2024')"]
  - [ ] [Acción específica]

#### Fidelidad de la Información
- **Estado:** [✅ / ⚠️ / ❌]
- **Observaciones:** [Verificación contra análisis de archivos - ¿hay información inventada o mal interpretada? ¿Todas las afirmaciones son verificables?]
- **Verificaciones realizadas:**
  - ✅/⚠️/❌ Actividades: [¿Cada actividad mencionada existe en análisis de archivos?]
  - ✅/⚠️/❌ Fechas: [¿Las fechas coinciden con nombres de archivos/metadatos o son inferencias razonables?]
  - ✅/⚠️/❌ Métricas: [¿Los números provienen de conteos reales de archivos o fuentes documentadas?]
  - ✅/⚠️/❌ Entregables: [¿Los entregables mencionados existen en estructura de archivos?]
  - ✅/⚠️/❌ Descripciones: [¿Las descripciones coinciden con lo que sugieren los archivos vs. inferencia de IA?]
- **Acciones:**
  - [ ] [Acción específica para verificar/corregir información sospechosa - ej. "Verificar: Métrica '12 participantes' en Actividad 1 - No encontrado en análisis de archivos"]
  - [ ] [Acción específica - ej. "Posible alucinación: Descripción detallada de metodología en Actividad 2 - Requiere confirmación con proyecto"]

### Análisis por Actividad

| Actividad | Estado | Aspectos Clave | Acciones Requeridas |
|-----------|--------|----------------|---------------------|
| Actividad 1 - [Nombre] | ✅/⚠️/❌ | [Breve observación sobre calidad de reporte] | [Acción específica y concreta] |
| Actividad 2 - [Nombre] | ✅/⚠️/❌ | [Breve observación] | [Acción específica] |

[Use ✅ for well-documented activities, ⚠️ for activities needing improvement, ❌ for activities with significant gaps. Keep observations brief and focused on reporting quality.]

### Acciones Prioritarias

#### Prioridad Alta
- [ ] [Acción específica y concreta - qué hacer exactamente - ej. "Verificar número exacto de talleres con el proyecto (actualmente estimado como 8-10 basado en conteo de archivos)"]
- [ ] [Acción específica y concreta]

#### Prioridad Media
- [ ] [Acción específica y concreta]

### Recomendaciones para Mejorar el Reporte

[3-5 recomendaciones estructuradas, cada una con:]

**Recomendación 1: [Título breve]**
- **Qué mejorar:** [Aspecto específico del reporte]
- **Por qué:** [Razón breve - impacto en calidad del reporte]
- **Cómo:** [Pasos concretos o ejemplos específicos]

**Recomendación 2: [Título breve]**
- **Qué mejorar:** [Aspecto específico]
- **Por qué:** [Razón breve]
- **Cómo:** [Pasos concretos]

**Guidance for Evaluation:**

- **CRITICAL: Information Fidelity Check**: Systematically cross-reference EVERY claim in the report against the file analysis. Flag any information that cannot be traced to source files as potential AI hallucination. Verify:
  - Each activity mentioned exists in file analysis
  - Dates match file names/metadata or are reasonable inferences
  - Metrics come from actual file counts or documented sources (not invented)
  - Deliverables mentioned actually exist in file structure
  - Descriptions match what files suggest vs. AI inference
- **Structured assessment**: Use structured sections and tables, not long narrative paragraphs
- **Focus on reporting quality**: Assess how well the report is structured and documented, not just project quality
- **Specific actionables**: Provide concrete, implementable actions (what to do exactly, not just why)
- **Scannable format**: Use bullet points, tables, and brief summaries (2-3 sentences max per section)
- **Language**: Write evaluation in Spanish (matching the report language)

**What to flag as potential hallucinations:**

- Specific numbers/metrics not derivable from file analysis
- Detailed descriptions of activities not supported by file evidence
- Dates that don't match file names or metadata
- Deliverables mentioned but not found in file structure
- Claims about impact/outcomes not supported by evidence
- Specific participant counts or details not in source files

**Action format for fidelity issues:**

- "Verificar: [Claim] - No encontrado en análisis de archivos"
- "Posible alucinación: [Claim] - Requiere confirmación con proyecto"
- "Corregir: [Claim] - No coincide con evidencia en archivos"

**Important Notes:**

- Append the evaluation section AFTER all activities in the report
- Separate the evaluation section with a horizontal rule (`---`) before starting it
- Focus on reporting quality assessment with structured dimensions
- Use structured format (tables, bullet points) rather than long paragraphs
- Make actionables specific and concrete - what to do exactly, not just strategic guidance
- The evaluation should be scannable and actionable - easy to review and implement improvements

**Generate the complete report with the evaluation section appended at the end now.**
```
