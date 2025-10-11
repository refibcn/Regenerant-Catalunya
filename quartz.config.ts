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
    baseUrl: "regenerant-catalunya.refibcn.cat",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
    typography: {
      header: "Inter",
      body: "Inter",
      code: "IBM Plex Mono",
    },
      colors: {
        lightMode: {
          light: "#E6DFD7",           // warm sand background
          lightgray: "#D8D0C8",        // slightly darker
          gray: "#8F9A9E",             // subtle gray
          darkgray: "#214033",         // forest green (main text)
          dark: "#214033",             // forest green (headings)
          secondary: "#3A6655",        // medium green (links)
          tertiary: "#568F79",         // light green (hover)
          highlight: "rgba(33, 64, 51, 0.15)",
          textHighlight: "rgba(33, 64, 51, 0.25)",
        },
        darkMode: {
          light: "#0F1A1A",            // very dark forest
          lightgray: "#1A2828",        // light surface
          gray: "#6B7F7F",             // muted gray
          darkgray: "#B8C5C5",         // light gray (main text)
          dark: "#E6DFD7",             // warm sand (headings)
          secondary: "#568F79",        // light green (links in dark mode)
          tertiary: "#7AAE95",         // lighter green (hover in dark mode)
          highlight: "rgba(86, 143, 121, 0.15)",
          textHighlight: "rgba(86, 143, 121, 0.25)",
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
