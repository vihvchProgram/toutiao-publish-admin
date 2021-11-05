/**
 * 基於axios封裝的請求模塊
 */
import axios from 'axios'
import router from '@/router'

// 非組件模塊可以 單獨引入使用 element-ui的Message提示組件
import { Message } from 'element-ui'

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
// Add a response interceptor
request.interceptors.response.use(
  // Any status code that lie within the range of 2xx cause this function to trigger
  // 任何 響應狀態碼 為2xx的響應，都會經過這裡 (表示 響應成功)
  function (response) {
    // Do something with response data
    // response 是響應數據
    return response
  },
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // 任何 響應狀態碼 超過2xx的響應，都會經過這裡 (表示 響應失敗)
  function (error) {
    // Do something with response error
    // console.log('響應狀態碼異常')
    // console.dir(error)
    // 處理公共的 錯誤狀態碼
    const { status } = error.response
    if (error.response) {
      if (status === 401) {
        // 登入狀態無效
        // 清除本地存儲中的用戶登入狀態
        window.localStorage.removeItem('user')
        // 跳轉到 登入頁面
        router.push('/login')
        Message.warning('登入狀態無效, 請重新登入')
      } else if (status === 403) {
        // token 未攜帶 或已過期
        // 客戶端 沒有訪問/操作權限
        Message.warning('沒有操作權限')
      } else if (status === 400) {
        // 客戶端  請求參數錯誤
        Message.error('參數異常, 請檢查請求參數')
      } else if (status >= 500) {
        // 服務端 內部錯誤/數據庫異常
        Message.error('服務端內部異常, 請稍後重試')
      }
    }
    return Promise.reject(error)
  }
)

// 導出 request 模塊
export default request
