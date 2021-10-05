<template>
  <div class="login-container">
    <div class="login-form-wrap">
      <div class="login-head">
        <div class="logo"></div>
      </div>
      <!--
        配置 Form 表單驗證:
        1. 必須給 el-form組件 綁定model為 表單數據對象
        2. 給需要驗證的表單項el-form-item 綁定 prop屬性
          注意: prop屬性 需要指定為 表單對象中的 數據名稱
        3. 通過 el-form組件的rules屬性 配置驗證規則
      -->
      <el-form class="login-form" ref="form" :model="user" :rules="formRules">
        <el-form-item prop="mobile">
          <el-input v-model="user.mobile"
                    placeholder="請輸入手機號"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="user.code"
                    placeholder="請輸入驗證碼"
          ></el-input>
        </el-form-item>
        <el-form-item prop="agree">
          <el-checkbox v-model="user.agree">我已閱讀並同意用戶協議和隱私條款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-btn"
            type="primary"
            :loading="loginLoading"
            @click="onLogin"
          >登入</el-button>
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
        mobile: '', // 手機號
        code: '', // 驗證碼
        agree: false // 是否同意協議的選中狀態
      },
      loginLoading: false, // 登入的 loading 狀態
      formRules: { // 表單驗證的 規則配置
        // 要驗證的數據名稱: 規則列表[]
        mobile: [
          { required: true, message: '請輸入手機號', trigger: 'change' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '請輸入正確的手機號碼格式', trigger: 'change' }
        ],
        code: [
          { required: true, message: '驗證碼不能為空', trigger: 'change' },
          { pattern: /^\d{6}$/, message: '請輸入正確的驗證碼格式', trigger: 'change' }
        ]
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
      // 開啟登入中 loading ...
      this.loginLoading = true
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
        // 關閉 loading
        this.loginLoading = false
      }).catch(err => {
        console.log('登入失敗', err)
        this.$message.error('登入失敗, 手機號或驗證碼錯誤')
        // 關閉 loading
        this.loginLoading = false
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
