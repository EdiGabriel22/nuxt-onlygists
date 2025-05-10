<template>
    <div>
        <div class="w-24 overflow-hidden rounded-full md:w-32">

        </div>
    </div>
    PublicHeadline
</template>

<script setup lang="ts">
    const props = defineProps<{
        name: string,
        username: string,
        bio: string,
        followersCount: number,
        followingCount: number
    }>();
</script>