import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:"/shou",
    component: Home,
    children:[ {
      path: '/about',
      name: 'about',
     
      component: () => import( '../views/About.vue')
    }, {
      path: '/shou',
      name: 'shou',
     
      component: () => import( '../views/Shou.vue')
    }]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
