<template>
    <div class="flex flex-col items-center justify-center gap-2 p-6 rounded bg-gray-50">
        <h2 class="text-gray-700 font-regular">
            Entre com a sua conta.
        </h2>
        <Button
            @click="() => emit('wants-login-with-github')"
            :loading="props.isLoading"
            label="Continuar com o Github"
            icon-pos="right"
            icon="pi pi-github"
        />
    </div>
</template>

<script setup lang="ts">
    const emit = defineEmits<{
        (e: "wants-login-with-github"): void;
    }>();
    
    const props = defineProps<{
        isLoading: boolean;
    }>();
</script>