<template>
  <div class="header-container">
    <div>
      <i
        :class="foldStateClass"
        @click="onChangeFold"
      ></i>
      <span>內容發佈系統</span>
    </div>
    <el-dropdown>
      <span class="el-dropdown-link avatar-wrap">
        <img class="avatar" :src="user.photo" alt="頭像">
        <span>{{user.name}}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>個人設置</el-dropdown-item>
        <el-dropdown-item @click.native="onLogout">退出登入</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { getUserProfile } from '@/api/user'
import globalBus from '@/utils/global-bus'

export default {
  name: 'AppHeader',
  components: {},
  props: {},
  data () {
    return {
      user: {}, // 當前登入的 用戶信息
      foldStateClass: 'el-icon-s-unfold', // 摺疊字體圖標 類名
      isFold: false // 摺疊字體圖標 & 側邊菜單欄的 展示狀態
    }
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
      getUserProfile().then(res => {
        // console.log(res)
        // 拿到 當前登入的 用戶信息
        this.user = res.data.data
      })
    },
    onChangeFold () {
      // 改變 摺疊 展示狀態
      this.isFold ? this.foldStateClass = 'el-icon-s-fold' : this.foldStateClass = 'el-icon-s-unfold'
      this.isFold = !this.isFold
      // 觸發 'changeCollapse' 自定義事件 ，並 傳遞 this.isFold 數據
      globalBus.$emit('changeCollapse', this.isFold) // 發佈 事件/消息
    },
    onLogout () {
      // 用簡單的 消息提示彈窗
      // 輕量的展示 "確認提示"
      this.$confirm('確認退出嗎? ', '退出提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 把用戶的登入狀態清除
        window.localStorage.removeItem('user')
        // 跳轉到 登入頁面
        this.$router.push('/login')
        this.$message({
          type: 'success',
          message: '退出登入'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
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
