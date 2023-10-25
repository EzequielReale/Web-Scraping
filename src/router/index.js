import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path : '/website/new',
      name: 'website-new',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/website/:id',
      name: 'website-show',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/website/:id/edit',
      name: 'website-edit',
      component: () => import('../views/AboutView.vue')
    }
    
  ]
})

export default router
