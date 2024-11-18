import { useAuthStore } from '@/store/auth'
const auth = useAuthStore()

export default defineNuxtRouteMiddleware((to, from) => {
  if (!auth.isAuthenticated) auth.autoLogin()

  if (!auth.isAuthenticated) {
    return navigateTo('/main/login?message=login')
  }
})
