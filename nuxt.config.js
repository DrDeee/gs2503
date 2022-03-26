import loader from "./loader";
export default {
  ssr: false,
  target: "static",
  head: {
    title: process.env.TITLE || 'Rückblick 25.03.',
    htmlAttrs: {
      lang: "de",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [],
  modules: ["nuxt-buefy"],
  build: {},
  router: {
    base: process.env.BASE_PATH || "/",
  },
  publicRuntimeConfig: {
    images: loader(process.env.IMAGE_DIR, process.env.BASE_PATH || "/"),
  },
};
