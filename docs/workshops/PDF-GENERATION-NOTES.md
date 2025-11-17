# PDF Generation Notes

## Current Status

✅ **PDF Generated Successfully**

- **File:** `workshop-1-prototype.pdf` (423KB, 8 pages)
- **Method:** HTML to PDF via Chrome headless browser
- **Styling:** Regenerant Catalunya theme applied (forest green, warm sand, Inter font)

## PDF Quality Options

### Option 1: Current HTML-to-PDF (✅ Available Now)

The current PDF was generated from the styled HTML presentation. It includes:

- Regenerant Catalunya color scheme
- Inter font family
- Proper styling and layout
- All slides formatted correctly

**Pros:**

- Ready to use immediately
- Good quality for most purposes
- Includes all styling

**Cons:**

- May have slight formatting differences from Beamer
- Page breaks optimized for screen viewing

### Option 2: LaTeX/Beamer PDF (Higher Quality)

For the best quality PDF with perfect typography and page breaks:

1. **Install BasicTeX:**

   ```bash
   brew install --cask basictex
   ```

2. **Install required LaTeX packages:**

   ```bash
   sudo tlmgr update --self
   sudo tlmgr install fontspec xcolor tikz listings booktabs
   ```

3. **Generate PDF:**
   ```bash
   ./build-presentation.sh workshop-1-prototype.md pdf
   ```

**Pros:**

- Perfect typography
- Professional page breaks
- Optimized for printing
- Matches academic presentation standards

**Cons:**

- Requires LaTeX installation (~100MB)
- Takes longer to generate

## Using the Current PDF

The PDF is ready to use for:

- Sharing with participants
- Printing handouts
- Archiving
- Presentation reference

## Regenerant Catalunya Styling Applied

The PDF includes:

- ✅ Forest Green (#214033) - Headers and borders
- ✅ Warm Sand (#E6DFD7) - Background
- ✅ Inter font family
- ✅ Straight edges (no border-radius)
- ✅ Bold graphic borders (2-3px)
- ✅ Proper color accents (purple for info, orange for warnings)

## Regenerating PDF

To regenerate the PDF:

```bash
cd docs/workshops
./generate-pdf.sh
```

Or manually:

1. Open `workshop-1-prototype.html` in Chrome
2. Press Cmd+P (Mac) or Ctrl+P (Windows/Linux)
3. Select "Save as PDF"
4. Enable "Background graphics"
5. Set margins to "None"

## Files Available

- `workshop-1-prototype.md` - Source Markdown
- `workshop-1-prototype.html` - Interactive HTML presentation
- `workshop-1-prototype.pptx` - PowerPoint format
- `workshop-1-prototype.pdf` - PDF format (current)
