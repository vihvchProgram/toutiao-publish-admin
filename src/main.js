/**
 * 項目的啟動入口
 */

import Vue from 'vue'
// 加載根組件
import App from './App.vue'
// 加載路由
import router from './router'

// 加載element-ui組件庫
import ElementUI from 'element-ui'

// 加載element-ui組件庫的樣式
import 'element-ui/lib/theme-chalk/index.css'

// 加載全局樣式文件
import './styles/index.less'

// 全局註冊element-ui組件庫
Vue.use(ElementUI)

// 關閉生產環境提示
Vue.config.productionTip = false

// 創建Vue根實例
// 把router配置到根實例中
// 通過render方法把App根組件渲染到#app入口節點
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
