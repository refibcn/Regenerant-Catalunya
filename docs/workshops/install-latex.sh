#!/bin/bash

# Script to install BasicTeX and required packages
# This script requires sudo access and will prompt for password

set -e

echo "Installing BasicTeX..."
echo "This will require your administrator password."

# Install BasicTeX via Homebrew
brew install --cask basictex

echo ""
echo "BasicTeX installed. Setting up PATH..."

# Add TeX to PATH for current session
eval "$(/usr/libexec/path_helper)"

# Verify installation
if command -v pdflatex &> /dev/null; then
    echo "✓ LaTeX installed successfully"
    
    echo ""
    echo "Updating TeX Live package manager..."
    sudo tlmgr update --self
    
    echo ""
    echo "Installing required LaTeX packages..."
    sudo tlmgr install fontspec xcolor tikz listings booktabs beamer
    
    echo ""
    echo "✓ LaTeX setup complete!"
    echo ""
    echo "You can now generate PDFs using:"
    echo "  ./build-presentation.sh workshop-1-prototype.md pdf"
else
    echo "⚠ LaTeX not found in PATH"
    echo "Please restart your terminal or run:"
    echo "  eval \"\$(/usr/libexec/path_helper)\""
fi

