#!/usr/bin/env node

/**
 * Web Banner Template Generator
 * Generates web banner templates with Quartz integration
 */

import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Banner type specifications
const BANNER_SPECS = {
  hero: { width: 1200, height: 400 },
  section: { width: 800, height: 200 },
  sidebar: { width: 300, height: 250 },
  mobile: { width: 600, height: 300 }
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
 * Generate web banner template
 */
async function generateWebBanner(bannerType, outputDir, config = {}) {
  try {
    const dimensions = BANNER_SPECS[bannerType];
    if (!dimensions) {
      throw new Error(`Unknown banner type: ${bannerType}`);
    }
    
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
      
      // Scale logo to appropriate size
      const logoSize = Math.floor(height * 0.3);
      const scaledLogo = await logo
        .resize(logoSize, logoSize, { fit: 'contain' })
        .toBuffer();
      
      // Composite logo (left side with padding)
      const padding = Math.floor(width * 0.05);
      await canvas.composite([{
        input: scaledLogo,
        left: padding,
        top: (height - logoSize) / 2
      }]);
    }
    
    // Generate PNG template
    const pngPath = join(outputDir, `banner-${bannerType}.png`);
    await canvas.png().toFile(pngPath);
    console.log(`✓ Generated banner: ${pngPath}`);
    
    // Generate WebP for Quartz optimization
    if (config.quartzIntegration) {
      const webpPath = join(outputDir, `banner-${bannerType}.webp`);
      await canvas.webp({ quality: 80 }).toFile(webpPath);
      console.log(`✓ Generated WebP: ${webpPath}`);
    }
    
    // Generate SVG template
    const svgTemplate = generateSVGTemplate(bannerType, dimensions, colors, config);
    const svgPath = join(outputDir, `banner-${bannerType}.svg`);
    writeFileSync(svgPath, svgTemplate);
    console.log(`✓ Generated SVG template: ${svgPath}`);
    
    // Generate Quartz-compatible HTML snippet
    if (config.quartzIntegration) {
      const htmlSnippet = generateQuartzHTML(bannerType, dimensions);
      const htmlPath = join(outputDir, `banner-${bannerType}.html`);
      writeFileSync(htmlPath, htmlSnippet);
      console.log(`✓ Generated Quartz HTML: ${htmlPath}`);
    }
    
    return { success: true, outputDir };
    
  } catch (error) {
    console.error(`✗ Error generating banner: ${error.message}`);
    return { success: false, error: error.message };
  }
}

/**
 * Generate SVG template
 */
function generateSVGTemplate(bannerType, dimensions, colors, config) {
  const { width, height } = dimensions;
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${colors.base.warmSand || '#E6DFD7'}"/>
  ${config.logoPath ? `<image href="${config.logoPath}" x="${width * 0.05}" y="${(height - height * 0.3) / 2}" width="${height * 0.3}" height="${height * 0.3}"/>` : ''}
  <g id="text-area">
    <rect x="${width * 0.4}" y="${height * 0.2}" width="${width * 0.55}" height="${height * 0.6}" 
          fill="none" stroke="#214033" stroke-width="2" stroke-dasharray="5,5" opacity="0.5"/>
    <text x="${width * 0.4 + 10}" y="${height * 0.2 + 40}" font-family="Inter" font-size="32" font-weight="bold" fill="#214033">
      Banner Title
    </text>
    <text x="${width * 0.4 + 10}" y="${height * 0.2 + 80}" font-family="Inter" font-size="18" fill="#214033" opacity="0.7">
      Banner subtitle and description text area
    </text>
  </g>
</svg>`;
}

/**
 * Generate Quartz-compatible HTML
 */
function generateQuartzHTML(bannerType, dimensions) {
  const { width, height } = dimensions;
  
  return `<!-- Quartz Banner Template: ${bannerType} -->
<div class="banner banner-${bannerType}" style="width: 100%; max-width: ${width}px; aspect-ratio: ${width}/${height};">
  <picture>
    <source srcset="/static/banner-${bannerType}.webp" type="image/webp">
    <img src="/static/banner-${bannerType}.png" alt="Regenerant Catalunya Banner" loading="lazy">
  </picture>
</div>

<style>
.banner-${bannerType} {
  margin: 2rem auto;
  border-radius: 8px;
  overflow: hidden;
}

.banner-${bannerType} img {
  width: 100%;
  height: auto;
  display: block;
}
</style>`;
}

// CLI interface
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const config = {};
  
  let bannerType, outputDir;
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    switch (arg) {
      case '--type':
        bannerType = args[++i];
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
      case '--quartz-integration':
        config.quartzIntegration = args[++i] === 'true';
        break;
    }
  }
  
  if (!bannerType || !outputDir) {
    console.error('Usage: web-banners.js --type <type> --output-dir <path> [options]');
    console.error('Types: hero, section, sidebar, mobile');
    console.error('Options:');
    console.error('  --logo-path <path>       Path to logo file');
    console.error('  --colors <path>          JSON file with brand colors');
    console.error('  --quartz-integration <true|false>  Generate Quartz-compatible files');
    process.exit(1);
  }
  
  // Ensure output directory exists
  import('fs/promises').then(fs => fs.mkdir(outputDir, { recursive: true }))
    .then(() => generateWebBanner(bannerType, outputDir, config))
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

export { generateWebBanner };

