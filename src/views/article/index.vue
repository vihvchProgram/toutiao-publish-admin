<template>
  <div class="article-container">
    <el-card class="filter-card">
      <div slot="header" class="clearfix">
        <!-- 麵包屑 路徑導航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>內容管理</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- /麵包屑 路徑導航 -->
      </div>

      <!-- 數據篩選 表單 -->
      <el-form ref="form" :model="form" label-width="45px" size="mini">
        <el-form-item label="狀態:">
          <el-radio-group v-model="form.resource">
            <el-radio label="全部"></el-radio>
            <el-radio label="草稿"></el-radio>
            <el-radio label="待審核"></el-radio>
            <el-radio label="審核通過"></el-radio>
            <el-radio label="審核失敗"></el-radio>
            <el-radio label="已刪除"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="頻道:">
          <el-select v-model="form.region" placeholder="請選擇頻道">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="日期:">
          <el-date-picker
            v-model="form.data1"
            type="datetimerange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['12:00:00']">
          </el-date-picker>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">查詢</el-button>
        </el-form-item>
      </el-form>
      <!-- /數據篩選 表單 -->
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <!-- <p>根據篩選條件，總共查詢到 1589 條結果:</p> -->
        根據篩選條件，總共查詢到 1589 條結果:
      </div>

      <!-- 篩選結果展示 數據列表 -->
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        class="channel-table"
        size="mini"
      >
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
      <!-- /篩選結果展示 數據列表 -->

      <!-- 數據列表 分頁標籤 -->
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
      <!-- /數據列表 分頁標籤 -->
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ArticleIndex',
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
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
  .filter-card {
    margin-bottom: 30px;
  }

  .channel-table {
    margin-bottom: 20px;
  }
</style>
