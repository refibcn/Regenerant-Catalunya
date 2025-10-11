# CSV DATABASE - IMPORT GUIDE

**File:** `Regenerant Catalunya GG24 - Database.csv`  
**Created:** October 8, 2025  
**Entries:** 53 tasks across 8 categories  
**Status:** Ready to import

---

## ⚠️ IMPORTANT NOTE - OCT 7 DECISION

**Your team decided on October 7 to use a MINIMAL Notion approach** (simple one-pagers only), NOT a comprehensive database system.

**Therefore, you have 3 options for using this CSV:**

### **Option 1: Selective Import (Recommended)**
Import only the **critical tasks** (Priority: 🔴 Critical) to track urgent items
- ~15 tasks instead of 53
- Focused on Oct 9-14 launch week
- Aligns with minimal approach

### **Option 2: Alternative Tool**
Import into a different project management tool (not Notion)
- Excel/Google Sheets for personal tracking
- Airtable if you prefer databases
- Monday.com, Asana, or similar

### **Option 3: Reference Only**
Don't import at all, just use as:
- Checklist reference
- Planning document
- Comprehensive task inventory

---

## 📊 CSV STRUCTURE

### **Columns (11 total):**
1. **Task/Component** - Task name (Title field in Notion)
2. **Category** - Program Design, Stakeholder Mgmt, Technical Setup, Marketing, Financial, Evaluation, Operations, Documentation
3. **Phase** - Phase 1-5 of program
4. **Status** - Not Started, In Progress, Blocked, On Hold, Completed
5. **Priority** - 🔴 Critical, 🟠 High, 🟡 Medium, 🟢 Low
6. **Owner** - Luiz, Giulio, Andrea, Partners, Advisory Council
7. **Due Date** - YYYY-MM-DD format
8. **Progress** - 0-100 (percentage)
9. **Dependencies** - What this task depends on
10. **Notes** - Additional context, blockers, details
11. **Stakeholders** - Who's involved

---

## 🔴 CRITICAL TASKS ONLY (Option 1 - Recommended)

If importing selectively, **import only these 15 rows:**

**Critical Priority Tasks:**
1. Project Cohort Selection & Documentation (Row 4)
2. Funding Architecture Design (Row 5)
3. Local Partner Agreement - Miceli Social (Row 9)
4. Local Partner Agreement - La Fundició (Row 10)
5. Global Partner Confirmations (Row 11)
6. Safe Multisig Wallet Setup (Row 15)
7. Gitcoin Platform Registration (Row 16)
8. Program Branding & Visual Identity (Row 23)
9. Launch Announcements (Row 24)
10. Social Media Campaign Content (Row 26)
11. Fund Transfer Mechanisms (Row 33)
12. Daily Stand-ups Schedule (Row 43)
13. Launch Week Task Assignments (Row 45)

**To extract just these:** Open CSV, filter by Priority column = "🔴 Critical", copy those rows

---

## 📥 HOW TO IMPORT TO NOTION

**Note:** Only do this if you decide to use Notion for tracking (against Oct 7 minimal approach)

### **Step 1: Create Database**
1. Open your Notion workspace
2. Create new page
3. Type `/database` → Select "Database - Inline"
4. Name it: "Program Tasks" or similar

### **Step 2: Import CSV**
1. Click on database menu (⋮ top right)
2. Select "Merge with CSV"
3. Choose `Regenerant Catalunya GG24 - Database.csv`
4. Map columns (Notion should auto-detect)
5. Import

### **Step 3: Configure Properties**
After import, adjust property types:
- **Priority** → Select (with color options)
- **Status** → Select (with color options)
- **Owner** → Person (assign actual Notion users)
- **Due Date** → Date
- **Progress** → Number
- **Category** → Select
- **Phase** → Select

### **Step 4: Create Views**
Optional views you can create:
- **Critical Path:** Filter by Priority = 🔴 Critical, Group by Status
- **By Owner:** Group by Owner
- **This Week:** Filter by Due Date = next 7 days
- **Timeline:** Timeline view using Due Date property

---

## 📊 ALTERNATIVE: GOOGLE SHEETS

### **Quick Setup:**
1. Open Google Sheets
2. File → Import → Upload `Regenerant Catalunya GG24 - Database.csv`
3. Add filters to header row
4. Color code Priority column:
   - 🔴 Critical → Red background
   - 🟠 High → Orange background
   - 🟡 Medium → Yellow background
   - 🟢 Low → Green background
5. Add conditional formatting for Status

**Benefits:**
- Simpler than Notion database
- Easy to share with team
- Can filter and sort easily
- Aligns with "keep it simple" approach

---

## 📋 USING AS REFERENCE (Option 3)

**Don't import at all, just use for:**

### **Planning Sessions:**
- Open CSV in Excel/Numbers/Google Sheets
- Review during weekly meetings
- Check off completed items
- Identify blockers

### **Team Coordination:**
- Share as read-only reference
- Each person filters by their name (Owner column)
- Track personal priorities
- Update in weekly meetings

### **Progress Tracking:**
- Keep CSV updated locally
- Review completion weekly
- Don't sync to cloud tools
- Simple and lightweight

---

## 🎯 RECOMMENDED APPROACH FOR YOUR TEAM

