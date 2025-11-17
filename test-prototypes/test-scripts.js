#!/usr/bin/env node

/**
 * Test script for brand asset generation
 */

import { generateHalftoneDots } from "../scripts/brand-assets/pattern-generation/halftone-dots.js"
import { applyDuotone } from "../scripts/brand-assets/image-processing/apply-duotone.js"
import { checkBrandCompliance } from "../scripts/brand-assets/quality-control/check-brand-compliance.js"
import { generateSocialMediaTemplate } from "../scripts/brand-assets/template-generation/social-media.js"
import { generateWebBanner } from "../scripts/brand-assets/template-generation/web-banners.js"
import { readFileSync } from "fs"
import { join } from "path"

const TEST_DIR = "./test-prototypes"
const INPUT_DIR = join(TEST_DIR, "input")
const OUTPUT_DIR = join(TEST_DIR, "output")
const CONFIG_DIR = join(process.cwd(), "brand-assets")

async function runTests() {
  console.log("🧪 Starting Brand Asset Script Tests\n")

  const results = {
    passed: [],
    failed: [],
  }

  // Test 1: Halftone Dots Pattern
  console.log("Test 1: Halftone Dots Pattern Generation")
  try {
    const result = await generateHalftoneDots(
      join(INPUT_DIR, "test-image-1.png"),
      join(OUTPUT_DIR, "test-1-halftone-dots.png"),
      {
        dotSize: 8,
        angle: 45,
        intensity: 0.6,
      },
    )

    if (result.success) {
      console.log("  ✓ Passed\n")
      results.passed.push("Halftone Dots Pattern")
    } else {
      throw new Error(result.error)
    }
  } catch (error) {
    console.log(`  ✗ Failed: ${error.message}\n`)
    results.failed.push({ test: "Halftone Dots Pattern", error: error.message })
  }

  // Test 2: Apply Duotone
  console.log("Test 2: Apply Green Duotone")
  try {
    const result = await applyDuotone(
      join(OUTPUT_DIR, "test-1-halftone-dots.png"),
      join(OUTPUT_DIR, "test-2-duotone.png"),
      {
        darkColor: "#214033",
        lightColor: "#E6DFD7",
        balance: 0.5,
      },
    )

    if (result.success) {
      console.log("  ✓ Passed\n")
      results.passed.push("Apply Duotone")
    } else {
      throw new Error(result.error)
    }
  } catch (error) {
    console.log(`  ✗ Failed: ${error.message}\n`)
    results.failed.push({ test: "Apply Duotone", error: error.message })
  }

  // Test 3: Halftone Lines Pattern
  console.log("Test 3: Halftone Lines Pattern Generation")
  try {
    const { generateHalftoneLines } = await import(
      "../scripts/brand-assets/pattern-generation/halftone-lines.js"
    )
    const result = await generateHalftoneLines(
      join(INPUT_DIR, "test-image-2.jpg"),
      join(OUTPUT_DIR, "test-3-halftone-lines.png"),
      {
        lineSpacing: 4,
        angle: 45,
        intensity: 0.6,
      },
    )

    if (result.success) {
      console.log("  ✓ Passed\n")
      results.passed.push("Halftone Lines Pattern")
    } else {
      throw new Error(result.error)
    }
  } catch (error) {
    console.log(`  ✗ Failed: ${error.message}\n`)
    results.failed.push({ test: "Halftone Lines Pattern", error: error.message })
  }

  // Test 4: Brand Compliance Check
  console.log("Test 4: Brand Compliance Check")
  try {
    const report = await checkBrandCompliance(
      join(OUTPUT_DIR, "test-2-duotone.png"),
      join(CONFIG_DIR, "brand-config.json"),
    )

    console.log(`  Status: ${report.status}`)
    console.log(`  Checks: ${Object.keys(report.checks).length}`)
    console.log("  ✓ Passed\n")
    results.passed.push("Brand Compliance Check")
  } catch (error) {
    console.log(`  ✗ Failed: ${error.message}\n`)
    results.failed.push({ test: "Brand Compliance Check", error: error.message })
  }

  // Test 5: Social Media Template
  console.log("Test 5: Social Media Template Generation")
  try {
    const colors = JSON.parse(readFileSync(join(CONFIG_DIR, "colors.json"), "utf8"))
    const result = await generateSocialMediaTemplate("instagram", join(TEST_DIR, "templates"), {
      colors,
      languages: ["en"],
    })

    if (result.success) {
      console.log(`  Generated ${result.templates.length} templates`)
      console.log("  ✓ Passed\n")
      results.passed.push("Social Media Template")
    } else {
      throw new Error(result.error)
    }
  } catch (error) {
    console.log(`  ✗ Failed: ${error.message}\n`)
    results.failed.push({ test: "Social Media Template", error: error.message })
  }

  // Test 6: Web Banner Template
  console.log("Test 6: Web Banner Template Generation")
  try {
    const colors = JSON.parse(readFileSync(join(CONFIG_DIR, "colors.json"), "utf8"))
    const result = await generateWebBanner("hero", join(TEST_DIR, "templates"), {
      colors,
      quartzIntegration: true,
    })

    if (result.success) {
      console.log("  ✓ Passed\n")
      results.passed.push("Web Banner Template")
    } else {
      throw new Error(result.error)
    }
  } catch (error) {
    console.log(`  ✗ Failed: ${error.message}\n`)
    results.failed.push({ test: "Web Banner Template", error: error.message })
  }

  // Summary
  console.log("\n" + "=".repeat(50))
  console.log("📊 Test Summary")
  console.log("=".repeat(50))
  console.log(`Total Tests: ${results.passed.length + results.failed.length}`)
  console.log(`Passed: ${results.passed.length} ✓`)
  console.log(`Failed: ${results.failed.length} ✗`)

  if (results.passed.length > 0) {
    console.log("\nPassed Tests:")
    results.passed.forEach((test) => console.log(`  ✓ ${test}`))
  }

  if (results.failed.length > 0) {
    console.log("\nFailed Tests:")
    results.failed.forEach(({ test, error }) => {
      console.log(`  ✗ ${test}: ${error}`)
    })
  }

  console.log("\n" + "=".repeat(50))

  return results.failed.length === 0
}

runTests()
  .then((success) => {
    process.exit(success ? 0 : 1)
  })
  .catch((error) => {
    console.error("Fatal error:", error)
    process.exit(1)
  })
