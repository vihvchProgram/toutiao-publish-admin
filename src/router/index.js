import Vue from 'vue'
import VueRouter from 'vue-router'

// 在 Vue CLI 創建的項目中, @ 表示 src 目錄
// import Login from '@/views/login/'
// import Layout from '@/views/layout/'
// import Home from '@/views/home/'
// import Article from '@/views/article/'
// import Image from '@/views/image/'
// import Publish from '@/views/publish/'
// import Comment from '@/views/comment/'
// import Fans from '@/views/fans/'
// import Settings from '@/views/settings/'
// import OnDemand from '@/views/ondemand/'
// import ListDispl from '@/views/listdispl/'
// import ChartDispl from '@/views/chartdispl/'
// import DataManage from '@/views/datamanage/'

// 藉由 Vue的異步組件 和 Webpack的代碼分割功能 來完成 路由懶加載
const Login = () => import('@/views/login/')
const Layout = () => import('@/views/layout/')
const Home = () => import('@/views/home/')
const Article = () => import('@/views/article/')
const Image = () => import('@/views/image/')
const Publish = () => import('@/views/publish/')
const Comment = () => import('@/views/comment/')
const Fans = () => import('@/views/fans/')
const Settings = () => import('@/views/settings/')
const OnDemand = () => import('@/views/ondemand/')
const ListDispl = () => import('@/views/listdispl/')
const ChartDispl = () => import('@/views/chartdispl/')
const DataManage = () => import('@/views/datamanage/')

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
      },
      {
        path: '/article',
        name: 'article',
        component: Article
      },
      {
        path: '/image',
        name: 'image',
        component: Image
      },
      {
        path: '/publish',
        name: 'publish',
        component: Publish
      },
      {
        path: '/comment',
        name: 'comment',
        component: Comment
      },
      {
        path: '/fans',
        name: 'fans',
        component: Fans
      },
      {
        path: '/settings',
        name: 'settings',
        component: Settings
      },
      {
        path: '/ondemand',
        name: 'ondemand',
        component: OnDemand
      },
      {
        path: '/listdispl',
        name: 'listdispl',
        component: ListDispl
      },
      {
        path: '/chartdispl',
        name: 'chartdispl',
        component: ChartDispl
      },
      {
        path: '/datamanage',
        name: 'datamanage',
        component: DataManage
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 路由攔截器 (路由導航守衛)
// 所有頁面的導航 都會經過這裡
// to: 要前往的 路由信息
// from: 來自哪裡的 路由信息
// next: 放行方法
router.beforeEach((to, from, next) => {
  // 全局前置守衛
  // 通過本地存儲 拿到用戶信息
  // 將拿到的JSON格式字符串還原回 原來的數據對象
  const user = JSON.parse(window.localStorage.getItem('user'))

  // 如果要訪問的頁面不是 /login，則必須校驗 登入狀態
  // 如果 還沒登入，會跳轉到 登入頁面 (/login)
  // 如果 已經登入了，就允許通過
  if (to.path !== '/login') {
    // 校驗 非登入頁面的 登入狀態
    if (user) {
      // 已登入，允許通過
      next()
    } else {
      // 還沒登入，跳轉到 登入頁面
      next('/login')
    }
  } else {
    // 訪問 登入頁面，允許通過
    next()
  }
})

// 我們在組件中使用的 this.$router，其實就是這個模塊中的 這個router
export default router
