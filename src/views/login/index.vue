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

        手動觸發 表單驗證:
        1. 給 el-form 設置 ref (名字隨便取, 不要重複即可)
        2. 通過 ref 獲取 el-form組件, 調用 組件的 validate方法 進行驗證
      -->
      <el-form
        class="login-form"
        ref="login-form"
        :model="user"
        :rules="formRules"
      >
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
import { login } from '@/api/user'

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
        ],
        agree: [
          {
            // 自定義 表單 校驗規則
            //   驗證通過: callback()
            //   驗證失敗: callback(new Error('錯誤訊息'))
            validator: (rule, value, callback) => {
              console.log(rule)
              if (!value) {
                // 驗證失敗
                callback(new Error('請勾選同意用戶協議'))
                return
              }
              // 驗證通過
              callback()
            },
            trigger: 'change'
          }
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
      // const user = this.user
      // 表單驗證
      // validate 方法是 異步的
      // console.log(this.$refs['login-form'])
      this.$refs['login-form'].validate(valid => {
        // 如果表單驗證失敗, 停止 請求提交
        if (!valid) {
          return
        }
        // 表單驗證 通過，提交登入
        this.login()
      })
    },
    login () {
      // 開啟登入中 loading ...
      this.loginLoading = true
      // 處理後端響應結果
      // 將代碼中的請求操作 都封裝成 函數(方法)，統一管理(@/api/)
      login(this.user).then(res => {
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
