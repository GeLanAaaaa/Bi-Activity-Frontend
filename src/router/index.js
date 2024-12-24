import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/HomePage.vue'),
    meta:{requiresAuth: true}
  },
  {
    path: "/login", 
    component: () => import("@/pages/LoginPage.vue"),
    children: [ // 子路由
      {
        path: '',
        component: import("@/pages/login/LoginDefaultPage.vue")
      },
      {
        path: 'student', // 学生登录
        component: import("@/pages/login/StudentLoginPage.vue")
      },
      {
        path: 'college', // 学院登录
        component: import("@/pages/login/CollegeLoginPage.vue")
      }
    ]
  },
  {
    path: "/register", 
    component: () => import("@/pages/RegisterPage.vue"),
    children: [ // 子路由
      {
        path: '',
        component: import("@/pages/register/RegisterDefaultPage.vue")
      },
      {
        path: 'student', // 学生注册
        component: import("@/pages/register/StudentRegisterPage.vue")
      },
      {
        path: 'college', // 学院注册
        component: import("@/pages/register/CollegeRegisterPage.vue")
      }
    ]
  },
  {
    path: "/",
    name: 'AdminHome',
    component: () => import("@/pages/AdminHome.vue"),
    children: [
      { path: 'college_registration_audit', name: 'college_registration_audit', component: () => import("@/pages/CollegeRegistrationAudit.vue") },
      { path: 'college_add_delete', name: 'college_add_delete', component: () => import("@/pages/CollegeAddDelete.vue") },
      { path: 'admin_add_delete', name: 'admin_add_delete', component: () => import("@/pages/AdminAddDelete.vue") },
      { path: 'carousel', name: 'carousel', component: () => import("@/pages/Carousel.vue") },
      { path: 'activity_type', name: 'activity_type', component: () => import("@/pages/ActivityType.vue") },
      { path: 'problem', name: 'problem', component: () => import("@/pages/Problem.vue") }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
