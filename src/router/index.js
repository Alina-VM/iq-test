import { createRouter, createWebHistory } from 'vue-router'
import AppMain from '../views/main.vue'
import AppTest from '../views/test.vue'
import AppResultProcess from '../views/resultProcess.vue'
import AppFinish from '../views/finish.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppMain
  },
  {
    path: '/test/:id',
    name: 'test',
    component: AppTest
  },
  {
    path: '/processing',
    name: 'process-result',
    component: AppResultProcess
  },
  {
    path: '/finish',
    name: 'finish',
    component: AppFinish
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
