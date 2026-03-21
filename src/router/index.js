import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/pages/LoginPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import ChatPage from '@/pages/ChatPage.vue'

// Define routes
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/',
    name: 'Chat',
    component: ChatPage
  }
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router