# Installing LaTeX for PDF Generation

## Quick Install

Run the installation script (requires sudo password):

```bash
cd docs/workshops
./install-latex.sh
```

This will:

1. Install BasicTeX via Homebrew
2. Update the TeX Live package manager
3. Install required packages (fontspec, xcolor, tikz, listings, booktabs, beamer)

## Manual Installation

If you prefer to install manually:

### Step 1: Install BasicTeX

```bash
brew install --cask basictex
```

### Step 2: Update PATH

Restart your terminal, or run:

```bash
eval "$(/usr/libexec/path_helper)"
```

### Step 3: Update TeX Live

```bash
sudo tlmgr update --self
```

### Step 4: Install Required Packages

```bash
sudo tlmgr install fontspec xcolor tikz listings booktabs beamer
```

## Verify Installation

Check that LaTeX is installed:

```bash
which xelatex
xelatex --version
```

## Generate PDF

Once LaTeX is installed, generate the PDF:

```bash
./build-presentation.sh workshop-1-prototype.md pdf
```

## Current Status

✅ **PDF Available Now:** `workshop-1-prototype.pdf` (generated from HTML)

The current PDF (423KB) was generated from the styled HTML presentation and includes all Regenerant Catalunya styling. It's ready to use.

The LaTeX/Beamer version will provide:

- Better typography
- Optimized page breaks
- Professional print quality

Both versions include the proper Regenerant Catalunya theme.
