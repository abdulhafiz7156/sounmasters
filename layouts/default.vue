<template>
  <el-container>
    <el-header style="height: 20px;">
<!--      <app-navigation />-->
    </el-header>
    <el-main>
      <slot/>
    </el-main>
    <el-footer/>
  </el-container>
</template>

<script>
import AppNavigation from '@/components/main/Navigation'

export default {
  components: {
    AppNavigation
  }

}
</script>

<style>

</style>
