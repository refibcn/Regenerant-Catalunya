#!/usr/bin/env node

/**
 * Green Duotone Color Mapping
 * Applies green duotone color mapping to images with halftone patterns
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
  balance: 0.5,
  opacity: 0.6, // Overlay opacity for blend mode
  preserveContrast: true, // Preserve original contrast
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
 * Blend two colors using overlay blend mode
 */
function overlayBlend(base, overlay) {
  // Overlay blend: if base < 128, multiply; if base >= 128, screen
  if (base < 128) {
    return (2 * base * overlay) / 255
  } else {
    return 255 - (2 * (255 - base) * (255 - overlay)) / 255
  }
}

/**
 * Apply duotone color mapping using blend mode approach
 */
async function applyDuotone(inputPath, outputPath, config = {}) {
  const finalConfig = { ...DEFAULT_CONFIG, ...config }

  try {
    // Load original image
    const image = sharp(inputPath)
    const { data, info } = await image.raw().toBuffer({ resolveWithObject: true })

    const { width, height } = info

    // Get RGB values for duotone colors
    const darkRgb = hexToRgb(finalConfig.darkColor)
    const lightRgb = hexToRgb(finalConfig.lightColor)

    // Create output buffer
    const outputBuffer = Buffer.alloc(width * height * 4)

    // Apply duotone using blend mode approach
    for (let i = 0; i < width * height; i++) {
      const idx = i * 4

      // Extract original RGB values
      const origR = data[idx]
      const origG = data[idx + 1]
      const origB = data[idx + 2]
      const a = data[idx + 3] || 255

      // Calculate luminance (perceived brightness) - preserve original
      const luminance = (0.299 * origR + 0.587 * origG + 0.114 * origB) / 255

      // Determine target duotone color based on luminance
      let targetRgb
      if (luminance < finalConfig.balance) {
        // Map to dark color range
        const t = luminance / finalConfig.balance
        targetRgb = interpolateColor(darkRgb, lightRgb, t * 0.5)
      } else {
        // Map to light color range
        const t = (luminance - finalConfig.balance) / (1 - finalConfig.balance)
        targetRgb = interpolateColor(lightRgb, darkRgb, (1 - t) * 0.5)
      }

      // Apply color overlay blend mode (preserves original structure)
      // Use opacity to blend original with duotone color
      const opacity = finalConfig.opacity
      const invOpacity = 1 - opacity

      // Blend each channel
      const blendedR = Math.round(origR * invOpacity + targetRgb.r * opacity)
      const blendedG = Math.round(origG * invOpacity + targetRgb.g * opacity)
      const blendedB = Math.round(origB * invOpacity + targetRgb.b * opacity)

      // Apply overlay blend mode for more natural look
      const finalR = Math.round(overlayBlend(origR, blendedR) * 0.7 + blendedR * 0.3)
      const finalG = Math.round(overlayBlend(origG, blendedG) * 0.7 + blendedG * 0.3)
      const finalB = Math.round(overlayBlend(origB, blendedB) * 0.7 + blendedB * 0.3)

      // Preserve contrast if enabled
      if (finalConfig.preserveContrast) {
        // Maintain original luminance relationship
        const origLum = 0.299 * origR + 0.587 * origG + 0.114 * origB
        const newLum = 0.299 * finalR + 0.587 * finalG + 0.114 * finalB
        const lumRatio = origLum / (newLum || 1)

        // Adjust to preserve luminance
        outputBuffer[idx] = Math.min(255, Math.max(0, Math.round(finalR * lumRatio)))
        outputBuffer[idx + 1] = Math.min(255, Math.max(0, Math.round(finalG * lumRatio)))
        outputBuffer[idx + 2] = Math.min(255, Math.max(0, Math.round(finalB * lumRatio)))
      } else {
        outputBuffer[idx] = finalR
        outputBuffer[idx + 1] = finalG
        outputBuffer[idx + 2] = finalB
      }

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

    console.log(`✓ Applied duotone color mapping: ${outputPath}`)
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
      case "--balance":
        config.balance = parseFloat(args[++i])
        break
      case "--config":
        const configPath = args[++i]
        const configData = JSON.parse(readFileSync(configPath, "utf8"))
        Object.assign(config, configData.duotone || configData)
        break
    }
  }

  if (!inputPath || !outputPath) {
    console.error("Usage: apply-duotone.js --input <path> --output <path> [options]")
    console.error("Options:")
    console.error("  --dark-color <hex>       Dark color hex (default: #214033)")
    console.error("  --light-color <hex>      Light color hex (default: #E6DFD7)")
    console.error("  --balance <number>        Color balance 0-1 (default: 0.5)")
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
