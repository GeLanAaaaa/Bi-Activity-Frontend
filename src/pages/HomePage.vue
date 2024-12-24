<template>
  <div id="homePage">
    <el-button
      type="primary"
      class="admin-button"
      @click="goToAdminPage"
    >
      管理员界面
    </el-button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToAdminPage = () => {
  router.push({ name: 'AdminHome' })
}
</script>

<style scoped>
.admin-button {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 100;
}
</style>