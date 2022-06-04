export const getSidebar = () => {
    return [
        {
            text: "Graph",
            items: [
                { text: "Disjoint Sets", link: "/graph/disjoint-set" },
                { text: "Topological Sort", link: "/graph/topological-sort" },
                { text: "Depth First Search", link: "/graph/depth-first-search" },
            ],
        },
        {
            text: "Recursion",
            items: [
                { text: "Backtracking", link: "/recursion/backtracking" },
            ],
        },
        {
            text: "Linked List",
            items: [
                { text: "Singly Linked List", link: "/linked-list/singly-linked-list" },
            ],
        },
        {
            text: "Sorting",
            items: [{ text: "Heap", link: "/sorting/heapsort" }],
        },
        {
            text: "Queue",
            items: [{ text: "Queue", link: "/queue/queue" }],
        },
        {
            text: "Stack",
            items: [{ text: "Stack", link: "/stack/stack" }],
        },
        {
            text: "Search",
            items: [{ text: "Binary Search", link: "/search/binary-search" }],
        },
        {
            text: "DP",
            items: [
                { text: "Time Series DP", link: "/dp/time-series-dp" },
                {
                    text: "Time Series Multiple States DP",
                    link: "/dp/time-series-multiple-states-dp",
                },
                { text: "Dual Sequences DP", link: "/dp/dual-sequences-dp" },
                { text: "K Range DP", link: "/dp/k-range-dp" },
            ],
        },
        {
            text: "Resources",
            items: [{ text: "Links", link: "/resource-links" }],
        },
    ];
}