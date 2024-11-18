<template>
  <div>
    <NuxtLink to="/main/login" :prefetch="false">Войти</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-bottom: 1px solid #e6e6e6;
}

.rightSide {
  display: flex;
  align-items: flex-end;
  justify-content: right;
  height: 100%;
}
</style>
