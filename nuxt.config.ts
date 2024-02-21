// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve }  from  "path";


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    // "@": resolve(__dirname, "/"),
    assets: "/<rootDir>/assets",
  },

  modules: ['@pinia/nuxt'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  
  css: ['~/assets/style.css'],

  hooks: {
    ready: (ctx) => console.log(ctx),
  },

  
})