<template>
  <div class="client-layout-wrap">
    <el-container :style="{height: '100%'}">
      <el-main>
        <slot/>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.client-layout-wrap {
  width: 100%;
  height: 100vh;
}
</style>
