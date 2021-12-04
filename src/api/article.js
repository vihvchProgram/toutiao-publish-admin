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

// 獲取文章頻道
export const getArticleChannels = () => {
  return request({
    method: 'GET',
    url: '/mp/v1_0/channels'
  })
}

// 刪除文章
export const deleteArticle = articleId => {
  return request({
    method: 'DELETE',
    url: `/mp/v1_0/articles/${articleId}`
  })
}

// 新建文章
export const postArticle = (data, draft = false) => {
  return request({
    method: 'POST',
    url: '/mp/v1_0/articles',
    params: {
      draft // 是否存為草稿 (true 為草稿)
    },
    data: data
  })
}

// 編輯文章
export const updateArticle = (articleId, data, draft = false) => {
  return request({
    method: 'PUT',
    url: `/mp/v1_0/articles/${articleId}`,
    params: {
      draft // 是否存為草稿 (true 為草稿)
    },
    data: data
  })
}

// 修改文章評論狀態
export const updateCommentStatus = (articleId, allowComment) => {
  return request({
    method: 'PUT',
    url: '/mp/v1_0/comments/status',
    params: {
      article_id: articleId
    },
    data: {
      allow_Comment: allowComment
    }
  })
}
