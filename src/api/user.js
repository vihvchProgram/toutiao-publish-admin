/**
 * 用戶相關請求模塊
 */
import request from '@/utils/request'

// 用戶登入
export const login = data => {
  return request({
    method: 'POST',
    url: '/mp/v1_0/authorizations',
    // data 用來設置POST請求體
    data: data
  })
}

// 獲取用戶信息
export const getUserProfile = () => {
  // 通過本地存儲 拿到用戶信息, 以便獲取 token數據
  // 將拿到的JSON格式字符串還原回 原來的數據對象
  // const user = JSON.parse(window.localStorage.getItem('user'))
  // console.log('本地存儲', user)
  return request({
    method: 'GET',
    url: '/mp/v1_0/user/profile'
    // 後端要求 把需要授權的用戶身分 放到請求頭信息 中
    // axios 可以通過 headers 配置項 來設置請求頭信息
    // headers: {
    //   // 屬性名和值都得看 後端接口的要求
    //   // 1) 屬性名: Authorization, 後端接口 要求的
    //   // 2) 屬性值: Bearar[空格][token數據]
    //   // Bearar: 持票人
    //   // Authorization: `Bearer ${user.token}`
    // }
  })
}
