import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 1000,
});

// 获取待审核数据
export const getAudits = (status) => {
  return api.get(`/college-registration-audit/${status}`);
};

// 更新审核状态（通过/拒绝）
export const updateAuditStatus = (id, status) => {
  return api.put(`/college-registration-audit/${id}/${status}`);
};
