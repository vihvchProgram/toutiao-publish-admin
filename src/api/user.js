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
  // return 1
  return request({
    method: 'GET',
    usr: '/mp/v1_0/user/profile',
    // 後端要求 把需要授權的用戶身分 放到請求頭信息 中
    // axios 可以通過 headers 配置項 來設置請求頭信息
    headers: {
      // 屬性名和值都得看 後端接口的要求
      // 1) 屬性名: Authorization, 後端接口 要求的
      // 2) 屬性值: Bearar[空格][token數據]
      // Bearar: 持票人
      Authorization: 'Bearar eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2N…J1ZX0.ZNtBkuPtZmkPrLUo29CNgsd4rIXO1Mu_NoVIpmZrtAA'
    }
  })
}
