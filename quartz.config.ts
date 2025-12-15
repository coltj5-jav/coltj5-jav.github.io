import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Colt Feltes",
    pageTitleSuffix: " | Colt Feltes",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "coltfeltes.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f5f2e9",       // <--- The Cream/Beige Background
	  lightgray: "#e0dcd3",   // Borders (slightly darker beige)
      	  gray: "#8b8580",        // Metadata details (muted earth tone)
      	  darkgray: "#3c3836",    // Body text (Warm dark charcoal)
      	  dark: "#2a3c24",        // Headings (Deep Forest Green)
          secondary: "#4a6741",   // Links (Fern Green)
      	  tertiary: "#7a8f60",    // Hover color (Lighter Moss Green)
      	  highlight: "rgba(74, 103, 65, 0.15)", // Highlight background (Subtle green tint)
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#1a1d1a",       // Very dark green/black background
     	  lightgray: "#2c302c",
     	  gray: "#647864",
     	  darkgray: "#d4d4d4",    // Light gray text
     	  dark: "#ebebec",        // White headings
     	  secondary: "#7ba370",   // Soft green links
     	  tertiary: "#84a59d",
     	  highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
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
