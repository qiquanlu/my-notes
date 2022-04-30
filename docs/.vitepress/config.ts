import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: "en-US",
    title: "📚 myNotes",
    description: "Just some of my notes",
    lastUpdated: true,
    themeConfig: {
        // nav: [
        //     { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
        //     {
        //         text: 'Config Reference',
        //         link: '/config/basics',
        //         activeMatch: '^/config/'
        //     },
        //     {
        //         text: 'Release Notes',
        //         link: 'https://github.com/vuejs/vitepress/releases'
        //     }
        // ],

        sidebar: {
            '/graph/': getAlgoSidebar(),
            '/': getAlgoSidebar()
        }
    }
})

function getAlgoSidebar() {
    return [
        {
            text: 'Graph',
            children: [
                { text: 'Disjoint Sets', link: '/graph/disjoint-set' },
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