// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue", "@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  css: ["primeicons/primeicons.css"],
  googleFonts: {
    base64: true,
    fontsDir: "assests/fonts",
    overwriting: true,
    families: {
      Inter: [300, 500, 800]
    }
  }
})
