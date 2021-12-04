<template>
  <div class="image-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <!-- 麵包屑 路徑導航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>素材管理</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- /麵包屑 路徑導航 -->
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div class="action-head">
        <el-radio-group v-model="radio1" size="mini">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="收藏"></el-radio-button>
        </el-radio-group>
        <el-button size="mini" type="success">上傳素材</el-button>
      </div>
      <el-row :gutter="20">
        <el-col
          :xs="8" :sm="6" :md="4" :lg="3" :xl="2"
          v-for="(img, index) in images"
          :key="index"
        >
              <el-image
                style="height: 100px"
                :src="img.url"
                fit="cover"
              ></el-image>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { getImages } from '@/api/image'

export default {
  name: 'ImageIndex',
  components: {},
  props: {},
  data () {
    return {
      radio1: '全部',
      images: [] // 圖片素材列表
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadImages()
  },
  mounted () {},
  methods: {
    loadImages () {
      getImages().then(res => {
        console.log('素材管理的圖片素材列表數據', res)
        this.images = res.data.data.results
      })
    }

  }
}
</script>

<style scoped lang="less">
.action-head {
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
</style>
