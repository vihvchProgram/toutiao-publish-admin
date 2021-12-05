<template>
  <div class="home-container">
    <MyEcharts width="600px"></MyEcharts>
    <MyEcharts width="600px"></MyEcharts>
    <MyEcharts width="600px"></MyEcharts>
    <MyEcharts width="600px"></MyEcharts>
    <MyEcharts width="600px"></MyEcharts>
    <MyEcharts width="600px"></MyEcharts>
  </div>
</template>

<script>
import MyEcharts from '@/components/MyEcharts.vue'

export default {
  name: 'HomeIndex',
  components: {
    MyEcharts
  },
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
