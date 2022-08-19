<template>
  <div class="menu-wrap">
    <div
      class="menu"
      :class="activeRoute === item.path ? 'active' : ''"
      v-for="item in initRouteList"
      :key="item.path"
      @click="goMenu(item.path)"
    >
      {{ item.meta.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { constantRoutes } from '@/router'
import { defineComponent, onMounted, computed, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      initRouteList: [] as any[]
    })
    const activeRoute = computed(() => {
      return route.path
    })
    onMounted(() => {
      initRouteData()
    })
    const initRouteData = () => {
      state.initRouteList = constantRoutes.filter(c => !c.meta?.hidden)[0].children || []
    }
    const goMenu = (item: String) => {
      router.push(item)
    }
    return {
      ...toRefs(state),
      goMenu,
      activeRoute
    }
  }
})
</script>

<style scoped lang="less">
.menu-wrap {
  background: #394e6b;
  .menu {
    position: relative;
    padding: 14px 20px;
    color: #fff;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    &.active {
      background: #25374f;
      &:before {
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        width: 2px;
        height: 100%;
        background: red;
      }
    }
    &:hover {
      background: #25374f;
    }
  }
}
</style>
