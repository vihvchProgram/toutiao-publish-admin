/**
 * 全局通信總線 (全局事件總線, GlobalEventBus)
 * 作用: 可以讓任意組件 互相通信
 * 語法: 消息 訂閱($on) 與 發佈($emit)
*/

import Vue from 'vue'

export default new Vue()

// 互相通信的組件，必須使用相同的 '自定義事件名稱'

// 假設 a 組件(發佈方/觸發 自定義事件) 發送數據  給  b 組件(訂閱方/註冊 自定義事件)
//   1. b組件: 註冊通信的事件 (globalBus.$on('自定義事件名稱', (data) => {處理函數}))
//   2. a組件: 發佈通信事件 (globalBus.$emit('自定義事件名稱', data)

// 假設 b 組件(發佈方/觸發 自定義事件) 發送數據  給  a 組件(訂閱方/註冊 自定義事件)
//   1. a組件: 註冊通信的事件 (globalBus.$on('自定義事件名稱', (data) => {處理函數}))
//   2. b組件: 發佈通信事件 (globalBus.$emit('自定義事件名稱', data)