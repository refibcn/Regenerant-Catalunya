# Karma GAP Tracking: La Fundició / Keras Buti Projects

**Purpose:** Track Karma GAP project URLs and monitor activity submissions for feedback report generation.

**Last Updated:** 2026-02-05

---

## Project → Karma URL Mapping

### 1. La Marmita
- **Project Name:** La Marmita
- **Karma Main Page:** https://www.karmahq.xyz/project/la-marmita
- **Karma Funding Page:** https://www.karmahq.xyz/project/la-marmita/funding
- **Network:** La Fundició / Keras Buti
- **Territory:** La Florida
- **Status:** ✅ Active
- **Last Checked:** 2026-02-05
- **Notes:** Community kitchen cooperative

### 2. Les Juntes
- **Project Name:** Les Juntes
- **Karma Main Page:** https://www.karmahq.xyz/project/les-juntes
- **Karma Funding Page:** https://www.karmahq.xyz/project/les-juntes/funding
- **Network:** La Fundició / Keras Buti
- **Territory:** L'Hospitalet de Llobregat
- **Status:** ✅ Active
- **Last Checked:** 2026-02-05
- **Notes:** Cooperative housing project under use-right model
- **Website:** https://www.lesjuntes.coop/

### 3. La Suculenta LH
- **Project Name:** La Suculenta LH
- **Karma Main Page:** https://www.karmahq.xyz/project/la-suculenta-lh
- **Karma Funding Page:** https://www.karmahq.xyz/project/la-suculenta-lh/funding
- **Network:** La Fundició / Keras Buti
- **Territory:** L'Hospitalet de Llobregat
- **Status:** ✅ Active
- **Last Checked:** 2026-02-05
- **Notes:** Community dining initiative
- **Instagram:** https://www.instagram.com/suculentalh/?hl=es

### 4. La Granja del Tillo
- **Project Name:** La Granja del Tillo
- **Karma Main Page:** https://www.karmahq.xyz/project/la-granja-del-tillo
- **Karma Funding Page:** https://www.karmahq.xyz/project/la-granja-del-tillo/funding
- **Network:** La Fundició / Keras Buti
- **Territory:** Parc Agrari del Baix Llobregat
- **Status:** ✅ Active
- **Last Checked:** 2026-02-05
- **Notes:** Worker cooperative running organic egg farm

### 5. Laurel 31, economías silvestres
- **Project Name:** Laurel 31, economías silvestres
- **Karma Main Page:** https://www.karmahq.xyz/project/laurel-31-economas-silvestres
- **Karma Funding Page:** https://www.karmahq.xyz/project/laurel-31-economas-silvestres/funding
- **Network:** La Fundició / Keras Buti
- **Territory:** L'Hospitalet de Llobregat
- **Status:** ✅ Active
- **Last Checked:** 2026-02-05
- **Notes:** Textile sustainability space
- **Instagram:** https://www.instagram.com/laurel31_economiassilvestres/?hl=es

---

## Data Extraction Status

| Project | Karma URL Verified | Activities Submitted | Last Extraction Date | Notes |
|---------|-------------------|---------------------|---------------------|-------|
| La Marmita | ✅ | ✅ 4 activities | 2026-02-05 | See extraction file |
| Les Juntes | ✅ | ✅ 3 activities | 2026-02-05 | See extraction file |
| La Suculenta LH | ✅ | ✅ 4 activities | 2026-02-05 | See extraction file |
| La Granja del Tillo | ✅ | ✅ 3 activities | 2026-02-05 | See extraction file |
| Laurel 31 | ✅ | ✅ 3 activities | 2026-02-05 | See extraction file |

**Total Activities Extracted:** 17 activities across 5 projects

---

## Extraction Methods

### Method 1: Karma GAP API (Recommended) ✅ USED
- **API Base URL:** https://gapapi.karmahq.xyz/v2/
- **API Endpoint:** `GET /v2/projects/{slug}`
- **Status:** ✅ Successfully tested and used
- **Notes:** Successfully extracted all 17 activities from 5 projects
- **Extraction File:** [`karma-activities-extracted-la-fundicio.md`](./karma-activities-extracted-la-fundicio.md)

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
- [ ] Generate feedback reports for each project
- [ ] Schedule feedback sessions with project teams

**Extraction Complete:** See [`karma-activities-extracted-la-fundicio.md`](./karma-activities-extracted-la-fundicio.md) for full details of all 17 activities extracted.

---

## Related Files

- **Report Generation Process:** [`README.md`](./README.md)
- **La Marmita Report Draft:** [`la-marmita/la-marmita-report-draft.md`](./la-marmita/la-marmita-report-draft.md)
- **Les Juntes Report Draft:** [`les-juntes/les-juntes-report-draft.md`](./les-juntes/les-juntes-report-draft.md)
- **La Suculenta Report Draft:** [`la-suculenta/la-suculenta-report-draft.md`](./la-suculenta/la-suculenta-report-draft.md)

---

**Contact:** hola@ReFiBCN.cat
