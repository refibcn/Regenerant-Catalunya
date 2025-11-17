#!/bin/bash

# Script to generate PDF from HTML presentation using browser
# Works on macOS, Linux, and Windows (with WSL)

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
HTML_FILE="$SCRIPT_DIR/workshop-1-prototype.html"
PDF_FILE="$SCRIPT_DIR/workshop-1-prototype.pdf"

echo "Generating PDF from HTML presentation..."

# Check for Chrome/Chromium
CHROME=""
if command -v google-chrome &> /dev/null; then
    CHROME="google-chrome"
elif command -v chromium-browser &> /dev/null; then
    CHROME="chromium-browser"
elif command -v chromium &> /dev/null; then
    CHROME="chromium"
elif [ -f "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" ]; then
    CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
fi

if [ -z "$CHROME" ]; then
    echo "Error: Chrome/Chromium not found."
    echo ""
    echo "Please install Chrome or Chromium, or use one of these alternatives:"
    echo ""
    echo "Option 1: Install LaTeX (recommended for best quality)"
    echo "  macOS: brew install --cask mactex"
    echo "  Linux: sudo apt-get install texlive-xetex"
    echo ""
    echo "Option 2: Open the HTML file in your browser and print to PDF:"
    echo "  1. Open: $HTML_FILE"
    echo "  2. Press Cmd+P (Mac) or Ctrl+P (Windows/Linux)"
    echo "  3. Select 'Save as PDF'"
    echo "  4. Set margins to 'None' and background graphics enabled"
    echo ""
    exit 1
fi

# Generate PDF using headless Chrome
# Landscape orientation, 16:9 aspect ratio (1920x1080px)
# No margins, no header/footer, background graphics enabled
"$CHROME" --headless --disable-gpu \
    --print-to-pdf="$PDF_FILE" \
    --print-to-pdf-no-header \
    --no-margins \
    --print-to-pdf-landscape \
    "$HTML_FILE" 2>/dev/null || \
"$CHROME" --headless --disable-gpu \
    --print-to-pdf="$PDF_FILE" \
    --print-to-pdf-no-header \
    --no-margins \
    "$HTML_FILE" 2>/dev/null

if [ -f "$PDF_FILE" ]; then
    echo "✓ PDF generated successfully: $PDF_FILE"
    echo ""
    echo "Note: This PDF is generated from HTML. For best quality with"
    echo "proper Regenerant Catalunya styling, install LaTeX and use:"
    echo "  ./build-presentation.sh workshop-1-prototype.md pdf"
else
    echo "Error: PDF generation failed."
    echo ""
    echo "Please use the browser print method:"
    echo "  1. Open: $HTML_FILE"
    echo "  2. Press Cmd+P (Mac) or Ctrl+P (Windows/Linux)"
    echo "  3. Select 'Save as PDF'"
    exit 1
fi

