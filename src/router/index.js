import Vue from 'vue'
import VueRouter from 'vue-router'

// 在 Vue CLI 創建的項目中, @ 表示 src 目錄
import Login from '@/views/login'

Vue.use(VueRouter)

// 路由配置表
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
