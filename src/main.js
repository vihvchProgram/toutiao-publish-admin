/**
 * 項目的啟動入口
 */

import Vue from 'vue'
// 加載根組件
import App from './App.vue'
// 加載路由
import router from './router'
// 加載全局樣式文件
import './styles/index.less'

// 關閉生產環境提示
Vue.config.productionTip = false

// 創建Vue根實例
// 把router配置到根實例中
// 通過render方法把App根組件渲染到#app入口節點
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
