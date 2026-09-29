import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://example.com/",
  logo: "/logo.svg",
  author: "EnglishGuide",
  repo: "",
  docsDir: "docs",
  pure: true,
  breadcrumb: false,
  navbar,
  sidebar,
  displayFooter: true,
  pageInfo: ["Author", "ReadingTime"],
  markdown: {
    align: true,
    codeTabs: true,
    gfm: true,
    linksCheck: { build: "error" },
    tasklist: true,
  },
  plugins: {
    blog: false,
    sitemap: { changefreq: "monthly" },
    feed: { atom: true, json: true, rss: true },
    search: true,
    copyright: false,
  },
});
