import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Login from '../views/login.vue'
import Index from '../views/index.vue'
import Admin from '../views/admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index_page',
    component: Index
  },
  {
    path: '/home',
    name: 'home_page',
    component: Home
  }
  , {
    path: '/login',
    name: 'login_page',
    component: Login
  },{
    path: '/admin',
    name: 'admin_page',
    component: Admin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
