#!/usr/bin/env node

/**
 * Social Media Template Generator
 * Generates social media post templates with brand colors and logo
 */

import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Platform specifications
const PLATFORM_SPECS = {
  instagram: {
    square: { width: 1080, height: 1080 },
    portrait: { width: 1080, height: 1350 }
  },
  twitter: {
    landscape: { width: 1200, height: 675 }
  },
  linkedin: {
    landscape: { width: 1200, height: 627 }
  },
  facebook: {
    landscape: { width: 1200, height: 630 }
  }
};

/**
 * Convert hex to RGB
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Generate social media template
 */
async function generateSocialMediaTemplate(platform, outputDir, config = {}) {
  try {
    const platformSpec = PLATFORM_SPECS[platform];
    if (!platformSpec) {
      throw new Error(`Unknown platform: ${platform}`);
    }
    
    // Get dimensions (default to first available)
    const dimensions = Object.values(platformSpec)[0];
    const { width, height } = dimensions;
    
    // Load colors
    const colors = config.colors || JSON.parse(readFileSync(join(__dirname, '../../../brand-assets/colors.json'), 'utf8'));
    const bgColor = hexToRgb(colors.base.warmSand || '#E6DFD7');
    
    // Create canvas
    const canvas = sharp({
      create: {
        width,
        height,
        channels: 4,
        background: { r: bgColor.r, g: bgColor.g, b: bgColor.b }
      }
    });
    
    // Place logo if provided
    if (config.logoPath) {
      const logo = sharp(config.logoPath);
      const logoMetadata = await logo.metadata();
      
      // Scale logo to appropriate size (10% of height)
      const logoSize = Math.floor(height * 0.1);
      const scaledLogo = await logo
        .resize(logoSize, logoSize, { fit: 'contain' })
        .toBuffer();
      
      // Composite logo (top-left corner with padding)
      const padding = Math.floor(width * 0.05);
      await canvas.composite([{
        input: scaledLogo,
        left: padding,
        top: padding
      }]);
    }
    
    // Generate template for each language
    const languages = config.languages || ['en'];
    const templates = [];
    
    for (const lang of languages) {
      const outputPath = join(outputDir, `${platform}-${lang}.png`);
      await canvas.png().toFile(outputPath);
      templates.push(outputPath);
      console.log(`✓ Generated template: ${outputPath}`);
    }
    
    // Generate SVG template with text areas
    const svgTemplate = generateSVGTemplate(platform, dimensions, colors, config);
    const svgPath = join(outputDir, `${platform}-template.svg`);
    writeFileSync(svgPath, svgTemplate);
    templates.push(svgPath);
    console.log(`✓ Generated SVG template: ${svgPath}`);
    
    return { success: true, templates };
    
  } catch (error) {
    console.error(`✗ Error generating template: ${error.message}`);
    return { success: false, error: error.message };
  }
}

/**
 * Generate SVG template with text areas
 */
function generateSVGTemplate(platform, dimensions, colors, config) {
  const { width, height } = dimensions;
  const languages = config.languages || ['en'];
  
  const textAreas = languages.map((lang, idx) => {
    const y = height * 0.3 + (idx * 100);
    return `
    <g id="text-${lang}">
      <rect x="${width * 0.1}" y="${y}" width="${width * 0.8}" height="80" 
            fill="none" stroke="#214033" stroke-width="2" stroke-dasharray="5,5" opacity="0.5"/>
      <text x="${width * 0.1 + 10}" y="${y + 30}" font-family="Inter" font-size="24" fill="#214033">
        ${lang.toUpperCase()} - Title Area
      </text>
      <text x="${width * 0.1 + 10}" y="${y + 60}" font-family="Inter" font-size="18" fill="#214033" opacity="0.7">
        ${lang.toUpperCase()} - Body Text Area
      </text>
    </g>`;
  }).join('');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${colors.base.warmSand || '#E6DFD7'}"/>
  ${config.logoPath ? `<image href="${config.logoPath}" x="${width * 0.05}" y="${width * 0.05}" width="${height * 0.1}" height="${height * 0.1}"/>` : ''}
  ${textAreas}
</svg>`;
}

// CLI interface
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const config = {};
  
  let platform, outputDir;
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    switch (arg) {
      case '--platform':
        platform = args[++i];
        break;
      case '--output-dir':
        outputDir = args[++i];
        break;
      case '--logo-path':
        config.logoPath = args[++i];
        break;
      case '--colors':
        const colorsPath = args[++i];
        config.colors = JSON.parse(readFileSync(colorsPath, 'utf8'));
        break;
      case '--languages':
        config.languages = args[++i].split(',');
        break;
    }
  }
  
  if (!platform || !outputDir) {
    console.error('Usage: social-media.js --platform <platform> --output-dir <path> [options]');
    console.error('Platforms: instagram, twitter, linkedin, facebook');
    console.error('Options:');
    console.error('  --logo-path <path>       Path to logo file');
    console.error('  --colors <path>          JSON file with brand colors');
    console.error('  --languages <list>       Comma-separated language codes (default: en)');
    process.exit(1);
  }
  
  // Ensure output directory exists
  import('fs/promises').then(fs => fs.mkdir(outputDir, { recursive: true }))
    .then(() => generateSocialMediaTemplate(platform, outputDir, config))
    .then(result => {
      if (!result.success) {
        process.exit(1);
      }
    })
    .catch(error => {
      console.error(`Fatal error: ${error.message}`);
      process.exit(1);
    });
}

export { generateSocialMediaTemplate };

