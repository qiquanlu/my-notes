import { defineConfig } from "vitepress";
import { getSidebar } from "./sidebar";

export default defineConfig({
  lang: "en-US",
  title: "📚 myNotes",
  description: "Just some of my notes",
  lastUpdated: true,
  themeConfig: {
    sidebar: getSidebar(),
    nav: nav(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/qiquanlu/my-notes' }
    ],
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
function nav() {
  return [
    { text: 'Resources', link: '/resource-links' },
  ]
}