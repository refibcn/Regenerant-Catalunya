#!/usr/bin/env node

/**
 * Green Duotone Color Mapping
 * Applies green duotone color mapping to images with halftone patterns
 */

import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Default configuration
const DEFAULT_CONFIG = {
  darkColor: '#214033',
  lightColor: '#E6DFD7',
  balance: 0.5
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
 * Interpolate between two colors
 */
function interpolateColor(color1, color2, t) {
  return {
    r: Math.round(color1.r + (color2.r - color1.r) * t),
    g: Math.round(color1.g + (color2.g - color1.g) * t),
    b: Math.round(color1.b + (color2.b - color1.b) * t)
  };
}

/**
 * Apply duotone color mapping
 */
async function applyDuotone(inputPath, outputPath, config = {}) {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };
  
  try {
    // Load image
    const image = sharp(inputPath);
    const { data, info } = await image
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    const { width, height } = info;
    
    // Get RGB values for duotone colors
    const darkRgb = hexToRgb(finalConfig.darkColor);
    const lightRgb = hexToRgb(finalConfig.lightColor);
    
    // Calculate mid color
    const midRgb = interpolateColor(darkRgb, lightRgb, 0.5);
    
    // Create output buffer
    const outputBuffer = Buffer.alloc(width * height * 4);
    
    // Apply color mapping
    for (let i = 0; i < width * height; i++) {
      const idx = i * 4;
      
      // Extract RGB values
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = data[idx + 3] || 255;
      
      // Calculate luminance (perceived brightness)
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      
      // Apply color mapping based on balance
      let mappedColor;
      if (luminance < finalConfig.balance) {
        // Map to dark color range
        const t = luminance / finalConfig.balance;
        mappedColor = interpolateColor(darkRgb, midRgb, t);
      } else {
        // Map to light color range
        const t = (luminance - finalConfig.balance) / (1 - finalConfig.balance);
        mappedColor = interpolateColor(midRgb, lightRgb, t);
      }
      
      outputBuffer[idx] = mappedColor.r;
      outputBuffer[idx + 1] = mappedColor.g;
      outputBuffer[idx + 2] = mappedColor.b;
      outputBuffer[idx + 3] = a;
    }
    
    // Save output
    await sharp(outputBuffer, {
      raw: {
        width,
        height,
        channels: 4
      }
    })
      .png()
      .toFile(outputPath);
    
    console.log(`✓ Applied duotone color mapping: ${outputPath}`);
    return { success: true, outputPath };
    
  } catch (error) {
    console.error(`✗ Error applying duotone: ${error.message}`);
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
        Object.assign(config, configData.duotone || configData);
        break;
    }
  }
  
  if (!inputPath || !outputPath) {
    console.error('Usage: apply-duotone.js --input <path> --output <path> [options]');
    console.error('Options:');
    console.error('  --dark-color <hex>       Dark color hex (default: #214033)');
    console.error('  --light-color <hex>      Light color hex (default: #E6DFD7)');
    console.error('  --balance <number>        Color balance 0-1 (default: 0.5)');
    console.error('  --config <path>           JSON config file');
    process.exit(1);
  }
  
  applyDuotone(inputPath, outputPath, config)
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

export { applyDuotone };

