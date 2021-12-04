/**
 * 素材管理相關請求模塊
 */
import request from '@/utils/request'

// 上傳圖片素材
export const uploadImage = data => {
  return request({
    method: 'POST',
    url: '/mp/v1_0/user/images',
    // data 用來設置POST請求體
    data: data
  })
}

// 獲取圖片素材列表
export const getImages = params => {
  return request({
    method: 'GET',
    url: '/mp/v1_0/user/images',
    // params 用來設置請求參數
    params: params
  })
}
