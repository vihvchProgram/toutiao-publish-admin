<template>
  <div class="settings-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <!-- 麵包屑 路徑導航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>個人設置</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- /麵包屑 路徑導航 -->
      </div>

      <el-row>
        <el-col :span="18">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="編號">
              {{ user.id }}
            </el-form-item>
            <el-form-item label="手機">
              {{ user.mobile }}
            </el-form-item>
            <el-form-item label="頻道名稱">
              <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item label="頻道介紹">
              <el-input type="textarea" v-model="user.intro"></el-input>
            </el-form-item>
            <el-form-item label="信箱">
              <el-input v-model="user.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">保存設置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :offset="1" :span="5">
          <el-avatar shape="square" :size="150" fit="cover" :src="user.photo"></el-avatar>
          <!-- <p @click="$refs.file.click()">點擊修改頭像</p> -->
          <!-- <input type="file" hidden ref="file"> -->
          <label for="file">點擊修改頭像</label>
          <input id="file" type="file" hidden ref="file">
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { getUserProfile } from '@/api/user'

export default {
  name: 'SettingsIndex',
  components: {},
  props: {},
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      user: { // 當前登入的 用戶信息
        id: null,
        mobile: '',
        name: '',
        intro: '',
        photo: ''
      }
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
    loadUserProfile () {
      getUserProfile().then(res => {
        console.log('用戶信息', res)
        this.user = res.data.data
      })
    },
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style scoped lang="less"></style>
