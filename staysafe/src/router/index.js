import Vue from 'vue'
import VueRouter from 'vue-router'
import Stayhome from '../views/Stayhome.vue'
import Prof from '../views/Prof.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Stayhome',
    component: Stayhome
  },
  {
    path: '/Profissionais',
    name: 'Prof',
    component: Prof
  },
]

const router = new VueRouter({
  routes
})

export default router