**Based on Oct 7 Decision:**

### **Don't create full database in Notion**
Instead:
1. ✅ Use **WhatsApp** for daily coordination
2. ✅ Use **simple Notion one-pagers** for documentation
3. ✅ Use **this CSV in Google Sheets** for personal/team task tracking
4. ✅ Review in **weekly Thursday meetings** (starting Oct 20)

### **Or even simpler:**
1. ✅ Use **WhatsApp** for coordination
2. ✅ Use **CRITICAL WEEK Action Plan** (already created) for Oct 9-14 tasks
3. ✅ Use **weekly meetings** for ongoing planning
4. ✅ Keep CSV as **backup reference** only

---

## 📊 CSV STATISTICS

**Breakdown by Category:**
- Program Design: 7 tasks
- Stakeholder Management: 6 tasks
- Technical Setup: 8 tasks
- Marketing & Communications: 9 tasks
- Financial Management: 5 tasks
- Evaluation & Impact: 6 tasks
- Operations: 7 tasks
- Documentation & Knowledge: 5 tasks

**Breakdown by Priority:**
- 🔴 Critical: 13 tasks (focus here!)
- 🟠 High: 16 tasks
- 🟡 Medium: 22 tasks
- 🟢 Low: 2 tasks

**Breakdown by Owner:**
- Luiz: 15 tasks
- Giulio: 15 tasks
- Andrea: 17 tasks
- Partners: 2 tasks
- Advisory Council: 4 tasks

**Breakdown by Phase:**
- Phase 1 (Completed): 2 tasks ✅
- Phase 2 (Current): 35 tasks 🔄
- Phase 3 (Launch): 4 tasks
- Phase 4 (Execution): 10 tasks
- Phase 5 (Evaluation): 2 tasks

**Current Status:**
- Completed: 7 tasks (13%)
- In Progress: 7 tasks (13%)
- Not Started: 38 tasks (72%)
- On Hold: 1 task (2%)

---

## ⚡ QUICK START OPTIONS

### **Fastest (5 minutes):**
1. Don't import anywhere
2. Use CSV as reference checklist
3. Focus on CRITICAL WEEK Action Plan document
4. Review CSV in weekly meetings

### **Simple (15 minutes):**
1. Import to Google Sheets
2. Apply basic formatting
3. Filter by Owner to see your tasks
4. Check off as you complete

### **Comprehensive (1 hour):**
1. Import critical tasks only to Notion
2. Set up 2-3 basic views
3. Connect to your existing workspace
4. Use alongside simple one-pagers

---

## 🚨 CRITICAL TASKS DUE THIS WEEK

**From CSV, these are URGENT (Due Oct 9-13):**

**October 9:**
- Safe Multisig Wallet Setup (Luiz) 🔴
- Project Cohort Selection finalization (Giulio) 🔴
- Program Branding & Visual Identity (Andrea) 🔴
- Launch Announcements (Andrea) 🔴
- Daily Stand-ups Schedule (Giulio) 🔴

**October 10:**
- Funding Architecture Design decision (Luiz + Partners) 🔴
- Advisory Council Finalization (Giulio) 🟠
- Global Partner Confirmations (Luiz) 🔴
- WhatsApp Groups Creation (Giulio) 🟠
- Notion Workspace Configuration (Giulio) 🟠
- Entity naming confirmation (Giulio) 🔴 [From Oct 7 meeting]
- €10k application submission (Giulio) 🔴 [From Oct 7 meeting]

**October 11-12:**
- Local Partner Agreements (Luiz) 🔴
- Gitcoin Platform Registration (Giulio) 🔴
- Press Release & Media Kit (Andrea) 🟠
- Project Spotlight Graphics (Andrea) 🟠
- Donor Journey Content (Andrea) 🟠

**October 13:**
- Social Media Campaign Content (Andrea) 🔴
- Project Onboarding & Communication (Giulio) 🟠
- Launch Day Communication Protocols (Andrea) 🟠
- €5k processing complete (Giulio) 🔴 [From Oct 7 meeting]

---

## 💡 BOTTOM LINE

**The CSV is comprehensive and useful, BUT:**

Your team decided on a **minimal tools approach** on October 7. Therefore:

✅ **DO:** Use CSV as reference, import to Google Sheets for simple tracking, or extract just critical tasks  
❌ **DON'T:** Create comprehensive Notion database with 53 entries and complex views  
✅ **FOCUS:** WhatsApp coordination + simple Notion one-pagers + weekly meetings  
✅ **PRIORITY:** Use CRITICAL WEEK Action Plan for immediate Oct 9-14 tasks

**The CSV is here if you need it, but don't let it overcomplicate your approach!**

---

**File Location:** `250701 Regenerant Catalunya GG24/Regenerant Catalunya GG24 - Database.csv`  
**Rows:** 54 (53 tasks + 1 header row)  
**Size:** ~15KB  
**Format:** Standard CSV (compatible with Excel, Google Sheets, Notion, Airtable, etc.)  
**Status:** Ready to use however you choose

---

**Questions?** 
- Want just the critical tasks CSV? Let me know.
- Want a different format? I can convert.
- Want to modify the structure? Easy to adjust.

**Remember:** Tools serve you, not the other way around. Use what helps, skip what doesn't! 🌱

