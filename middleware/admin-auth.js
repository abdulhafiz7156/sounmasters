import { useAuthStore } from '@/store/auth.ts'
const auth = useAuthStore();

export default defineNuxtRouteMiddleware((to, from) => {
  if (!auth.isAuthenticated) {
    return navigateTo('/admin/login?message=login')
  }
})
