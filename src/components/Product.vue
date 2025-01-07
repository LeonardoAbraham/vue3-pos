<script setup>
    defineProps({
        product:{
            type: Object
        }
    })
</script>

<template>
    <div>{{ product.name }}</div>
</template>

<style scoped>
    
</style>