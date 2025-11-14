#!/usr/bin/env node

/**
 * Halftone Lines Pattern Generator
 * Generates line screen halftone patterns with green duotone color mapping
 */

import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Default configuration
const DEFAULT_CONFIG = {
  lineSpacing: 4,
  angle: 0,  // No rotation by default
  intensity: 0.3,  // Lower intensity to preserve detail
  darkColor: '#214033',
  lightColor: '#E6DFD7',
  balance: 0.5,
  preserveDetail: true  // Preserve original image detail
};

/**
 * Convert hex color to RGB
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
 * Generate halftone lines pattern
 */
async function generateHalftoneLines(inputPath, outputPath, config = {}) {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };
  
  try {
    // Load original image (keep color)
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Get original image data
    const originalData = await image
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    // Get grayscale for pattern calculation
    const grayscale = await image
      .greyscale()
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    const { data: grayData, info } = grayscale;
    const { data: origData } = originalData;
    const { width, height } = info;
    
    // Create output image buffer
    const outputBuffer = Buffer.alloc(width * height * 4);
    
    // Get RGB values for duotone colors
    const darkRgb = hexToRgb(finalConfig.darkColor);
    const lightRgb = hexToRgb(finalConfig.lightColor);
    
    // Generate halftone line pattern overlay (horizontal lines, no rotation)
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 4;
        
        // Get original pixel color
        const origR = origData[idx];
        const origG = origData[idx + 1];
        const origB = origData[idx + 2];
        
        // Get brightness for pattern
        const brightness = grayData[idx] / 255;
        
        // Calculate horizontal line position (no angle rotation)
        const linePos = Math.floor(y / finalConfig.lineSpacing);
        const lineCenter = linePos * finalConfig.lineSpacing + finalConfig.lineSpacing / 2;
        const distance = Math.abs(y - lineCenter);
        
        // Calculate line width based on brightness
        const maxWidth = finalConfig.lineSpacing - 1;
        const lineWidth = (brightness * finalConfig.intensity) * maxWidth;
        
        // Determine if pixel is inside line
        const inLine = distance <= lineWidth / 2;
        
        if (finalConfig.preserveDetail && !inLine) {
          // Preserve original image when not in line
          outputBuffer[idx] = origR;
          outputBuffer[idx + 1] = origG;
          outputBuffer[idx + 2] = origB;
        } else {
          // Apply halftone pattern with duotone
          if (inLine) {
            // Inside line - use duotone colors based on brightness
            if (brightness < finalConfig.balance) {
              outputBuffer[idx] = darkRgb.r;
              outputBuffer[idx + 1] = darkRgb.g;
              outputBuffer[idx + 2] = darkRgb.b;
            } else {
              const t = (brightness - finalConfig.balance) / (1 - finalConfig.balance);
              const r = Math.round(darkRgb.r + (lightRgb.r - darkRgb.r) * t);
              const g = Math.round(darkRgb.g + (lightRgb.g - darkRgb.g) * t);
              const b = Math.round(darkRgb.b + (lightRgb.b - darkRgb.b) * t);
              outputBuffer[idx] = r;
              outputBuffer[idx + 1] = g;
              outputBuffer[idx + 2] = b;
            }
          } else {
            // Outside line - blend original with light color
            const blendFactor = 0.7; // Preserve 70% of original
            outputBuffer[idx] = Math.round(origR * blendFactor + lightRgb.r * (1 - blendFactor));
            outputBuffer[idx + 1] = Math.round(origG * blendFactor + lightRgb.g * (1 - blendFactor));
            outputBuffer[idx + 2] = Math.round(origB * blendFactor + lightRgb.b * (1 - blendFactor));
          }
        }
        outputBuffer[idx + 3] = 255; // Alpha
      }
    }
    
    // NO ROTATION - keep image straight
    const result = sharp(outputBuffer, {
      raw: {
        width,
        height,
        channels: 4
      }
    });
    
    // Save output
    await result.png().toFile(outputPath);
    
    console.log(`✓ Generated halftone lines pattern: ${outputPath}`);
    return { success: true, outputPath };
    
  } catch (error) {
    console.error(`✗ Error generating halftone lines: ${error.message}`);
    return { success: false, error: error.message };
  }
}

// CLI interface
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const config = {};
  
  let inputPath, outputPath;
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    switch (arg) {
      case '--input':
        inputPath = args[++i];
        break;
      case '--output':
        outputPath = args[++i];
        break;
      case '--line-spacing':
        config.lineSpacing = parseInt(args[++i]);
        break;
      case '--angle':
        config.angle = parseFloat(args[++i]);
        break;
      case '--intensity':
        config.intensity = parseFloat(args[++i]);
        break;
      case '--dark-color':
        config.darkColor = args[++i];
        break;
      case '--light-color':
        config.lightColor = args[++i];
        break;
      case '--balance':
        config.balance = parseFloat(args[++i]);
        break;
      case '--config':
        const configPath = args[++i];
        const configData = JSON.parse(readFileSync(configPath, 'utf8'));
        Object.assign(config, configData);
        break;
    }
  }
  
  if (!inputPath || !outputPath) {
    console.error('Usage: halftone-lines.js --input <path> --output <path> [options]');
    console.error('Options:');
    console.error('  --line-spacing <number>  Line spacing in pixels (default: 4)');
    console.error('  --angle <number>         Pattern angle in degrees (default: 45)');
    console.error('  --intensity <number>    Pattern intensity 0-1 (default: 0.6)');
    console.error('  --dark-color <hex>      Dark color hex (default: #214033)');
    console.error('  --light-color <hex>     Light color hex (default: #E6DFD7)');
    console.error('  --balance <number>      Color balance 0-1 (default: 0.5)');
    console.error('  --config <path>         JSON config file');
    process.exit(1);
  }
  
  generateHalftoneLines(inputPath, outputPath, config)
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

export { generateHalftoneLines };

