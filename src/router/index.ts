import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/index.vue'),
    meta: {
      title: '登录',
      hidden: true
    }
  },
  {
    path: '/',
    component: () => import('@/layoutTest/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/pages/home/index.vue'),
        name: 'Home',
        meta: { title: '首页', icon: 'el-icon-s-home' }
      },
      {
        path: '/model',
        name: 'Model',
        component: () => import('@/pages/model/index.vue'),
        meta: { title: '11' }
      },
      {
        path: '/test',
        name: 'Test',
        component: () => import('@/pages/test/index.vue'),
        meta: { title: '22' }
      }
    ]
  }
]

export const asyncRoutes = []

export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
