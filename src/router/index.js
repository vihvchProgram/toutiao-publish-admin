import Vue from 'vue'
import VueRouter from 'vue-router'

// 在 Vue CLI 創建的項目中, @ 表示 src 目錄
import Login from '@/views/login'
import Home from '@/views/home'
import Layout from '@/views/layout'

Vue.use(VueRouter)

// 路由配置表
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    // 如果有 默認子路由, 就不要給 父路由取名字，不然 控制台 會有警告訊息
    // name: 'layout',
    component: Layout,
    children: [
      {
        path: '', // path 為空, 會作為默認子路由渲染
        name: 'home',
        component: Home
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
