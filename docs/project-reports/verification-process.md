# Proof Verification Process

This document outlines the process for verifying proofs (images, links, documents) referenced in generated activity reports.

## Purpose

After generating activity report drafts, we need to verify that:
- All referenced files/links actually exist and are accessible
- Files match their described content
- Proofs correctly support the deliverables and metrics they're linked to
- No important proofs are missing

## When to Verify

Verification should be done:
- After generating a report draft using Prompt 2
- Before finalizing the report in Google Docs
- Before sharing with the project for final review

## Verification Checklist

For each activity in the generated report, verify:

### 1. Deliverables Verification

For each **Entregable** listed:

- [ ] **File/folder exists**: Check that the referenced file or folder path is correct
- [ ] **File matches description**: Verify the file content matches what's described
- [ ] **Proof is appropriate**: Confirm the proof actually demonstrates the deliverable exists
- [ ] **Accessibility**: Ensure files are accessible in Google Drive (if using Drive links)

**Example:**
- Deliverable: "Taller sobre agroecología realizado"
- Proof: "Carpeta TALLERES/ con presentación Taller-agroecologia-2024.pdf"
- Verification: Check that TALLERES folder exists, contains the PDF, and the PDF is actually about agroecology

### 2. Metrics Verification

For each **Métrica** listed:

- [ ] **Proof exists**: Check that the referenced proof file/folder exists
- [ ] **Proof supports metric**: Verify the proof actually demonstrates the metric value
- [ ] **Value is reasonable**: Check if the metric value makes sense given the proof
- [ ] **Multiple proofs if needed**: If metric is high, ensure there are sufficient proofs

**Example:**
- Metric: "50 personas participantes"
- Proof: "Foto de grupo en evento.jpg"
- Verification: Check photo exists, count visible participants, verify number matches or is reasonable

### 3. Additional Proofs Verification

For proofs listed in **Pruebas adicionales**:

- [ ] **Files exist**: Verify all referenced files/folders exist
- [ ] **Not redundant**: Check these aren't already linked to deliverables/metrics
- [ ] **Should be linked**: Consider if these proofs should be linked to specific deliverables/metrics instead

### 4. File Path Verification

- [ ] **Paths are correct**: Verify all file paths match actual file locations
- [ ] **Relative paths work**: If using relative paths, ensure they're correct from report location
- [ ] **Google Drive links**: If using Drive links, verify they're accessible and correct

## Verification Process Steps

### Step 1: Prepare Verification Environment

1. **Locate project files**: Navigate to the project folder (e.g., `docs/project-reports/la-suculenta/`)
2. **Open generated report**: Open the report draft (e.g., `la-suculenta-report-draft.md`)
3. **Have file system access**: Ensure you can access the project files

### Step 2: Systematic Verification

For each activity block in the report:

1. **Read the activity description**
2. **List all deliverables** mentioned
3. **List all metrics** mentioned
4. **List all proofs** referenced

### Step 3: Verify Each Proof

For each proof reference:

1. **Extract file path** from the proof reference
2. **Locate file** in the file system
3. **Verify file exists** and matches the path
4. **Check file content** (if possible - PDFs, images, documents)
5. **Verify proof supports** the deliverable/metric it's linked to
6. **Note any issues** in a verification log

### Step 4: Document Issues

Create a verification log with:

- **Missing files**: Files referenced but not found
- **Incorrect paths**: Wrong file paths
- **Mismatched content**: Files that don't match their descriptions
- **Weak proofs**: Proofs that don't adequately support deliverables/metrics
- **Missing proofs**: Deliverables/metrics without adequate proof

### Step 5: Update Report

Based on verification findings:

1. **Fix file paths** if incorrect
2. **Remove invalid references** if files don't exist
3. **Add missing proofs** if files exist but aren't referenced
4. **Strengthen weak proofs** by adding additional file references
5. **Note verification status** in report (optional)

## Verification Tools

### File System Commands

Use these commands to verify file existence:

```bash
# Check if file exists
ls -la "path/to/file"

# List files in folder
ls -la "path/to/folder/"

# Count files
find "path/to/folder" -type f | wc -l
```

### Google Drive Verification

If files are in Google Drive:

1. **Open Google Drive** in browser
2. **Navigate to project folder**
3. **Verify folder structure** matches report references
4. **Check file accessibility** (permissions, sharing settings)
5. **Verify file names** match references

## Common Issues and Solutions

### Issue: File path doesn't exist

**Solution:**
- Check if path is relative vs. absolute
- Verify folder structure matches report
- Check for typos in file/folder names
- Update path in report if incorrect

### Issue: File exists but content doesn't match description

**Solution:**
- Update description to match actual content
- Or find correct file and update reference
- Note discrepancy for project review

### Issue: Proof doesn't adequately support deliverable/metric

**Solution:**
- Add additional proof files if available
- Strengthen description of how proof supports claim
- Note limitation for project review

### Issue: Deliverable/metric has no proof

**Solution:**
- Check if proof exists but wasn't linked
- Add proof reference if file exists
- Note "Requiere verificación del proyecto" if no proof available

## Verification Log Template

Create a verification log for each project:

```markdown
# Verification Log: [PROJECT_NAME]

**Date:** [DATE]
**Report Version:** [VERSION/FILE NAME]
**Verified By:** [NAME]

## Summary
- Total activities: [N]
- Total deliverables: [N]
- Total metrics: [N]
- Total proofs: [N]
- Issues found: [N]

## Issues Found

### Activity 1: [ACTIVITY_NAME]
- [ ] All proofs verified
- [ ] Issues: [List any issues]

### Activity 2: [ACTIVITY_NAME]
- [ ] All proofs verified
- [ ] Issues: [List any issues]

[... continue for each activity ...]

## Action Items
- [ ] Fix file paths
- [ ] Add missing proofs
- [ ] Update descriptions
- [ ] Share with project for review
```

## Integration with Workflow

This verification process fits into the overall workflow:

1. **Generate report** (Prompt 2)
2. **Verify proofs** (This process)
3. **Fix issues** (Update report)
4. **Review & refine** (Human review)
5. **Transfer to Google Docs** (Final step)

## Best Practices

- ✅ **Verify systematically**: Go through each activity methodically
- ✅ **Document issues**: Keep track of all problems found
- ✅ **Fix immediately**: Correct issues as you find them
- ✅ **Double-check**: Verify fixes were applied correctly
- ✅ **Note uncertainties**: Mark items that need project verification

## Related Documents

- **Process Guide**: [`README.md`](./README.md)
- **Prompt 2**: [`prompts/02-generate-report.md`](./prompts/02-generate-report.md)
- **Example Workflow**: [`examples/workflow-example.md`](./examples/workflow-example.md)

---

*This verification process ensures the accuracy and reliability of generated activity reports before they're finalized.*
