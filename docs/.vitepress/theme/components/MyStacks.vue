
<script setup >
import TechStack from './TechStack.vue'

const myStacks = [
    { name: "Vue", image: "vue.svg", link: "https://vuejs.org/" },
    { name: "Nuxt", image: "nuxt.svg", link: "https://nuxtjs.org/" },
    { name: "Vite", image: "vite.svg", link: "https://vitejs.dev/" },
    { name: "Vuetify", image: "vuetify.svg", link: "https://vuetifyjs.com/" },
    { name: "Golang", image: "go.svg", link: "https://go.dev/" },
    { name: "Laravel", image: "laravel.svg", link: "https://laravel.com/" },
    { name: "Node", image: "node.svg", link: "https://nodejs.org/en/" },
    { name: "Swift", image: "swift.png", link: "https://developer.apple.com/swift/" },
    { name: "SwiftUI", image: "swiftui.png", link: "https://developer.apple.com/xcode/swiftui/" },
]

</script>
<template>
    <span v-for="stack in myStacks">
        <TechStack :tech="stack" />
    </span>
</template>
<style lang="">
    
</style>