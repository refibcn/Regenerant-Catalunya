# Cursor Rules - Updated for Quartz Repository

**Date:** October 11, 2025  
**Repository:** https://github.com/refibcn/Regenerant-Catalunya.git  
**Status:** ✅ Complete and Functional

---

## ✅ What Was Updated

### 1. **File Path References**
All internal file references now point to correct locations in the `content/` folder:
- ✅ `content/index.md` - Homepage (Master Document)
- ✅ `content/program/design/` - Program design docs
- ✅ `content/program/execution/` - Execution plan
- ✅ `content/database/` - Database guides and CSV files
- ✅ `content/updates/` - Latest updates and action plans
- ✅ `content/internal/` - Analysis and internal documentation

### 2. **Notion Links Indexed**
All Notion workspace links are now properly referenced in cursor rules:
- 🔗 [Master Document](https://www.notion.so/REGENERANT-CATALUNYA-GG24-MASTER-DOC-26c6ed0845cb80a29615cc480f969597)
- 🔗 [Project Page](https://www.notion.so/Regenerant-Catalunya-GG24-21c6ed0845cb805088e6c743b4ed53dc)
- 🔗 [Application Form](https://www.notion.so/26b6ed0845cb8059ad40de78fb40108d)

### 3. **Workflow Updated**
Cursor rules now reflect the **Quartz Website Repository** workflow:

```
Notion (Source) → Update content/ → Preview → Sync → Deploy
```

**Commands:**
- Preview: `npx quartz build --serve`
- Sync to GitHub: `npx quartz sync`

### 4. **Repository Context**
Rules now understand this is a **public documentation website**, not the original project management folder.

---

## 📋 Active Cursor Rules

### **project-overview.mdc** (Auto-loads)
- Project context and current status
- Team structure and roles
- Documentation links (Notion + local files)
- Critical deadlines and priorities
- Repository workflow instructions

### **communications-tools.mdc**
Fetch with: "communication", "tools", "WhatsApp", "Notion"
- WhatsApp groups strategy
- Minimal Notion approach
- Meeting structure
- Communication principles

### **program-design.mdc**
Fetch with: "program design", "theory of change", "projects"
- Core design principles
- 12 project portfolio
- Funding architecture (~€30k)
- Technology stack
- Impact measurement framework

### **financial-mgmt.mdc**
Fetch with: "finance", "funding", "treasury", "Safe Multisig"
- Complete funding breakdown (€11k local + ~$20k global)
- Safe Multisig setup
- Fund flow processes
- Critical financial deadlines

### **execution-ops.mdc**
Fetch with: "execution", "operations", "timeline", "team roles"
- Current week priorities
- 5-phase program timeline
- Meeting structure
- Critical deadlines

---

## 🔗 Documentation Structure

### **Source of Truth: Notion**
All authoritative content lives in Notion workspace (links above).

### **Published Version: This Repository**
Public-facing documentation published through Quartz website.

### **Workflow:**
1. Update content in Notion
2. When ready to publish, sync to `content/` folder
3. Preview locally: `npx quartz build --serve`
4. Publish: `npx quartz sync`
5. Deploy to hosting platform

---

## 🎯 How to Use

### **Automatic Context**
When you open this repository, `project-overview.mdc` loads automatically, providing:
- Repository purpose and structure
- Quick links to all key documents
- Notion workspace links
- Development workflow

### **Fetch Specific Context**
Ask natural language questions:
- "What's our communication strategy?" → Loads communications-tools
- "Show me the funding plan" → Loads financial-mgmt
- "Explain program design" → Loads program-design
- "What are this week's priorities?" → Loads execution-ops

### **Quick Actions**
```bash
# Preview website locally
npx quartz build --serve

# Sync to GitHub
npx quartz sync

# Check file structure
ls -la content/
```

---

## ✅ Verification Checklist

- [x] All file paths updated to `content/` structure
- [x] Notion links indexed in all relevant rules
- [x] Repository workflow documented
- [x] Commands and quick actions added
- [x] README.md updated for Quartz repository context
- [x] All 5 .mdc files updated and functional
- [x] Changes synced to GitHub
- [x] Rules tested and loading correctly

---

## 📚 Files Updated

1. `.cursorrules/project-overview.mdc` - Main overview (auto-loads)
2. `.cursorrules/communications-tools.mdc` - Communication strategy
3. `.cursorrules/program-design.mdc` - Program design framework
4. `.cursorrules/financial-mgmt.mdc` - Financial management
5. `.cursorrules/execution-ops.mdc` - Operations and timeline
6. `.cursorrules/README.md` - Usage guide

---

## 🚀 Next Steps

**For Content Updates:**
1. Edit files in `content/` folder
2. Run `npx quartz build --serve` to preview
3. Run `npx quartz sync` when ready to publish

**For Deployment:**
- Configure GitHub Pages, Cloudflare Pages, or Netlify
- Point to the `public/` folder after build
- Set build command: `npx quartz build`

**For Rule Updates:**
- Update `.cursorrules/*.mdc` files as project evolves
- Keep Notion links current
- Sync changes with `npx quartz sync`

---

**Last Updated:** October 11, 2025  
**Commit:** a777379  
**Status:** ✅ Fully Functional

