#!/usr/bin/env node

/**
 * Bayer Dithering Pattern Generator (Ordered Dither)
 * Generates ordered dither patterns using Bayer matrix algorithm
 */

import sharp from "sharp"
import { fileURLToPath } from "url"
import { dirname } from "path"
import { readFileSync } from "fs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Standard Bayer matrices
const BAYER_4x4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
]

// Generate 8x8 Bayer matrix by recursive expansion
function generateBayer8x8() {
  const matrix = []
  const base = BAYER_4x4
  const size = 8

  for (let y = 0; y < size; y++) {
    matrix[y] = []
    for (let x = 0; x < size; x++) {
      const baseY = Math.floor(y / 2)
      const baseX = Math.floor(x / 2)
      const offsetY = y % 2
      const offsetX = x % 2
      matrix[y][x] = base[baseY][baseX] * 4 + (offsetY * 2 + offsetX)
    }
  }
  return matrix
}

const BAYER_8x8 = generateBayer8x8()

// Default configuration
const DEFAULT_CONFIG = {
  matrixSize: 4, // 4x4 or 8x8
  darkColor: "#214033", // Forest Green
  midColor: "#E6DFD7", // Beige/Warm Sand (base)
  lightColor: "#E67E50", // Orange (subtle accent)
  darkThreshold: 0.4, // Adjusted for better green/beige balance
  lightThreshold: 0.85, // Higher threshold - mostly beige, orange only for highlights
}

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

/**
 * Get Bayer matrix threshold value for a given position
 */
function getBayerThreshold(x, y, matrixSize) {
  const matrix = matrixSize === 4 ? BAYER_4x4 : BAYER_8x8
  const n = matrixSize
  const threshold = (matrix[y % n][x % n] + 1) / (n * n + 1)
  return threshold
}

/**
 * Map luminance to color based on thresholds and Bayer dithering
 * Proper Bayer dithering: use threshold to quantize luminance, creating ordered pattern
 */
function mapColorWithBayer(
  luminance,
  threshold,
  darkRgb,
  midRgb,
  lightRgb,
  darkThreshold,
  lightThreshold,
) {
  // Bayer dithering: adjust luminance by threshold to create ordered pattern
  // The threshold creates the dither pattern - pixels with higher threshold values
  // will be more likely to be quantized to lighter colors
  const ditherStrength = 0.5 // Strength of dither effect
  const adjustedLuminance = luminance + (threshold - 0.5) * ditherStrength
  const clamped = Math.max(0, Math.min(1, adjustedLuminance))

  // Map to color - primarily beige/green duotone
  // The reference shows mostly beige (base) and green (dark), with minimal orange
  if (clamped < darkThreshold) {
    // Dark tones -> Green
    return darkRgb
  } else if (clamped < lightThreshold) {
    // Mid tones -> Beige (base color)
    // Smooth transition from green to beige
    const t = (clamped - darkThreshold) / (lightThreshold - darkThreshold)
    return {
      r: Math.round(darkRgb.r + (midRgb.r - darkRgb.r) * t),
      g: Math.round(darkRgb.g + (midRgb.g - darkRgb.g) * t),
      b: Math.round(darkRgb.b + (midRgb.b - darkRgb.b) * t),
    }
  } else {
    // Light tones -> Mostly beige, very subtle orange only for brightest highlights
    // Keep orange very subtle to match reference
    const t = (clamped - lightThreshold) / (1 - lightThreshold)
    // Very subtle orange blend - max 20% for brightest areas only
    const orangeBlend = Math.min(t * 0.2, 0.2)
    return {
      r: Math.round(midRgb.r + (lightRgb.r - midRgb.r) * orangeBlend),
      g: Math.round(midRgb.g + (lightRgb.g - midRgb.g) * orangeBlend),
      b: Math.round(midRgb.b + (lightRgb.b - midRgb.b) * orangeBlend),
    }
  }
}

/**
 * Apply Bayer dithering to image
 */
async function applyBayerDither(inputPath, outputPath, config = {}) {
  const finalConfig = { ...DEFAULT_CONFIG, ...config }

  try {
    // Load image
    const image = sharp(inputPath)
    const { data, info } = await image.raw().toBuffer({ resolveWithObject: true })

    const { width, height } = info

    // Get RGB values for colors
    const darkRgb = hexToRgb(finalConfig.darkColor)
    const midRgb = hexToRgb(finalConfig.midColor)
    const lightRgb = hexToRgb(finalConfig.lightColor)

    if (!darkRgb || !midRgb || !lightRgb) {
      throw new Error("Invalid color format. Use hex colors (e.g., #214033)")
    }

    // Create output buffer
    const outputBuffer = Buffer.alloc(width * height * 4)
    const matrixSize = finalConfig.matrixSize

    // Process each pixel
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 4

        // Extract RGB values
        const r = data[idx]
        const g = data[idx + 1]
        const b = data[idx + 2]
        const a = data[idx + 3] || 255

        // Calculate luminance (perceived brightness)
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

        // Get Bayer threshold for this position
        const threshold = getBayerThreshold(x, y, matrixSize)

        // Map to color with Bayer dithering
        const mappedColor = mapColorWithBayer(
          luminance,
          threshold,
          darkRgb,
          midRgb,
          lightRgb,
          finalConfig.darkThreshold,
          finalConfig.lightThreshold,
        )

        outputBuffer[idx] = mappedColor.r
        outputBuffer[idx + 1] = mappedColor.g
        outputBuffer[idx + 2] = mappedColor.b
        outputBuffer[idx + 3] = a
      }
    }

    // Save output
    await sharp(outputBuffer, {
      raw: {
        width,
        height,
        channels: 4,
      },
    })
      .png()
      .toFile(outputPath)

    console.log(`✓ Applied Bayer dithering: ${outputPath}`)
    return { success: true, outputPath }
  } catch (error) {
    console.error(`✗ Error applying Bayer dithering: ${error.message}`)
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
    console.error("Usage: bayer-dither.js --input <path> --output <path> [options]")
    console.error("Options:")
    console.error("  --matrix-size <number>     Matrix size: 4 or 8 (default: 4)")
    console.error("  --dark-color <hex>          Dark color hex (default: #214033)")
    console.error("  --mid-color <hex>          Mid color hex (default: #E6DFD7)")
    console.error("  --light-color <hex>         Light color hex (default: #E67E50)")
    console.error("  --dark-threshold <number>  Dark threshold 0-1 (default: 0.33)")
    console.error("  --light-threshold <number> Light threshold 0-1 (default: 0.66)")
    console.error("  --config <path>             JSON config file")
    process.exit(1)
  }

  applyBayerDither(inputPath, outputPath, config)
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

export { applyBayerDither }
