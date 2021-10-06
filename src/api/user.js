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
