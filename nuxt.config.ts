import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  ssr: false,
  build: {
    transpile: ["vuetify", "vue-i18n"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(
          vuetify({
            autoImport: true,
            styles: { configFile: "./styles/settings.scss" },
          })
        );
      });
    },
    "@pinia/nuxt",
    "@vueuse/motion/nuxt",
    "nuxt-swiper",
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: ["@/assets/fonts/main.css", "@/styles/main.scss"],
  sourcemap: {
    server: false,
    client: false,
  },
});
