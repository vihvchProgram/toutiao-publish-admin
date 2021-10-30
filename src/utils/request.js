/**
 * 基於axios封裝的請求模塊
 */
import axios from 'axios'

// 創建一個axios實例，說白了就是複製了一個axios
// 我們通過這個實例去發請求，把需要的配置配置給這個實例來處理
const request = axios.create({
  baseURL: 'http://api-toutiao-web.itheima.net' // 請求的基礎路徑
})

// axios 請求攔截器
request.interceptors.request.use(
  // 任何 所有的請求，都會經過這裡
  // config 是當前請求 相關的配置信息對象
  // config 是可以修改的
  function (config) {
    // 通過本地存儲 拿到用戶信息, 以便獲取 token數據
    // 將拿到的JSON格式字符串還原回 原來的數據對象
    const user = JSON.parse(window.localStorage.getItem('user'))
    // console.log('本地存儲', user)
    // 我們可以在允許請求 發送出去之前, 統一制訂 業務功能 處理需求
    // 例如: 統一設置 token
    // 如果有 登入用戶信息，則 統一設置 token
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`
    }
    console.log('配置信息', config)
    // 當 return config 之後，請求 才會真正 發送出去
    return config
  },
  // 請求失敗，會經過這裡
  function (error) {
    return Promise.reject(error)
  }
)

// axios 響應攔截器

// 導出 request 模塊
export default request
