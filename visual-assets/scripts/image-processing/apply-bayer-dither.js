#!/usr/bin/env node

/**
 * Integrated Bayer Dither Pipeline
 * Combines Bayer dithering with updated dualtone color mapping
 * Uses beige as base color and green/orange accents
 */

import { applyBayerDither } from "../pattern-generation/bayer-dither.js"
import { fileURLToPath } from "url"
import { dirname, join } from "path"
import { readFileSync } from "fs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Default configuration matching reference image
const DEFAULT_CONFIG = {
  matrixSize: 4,
  darkColor: "#214033", // Forest Green
  midColor: "#E6DFD7", // Beige/Warm Sand (base)
  lightColor: "#E67E50", // Orange (subtle accent)
  darkThreshold: 0.4, // Adjusted for better green/beige balance
  lightThreshold: 0.85, // Higher threshold - mostly beige, orange only for highlights
}

/**
 * Apply integrated Bayer dither with dualtone color mapping
 */
async function applyBayerDitherPipeline(inputPath, outputPath, config = {}) {
  const finalConfig = { ...DEFAULT_CONFIG, ...config }

  try {
    // Apply Bayer dithering with color mapping
    const result = await applyBayerDither(inputPath, outputPath, {
      matrixSize: finalConfig.matrixSize,
      darkColor: finalConfig.darkColor,
      midColor: finalConfig.midColor,
      lightColor: finalConfig.lightColor,
      darkThreshold: finalConfig.darkThreshold,
      lightThreshold: finalConfig.lightThreshold,
    })

    if (!result.success) {
      return result
    }

    console.log(`✓ Applied Bayer dither pipeline: ${outputPath}`)
    return { success: true, outputPath }
  } catch (error) {
    console.error(`✗ Error applying Bayer dither pipeline: ${error.message}`)
    return { success: false, error: error.message }
  }
}

// CLI interface
const isMainModule =
  import.meta.url === `file://${process.argv[1]}` ||
  (process.argv[1] &&
    (import.meta.url.replace("file://", "").endsWith(process.argv[1].replace(/\\/g, "/")) ||
      import.meta.url.includes(process.argv[1].split("/").pop())))

if (isMainModule) {
  const args = process.argv.slice(2)
  const config = {}

  let inputPath, outputPath

  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    switch (arg) {
      case "--input":
        inputPath = args[++i]
        break
      case "--output":
        outputPath = args[++i]
        break
      case "--matrix-size":
        config.matrixSize = parseInt(args[++i])
        if (config.matrixSize !== 4 && config.matrixSize !== 8) {
          console.error("Matrix size must be 4 or 8")
          process.exit(1)
        }
        break
      case "--dark-color":
        config.darkColor = args[++i]
        break
      case "--mid-color":
        config.midColor = args[++i]
        break
      case "--light-color":
        config.lightColor = args[++i]
        break
      case "--dark-threshold":
        config.darkThreshold = parseFloat(args[++i])
        break
      case "--light-threshold":
        config.lightThreshold = parseFloat(args[++i])
        break
      case "--config":
        const configPath = args[++i]
        const configData = JSON.parse(readFileSync(configPath, "utf8"))
        Object.assign(config, configData.bayerDither || configData)
        break
    }
  }

  if (!inputPath || !outputPath) {
    console.error("Usage: apply-bayer-dither.js --input <path> --output <path> [options]")
    console.error("Options:")
    console.error("  --matrix-size <number>     Matrix size: 4 or 8 (default: 4)")
    console.error("  --dark-color <hex>         Dark color hex (default: #214033)")
    console.error("  --mid-color <hex>           Mid/base color hex (default: #E6DFD7)")
    console.error("  --light-color <hex>         Light color hex (default: #E67E50)")
    console.error("  --dark-threshold <number>   Dark threshold 0-1 (default: 0.33)")
    console.error("  --light-threshold <number> Light threshold 0-1 (default: 0.66)")
    console.error("  --config <path>             JSON config file")
    process.exit(1)
  }

  applyBayerDitherPipeline(inputPath, outputPath, config)
    .then((result) => {
      if (!result.success) {
        process.exit(1)
      }
    })
    .catch((error) => {
      console.error(`Fatal error: ${error.message}`)
      process.exit(1)
    })
}

export { applyBayerDitherPipeline }
