import Vue from 'vue'
import VueRouter from 'vue-router'
import Stayhome from '../views/Stayhome.vue'
import Prof from '../views/Prof.vue'
import Contato from '../views/Contato.vue'
import Cadastro from '../views/Cadastro.vue'
import Objetivo from '../views/Objetivo.vue'
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
  {
    path: '/Contato',
    name: 'Contato',
    component: Contato
  },
  {
    path: '/Cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/Objetivo',
    name: 'Objetivo',
    component: Objetivo
  },
]

const router = new VueRouter({
  routes
})

export default router
