#!/usr/bin/env node

/**
 * Brand Compliance Checker
 * Validates brand assets against brand configuration
 */

import sharp from "sharp"
import { readFileSync } from "fs"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/**
 * Calculate color distance (Delta E)
 */
function colorDistance(color1, color2) {
  const r1 = parseInt(color1.slice(1, 3), 16)
  const g1 = parseInt(color1.slice(3, 5), 16)
  const b1 = parseInt(color1.slice(5, 7), 16)

  const r2 = parseInt(color2.slice(1, 3), 16)
  const g2 = parseInt(color2.slice(3, 5), 16)
  const b2 = parseInt(color2.slice(5, 7), 16)

  // Simple Euclidean distance
  const dr = r1 - r2
  const dg = g1 - g2
  const db = b1 - b2

  return Math.sqrt(dr * dr + dg * dg + db * db)
}

/**
 * Extract dominant colors from image
 */
async function extractColors(imagePath, maxColors = 10) {
  try {
    const image = sharp(imagePath)
    const { data, info } = await image
      .resize(100, 100, { fit: "inside" })
      .raw()
      .toBuffer({ resolveWithObject: true })

    const colors = new Map()
    const { width, height } = info

    // Sample colors
    for (let i = 0; i < width * height; i += 10) {
      const idx = i * 4
      const r = data[idx]
      const g = data[idx + 1]
      const b = data[idx + 2]

      // Round to nearest 16 to reduce color space
      const rRound = Math.round(r / 16) * 16
      const gRound = Math.round(g / 16) * 16
      const bRound = Math.round(b / 16) * 16

      const colorKey = `${rRound},${gRound},${bRound}`
      colors.set(colorKey, (colors.get(colorKey) || 0) + 1)
    }

    // Convert to hex and sort by frequency
    const colorArray = Array.from(colors.entries())
      .map(([key, count]) => {
        const [r, g, b] = key.split(",").map(Number)
        return {
          hex: `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`,
          count,
        }
      })
      .sort((a, b) => b.count - a.count)
      .slice(0, maxColors)

    return colorArray.map((c) => c.hex)
  } catch (error) {
    return []
  }
}

/**
 * Check brand compliance
 */
async function checkBrandCompliance(assetPath, configPath) {
  const report = {
    asset: assetPath,
    status: "pass",
    checks: {},
    errors: [],
    warnings: [],
  }

  try {
    // Load brand configuration
    const config = JSON.parse(readFileSync(configPath, "utf8"))

    // Load image metadata
    const image = sharp(assetPath)
    const metadata = await image.metadata()

    // Check file format
    const format = metadata.format
    const allowedFormats = ["png", "svg", "webp", "jpeg", "jpg"]
    if (!allowedFormats.includes(format)) {
      report.checks.format = { status: "fail", message: `Format ${format} not allowed` }
      report.errors.push(`Invalid format: ${format}`)
      report.status = "fail"
    } else {
      report.checks.format = { status: "pass", format }
    }

    // Check dimensions
    if (metadata.width && metadata.height) {
      report.checks.dimensions = {
        status: "pass",
        width: metadata.width,
        height: metadata.height,
      }
    }

    // Check file size
    const stats = await import("fs/promises").then((fs) => fs.stat(assetPath))
    const fileSizeKB = stats.size / 1024
    report.checks.fileSize = {
      status: "pass",
      sizeKB: fileSizeKB.toFixed(2),
    }

    if (fileSizeKB > 500) {
      report.checks.fileSize.status = "warning"
      report.warnings.push(`Large file size: ${fileSizeKB.toFixed(2)}KB`)
    }

    // Check colors
    if (config.colors && config.colors.allowed) {
      const dominantColors = await extractColors(assetPath)
      const colorMatches = []
      const colorIssues = []

      for (const color of dominantColors) {
        let matched = false
        let minDistance = Infinity
        let closestColor = null

        for (const allowedColor of config.colors.allowed) {
          const distance = colorDistance(color, allowedColor)
          if (distance < minDistance) {
            minDistance = distance
            closestColor = allowedColor
          }
          if (distance <= (config.colors.tolerance || 5)) {
            matched = true
            break
          }
        }

        if (matched) {
          colorMatches.push(color)
        } else {
          colorIssues.push({ color, closestColor, distance: minDistance })
        }
      }

      report.checks.colors = {
        status: colorIssues.length === 0 ? "pass" : "warning",
        matches: colorMatches.length,
        issues: colorIssues.length,
        dominantColors,
        issues: colorIssues,
      }

      if (colorIssues.length > 0) {
        report.warnings.push(`${colorIssues.length} colors outside brand palette`)
      }
    }

    // Check logo (if logo config exists)
    if (config.logo) {
      // Basic logo size check would go here
      // This is a placeholder for logo detection logic
      report.checks.logo = {
        status: "info",
        message: "Logo detection not implemented",
      }
    }

    // Overall status
    if (report.errors.length > 0) {
      report.status = "fail"
    } else if (report.warnings.length > 0) {
      report.status = "warning"
    }

    return report
  } catch (error) {
    report.status = "error"
    report.errors.push(error.message)
    return report
  }
}

// CLI interface
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2)
  let inputPath, configPath, outputPath

  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    switch (arg) {
      case "--input":
        inputPath = args[++i]
        break
      case "--config":
        configPath = args[++i]
        break
      case "--output":
        outputPath = args[++i]
        break
    }
  }

  if (!inputPath || !configPath) {
    console.error(
      "Usage: check-brand-compliance.js --input <path> --config <path> [--output <path>]",
    )
    process.exit(1)
  }

  // Default config path
  if (!configPath) {
    configPath = join(__dirname, "../../../brand-assets/brand-config.json")
  }

  checkBrandCompliance(inputPath, configPath)
    .then((report) => {
      const output = JSON.stringify(report, null, 2)

      if (outputPath) {
        import("fs/promises").then((fs) => fs.writeFile(outputPath, output))
        console.log(`Report saved to: ${outputPath}`)
      } else {
        console.log(output)
      }

      if (report.status === "fail") {
        process.exit(1)
      }
    })
    .catch((error) => {
      console.error(`Fatal error: ${error.message}`)
      process.exit(1)
    })
}

export { checkBrandCompliance }
