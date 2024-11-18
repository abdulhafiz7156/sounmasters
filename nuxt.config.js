import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Sound Master',
      htmlAttrs: {
        lang: 'ru',
      },
      bodyAttrs: {
        class: 'my-class'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      /*link: [
        {type:"text/css", href:"../public/css/reset.css"}
      ],*/
      /*script: [
      ]*/
    }
  },

  plugins: ['@/plugins/pinia', '@/plugins/bus'],

  loading: { color: '#409EFF' },

  moment: {
    defaultLocale: 'ru',
    locales: ['ru']
  },

  modules: [
    '@pinia/nuxt',
    '@element-plus/nuxt'
  ],

  elementPlus: {
    importStyle: 'scss'
  },

  nitro: false,

  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  build: {
    extend(config, ctx) {
      // config.devtool = 'eval-source-map'
      if (ctx.isDev && ctx.isClient) {
        config.devtool = 'eval-source-map'
      }
    }
  },

  env: {},

  css: [
    '@/assets/css/main.scss',
  ],

  /*  vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "@/assets/styles/element/index.scss" as element;'
          }
        }
      }
    },*/

  runtimeConfig: {
    public: {
      mainServerURL: process.env.MAIN_SERVER_URL,
      apiServerURL: process.env.API_SERVER_URL,
      websocketServerURL: process.env.WEBSOCKET_SERVER,
      websocketPublicServerURL: process.env.WEBSOCKET_PUBLIC_SERVER
    }
  }

})

