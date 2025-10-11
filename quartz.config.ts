import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Regenerant Catalunya",
    pageTitleSuffix: " | GG24",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Sora",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#E6DFD7",           // warm sand background
          lightgray: "#D8D0C8",        // slightly darker
          gray: "#8F9A9E",             // subtle gray
          darkgray: "#214033",         // forest green
          dark: "#092045",             // midnight navy
          secondary: "#6B4EA3",        // activist purple
          tertiary: "#E67E50",         // regenerative orange
          highlight: "rgba(107, 78, 163, 0.15)",
          textHighlight: "#FFB09055",
        },
        darkMode: {
          light: "#0F1A1A",            // very dark forest
          lightgray: "#1A2828",        // light surface
          gray: "#6B7F7F",             // muted gray
          darkgray: "#B8C5C5",         // light gray
          dark: "#E6DFD7",             // warm sand text
          secondary: "#9B7ED3",        // lighter purple
          tertiary: "#FFB090",         // lighter orange
          highlight: "rgba(155, 126, 211, 0.15)",
          textHighlight: "#FFB09033",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
