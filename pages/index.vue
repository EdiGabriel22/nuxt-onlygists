<template>
    <Home />
</template>

<script setup lang="ts">
    import Home from '~/modules/landing-page/screens/home/Home.vue';

    definePageMeta({
        layout: 'default',
        meta: {
            title: 'Onlygist - Home',
            description: 'Onlygist - Home',
            keywords: 'Onlygist, Home',
            robots: 'index, follow',
        },
    });
</script>