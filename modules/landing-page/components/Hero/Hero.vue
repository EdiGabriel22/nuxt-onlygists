<template>
    <section class="flex flex-col items-center justify-center w-full h-full">
        <h1 class="mb-4 text-5xl font-bold text-primary-500">Compartilhe e monetize trechos de código</h1>
        <p class="mb-6 text-lg">
            Ganhe uma renda extra com os códigos que você faz no seu dia a dia.
        </p>
        <div class="flex flex-col items-center justify-center">
            <Button
                label="Continuar como creator"
                icon-pos="right"
                icon="pi pi-arrow-right"
                @click="emitWantsBeCreator"
            />
        </div>
    </section>
</template>

<script>
export default {
    name: "Hero",
    methods: {
        emitWantsBeCreator() {
            this.$emit("wants-be-creator");
        },
    },
};
</script>