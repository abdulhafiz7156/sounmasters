import { useAuthStore } from '@/store/auth.ts'

const auth = useAuthStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!auth.isAuthenticated) auth.autoLogin()

  if (auth.isAuthenticated) {
    const type = auth.type
    console.log(type)
    if (type === 3) return await navigateTo('/courier')
    else if (type === 10) return await navigateTo('/admin')
    else if ([1, 2, 5].includes(type)) return await navigateTo('/main')
  }
})
