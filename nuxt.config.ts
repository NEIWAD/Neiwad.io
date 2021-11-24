import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        'nuxt-windicss',
        ['@intlify/nuxt3', {
            localeDir: 'locales',
            vueI18n: 'vue-i18n.mjs'
        }]
    ],
})