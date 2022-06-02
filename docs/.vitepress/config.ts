import { defineConfig } from "vitepress";
import { getSidebar } from "./sidebar";

export default defineConfig({
  lang: "en-US",
  title: "📚 myNotes",
  description: "Just some of my notes",
  lastUpdated: true,
  themeConfig: {
    sidebar: getSidebar(),
    algolia: {
      appId: "notes",
      apiKey: "495987734899310faf980596d8d8da41",
      indexName: "notes_thetadude",
    },
  },
  markdown: {
    lineNumbers: true,
  },
});
