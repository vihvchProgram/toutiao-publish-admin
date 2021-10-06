<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-location"></i>
        <span slot="title">首頁</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">內容管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">素材管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-document"></i>
        <span slot="title">發布文章</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-menu"></i>
        <span slot="title">評論管理</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-menu"></i>
        <span slot="title">粉絲管理</span>
      </el-menu-item>
      <el-menu-item index="7">
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
