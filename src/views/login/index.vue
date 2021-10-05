<template>
  <div class="login-container">
    <div class="login-form-wrap">
      <div class="login-head">
        <div class="logo"></div>
      </div>
      <el-form class="login-form" ref="form" :model="user">
        <el-form-item>
          <el-input v-model="user.mobile"
                    placeholder="請輸入手機號"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="user.code"
                    placeholder="請輸入驗證碼"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="user.agree">我已閱讀並同意用戶協議和隱私條款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" @click="onLogin">登入</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request'

export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '13911111111', // 手機號
        code: '246810', // 驗證碼
        agree: false // 是否同意協議的選中狀態
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onLogin () {
      // 獲取表單數據 (根據接口要求綁定數據)
      const user = this.user
      // 表單驗證
      // 驗證通過，提交登入
      // 處理後端響應結果
      request({
        method: 'POST',
        url: '/mp/v1_0/authorizations',
        // data 用來設置POST請求體
        data: user
      }).then(res => {
        console.log(res)
        // 登入成功
        this.$message({
          message: '登入成功',
          type: 'success'
        })
      }).catch(err => {
        console.log('登入失敗', err)
        this.$message.error('登入失敗, 手機號或驗證碼錯誤')
      })
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("./login_bg.jpg") no-repeat;
  background-size: cover;
  .login-form-wrap {
    min-width: 300px;
    padding: 30px 50px 10px;
    background-color: #fff;
    .login-head {
      display: flex;
      justify-content: center;
      .logo {
        width: 200px;
        height: 57px;
        background: url("./logo_index.png") no-repeat;
        background-size: contain;
      }
    }
    .login-form {
      .login-btn {
        width: 100%;
      }
    }
  }
}
</style>
