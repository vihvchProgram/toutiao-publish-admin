<template>
    <!--
      el-menu 的 "router" 屬性 :
        1. 是否使用 vue-router 的模式  (開啟 導航菜單的 路由模式)
        2. 啟用該模式會在激活導航時以 index 作為 path 進行路由跳轉
        3. 必須要注意, index 不要重複。若重複了 路徑跳轉 會錯誤
    -->
    <el-menu
      default-active="/"
      background-color="#002033"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首頁</span>
      </el-menu-item>
      <el-menu-item index="/article">
        <i class="el-icon-menu"></i>
        <span slot="title">內容管理</span>
      </el-menu-item>
      <el-menu-item index="/image">
        <i class="el-icon-picture"></i>
        <span slot="title">素材管理</span>
      </el-menu-item>
      <el-menu-item index="/publish">
        <i class="el-icon-edit-outline"></i>
        <span slot="title">發布文章</span>
      </el-menu-item>
      <el-menu-item index="comment">
        <i class="el-icon-document-copy"></i>
        <span slot="title">評論管理</span>
      </el-menu-item>
      <el-menu-item index="fans">
        <i class="el-icon-s-custom"></i>
        <span slot="title">粉絲管理</span>
      </el-menu-item>
      <el-menu-item index="settings">
        <i class="el-icon-setting"></i>
        <span slot="title">個人設置</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'AppAside',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less"></style>
