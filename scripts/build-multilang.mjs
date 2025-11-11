#!/usr/bin/env node

/**
 * Multi-language build script for Regenerant Catalunya Website
 * 
 * This script builds the Quartz site 3 times with different locales:
 * - ca-ES (Catalan) -> public/ (default)
 * - en-US (English) -> public/en/
 * - es-ES (Spanish) -> public/es/
 * 
 * Then merges static assets and ensures proper structure.
 */

import { execSync } from "child_process"
import { writeFileSync, existsSync, mkdirSync, cpSync, rmSync } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = join(__dirname, "..")

const LOCALES = [
  { code: "ca-ES", prefix: "ca", isDefault: true },
  { code: "en-US", prefix: "en", isDefault: false },
  { code: "es-ES", prefix: "es", isDefault: false },
]

function buildForLocale(locale, prefix, isDefault) {
  console.log(`\n🌍 Building for ${locale} (${prefix})...`)
  
  const contentDir = `content/${prefix}`
  const outputDir = isDefault ? "public" : `public/${prefix}`
  
  try {
    // Build the site with environment variables
    execSync(
      `npm run quartz build -- --output ${outputDir} --directory ${contentDir}`,
      { 
        cwd: rootDir,
        stdio: "inherit",
        env: { 
          ...process.env, 
          QUARTZ_LOCALE: locale,
          QUARTZ_CONTENT_DIR: contentDir
        }
      }
    )
    
    console.log(`✅ Built ${locale} to ${outputDir}`)
  } catch (error) {
    console.error(`❌ Failed to build ${locale}:`, error)
    throw error
  }
  
  // If this is the default locale (Catalan), also copy to public/ca/ for consistency
  if (isDefault) {
    const caOutputDir = "public/ca"
    if (existsSync("public")) {
      if (!existsSync(caOutputDir)) {
        mkdirSync(caOutputDir, { recursive: true })
      }
      // Copy index and other files to public/ca/
      cpSync("public/index.html", join(caOutputDir, "index.html"), { recursive: true })
      if (existsSync("public/program")) {
        cpSync("public/program", join(caOutputDir, "program"), { recursive: true })
      }
      if (existsSync("public/partners")) {
        cpSync("public/partners", join(caOutputDir, "partners"), { recursive: true })
      }
      if (existsSync("public/projects")) {
        cpSync("public/projects", join(caOutputDir, "projects"), { recursive: true })
      }
      if (existsSync("public/contact")) {
        cpSync("public/contact", join(caOutputDir, "contact"), { recursive: true })
      }
    }
  }
}

function mergeStaticAssets() {
  console.log("\n📦 Merging static assets...")
  
  // Static assets should be shared across all languages
  // They're already in public/static from the first build
  // Just ensure they're accessible from language subdirectories
  
  const staticDirs = ["public/ca", "public/es", "public/en"]
  staticDirs.forEach((dir) => {
    if (existsSync(dir) && existsSync("public/static")) {
      // Create symlink or copy static directory
      // For simplicity, we'll create a symlink (or copy on Windows)
      const staticLink = join(dir, "static")
      if (!existsSync(staticLink)) {
        try {
          // Try symlink first (Unix)
          execSync(`ln -s ../static ${staticLink}`, { cwd: rootDir })
        } catch {
          // Fallback to copy (Windows or if symlink fails)
          cpSync("public/static", staticLink, { recursive: true })
        }
      }
    }
  })
  
  console.log("✅ Static assets merged")
}

function createRootRedirect() {
  console.log("\n🔀 Creating root redirect...")
  
  // Create a simple redirect page at root that detects language
  const redirectHTML = `<!DOCTYPE html>
<html lang="ca">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Regenerant Catalunya</title>
  <script>
    // Detect browser language and redirect
    const lang = navigator.language || navigator.userLanguage;
    let redirect = '/';
    
    if (lang.startsWith('ca')) {
      redirect = '/';
    } else if (lang.startsWith('es')) {
      redirect = '/es/';
    } else if (lang.startsWith('en')) {
      redirect = '/en/';
    } else {
      redirect = '/';
    }
    
    // Check if we're already at root with a path
    const path = window.location.pathname;
    if (path !== '/' && path !== '/index.html') {
      // Preserve the path
      window.location.href = redirect + path.replace(/^\\//, '');
    } else {
      window.location.href = redirect;
    }
  </script>
  <noscript>
    <meta http-equiv="refresh" content="0; url=/">
  </noscript>
</head>
<body>
  <p>Redirecting... <a href="/">Click here if you are not redirected</a></p>
</body>
</html>`
  
  writeFileSync(join(rootDir, "public", "index-redirect.html"), redirectHTML)
  console.log("✅ Root redirect created")
}

async function main() {
  console.log("🚀 Starting multi-language build...\n")
  
  // Clean public directory
  if (existsSync("public")) {
    console.log("🧹 Cleaning public directory...")
    rmSync("public", { recursive: true })
  }
  mkdirSync("public", { recursive: true })
  
  // Build each locale
  for (const locale of LOCALES) {
    buildForLocale(locale.code, locale.prefix, locale.isDefault)
  }
  
  // Merge static assets
  mergeStaticAssets()
  
  // Create root redirect
  createRootRedirect()
  
  console.log("\n✨ Multi-language build complete!")
  console.log("\n📁 Output structure:")
  console.log("   public/          - Catalan (default)")
  console.log("   public/ca/       - Catalan (explicit)")
  console.log("   public/en/       - English")
  console.log("   public/es/       - Spanish")
  console.log("   public/static/   - Shared static assets")
}

main().catch((error) => {
  console.error("❌ Build failed:", error)
  process.exit(1)
})

