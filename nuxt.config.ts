// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: [{path: "~/shared/icons", prefix: "Icon"}, '~/components'],
  alias: {
      // css: '/assets/css',
      css: '/<rootDir>/assets/css',
  },
  app: {
    baseURL: process.env.BASE_URL,
  },
  css: ['~/assets/main.css'],// css padrão(global) da aplicação, quando se usa o css global, não precisa importar em cada componente
});
