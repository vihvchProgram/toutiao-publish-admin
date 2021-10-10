<template>
  <div class="header-container">
    <div>
      <i class="el-icon-s-fold"></i>
      <span>內容發佈系統</span>
    </div>
    <el-dropdown>
      <span class="el-dropdown-link avatar-wrap">
        <img class="avatar" src="" alt="">
        <span>用戶暱稱</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>個人設置</el-dropdown-item>
        <el-dropdown-item>退出登入</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { getUserProfile } from '@/api/user'

export default {
  name: 'AppHeader',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {
    // 當組件初始化好, 即調用loadUserProfile(),發送請求 獲取用戶資料
    this.loadUserProfile()
  },
  mounted () {},
  methods: {
    // 除了 登入接口以外,若要訪問其它所有接口,都需要被授權,才能 成功請求使用,得到返回數據
    // 意思是 除了登入接口,訪問其它接口 都需要提供你的身分令牌(token),才能獲取資訊(接收到返回數據)
    loadUserProfile () {
      // getUserProfile()
      getUserProfile().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped lang="less">
.avatar-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
}
</style>
