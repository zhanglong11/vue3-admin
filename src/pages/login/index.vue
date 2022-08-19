<template>
  <div class="container">
    <div class="form-container">
      <el-form :rules="rules" label-width="80px">
        <el-form-item label="用户名" prop="mobile">
          <el-input type="text" v-model.trim="form.mobile" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model.trim="form.password" />
        </el-form-item>
      </el-form>
      <el-button @click="login">登录</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import Api from '@/api/user'
import { userEncryption } from '@/utils/jsencrypt'
import { setToken } from '@/utils/auth'

const { push } = useRouter()
const rules = ref({
  mobile: [{ required: 'true', message: '账户不能为空', trigger: 'blur' }],
  password: [{ required: 'true', message: '密码不能为空', trigger: 'blur' }]
})
const form = ref({
  mobile: '15800000001',
  password: '123456'
})

const login = async () => {
  const loginParams = userEncryption({
    loginName: form.value.mobile,
    password: form.value.password
  })
  const res = await Api.login(loginParams)
  setToken(res.data.data)
  push('home')
}
</script>

<style scoped lang="less">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .form-container {
    width: 500px;
    height: 300px;
    margin-top: -50px;
    padding: 20px;
    text-align: center;
    background: #2b2f3a;
  }
}
</style>
