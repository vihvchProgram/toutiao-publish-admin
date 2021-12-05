<template>
  <div class="my-echarts-container">
    <!-- 為 ECharts 準備一個具備大小（寬高）的 DOM -->
    <div ref="main" :style="{ width: width, height: height }" />
  </div>
</template>

<script>
// 引入 ECharts
import * as echarts from 'echarts'

export default {
  name: 'MyEcharts',
  components: {},
  props: {
    refName: {
      type: String,
      require: true
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    },
    chartOption: {
      type: Object,
      require: true
    },
    type: {
      type: String,
      default: 'canvas'
    },
    autoRsize: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      myChart: null
    }
  },
  computed: {},
  watch: {
    chartOption: {
      deep: true,
      handler (newVal) {
        this.setOption(newVal)
      }
    }
  },
  created () {},
  mounted () {
    // 基於準備好的dom，初始化echarts實例
    this.chartInit()
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
    this.myChart.setOption(option)
  },
  methods: {
    chartInit () {
      this.myChart = echarts.init(this.$refs.main)
    }
  }
}
</script>

<style scoped lang="less"></style>
