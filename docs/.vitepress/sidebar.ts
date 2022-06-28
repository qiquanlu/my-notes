import { getOaSidebar } from "./oa";

export const getSidebar = () => {
  return {
    "/learn/": [
      {
        text: "Graph",
        items: [
          { text: "Disjoint Sets", link: "/learn/graph/disjoint-set" },
          { text: "Topological Sort", link: "/learn/graph/topological-sort" },
          {
            text: "Depth First Search",
            link: "/learn/graph/depth-first-search",
          },
        ],
      },
      {
        text: "Recursion",
        items: [
          { text: "Backtracking", link: "/learn/recursion/backtracking" },
        ],
      },
      {
        text: "Linked List",
        items: [
          {
            text: "Singly Linked List",
            link: "/learn/linked-list/singly-linked-list",
          },
        ],
      },
      {
        text: "Sorting",
        items: [{ text: "Heap", link: "/learn/sorting/heapsort" }],
      },
      {
        text: "Queue",
        items: [{ text: "Queue", link: "/learn/queue/queue" }],
      },
      {
        text: "Stack",
        items: [{ text: "Stack", link: "/learn/stack/stack" }],
      },
      {
        text: "Search",
        items: [{ text: "Binary Search", link: "/learn/search/binary-search" }],
      },
      {
        text: "DP",
        items: [
          { text: "Time Series DP", link: "/learn/dp/time-series-dp" },
          {
            text: "Time Series Multiple States DP",
            link: "/learn/dp/time-series-multiple-states-dp",
          },
          { text: "Dual Sequences DP", link: "/learn/dp/dual-sequences-dp" },
          { text: "K Range DP", link: "/learn/dp/k-range-dp" },
        ],
      },
    ],
    "/oa/": getOaSidebar(),
  };
};
