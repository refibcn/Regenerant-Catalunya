#!/usr/bin/env node

/**
 * Generate comprehensive prototypes with different settings
 */

import { generateHalftoneDots } from '../scripts/brand-assets/pattern-generation/halftone-dots.js';
import { generateHalftoneLines } from '../scripts/brand-assets/pattern-generation/halftone-lines.js';
import { applyDuotone } from '../scripts/brand-assets/image-processing/apply-duotone.js';
import { batchProcess } from '../scripts/brand-assets/image-processing/batch-process.js';
import { generateSocialMediaTemplate } from '../scripts/brand-assets/template-generation/social-media.js';
import { generateWebBanner } from '../scripts/brand-assets/template-generation/web-banners.js';
import { readFileSync } from 'fs';
import { join } from 'path';

const TEST_DIR = './test-prototypes';
const INPUT_DIR = join(TEST_DIR, 'input');
const OUTPUT_DIR = join(TEST_DIR, 'output');
const CONFIG_DIR = join(process.cwd(), 'brand-assets');

async function generatePrototypes() {
  console.log('🎨 Generating Brand Asset Prototypes\n');
  
  const colors = JSON.parse(readFileSync(join(CONFIG_DIR, 'colors.json'), 'utf8'));
  const patternConfig = JSON.parse(readFileSync(join(CONFIG_DIR, 'pattern-config.json'), 'utf8'));
  
  // Prototype 1: Different dot sizes
  console.log('Prototype 1: Halftone Dots - Different Sizes');
  const dotSizes = [4, 8, 12, 16];
  for (const size of dotSizes) {
    await generateHalftoneDots(
      join(INPUT_DIR, 'test-image-1.png'),
      join(OUTPUT_DIR, `prototype-dots-${size}px.png`),
      { dotSize: size, intensity: 0.6 }
    );
  }
  console.log('  ✓ Generated 4 variants\n');
  
  // Prototype 2: Different intensities
  console.log('Prototype 2: Halftone Dots - Different Intensities');
  const intensities = [0.3, 0.5, 0.7, 0.9];
  for (const intensity of intensities) {
    await generateHalftoneDots(
      join(INPUT_DIR, 'test-image-1.png'),
      join(OUTPUT_DIR, `prototype-intensity-${intensity}.png`),
      { dotSize: 8, intensity }
    );
  }
  console.log('  ✓ Generated 4 variants\n');
  
  // Prototype 3: Different angles
  console.log('Prototype 3: Halftone Dots - Different Angles');
  const angles = [0, 45, 90, 135];
  for (const angle of angles) {
    await generateHalftoneDots(
      join(INPUT_DIR, 'test-image-1.png'),
      join(OUTPUT_DIR, `prototype-angle-${angle}deg.png`),
      { dotSize: 8, angle, intensity: 0.6 }
    );
  }
  console.log('  ✓ Generated 4 variants\n');
  
  // Prototype 4: Line patterns with different spacing
  console.log('Prototype 4: Halftone Lines - Different Spacing');
  const lineSpacings = [2, 4, 6, 8];
  for (const spacing of lineSpacings) {
    await generateHalftoneLines(
      join(INPUT_DIR, 'test-image-2.jpg'),
      join(OUTPUT_DIR, `prototype-lines-${spacing}px.png`),
      { lineSpacing: spacing, intensity: 0.6 }
    );
  }
  console.log('  ✓ Generated 4 variants\n');
  
  // Prototype 5: Complete workflow (pattern + duotone)
  console.log('Prototype 5: Complete Workflow (Pattern + Duotone)');
  await generateHalftoneDots(
    join(INPUT_DIR, 'test-image-1.png'),
    join(OUTPUT_DIR, 'prototype-complete-pattern.png'),
    { dotSize: 8, intensity: 0.6 }
  );
  await applyDuotone(
    join(OUTPUT_DIR, 'prototype-complete-pattern.png'),
    join(OUTPUT_DIR, 'prototype-complete-final.png'),
    {
      darkColor: colors.duotone.dark,
      lightColor: colors.duotone.light,
      balance: colors.duotone.balance
    }
  );
  console.log('  ✓ Generated complete workflow example\n');
  
  // Prototype 6: Social media templates for all platforms
  console.log('Prototype 6: Social Media Templates - All Platforms');
  const platforms = ['instagram', 'twitter', 'linkedin', 'facebook'];
  for (const platform of platforms) {
    await generateSocialMediaTemplate(
      platform,
      join(TEST_DIR, 'templates'),
      {
        colors,
        languages: ['en', 'es', 'cat']
      }
    );
  }
  console.log('  ✓ Generated templates for 4 platforms\n');
  
  // Prototype 7: Web banners for all types
  console.log('Prototype 7: Web Banner Templates - All Types');
  const bannerTypes = ['hero', 'section', 'sidebar', 'mobile'];
  for (const type of bannerTypes) {
    await generateWebBanner(
      type,
      join(TEST_DIR, 'templates'),
      {
        colors,
        quartzIntegration: true
      }
    );
  }
  console.log('  ✓ Generated banners for 4 types\n');
  
  console.log('✨ All prototypes generated successfully!\n');
  console.log(`Output directory: ${OUTPUT_DIR}`);
  console.log(`Templates directory: ${join(TEST_DIR, 'templates')}`);
}

generatePrototypes()
  .catch(error => {
    console.error('Error:', error);
    process.exit(1);
  });

