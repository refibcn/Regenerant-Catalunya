#!/usr/bin/env node

/**
 * Asset Validation
 * Validates all assets in a directory against brand configuration
 */

import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';
import { readFileSync } from 'fs';
import { checkBrandCompliance } from './check-brand-compliance.js';

/**
 * Check if file is an asset file
 */
function isAssetFile(filename) {
  const ext = extname(filename).toLowerCase();
  return ['.png', '.svg', '.jpg', '.jpeg', '.webp', '.pdf'].includes(ext);
}

/**
 * Validate assets in directory
 */
async function validateAssets(assetDir, configPath, outputPath) {
  const results = {
    directory: assetDir,
    total: 0,
    passed: 0,
    warnings: 0,
    failed: 0,
    assets: [],
    startTime: Date.now()
  };
  
  try {
    // Read directory
    const files = await readdir(assetDir);
    const assetFiles = files.filter(isAssetFile);
    
    results.total = assetFiles.length;
    
    console.log(`Validating ${assetFiles.length} assets...`);
    
    // Validate each asset
    for (const filename of assetFiles) {
      const assetPath = join(assetDir, filename);
      
      console.log(`Checking: ${filename}`);
      
      const report = await checkBrandCompliance(assetPath, configPath);
      
      results.assets.push({
        filename,
        ...report
      });
      
      if (report.status === 'pass') {
        results.passed++;
        console.log(`  ✓ Pass`);
      } else if (report.status === 'warning') {
        results.warnings++;
        console.log(`  ⚠ Warning`);
        if (report.warnings.length > 0) {
          report.warnings.forEach(w => console.log(`    - ${w}`));
        }
      } else {
        results.failed++;
        console.log(`  ✗ Fail`);
        if (report.errors.length > 0) {
          report.errors.forEach(e => console.log(`    - ${e}`));
        }
      }
    }
    
    const duration = ((Date.now() - results.startTime) / 1000).toFixed(2);
    results.duration = duration;
    
    console.log('\n=== Validation Complete ===');
    console.log(`Total: ${results.total}`);
    console.log(`Passed: ${results.passed}`);
    console.log(`Warnings: ${results.warnings}`);
    console.log(`Failed: ${results.failed}`);
    console.log(`Duration: ${duration}s`);
    
    // Save report
    if (outputPath) {
      const output = JSON.stringify(results, null, 2);
      await import('fs/promises').then(fs => fs.writeFile(outputPath, output));
      console.log(`\nReport saved to: ${outputPath}`);
    }
    
    return results;
    
  } catch (error) {
    console.error(`✗ Validation error: ${error.message}`);
    return { ...results, error: error.message };
  }
}

// CLI interface
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  let assetDir, configPath, outputPath;
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    switch (arg) {
      case '--asset-dir':
        assetDir = args[++i];
        break;
      case '--config':
        configPath = args[++i];
        break;
      case '--output':
        outputPath = args[++i];
        break;
    }
  }
  
  if (!assetDir) {
    console.error('Usage: validate-assets.js --asset-dir <path> [--config <path>] [--output <path>]');
    process.exit(1);
  }
  
  // Default config path
  if (!configPath) {
    configPath = join(import.meta.url.replace('file://', ''), '../../../brand-assets/brand-config.json');
  }
  
  validateAssets(assetDir, configPath, outputPath)
    .then(results => {
      if (results.failed > 0) {
        process.exit(1);
      }
    })
    .catch(error => {
      console.error(`Fatal error: ${error.message}`);
      process.exit(1);
    });
}

export { validateAssets };

