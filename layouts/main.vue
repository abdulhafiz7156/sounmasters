<template>
  <div class="main-layout-wrap" style="">
    <el-container :style="{height: '100%'}">
      <el-aside>
        <MainAside/>
      </el-aside>
      <el-main>
        <slot/>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.main-layout-wrap {
  width: 100%;
  height: 100vh;
}

</style>
