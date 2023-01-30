import { createRouter, createWebHistory } from 'vue-router'
import sobre from '@/components/sobre.vue'
import habilidades from '@/components/habilidades.vue'

const routes = [
  {
    path: '/',
    name: 'sobre',
    component: sobre
  },
  {
    path: '/habilidadesMe',
    name: 'hablidades',
    component: habilidades
  },
  {
    path: '/experiencias',
    name: 'experiencias',
    // component: experiencias
  },
  {
    path: '/projetos',
    name: 'projetos',
    // component: projetos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
