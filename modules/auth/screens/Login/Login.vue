<template>
    <section class="flex flex-col items-center w-full h-screen">
        <Logo class="mb-8" />
        <SocialForm
            :is-loading="isLoading"
            @wants-login-with-github="handleGithubLogin"
        />
    </section>
</template>

<script setup lang="ts">
import SocialForm from '@/modules/auth/components/SocialForm/SocialForm.vue';

const isLoading = ref<boolean>(false);

const handleGithubLogin = async () => {
    isLoading.value = true;
    console.log('Login with Github');
};
</script>
