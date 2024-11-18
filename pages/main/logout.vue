<template>
  <div>Очищаем данные</div>
</template>

<script setup lang="ts">

import { useAuthStore } from '~/store/auth'

const auth = useAuthStore()

definePageMeta({
  layout: 'main',
  middleware: 'main-auth',
})

onBeforeMount(async () => {
  await auth.logout()
  navigateTo('/main/login?message=logout')
})
</script>
