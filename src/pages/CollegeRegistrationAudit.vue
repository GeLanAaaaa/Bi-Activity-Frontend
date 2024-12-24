<template>
  <div>
    <h2>学院注册审核</h2>
    <!-- 学院添加删除的功能实现 -->
    <el-tabs v-model="activeTab" @tab-click="handleTabChange">
      <el-tab-pane label="待审核" name="pending">
        <el-table :data="pendingAudits" style="width: 100%">
          <el-table-column prop="college.name" label="学院名称"></el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
        </el-table>
        <div class="button-group">
          <el-button @click="approveSelected" :disabled="!selectedId" class="approve-button">通过</el-button>
          <el-button @click="rejectSelected" :disabled="!selectedId" class="reject-button">拒绝</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已通过" name="approved">
        <el-table :data="approvedAudits" style="width: 100%">
          <el-table-column prop="college.name" label="学院名称"></el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="未通过" name="rejected">
        <el-table :data="rejectedAudits" style="width: 100%">
          <el-table-column prop="college.name" label="学院名称"></el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getAudits, updateAuditStatus } from '@/api/collegeRegistrationAudit';

export default {
  name: 'CollegeRegistrationAudit',
  data() {
    return {
      activeTab: 'pending',
      pendingAudits: [],
      approvedAudits: [],
      rejectedAudits: [],
      selectedId: null,
    };
  },
  methods: {
    handleTabChange(tab) {
      this.fetchAudits(tab.name);
    },
    async fetchAudits(status) {
      const response = await getAudits(status);
      if (status === 'pending') {
        this.pendingAudits = response.data;
      } else if (status === 'approved') {
        this.approvedAudits = response.data;
      } else if (status === 'rejected') {
        this.rejectedAudits = response.data;
      }
    },
    async approveSelected() {
      if (this.selectedId) {
        await updateAuditStatus(this.selectedId, 'approve');
        this.fetchAudits('pending');
      }
    },
    async rejectSelected() {
      if (this.selectedId) {
        await updateAuditStatus(this.selectedId, 'reject');
        this.fetchAudits('pending');
      }
    },
  },
  created() {
    this.fetchAudits('pending');
  },
};
</script>

<style scoped>
/* 表格区域 */
.el-table {
  margin-bottom: 20px;
}

/* 按钮区域 */
.button-group {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

/* 通过按钮 */
.approve-button {
  background-color: #409eff; /* 蓝色背景 */
  color: white; /* 白色字体 */
  border-color: #409eff; /* 边框色与背景色一致 */
}

.approve-button:hover {
  background-color: #66b1ff; /* 鼠标悬停时变浅蓝 */
  border-color: #66b1ff;
}

/* 拒绝按钮 */
.reject-button {
  background-color: #f56c6c; /* 红色背景 */
  color: white; /* 白色字体 */
  border-color: #f56c6c; /* 边框色与背景色一致 */
}

.reject-button:hover {
  background-color: #ff8585; /* 鼠标悬停时变浅红 */
  border-color: #ff8585;
}

/* 选中的tab颜色 */
.el-tabs__item.is-active {
  color: #409eff;
}

/* 表格头部背景 */
.el-table th {
  background-color: #f0f9ff; /* 浅蓝色背景 */
  color: #409eff; /* 蓝色文字 */
}

/* 表格内容 */
.el-table td {
  color: #333; /* 字体颜色 */
}

/* 标签切换区 */
.el-tabs__header {
  background-color: #ffffff;
  border-bottom: 2px solid #f0f0f0;
}
</style>
