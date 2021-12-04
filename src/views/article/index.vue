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
          <el-radio-group v-model="status">
            <!-- el-radio 默認把label作為 文本和選中之后的value值 -->
            <el-radio :label="null">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待審核</el-radio>
            <el-radio :label="2">審核通過</el-radio>
            <el-radio :label="3">審核失敗</el-radio>
            <el-radio :label="4">已刪除</el-radio>
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
        根據篩選條件，總共查詢到 {{ totalCount }} 條結果:
      </div>

      <!-- 展示所有文章 操作步驟 -->
      <!-- 1. 找到數據接口 -->
      <!-- 2. 封裝請求方法 -->
      <!-- 3. 在組件中初始調用 獲取數據 -->
      <!-- 4. 把數據綁定到模板中 -->

      <!-- 篩選結果展示 數據列表 -->
      <!-- (table組件 使用方式) -->
      <!-- 1. 把需要展示的數據列表(數組) 綁定給table組件的data屬性 -->
      <!--   table組件內部 會自動遍歷 -->
      <!-- 2. 設計表格列 el-table-column -->
      <!--   prop:  數據字段, 默認只能展示 普通文本 -->
      <!--   label: 列的標題 -->
      <!--   width: 列的寬度 -->
      <!-- 3. 如果需要展示 普通文本以外的其它內容 -->
      <!--   例如:  展示圖片，放一個按鈕，放一個標籤 ... -->
      <!--   就需要透過自定義列模板來完成 -->
      <!--   使用方式: 把需要自定義的內容 放到 template裡面 -->
      <!-- 4. 如果需要在自定義列模板中 獲取當前遍歷項數據 -->
      <!--   就必須在 template上聲明 slot-scope="scope" -->
      <el-table
        :data="articles"
        stripe
        style="width: 100%"
        class="channel-table"
        size="mini"
      >
        <el-table-column
          prop="data"
          label="封面"
        >
        </el-table-column>
        <el-table-column
          prop="title"
          label="標題"
        >
        </el-table-column>
        <el-table-column
          label="狀態"
        >
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status === 0" type="waring" >草稿</el-tag>
            <el-tag v-if="scope.row.status === 1" type="waring" >待審核</el-tag>
            <el-tag v-if="scope.row.status === 2" type="waring" >審核通過</el-tag>
            <el-tag v-if="scope.row.status === 3" type="waring" >審核失敗</el-tag>
            <el-tag v-if="scope.row.status === 4" type="waring" >已刪除</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="pubdate"
          label="發佈日期"
        >
        </el-table-column>
        <el-table-column
          label="操作"
        >
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
        :total="totalCount"
        @current-change="onCurrentChange"
        :page-size="pageSize"
      />
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
      articles: [], // 文章數據列表
      articleStatus: [
        { status: 0, text: '草稿', type: 'info' },
        { status: 1, text: '待審核', type: '' },
        { status: 2, text: '審核通過', type: 'success' },
        { status: 3, text: '審核失敗', type: 'warning' },
        { status: 4, text: '已刪除', type: 'danger' }
      ],
      totalCount: 0, // 總數據條數
      pageSize: 10, // 每頁數據條數
      status: null // 目標查詢的文章之狀態, 不傳就是選中全部
    }
  },
  computed: {},
  watch: {},
  created () {
    // 當組件初始化好, 即調用loadArticles(),發送請求 獲取文章數據列表
    this.loadArticles(1)
  },
  mounted () {},
  methods: {
    loadArticles (page = 1) {
      getArticles({
        page: page,
        per_page: this.pageSize,
        status: this.status
      }).then(res => {
        console.log('內容管理的文章數據', res)
        const { results, total_count: totalCount } = res.data.data
        this.articles = results
        this.totalCount = totalCount
      })
    },
    onSubmit () {
      // console.log('submit')
      this.loadArticles(1)
    },
    onCurrentChange (page) {
      console.log('切換到第', page, '頁')
      this.loadArticles(page)
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
