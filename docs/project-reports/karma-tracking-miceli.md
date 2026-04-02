# Karma GAP Tracking: Miceli Social Projects

**Purpose:** Track Karma GAP project URLs and monitor activity submissions for feedback report generation.

**Last Updated:** 2026-02-23

---

## Project -> Karma URL Mapping

### 1. CHAPTER2
- **Project Name:** CHAPTER2
- **Karma Main Page:** https://www.karmahq.xyz/project/chapter2
- **Karma Funding Page:** https://www.karmahq.xyz/project/chapter2/funding
- **Network:** Miceli Social
- **Territory:** Centelles
- **Status:** ✅ Active
- **Last Checked:** 2026-02-23
- **Notes:** Education and art in rural schools

### 2. Resilience Earth
- **Project Name:** Resilience Earth
- **Karma Main Page:** https://www.karmahq.xyz/project/resilience-earth
- **Karma Funding Page:** https://www.karmahq.xyz/project/resilience-earth/funding
- **Network:** Miceli Social
- **Territory:** Collsacabra (Aplec Iltir)
- **Status:** ✅ Active
- **Last Checked:** 2026-02-23
- **Notes:** Bioregional governance and participatory processes

### 3. Mixite Habitats
- **Project Name:** Mixite Habitats
- **Karma Main Page:** https://www.karmahq.xyz/project/mixit-hbitats
- **Karma Funding Page:** https://www.karmahq.xyz/project/mixit-hbitats/funding
- **Network:** Miceli Social
- **Territory:** Rural municipalities (Catalunya)
- **Status:** ✅ Active
- **Last Checked:** 2026-02-23
- **Notes:** Rural housing policy support

### 4. Anigami
- **Project Name:** Anigami
- **Karma Main Page:** https://www.karmahq.xyz/project/anigami
- **Karma Funding Page:** https://www.karmahq.xyz/project/anigami/funding
- **Network:** Miceli Social
- **Territory:** Ruralities (Catalunya)
- **Status:** ✅ Active
- **Last Checked:** 2026-02-23
- **Notes:** Regenerative tourism dialogues and framework

### 5. Regeneracio XYZ
- **Project Name:** Regeneracio XYZ
- **Karma Main Page:** https://www.karmahq.xyz/project/regeneraci-xyz
- **Karma Funding Page:** https://www.karmahq.xyz/project/regeneraci-xyz/funding
- **Network:** Miceli Social
- **Territory:** Not specified
- **Status:** ✅ Active
- **Last Checked:** 2026-02-23
- **Notes:** Regenerative narratives and card deck tool

### 6. De Bat a Bat
- **Project Name:** De Bat a Bat
- **Karma Main Page:** https://www.karmahq.xyz/project/de-bat-a-bat
- **Karma Funding Page:** https://www.karmahq.xyz/project/de-bat-a-bat/funding
- **Network:** Miceli Social
- **Territory:** Barcelona / Vic
- **Status:** ✅ Active
- **Last Checked:** 2026-02-23
- **Notes:** Community health through art and care

---

## Data Extraction Status

| Project | Karma URL Verified | Activities Submitted | Last Extraction Date | Notes |
|---------|-------------------|---------------------|---------------------|-------|
| CHAPTER2 | ✅ | ✅ 3 activities | 2026-02-23 | See extraction file |
| Resilience Earth | ✅ | ✅ 2 activities | 2026-02-23 | See extraction file |
| Mixite Habitats | ✅ | ✅ 2 activities | 2026-02-23 | See extraction file |
| Anigami | ✅ | ✅ 2 activities | 2026-02-23 | See extraction file |
| Regeneracio XYZ | ✅ | ✅ 1 activity | 2026-02-23 | See extraction file |
| De Bat a Bat | ✅ | ✅ 2 activities | 2026-02-23 | See extraction file |

**Total Activities Extracted:** 12 activities across 6 projects

---

## Extraction Methods

### Method 1: Karma GAP API (Recommended) ✅ USED
- **API Base URL:** https://gapapi.karmahq.xyz/v2/
- **API Endpoint:** `GET /v2/projects/{slug}`
- **Status:** ✅ Successfully tested and used
- **Notes:** Successfully extracted all 12 activities from 6 projects
- **Extraction File:** [`karma-activities-extracted-miceli.md`](./karma-activities-extracted-miceli.md)

### Method 2: Manual Extraction
- **Process:** Visit each project page, copy activity data from "Updates" or "Activities" tab
- **Status:** ✅ URLs verified
- **Notes:** Use when API unavailable or for verification

### Method 3: Web Scraping (Fallback)
- **Tools:** Browser automation (Puppeteer/Playwright) or Python (BeautifulSoup)
- **Status:** ⏳ Not implemented
- **Notes:** Use only if API and manual methods fail

---

## Activity Data Structure

For each activity extracted, capture:

- **Activity Title/Name**
- **Description**
- **Dates** (start, end, or single date)
- **Metrics** (participants, outputs, etc.)
- **Deliverables/Links**
- **Status** (completed, in progress, pending)
- **On-chain Transaction Hash** (if available)
- **Last Updated Date**

---

## Feedback Report Structure

For each project, feedback reports should include:

1. **Summary**
   - Total activities submitted on Karma
   - Date range of activities
   - Overall quality assessment

2. **Activity Comparison**
   - Activities in Karma vs. Google Docs
   - Missing activities (in Google Docs but not Karma)
   - New activities (in Karma but not Google Docs)

3. **Quality Assessment**
   - Completeness of descriptions
   - Metrics provided
   - Evidence/deliverables linked
   - Alignment with program requirements

4. **Recommendations**
   - Specific improvements needed
   - Missing information to add
   - Best practices observed

5. **Next Steps**
   - Actions for project team
   - Follow-up needed
   - Timeline for updates

---

## Next Steps

- [x] Test Karma API access and endpoints ✅
- [x] Extract activities from each project's Karma page ✅
- [ ] Compare with existing Google Docs reports
- [x] Generate feedback reports for each project
- [ ] Schedule feedback sessions with project teams

**Extraction Complete:** See [`karma-activities-extracted-miceli.md`](./karma-activities-extracted-miceli.md) for full details of all 12 activities extracted.

---

## Related Files

- **Report Generation Process:** [`README.md`](./README.md)
- **CHAPTER2 Report Draft:** [`chapter-2/chapter-2-report-draft.md`](./chapter-2/chapter-2-report-draft.md)
- **Resilience Earth Report Draft:** [`resilience-earth/resilience-earth-report-draft.md`](./resilience-earth/resilience-earth-report-draft.md)
- **Mixite Habitats Report Draft:** [`mixite/mixite-report-draft.md`](./mixite/mixite-report-draft.md)
- **Anigami Report Draft:** [`anigami/anigami-report-draft.md`](./anigami/anigami-report-draft.md)
- **Regeneracio XYZ Report Draft:** [`regeneracio-xyz/regeneracio-xyz-report-draft.md`](./regeneracio-xyz/regeneracio-xyz-report-draft.md)
- **De Bat a Bat Report Draft:** [`de-bat-a-bat/de-bat-a-bat-report-draft.md`](./de-bat-a-bat/de-bat-a-bat-report-draft.md)

---

**Contact:** hola@ReFiBCN.cat
