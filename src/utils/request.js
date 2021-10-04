/**
 * 基於axios封裝的請求模塊
 */
import axios from 'axios'

// 創建一個axios實例，說白了就是複製了一個axios
// 我們通過這個實例去發請求，把需要的配置配置給這個實例來處理
const request = axios.create({
  baseURL: 'http://api-toutiao-web.itheima.net' // 請求的基礎路徑
})

// 請求攔截器

// 響應攔截器

// 導出 request 模塊
export default request
