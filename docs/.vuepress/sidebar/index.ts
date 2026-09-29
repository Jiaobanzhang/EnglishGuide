import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/getting-started/": [
    { text: "Getting Started", collapsible: false, children: ["README"] },
  ],
  "/core-topics/": [
    { text: "Core Topics", collapsible: false, children: ["README"] },
  ],
  "/guides/": [{ text: "Guides", collapsible: false, children: ["README"] }],
  "/reference/": [
    { text: "Reference", collapsible: false, children: ["README"] },
  ],
  "/": [
    {
      text: "EnglishGuide",
      collapsible: false,
      children: ["/home.md"],
    },
  ],
});
