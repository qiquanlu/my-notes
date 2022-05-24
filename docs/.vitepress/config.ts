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
        { text: "Depth First Search", link: "/graph/depth-first-search" }
      ],
    },
    {
      text: "Sorting",
      children: [
        { text: "Heap", link: "/sorting/heapsort" }
      ],
    },
    {
      text: "DP",
      children: [
        { text: "Time Series DP", link: "/dp/time-series-dp" }
      ],
    },
    {
      text: "Resources",
      children: [{ text: "Links", link: "/resource-links" }],
    },
  ];
}

