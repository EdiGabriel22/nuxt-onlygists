<template>
    <header class="z-10 w-full shadow-md ">
        <nav class="bg-white px-4 py-2.5 lg:px-8">
            <div class="flex items-center justify-center max-w-screen-xl mx-auto md:justify-between">
                <div class="flex items-center">
                    <NuxtLink to="/">
                        <Logo />
                    </NuxtLink>
                </div>

                <div class="hidden md:flex">
                    <Button
                        @click="() => emit('wants-be-creator')"
                        label="Continuar como creator"
                        icon-pos="right"
                        icon="pi pi-arrow-right"
                    />
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (e: "wants-be-creator"): void;
}>();

</script>