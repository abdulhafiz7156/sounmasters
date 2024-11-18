import { defineNuxtPlugin } from '#app'
// ~/plugins/bus.ts
import bus from 'nuxt-bus'
// or any name you want -> $bus
export default defineNuxtPlugin(() => ({ provide: { bus } }))
