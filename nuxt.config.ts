// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
    },
  },
  css: ['@/assets/css/index.css'],
  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'active',
    },
  },
  runtimeConfig: {
    public: {
      appUrl: process.env.APP_URL,
    },
  },
  devtools: { enabled: false },
});
