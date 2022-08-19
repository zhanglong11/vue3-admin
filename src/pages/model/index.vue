<template>
  <div>
    <div class="tools">
      <el-button type="primary" @click="showAddDialog">新建</el-button>
    </div>
    <VTable ref="table" :checkbox-config="{ highlight: true, reserve: false, range: true }" :request="api.list">
      <vxe-table-column title="序号" type="seq" width="55" />
      <vxe-table-column title="应用名称" field="name" />
    </VTable>
    <AddDialog v-model="addVisible" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import api from '@/api/model'
import AddDialog from './components/addDialog.vue'
const list = ref([])
const addVisible = ref(false)
const showAddDialog = () => {
  addVisible.value = true
}
</script>

<style scoped lang="less"></style>
