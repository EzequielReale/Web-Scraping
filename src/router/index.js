import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from "@auth0/auth0-vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: authGuard,
      component: () => import('../views/HomeView.vue')
    },
    {
      path : '/website/new',
      name: 'website-new',
      beforeEnter: authGuard,
      component: () => import('../views/CreateWebsiteView.vue')
    },
    {
      path: '/website/:id/edit',
      name: 'website-edit',
      beforeEnter: authGuard,
      component: () => import('../views/EditWebsiteView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
