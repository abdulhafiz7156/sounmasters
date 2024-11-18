<template>
  <div class="courier-layout-wrap">
    <el-container :style="{height: '100%'}">
      <el-aside width="0px">
        <CourierAside/>
      </el-aside>
      <el-main>
        <slot/>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.courier-layout-wrap {
  width: 100%;
  height: 100vh;
}
</style>
