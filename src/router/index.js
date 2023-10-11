import { createRouter, createWebHistory } from 'vue-router'
import Getstart from '@/views/Getstart.vue'
import Grid from '@/views/Grid.vue'
import Loading from '@/views/Loading.vue'
import Login from '../views/user/Login.vue'
import SignUp from '../views/user/SignUp.vue'
import CssComponents from '@/views/css'
import CssChildComponents from '@/views/css/CssChild.vue'

const routes = [
  {
    path: '/',
    name: 'getstart',
    component: Getstart
  },
  {
    path: '/grid',
    name: 'grid',
    component: Grid
  },
  {
    path: '/css',
    name: 'css',
    redirect: '/css/flex',
    component: CssComponents,
    children : [
      {
        path : ':cssName',
        name : 'cssName',
        component : CssChildComponents,
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    redirect: '/user/login',
    children : [
      {
        path : 'login',
        name : 'user_login',
        component : Login,
      },
      {
        path : 'signUp',
        name : 'user_signup',
        component : SignUp,
      }
    ]
  },
  {
    path: '/loading',
    name: 'loading',
    component: Loading
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
