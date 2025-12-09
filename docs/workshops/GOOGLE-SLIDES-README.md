# Google Slides Presentation Export

This directory contains tools to generate Google Slides-compatible PowerPoint presentations with Regenerant Catalunya branding.

## Generated Files

- **`workshop-1-prototype-google-slides.pptx`** - Complete Workshop 1 presentation with brand styling
- **`regenerant-catalunya-theme.pptx`** - Reusable theme template for future presentations

## How to Use in Google Slides

### Option 1: Import Complete Presentation

1. Go to [Google Slides](https://slides.google.com)
2. Click **File** > **Import slides**
3. Upload `workshop-1-prototype-google-slides.pptx`
4. Select "Import slides" to add all slides, or "Replace presentation" to replace current slides
5. The presentation will be imported with all Regenerant Catalunya branding applied

### Option 2: Use Theme Template

1. Go to [Google Slides](https://slides.google.com)
2. Click **File** > **Import slides**
3. Upload `regenerant-catalunya-theme.pptx`
4. Use the imported slides as templates for your new presentation
5. Copy slide layouts as needed

## Regenerating Presentations

To regenerate the presentation with updated content:

```bash
cd docs/workshops
./generate-google-slides.sh
```

Or to use a different markdown file:

```bash
./generate-google-slides.sh my-presentation.md
```

## Brand Specifications Applied

### Colors
- **Forest Green** (#214033) - Headers, borders
- **Warm Sand** (#E6DFD7) - Backgrounds
- **Midnight Navy** (#092045) - Body text
- **Green Medium** (#3A6655) - Accents
- **Purple** (#6B4EA3) - Info boxes
- **Orange** (#E67E50) - Warning boxes

### Typography
- **Font:** Inter (with Arial fallback)
- **Headers:** Bold, 32-44pt
- **Body:** Regular, 18pt

### Design Principles
- Straight edges (no border-radius)
- Bold borders (2-3px)
- Clean, editorial aesthetic
- Strong typographic hierarchy

## Requirements

- `pandoc` - For Markdown to PPTX conversion
- `python3` - For applying brand theme
- `python-pptx` - Python library (install via `pip3 install python-pptx`)

## Troubleshooting

If fonts don't appear correctly in Google Slides:
- Google Slides may substitute fonts if Inter is not available
- The presentation will fall back to Arial automatically
- You can manually change fonts in Google Slides if needed

If colors don't match:
- Verify the PowerPoint file opens correctly in PowerPoint/Keynote first
- Google Slides should preserve colors during import
- Check that you're importing the `-google-slides.pptx` file, not the base file




