import { useIndexStore } from '~/store'

export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      store: useIndexStore($pinia)
    }
  }
})
