<template>
    <div class="admin-container">
      <!-- 左侧导航栏 -->
      <el-col :span="4" class="sidebar">
        <el-menu
          default-active="college_registration_audit"
          class="admin-menu"
          @select="handleMenuSelect"
        >
          <el-menu-item index="college_registration_audit">学院注册审核</el-menu-item>
          <el-menu-item index="college_add_delete">学院添加删除</el-menu-item>
          <el-menu-item index="admin_add_delete">二级管理员管理</el-menu-item>
          <el-menu-item index="carousel">网站形象管理</el-menu-item>
          <el-menu-item index="activity_type">活动类型管理</el-menu-item>
          <el-menu-item index="problem">常见问题管理</el-menu-item>
        </el-menu>
      </el-col>
  
      <!-- 右侧内容区域 -->
      <el-col :span="20" class="content">
        <router-view></router-view> <!-- 动态渲染不同的页面 -->
      </el-col>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleMenuSelect(index) {
        this.$router.push({ name: index }); // 路由跳转到对应的功能页面
      }
    }
  };
  </script>
  
  <style scoped>
  .admin-container {
    display: flex;
    height: 100vh;
  }
  
  .sidebar {
    background-color: #f4f4f4;
    padding: 20px;
  }
  
  .content {
    padding: 20px;
  }
  </style>
  