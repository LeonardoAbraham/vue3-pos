<script setup>
    import AdminNav from '@/components/AdminNav.vue'
    import { RouterView } from 'vue-router';
</script>

<template>
    <AdminNav />

    <div>
        <RouterView />
    </div>
</template>

<style scoped>
    
</style>