import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: "en-US",
    title: "📚 myNotes",
    description: "Just some of my notes",
    lastUpdated: true,
    themeConfig: {
        sidebar: {
            '/graph/': getAlgoSidebar(),
            '/': getAlgoSidebar()
        }
    },
    markdown: {
        lineNumbers: true
    },

})

function getAlgoSidebar() {
    return [
        {
            text: 'Graph',
            children: [
                { text: 'Disjoint Sets', link: '/graph/disjoint-set' },
            ]
        },
        {
            text: 'Resources',
            children: [
                { text: 'Links', link: '/resource-links' },
            ]
        }
    ]
}

function getConfigSidebar() {
    return [
        {
            text: 'App Config',
            children: [{ text: 'Basics', link: '/config/basics' }]
        },
        {
            text: 'Theme Config',
            children: [
                { text: 'Homepage', link: '/config/homepage' },
                { text: 'Algolia Search', link: '/config/algolia-search' },
                { text: 'Carbon Ads', link: '/config/carbon-ads' }
            ]
        }
    ]
}