#!/bin/bash

# Build script for Regenerant Catalunya presentations
# Converts Markdown files to HTML (reveal.js) or PDF (beamer) using pandoc

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

# Function to print usage
usage() {
    echo "Usage: $0 <input.md> [html|pdf]"
    echo ""
    echo "Converts a Markdown file to a presentation."
    echo ""
    echo "Arguments:"
    echo "  input.md    Path to the Markdown file"
    echo "  html|pdf    Output format (default: html)"
    echo ""
    echo "Examples:"
    echo "  $0 my-presentation.md html"
    echo "  $0 my-presentation.md pdf"
    exit 1
}

# Check arguments
if [ $# -lt 1 ]; then
    usage
fi

INPUT_FILE="$1"
OUTPUT_FORMAT="${2:-html}"

# Check if input file exists
if [ ! -f "$INPUT_FILE" ]; then
    echo -e "${RED}Error: Input file '$INPUT_FILE' not found.${NC}"
    exit 1
fi

# Get base name without extension
BASENAME=$(basename "$INPUT_FILE" .md)
OUTPUT_DIR=$(dirname "$INPUT_FILE")

# Build based on format
case "$OUTPUT_FORMAT" in
    html)
        echo -e "${BLUE}Building HTML presentation (reveal.js)...${NC}"
        
        OUTPUT_FILE="$OUTPUT_DIR/$BASENAME.html"
        
        pandoc "$INPUT_FILE" \
            --from markdown \
            --to revealjs \
            --slide-level=2 \
            --standalone \
            --template="$TEMPLATES_DIR/revealjs-template.html" \
            --css="$TEMPLATES_DIR/revealjs-custom.css" \
            --output="$OUTPUT_FILE" \
            --variable revealjs-url=https://cdn.jsdelivr.net/npm/reveal.js@4.3.1
        
        # Copy CSS file to output directory if not already there
        if [ ! -f "$OUTPUT_DIR/revealjs-custom.css" ]; then
            cp "$TEMPLATES_DIR/revealjs-custom.css" "$OUTPUT_DIR/"
            echo -e "${GREEN}Copied CSS file to output directory.${NC}"
        fi
        
        echo -e "${GREEN}✓ HTML presentation created: $OUTPUT_FILE${NC}"
        echo -e "${BLUE}Open in browser: file://$(realpath "$OUTPUT_FILE")${NC}"
        ;;
    
    pdf)
        echo -e "${BLUE}Building PDF presentation (beamer)...${NC}"
        
        # Check if XeLaTeX is available (required for custom fonts)
        if ! command -v xelatex &> /dev/null; then
            echo -e "${RED}Warning: xelatex not found. Falling back to pdflatex.${NC}"
            echo -e "${RED}Custom fonts may not work correctly.${NC}"
            PDF_ENGINE="pdflatex"
        else
            PDF_ENGINE="xelatex"
        fi
        
        OUTPUT_FILE="$OUTPUT_DIR/$BASENAME.pdf"
        
        pandoc "$INPUT_FILE" \
            --from markdown \
            --to beamer \
            --slide-level=2 \
            --template="$TEMPLATES_DIR/beamer-template.tex" \
            --pdf-engine="$PDF_ENGINE" \
            --output="$OUTPUT_FILE"
        
        echo -e "${GREEN}✓ PDF presentation created: $OUTPUT_FILE${NC}"
        ;;
    
    *)
        echo -e "${RED}Error: Invalid format '$OUTPUT_FORMAT'. Use 'html' or 'pdf'.${NC}"
        usage
        ;;
esac

