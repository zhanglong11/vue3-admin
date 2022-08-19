<template>
  <el-dialog v-model="visible" title="新建">123</el-dialog>
</template>

<script lang="ts" setup>
import { defineProps, toRefs, watch } from 'vue'

const props = defineProps({
  visible: {}
})
watch(
  () => props.visible,
  (n, o) => {
    console.log(n)
    console.log(o)
  }
)
toRefs(props)
</script>

<style scoped lang="less"></style>
