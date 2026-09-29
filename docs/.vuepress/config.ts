import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  dest: "./dist",
  // GitHub Pages project sites are served under /EnglishGuide/.
  // Set VUEPRESS_BASE=/ for a custom domain or root-domain deployment.
  base: process.env.VUEPRESS_BASE ?? "/",
  title: "EnglishGuide",
  description: "A Markdown-powered documentation site.",
  lang: "en-US",
  bundler: viteBundler(),
  theme,
  pagePatterns: [
    "**/*.md",
    "!**/*.snippet.md",
    "!**/TODO.md",
    "!.vuepress",
    "!node_modules",
  ],
  shouldPrefetch: false,
  shouldPreload: false,
});
