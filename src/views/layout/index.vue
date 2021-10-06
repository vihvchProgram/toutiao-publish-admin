<template>
  <div class="layout-container">
    <div>頂部導航欄</div>

    <!-- 子路由出口 -->
    <router-view />

    <div>側邊導航欄</div>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
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
