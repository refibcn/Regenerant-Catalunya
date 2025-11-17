#!/usr/bin/env node

/**
 * Batch Image Processing Pipeline
 * Processes multiple images with halftone patterns or Bayer dithering and color mapping
 */

import { readdir, stat } from "fs/promises"
import { join, extname, basename } from "path"
import { readFileSync } from "fs"
import { generateHalftoneDots } from "../pattern-generation/halftone-dots.js"
import { applyDuotone } from "./apply-duotone.js"
import { applyBayerDitherPipeline } from "./apply-bayer-dither.js"

// Supported image formats
const SUPPORTED_FORMATS = [".jpg", ".jpeg", ".png", ".webp"]

/**
 * Check if file is an image
 */
function isImageFile(filename) {
  const ext = extname(filename).toLowerCase()
  return SUPPORTED_FORMATS.includes(ext)
}

/**
 * Process single image
 */
async function processImage(inputPath, outputPath, config) {
  // Determine pattern type (default: bayerDither)
  const patternType = config.pattern || config.patternType || "bayerDither"

  try {
    if (patternType === "bayerDither") {
      // Use Bayer dither pipeline (default)
      const bayerConfig = config.bayerDither || {}
      return await applyBayerDitherPipeline(inputPath, outputPath, {
        matrixSize: bayerConfig.matrixSize || config.matrixSize || 4,
        darkColor: bayerConfig.darkColor || config.darkColor || "#214033",
        midColor: bayerConfig.midColor || config.midColor || "#E6DFD7",
        lightColor: bayerConfig.lightColor || config.lightColor || "#E67E50",
        darkThreshold: bayerConfig.darkThreshold || config.darkThreshold || 0.33,
        lightThreshold: bayerConfig.lightThreshold || config.lightThreshold || 0.66,
      })
    } else {
      // Legacy halftone dots workflow
      const tempPath = outputPath.replace(/\.(png|jpg|jpeg|webp)$/i, "-patterned.png")

      // Step 1: Apply halftone pattern
      const patternResult = await generateHalftoneDots(inputPath, tempPath, {
        dotSize: config.dotSize || 8,
        angle: config.angle || 45,
        intensity: config.intensity || 0.6,
        darkColor: config.duotone?.darkColor || config.darkColor || "#214033",
        lightColor: config.duotone?.lightColor || config.lightColor || "#E6DFD7",
        balance: config.duotone?.balance || config.balance || 0.5,
      })

      if (!patternResult.success) {
        return { success: false, error: patternResult.error }
      }

      // Step 2: Apply duotone color mapping
      const duotoneResult = await applyDuotone(tempPath, outputPath, {
        darkColor: config.duotone?.darkColor || config.darkColor || "#214033",
        lightColor: config.duotone?.lightColor || config.lightColor || "#E6DFD7",
        balance: config.duotone?.balance || config.balance || 0.5,
      })

      // Clean up temp file
      try {
        await import("fs/promises").then((fs) => fs.unlink(tempPath))
      } catch (e) {
        // Ignore cleanup errors
      }

      return duotoneResult
    }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

/**
 * Batch process images
 */
async function batchProcess(inputDir, outputDir, config) {
  const results = {
    success: [],
    failed: [],
    total: 0,
    startTime: Date.now(),
  }

  try {
    // Read input directory
    const files = await readdir(inputDir)
    const imageFiles = files.filter(isImageFile)

    results.total = imageFiles.length

    console.log(`Processing ${imageFiles.length} images...`)

    // Process each image
    for (const filename of imageFiles) {
      const inputPath = join(inputDir, filename)
      const outputFilename = basename(filename, extname(filename)) + ".png"
      const outputPath = join(outputDir, outputFilename)

      console.log(`Processing: ${filename}`)

      const result = await processImage(inputPath, outputPath, config)

      if (result.success) {
        results.success.push({ filename, outputPath })
        console.log(`  ✓ Success: ${outputFilename}`)
      } else {
        results.failed.push({ filename, error: result.error })
        console.log(`  ✗ Failed: ${result.error}`)
      }
    }

    const duration = ((Date.now() - results.startTime) / 1000).toFixed(2)

    console.log("\n=== Batch Processing Complete ===")
    console.log(`Total: ${results.total}`)
    console.log(`Success: ${results.success.length}`)
    console.log(`Failed: ${results.failed.length}`)
    console.log(`Duration: ${duration}s`)

    if (results.failed.length > 0) {
      console.log("\nFailed files:")
      results.failed.forEach(({ filename, error }) => {
        console.log(`  - ${filename}: ${error}`)
      })
    }

    return results
  } catch (error) {
    console.error(`✗ Batch processing error: ${error.message}`)
    return { ...results, error: error.message }
  }
}

// CLI interface
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2)
  let inputDir, outputDir, configPath
  const config = {}

  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    switch (arg) {
      case "--input-dir":
        inputDir = args[++i]
        break
      case "--output-dir":
        outputDir = args[++i]
        break
      case "--pattern":
      case "--pattern-type":
        config.pattern = args[++i]
        config.patternType = args[i]
        break
      case "--config":
        configPath = args[++i]
        break
    }
  }

  if (!inputDir || !outputDir) {
    console.error("Usage: batch-process.js --input-dir <path> --output-dir <path> [options]")
    console.error("Options:")
    console.error(
      "  --pattern <type>         Pattern type (bayerDither/halftoneDots, default: bayerDither)",
    )
    console.error("  --config <path>          JSON config file")
    process.exit(1)
  }

  // Load config file if provided
  if (configPath) {
    try {
      const configData = JSON.parse(readFileSync(configPath, "utf8"))
      Object.assign(config, configData)
    } catch (error) {
      console.error(`Error loading config file: ${error.message}`)
      process.exit(1)
    }
  }

  // Ensure output directory exists
  try {
    await import("fs/promises").then((fs) => fs.mkdir(outputDir, { recursive: true }))
  } catch (error) {
    console.error(`Error creating output directory: ${error.message}`)
    process.exit(1)
  }

  batchProcess(inputDir, outputDir, config)
    .then((results) => {
      if (results.failed.length > 0) {
        process.exit(1)
      }
    })
    .catch((error) => {
      console.error(`Fatal error: ${error.message}`)
      process.exit(1)
    })
}

export { batchProcess, processImage }
