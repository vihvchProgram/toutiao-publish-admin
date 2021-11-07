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
      <!-- 1. 把需要展示的數據列表(數組) 綁定給table組件的data屬性 -->
      <!--   table組件內部 會自動遍歷 -->
      <!-- 2. 設計表格列 el-table-column -->
      <!--   prop:  數據字段 -->
      <!--   label: 列的標題 -->
      <!--   width: 列的寬度 -->
      <el-table
        :data="articles"
        stripe
        style="width: 100%"
        class="channel-table"
        size="mini"
      >
        <el-table-column
          prop="data"
          label="封面">
        </el-table-column>
        <el-table-column
          prop="title"
          label="標題">
        </el-table-column>
        <el-table-column
          label="狀態">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status === 0">草稿</el-tag>
            <el-tag v-if="scope.row.status === 1">待審核</el-tag>
            <el-tag v-if="scope.row.status === 2">審核通過</el-tag>
            <el-tag v-if="scope.row.status === 3">審核失敗</el-tag>
            <el-tag v-if="scope.row.status === 4">已刪除</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="pubdate"
          label="發佈日期">
        </el-table-column>
        <el-table-column
          label="操作">
          <template>
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              circle
            ></el-button>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              circle
            ></el-button>
          </template>
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
import { getArticles } from '@/api/article'

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
      articles: [] // 文章數據列表
    }
  },
  computed: {},
  watch: {},
  created () {
    // 當組件初始化好, 即調用loadArticles(),發送請求 獲取文章數據列表
    this.loadArticles()
  },
  mounted () {},
  methods: {
    loadArticles () {
      getArticles().then(res => {
        console.log(res)
        this.articles = res.data.data.results
      })
    },
    onSubmit () {
      console.log('submit')
    }
  }
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
