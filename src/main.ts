import { createApp } from 'vue'
import App from './App.vue'
import 'minireset.css/minireset.min.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

import '@/styles/index.less'
import Grid from '@/components/Grid'
import VTable from '@/components/Table'

import lodash from 'lodash'
window._ = lodash

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(VXETable)
app.component('Grid', Grid)
app.component('VTable', VTable)

app.mount('#app')
