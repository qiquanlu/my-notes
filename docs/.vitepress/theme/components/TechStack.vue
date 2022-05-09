<script setup>
const props = defineProps({
    tech: Object
})
</script>
<template>
    <span class="button-19" style="width:103.87px">
        <div> {{ tech.name }}</div>
        <img :src="`/img/${tech.image}`" :alt="`${tech.name} Logo`" width="50" height="50">
    </span>
</template>

<style scoped>
/* CSS */
.button-19 {
    background-color: transparent;
    border: solid #1899D6;
    border-radius: 50%;
    border-width: 0 0 4px 4px;
    color: #1899D6;
    display: inline-block;
    font-family: din-round, sans-serif;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: .8px;
    line-height: 20px;
    margin: 0;
    outline: none;
    overflow: visible;
    padding: 13px 16px;
    margin: 12px;
    text-align: center;
    touch-action: manipulation;
    transform: translateZ(0);
    transition: filter .2s;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: 100%;
}
</style>