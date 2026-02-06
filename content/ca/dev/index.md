---
title: "Development Sitemap"
description: "Website structure and content organization for development"
---

# Development Sitemap

This page documents the website structure and content organization for development purposes. It's only visible when viewing locally.

---

## Navigation Structure

The topbar navigation follows this structure:

1. **Program** → `/program`
2. **Partners & Projects** → `/program/partners-projects`
3. **Tools** → `/program/tools`
4. **Resources** → `/resources`
5. **Contact** → `/program/contact`
6. **Dev** → `/dev` (only visible on localhost)

---

## Content Structure

### Root Level (`content/`)

```
content/
├── index.md                    # Homepage (English)
├── master-document.md          # Master document
├── program/                    # Main program folder
│   ├── index.md               # Program overview
│   ├── partners-projects.md   # Combined Partners & Projects page
│   ├── tools.md               # Tools page
│   ├── contact.md             # Contact page
│   ├── project-guidebook.md   # Project guidebook
│   ├── network-guidebook.md   # Network guidebook
│   ├── timeline.md            # Program timeline
│   ├── resources.md            # (moved to /resources)
│   ├── evaluation-criteria.md # Evaluation criteria
│   ├── design/                # Program design docs
│   │   ├── index.md
│   │   └── summary.md
│   └── execution/             # Program execution docs
│       └── index.md
├── resources/                 # Resources folder (separate)
│   └── index.md               # Resources page
├── ca/                        # Catalan content
│   ├── index.md
│   ├── master-document.md
│   └── program/               # Same structure as English
│       ├── index.md
│       ├── partners-projects.md
│       ├── tools.md
│       ├── contact.md
│       └── ...
├── es/                        # Spanish content
│   ├── index.md
│   ├── master-document.md
│   └── program/               # Same structure as English
│       ├── index.md
│       ├── partners-projects.md
│       ├── tools.md
│       ├── contact.md
│       └── ...
└── dev/                       # Development pages
    └── index.md               # This page
```

---

## Key Pages

### Public Pages

- **Homepage** (`/`, `/ca/`, `/es/`)
  - Main landing page
  - Program overview
  - Key information and CTAs

- **Program** (`/program`, `/ca/programa`, `/es/programa`)
  - Program overview and details
  - Links to all program subpages

- **Partners & Projects** (`/program/partners-projects`)
  - Combined page showing partners and participating projects
  - Merged from previous `/partners` and `/projects` pages

- **Tools** (`/program/tools`)
  - Web3 tools used in the program
  - Tool documentation and links

- **Resources** (`/resources`)
  - Central hub for all resources
  - Guidebooks, tool docs, support channels
  - Moved from `/program/resources`

- **Contact** (`/program/contact`)
  - Contact information
  - Get involved sections
  - Moved from `/contact`

### Program Subpages

- **Project Guidebook** (`/program/project-guidebook`)
  - Comprehensive guide for participating projects
  - Phase 1 requirements and setup

- **Network Guidebook** (`/program/network-guidebook`)
  - Guide for network-level governance
  - Phase 2 information

- **Timeline** (`/program/timeline`)
  - Complete program timeline
  - Key milestones and workshops

- **Design** (`/program/design/`)
  - Program design documentation
  - Strategic planning documents

- **Execution** (`/program/execution/`)
  - Program execution plans
  - Operational framework

- **Evaluation Criteria** (`/program/evaluation-criteria`)
  - Evaluation framework
  - Allocation structure

---

## Content Organization Principles

### Language Structure

- **English**: Root level (`content/`)
- **Catalan**: `content/ca/`
- **Spanish**: `content/es/`

Each language maintains the same folder structure for consistency.

### Navigation Links

All navigation links are language-aware:

- English: `/program`, `/resources`, etc.
- Catalan: `/ca/programa`, `/ca/recursos`, etc.
- Spanish: `/es/programa`, `/es/recursos`, etc.

The navigation script automatically adds language prefixes based on current page context.

---

## Recent Changes

### Restructuring (Current)

1. **Moved pages into program folder:**
   - `/partners` → `/program/partners-projects` (merged with projects)
   - `/projects` → `/program/partners-projects` (merged)
   - `/contact` → `/program/contact`

2. **Moved resources to separate folder:**
   - `/program/resources` → `/resources`

3. **Created new pages:**
   - `/program/tools` (new tools page)
   - `/dev` (development sitemap)

4. **Updated navigation:**
   - New structure: Program, Partners & Projects, Tools, Resources, Contact, Dev
   - Dev link only visible on localhost

---

## Development Notes

### Link Updates Required

When restructuring, ensure all internal links are updated:

- `/partners` → `/program/partners-projects`
- `/projects` → `/program/partners-projects`
- `/contact` → `/program/contact`
- `/program/resources` → `/resources`

### Language Versions

All changes must be applied to:

- English (`content/`)
- Catalan (`content/ca/`)
- Spanish (`content/es/`)

### Navigation Script

The navigation script (`quartz/components/scripts/navigation.inline.ts`) handles:

- Language-aware link prefixes
- Localhost detection for dev link
- Active state highlighting

---

## Quick Reference

### File Paths

| Page                | English                      | Catalan                         | Spanish                         |
| ------------------- | ---------------------------- | ------------------------------- | ------------------------------- |
| Homepage            | `/`                          | `/ca/`                          | `/es/`                          |
| Program             | `/program`                   | `/ca/programa`                   | `/es/programa`                   |
| Partners & Projects | `/program/partners-projects` | `/ca/programa/partners-projects` | `/es/programa/partners-projects` |
| Tools               | `/program/tools`             | `/ca/programa/tools`             | `/es/programa/tools`             |
| Resources           | `/resources`                 | `/ca/recursos`                 | `/es/recursos`                 |
| Contact             | `/program/contact`           | `/ca/programa/contact`           | `/es/programa/contact`           |

---

## Internal Documentation

- **Master Document**: `/master-document` (comprehensive program documentation)
- **Design Docs**: `/program/design/`
- **Execution Plans**: `/program/execution/`

---

_This page is only visible when viewing locally (localhost)._
