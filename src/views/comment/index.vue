<template>
  <div class="comment-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <!-- 麵包屑 路徑導航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>評論管理</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- /麵包屑 路徑導航 -->
      </div>

      <!--
        1. 把需要展示的數據列表 綁定給表格的data
        2. 設計表格列
        3. 給表格列 綁定要渲染的數據字段
          如果需要展示 普通文本以外的其它內容,
          就需要透過自定義列模板來完成 (自定義表格列)
      -->
      <el-table
        :data="articles"
        stripe
        style="width: 100%"
        class="comment-table"
        size="mini"
      >
        <el-table-column
          prop="title"
          label="標題"
        >
        </el-table-column>
        <el-table-column
          prop="total_comment_count"
          label="總評論數"
        >
        </el-table-column>
        <el-table-column
          prop="fans_comment_count"
          label="粉絲評論數"
        >
        </el-table-column>
        <el-table-column
          label="評論狀態"
        >
          <template slot-scope="scope">
            {{ scope.row.comment_status ? '正常' : '關閉' }}
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
        >
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.comment_status"
              active-color="#13ce66"
              inactive-color="#ff4949"
              :disabled="scope.row.statusDisabled"
              @change="(onStatusChange(scope.row))"
            >
            </el-switch>
          </template>
        </el-table-column>
      </el-table>

      <!--
        1. 綁定頁碼
        2. 綁定每頁大小
      -->
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      />
    </el-card>
  </div>
</template>

<script>
import {
  getArticles,
  updateCommentStatus
} from '@/api/article'

export default {
  name: 'CommentIndex',
  components: {},
  props: {},
  data () {
    return {
      articles: [], // 文章數據列表
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadArticles()
  },
  mounted () {},
  methods: {
    loadArticles () {
      getArticles({
        response_type: 'comment'
      }).then(res => {
        console.log('評論管理的文章數據', res)
        this.articles = res.data.data.results
      })
    },
    onStatusChange (article) {
      // 向後端接口 發送請求, 修改數據
      updateCommentStatus(article.id.toString(), article.updateCommentStatus).then(res => {
        // 啟用開關
        article.statusDisabled = false
        this.$message({
          type: 'success',
          message: article.commet_status ? '開啟文章評論狀態' : '關閉文章評論狀態'
        })
      })
    },
    handleSizeChange () {},
    handleCurrentChange () {}
  }
}
</script>

<style scoped lang="less">
.comment-table {
  margin-bottom: 30px;
}
</style>
