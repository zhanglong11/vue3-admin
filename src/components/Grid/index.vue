<template>
  <div>
    <vxe-table :data="list" :border="border">
      <slot />
    </vxe-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
export default defineComponent({
  props: {
    data: {
      default: () => []
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const state = reactive({
      list: [] as any[]
    })
    onMounted(() => {
      refresh()
    })
    const refresh = () => {
      state.list = [{ id: 1, name: '11' }]
    }
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less"></style>
