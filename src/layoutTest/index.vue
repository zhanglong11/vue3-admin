<template>
  <div class="main-container">
    <Sidebar class="side-container"></Sidebar>
    <AppMain class="main"></AppMain>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from './components/Sidebar/index.vue'
import AppMain from './AppMain.vue'
</script>

<style scoped lang="less">
.main-container {
  display: flex;
  height: 100%;
  .side-container {
    flex: 0 0 240px;
  }
  .main {
    flex: 1;
    padding: 20px;
  }
}
</style>
