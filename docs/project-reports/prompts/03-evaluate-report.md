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
- Evaluate the quality of the activity report
- Verify that all proofs (file references) are correct and accessible
- Identify any issues, missing information, or areas for improvement
- Provide actionable recommendations for each activity
- Append an evaluation section to the END of the report (after all activities)

---

## Activity Report Draft

[PASTE THE ENTIRE ACTIVITY REPORT DRAFT HERE]

---

## File Analysis

[PASTE THE ENTIRE FILE ANALYSIS MARKDOWN HERE]

---

**Task:**

Evaluate the activity report draft above and append an evaluation section to the end of the report. The evaluation section should follow this exact format:

---

## Evaluación del Informe

### Resumen Ejecutivo

- **Estado:** [✅ Listo / ⚠️ Requiere correcciones / ❌ Requiere revisión mayor]
- **Actividades evaluadas:** [N]
- **Actividades con problemas:** [N] (críticos: [N], mejoras: [N])
- **Pruebas verificadas:** [N válidas] / [N con problemas] / [N faltantes]

### Tabla de Estado Rápido

| Actividad | Estado | Problemas | Prioridad |
|-----------|--------|-----------|-----------|
| Actividad 1 - [Nombre] | ✅ | 0 | - |
| Actividad 2 - [Nombre] | ⚠️ | 2 | Alta |
| Actividad 3 - [Nombre] | ❌ | 1 | Alta |

[Only include activities with problems in the table. Use ✅ for activities with no issues, ⚠️ for activities with non-critical issues, ❌ for activities with critical issues.]

### Problemas y Acciones Requeridas

#### Prioridad Alta

[Critical issues that MUST be fixed before the report is ready. Format: Problem → Action]

- [ ] **Actividad [N] - [Nombre]:** [Problema específico] → [Acción requerida]
- [ ] **Actividad [N] - [Nombre]:** [Problema específico] → [Acción requerida]

#### Prioridad Media

[Important improvements but not critical]

- [ ] **Actividad [N] - [Nombre]:** [Problema específico] → [Acción requerida]

[Only include Prioridad Baja if there are optional improvements worth noting]

### Recomendaciones por Actividad

[ONLY show activities with issues. Skip activities that are correct.]

#### Actividad [N] – [Nombre]

**Problemas encontrados:**
- Entregable "[Nombre]": [Problema específico] - [Solución sugerida]
- Métrica "[Nombre]": [Problema específico] - [Solución sugerida]
- Fechas: [Problema] - [Solución sugerida]
- Lugar: [Problema] - [Solución sugerida]

**Acciones:**
- [ ] [Acción específica 1]
- [ ] [Acción específica 2]

### Checklist de Iteración

[Create a prioritized checklist of specific actions needed. Focus on actionable items only.]

- [ ] [Acción prioritaria 1]
- [ ] [Acción prioritaria 2]
- [ ] [Acción prioritaria 3]

**Guidance for Evaluation:**

- **Be concise**: Only detail activities with issues. Skip activities that are correct.
- **Be specific**: Provide concrete, actionable recommendations with clear solutions
- **Be focused**: Prioritize critical issues. Don't list minor formatting issues unless they affect readability
- **Verify systematically**: Check every proof reference against the file analysis
- **Cross-reference**: Use file analysis to verify file paths and existence
- **Use status indicators**: ✅ for valid, ⚠️ for issues, ❌ for critical problems
- **Language**: Write evaluation in Spanish (matching the report language)
- **Don't repeat**: If an issue is listed in "Problemas y Acciones Requeridas", don't repeat it verbatim in "Recomendaciones por Actividad" - provide context instead

**Important Notes:**

- Append the evaluation section AFTER all activities in the report
- Separate the evaluation section with a horizontal rule (`---`) before starting it
- Focus on problems and actions - don't waste space describing what's correct
- Only include activities with issues in "Recomendaciones por Actividad"
- Use the quick reference table to show status at a glance
- Group similar issues together in "Problemas y Acciones Requeridas"
- Be concise - aim for 50% reduction in length compared to detailed per-activity evaluation
- If a proof doesn't exist in file analysis, note it as "Prueba faltante" or "Archivo no encontrado en análisis"
- If a file path seems incorrect, suggest the correct path based on file analysis
- Don't include "Ningún problema" messages - silence indicates correctness

**Generate the complete report with the evaluation section appended at the end now.**
```
