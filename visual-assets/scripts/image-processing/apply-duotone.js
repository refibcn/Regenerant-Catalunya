#!/usr/bin/env node

/**
 * Duotone/Tritone Color Mapping
 * Applies duotone or tritone color mapping to images
 * Supports two-color (duotone) or three-color (tritone) schemes
 */

import sharp from "sharp"
import { fileURLToPath } from "url"
import { dirname } from "path"
import { readFileSync } from "fs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Default configuration
const DEFAULT_CONFIG = {
  darkColor: "#214033",
  lightColor: "#E6DFD7",
  midColor: null, // Optional third color for tritone
  balance: 0.5,
  darkThreshold: 0.33, // For tritone mode
  lightThreshold: 0.66, // For tritone mode
  useBeigeBase: false, // Use beige as base/background color
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
 * Interpolate between two colors
 */
function interpolateColor(color1, color2, t) {
  return {
    r: Math.round(color1.r + (color2.r - color1.r) * t),
    g: Math.round(color1.g + (color2.g - color1.g) * t),
    b: Math.round(color1.b + (color2.b - color1.b) * t),
  }
}

/**
 * Apply duotone/tritone color mapping
 */
async function applyDuotone(inputPath, outputPath, config = {}) {
  const finalConfig = { ...DEFAULT_CONFIG, ...config }

  try {
    // Load image
    const image = sharp(inputPath)
    const { data, info } = await image.raw().toBuffer({ resolveWithObject: true })

    const { width, height } = info

    // Get RGB values for colors
    const darkRgb = hexToRgb(finalConfig.darkColor)
    const lightRgb = hexToRgb(finalConfig.lightColor)

    if (!darkRgb || !lightRgb) {
      throw new Error("Invalid color format. Use hex colors (e.g., #214033)")
    }

    // Determine if using tritone (three-color) mode
    const useTritone = finalConfig.midColor !== null && finalConfig.midColor !== undefined
    const midRgb = useTritone
      ? hexToRgb(finalConfig.midColor)
      : interpolateColor(darkRgb, lightRgb, 0.5)

    if (useTritone && !midRgb) {
      throw new Error("Invalid mid color format. Use hex colors (e.g., #E6DFD7)")
    }

    // Get base color (beige) if specified
    const baseRgb = finalConfig.useBeigeBase ? hexToRgb("#E6DFD7") : null

    // Create output buffer
    const outputBuffer = Buffer.alloc(width * height * 4)

    // Apply color mapping
    for (let i = 0; i < width * height; i++) {
      const idx = i * 4

      // Extract RGB values
      const r = data[idx]
      const g = data[idx + 1]
      const b = data[idx + 2]
      const a = data[idx + 3] || 255

      // Calculate luminance (perceived brightness)
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

      // Apply color mapping
      let mappedColor

      if (useTritone) {
        // Three-color mapping: dark -> mid -> light
        if (luminance < finalConfig.darkThreshold) {
          // Map to dark color range
          const t = luminance / finalConfig.darkThreshold
          mappedColor = interpolateColor(darkRgb, midRgb, t)
        } else if (luminance < finalConfig.lightThreshold) {
          // Map to mid color range
          const t =
            (luminance - finalConfig.darkThreshold) /
            (finalConfig.lightThreshold - finalConfig.darkThreshold)
          mappedColor = interpolateColor(midRgb, lightRgb, t)
        } else {
          // Map to light color range
          const t = (luminance - finalConfig.lightThreshold) / (1 - finalConfig.lightThreshold)
          mappedColor = interpolateColor(lightRgb, lightRgb, t) // Keep light color
        }
      } else {
        // Two-color mapping (original duotone)
        if (luminance < finalConfig.balance) {
          // Map to dark color range
          const t = luminance / finalConfig.balance
          mappedColor = interpolateColor(darkRgb, midRgb, t)
        } else {
          // Map to light color range
          const t = (luminance - finalConfig.balance) / (1 - finalConfig.balance)
          mappedColor = interpolateColor(midRgb, lightRgb, t)
        }
      }

      // If using beige base and pixel is very light, use beige instead
      if (finalConfig.useBeigeBase && baseRgb && luminance > 0.9) {
        mappedColor = baseRgb
      }

      outputBuffer[idx] = mappedColor.r
      outputBuffer[idx + 1] = mappedColor.g
      outputBuffer[idx + 2] = mappedColor.b
      outputBuffer[idx + 3] = a
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

    const mode = useTritone ? "tritone" : "duotone"
    console.log(`✓ Applied ${mode} color mapping: ${outputPath}`)
    return { success: true, outputPath }
  } catch (error) {
    console.error(`✗ Error applying duotone: ${error.message}`)
    return { success: false, error: error.message }
  }
}

// CLI interface
if (import.meta.url === `file://${process.argv[1]}`) {
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
      case "--dark-color":
        config.darkColor = args[++i]
        break
      case "--light-color":
        config.lightColor = args[++i]
        break
      case "--mid-color":
        config.midColor = args[++i]
        break
      case "--balance":
        config.balance = parseFloat(args[++i])
        break
      case "--dark-threshold":
        config.darkThreshold = parseFloat(args[++i])
        break
      case "--light-threshold":
        config.lightThreshold = parseFloat(args[++i])
        break
      case "--use-beige-base":
        config.useBeigeBase = true
        break
      case "--config":
        const configPath = args[++i]
        const configData = JSON.parse(readFileSync(configPath, "utf8"))
        Object.assign(config, configData.duotone || configData.bayerDither || configData)
        break
    }
  }

  if (!inputPath || !outputPath) {
    console.error("Usage: apply-duotone.js --input <path> --output <path> [options]")
    console.error("Options:")
    console.error("  --dark-color <hex>        Dark color hex (default: #214033)")
    console.error("  --light-color <hex>       Light color hex (default: #E6DFD7)")
    console.error("  --mid-color <hex>         Mid color hex for tritone (optional)")
    console.error("  --balance <number>        Color balance 0-1 (default: 0.5, duotone mode)")
    console.error("  --dark-threshold <number>  Dark threshold 0-1 (default: 0.33, tritone mode)")
    console.error("  --light-threshold <number> Light threshold 0-1 (default: 0.66, tritone mode)")
    console.error("  --use-beige-base          Use beige as base/background color")
    console.error("  --config <path>           JSON config file")
    process.exit(1)
  }

  applyDuotone(inputPath, outputPath, config)
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

export { applyDuotone }
