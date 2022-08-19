<template>
  <div class="common-layout">
    <el-aside width="200px">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"></el-menu>
    </el-aside>
    <el-main><router-view></router-view></el-main>
  </div>
</template>

<script lang="ts" setup>
import Cookies from 'js-cookie'

console.log(1123)
console.log(Cookies.get('token'))
</script>

<style scoped lang="less">
.common-layout {
  width: 100%;
  height: 100%;
}
</style>
