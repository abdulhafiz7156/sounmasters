import { createPinia, defineStore } from 'pinia'
//import { useAuthStore } from '@/store/auth'

const pinia = createPinia();
//const auth = useAuthStore(pinia)

export const useIndexStore = defineStore('index', {

  state: () => ({
    _error: null
  }),

  actions: {
    nuxtServerInit() {
      //auth.autoLogin()
    }
  },

  getters: {
    error: (state) => state._error
  }
})

