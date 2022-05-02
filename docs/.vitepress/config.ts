import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "📚 myNotes",
  description: "Just some of my notes",
  lastUpdated: true,
  themeConfig: {
    lastUpdated: "Last updated",
    sidebar: {
      "/graph/": getAlgoSidebar(),
      "/": getAlgoSidebar(),
    },
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

function getAlgoSidebar() {
  return [
    {
      text: "Graph",
      children: [
        { text: "Disjoint Sets", link: "/graph/disjoint-set" },
        { text: "Topological Sort", link: "/graph/topological-sort" },
      ],
    },
    {
      text: "Resources",
      children: [{ text: "Links", link: "/resource-links" }],
    },
  ];
}

function getConfigSidebar() {
  return [
    {
      text: "App Config",
      children: [{ text: "Basics", link: "/config/basics" }],
    },
    {
      text: "Theme Config",
      children: [
        { text: "Homepage", link: "/config/homepage" },
        { text: "Algolia Search", link: "/config/algolia-search" },
        { text: "Carbon Ads", link: "/config/carbon-ads" },
      ],
    },
  ];
}
