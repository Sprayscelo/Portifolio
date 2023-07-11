import { createRouter, createWebHistory } from 'vue-router'
import sobre from '@/components/sobre.vue'
import habilidades from '@/components/habilidades.vue'
import projetos from '@/components/projetos.vue'
import pcBuilderAi from '@/components/pcBuilderAi/pcBuilderAi.vue'

const routes = [
  {
    path: '/',
    name: 'sobre',
    component: sobre
  },
  {
    path: '/habilidades',
    name: 'habilidades',
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
    component: projetos,
    children: [
      {
        path: 'pcBuilderAi',
        name: 'pcBuilderAi',
        component: pcBuilderAi,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
