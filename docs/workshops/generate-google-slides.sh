#!/bin/bash

# Generate Google Slides-compatible PowerPoint presentation
# Converts Markdown to PPTX and applies Regenerant Catalunya branding

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TEMPLATES_DIR="$SCRIPT_DIR/templates"

# Check if pandoc is installed
if ! command -v pandoc &> /dev/null; then
    echo -e "${RED}Error: pandoc is not installed.${NC}"
    echo "Please install pandoc: https://pandoc.org/installing.html"
    exit 1
fi

# Check if Python 3 is installed
if ! command -v python3 &> /dev/null; then
    echo -e "${RED}Error: python3 is not installed.${NC}"
    exit 1
fi

# Check if python-pptx is installed
if ! python3 -c "import pptx" 2>/dev/null; then
    echo -e "${RED}Error: python-pptx is not installed.${NC}"
    echo "Please install: pip3 install python-pptx"
    exit 1
fi

# Function to print usage
usage() {
    echo "Usage: $0 [input.md]"
    echo ""
    echo "Generates a Google Slides-compatible PowerPoint presentation."
    echo ""
    echo "Arguments:"
    echo "  input.md    Path to the Markdown file (default: workshop-1-prototype.md)"
    echo ""
    echo "Output files:"
    echo "  workshop-1-google-slides.pptx - Styled presentation"
    echo "  regenerant-catalunya-theme.pptx - Reusable theme template"
    exit 1
}

# Default input file
INPUT_FILE="${1:-$SCRIPT_DIR/workshop-1-prototype.md}"

# Check if input file exists
if [ ! -f "$INPUT_FILE" ]; then
    echo -e "${RED}Error: Input file '$INPUT_FILE' not found.${NC}"
    exit 1
fi

# Get base name without extension
BASENAME=$(basename "$INPUT_FILE" .md)
OUTPUT_DIR=$(dirname "$INPUT_FILE")
BASE_PPTX="$OUTPUT_DIR/$BASENAME-base.pptx"
FINAL_PPTX="$OUTPUT_DIR/$BASENAME-google-slides.pptx"
THEME_PPTX="$OUTPUT_DIR/regenerant-catalunya-theme.pptx"

echo -e "${BLUE}Generating Google Slides presentation...${NC}"
echo ""

# Step 1: Generate base PPTX using pandoc
echo -e "${BLUE}Step 1: Converting Markdown to PowerPoint...${NC}"
pandoc "$INPUT_FILE" \
    --from markdown \
    --to pptx \
    --slide-level=2 \
    --output="$BASE_PPTX"

if [ ! -f "$BASE_PPTX" ]; then
    echo -e "${RED}Error: Failed to generate base PowerPoint file.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Base PowerPoint file created${NC}"
echo ""

# Step 2: Apply brand theme
echo -e "${BLUE}Step 2: Applying Regenerant Catalunya brand theme...${NC}"
python3 "$SCRIPT_DIR/apply-brand-theme.py" "$BASE_PPTX" "$FINAL_PPTX"

if [ ! -f "$FINAL_PPTX" ]; then
    echo -e "${RED}Error: Failed to apply brand theme.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Brand theme applied${NC}"
echo ""

# Step 3: Create theme template
echo -e "${BLUE}Step 3: Creating reusable theme template...${NC}"
python3 "$SCRIPT_DIR/apply-brand-theme.py" --theme "$THEME_PPTX"

if [ ! -f "$THEME_PPTX" ]; then
    echo -e "${RED}Warning: Failed to create theme template.${NC}"
else
    echo -e "${GREEN}✓ Theme template created${NC}"
fi

echo ""
echo -e "${GREEN}✓ All files generated successfully!${NC}"
echo ""
echo "Output files:"
echo "  📄 $FINAL_PPTX"
echo "  🎨 $THEME_PPTX"
echo ""
echo "To use in Google Slides:"
echo "  1. Go to Google Slides"
echo "  2. File > Import slides"
echo "  3. Upload $FINAL_PPTX"
echo ""

# Clean up base file (optional - comment out if you want to keep it)
if [ -f "$BASE_PPTX" ]; then
    rm "$BASE_PPTX"
    echo -e "${BLUE}Cleaned up temporary base file.${NC}"
fi




