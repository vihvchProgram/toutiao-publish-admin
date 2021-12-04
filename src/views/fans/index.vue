<template>
  <div class="fans-container">
    <!-- 為 ECharts 準備一個具備大小（寬高）的 DOM -->
    <div ref="main" style="width: 600px; height: 400px;"></div>
  </div>
</template>

<script>
// 引入 ECharts
import * as echarts from 'echarts'

export default {
  name: 'FansIndex',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    // 基於準備好的dom，初始化echarts實例
    const myChart = echarts.init(this.$refs.main)
    // 指定圖表的配置項和資料
    const option = {
      title: {
        text: 'ECharts 入門示例',
        subtext: '銷售報表'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['銷售量']
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: {
        data: ['襯衫', '羊毛衫', '雪紡衫', '褲子', '高跟鞋', '襪子']
      },
      yAxis: {},
      series: [{
        name: '銷售量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      }]
    }
    // 使用剛指定的配置項和資料顯示圖表
    myChart.setOption(option)
  },
  methods: {}
}
</script>

<style scoped lang="less"></style>
