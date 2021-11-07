/**
 * 文章相關請求模塊
 */
import request from '@/utils/request'

// 獲取文章列表
export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/mp/v1_0/articles',
    // Body 參數, 使用 data 來設置  (data 用來設置POST請求體)
    // Query 參數, 使用 params 來設置
    // Headers 參數, 使用 headers 來設置
    params: params
  })
}
