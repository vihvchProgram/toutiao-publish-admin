<template>
  <div class="login-container">
    <el-form ref="form" :model="user" label-width="80px">
      <el-form-item label="手機號">
        <el-input v-model="user.mobile"></el-input>
      </el-form-item>
      <el-form-item label="驗證碼">
        <el-input v-model="user.code"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登入</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手機號
        code: '' // 驗證碼
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style scoped lang="less"></style>
