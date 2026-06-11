import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from "@auth0/auth0-vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/websites',
      name: 'websites',
      beforeEnter: authGuard,
      component: () => import('../views/WebsitesView.vue')
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
      path: '/website/:id/pages',
      name: 'website-pages',
      beforeEnter: authGuard,
      component: () => import('../views/PagesView.vue')
    },
    {
      path: '/website/:id/errors',
      name: 'website-errors',
      beforeEnter: authGuard,
      component: () => import('../views/ErrorsView.vue')
    },
    {
      path: '/user',
      name: 'user',
      beforeEnter: authGuard,
      component: () => import('../views/UserProfileView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
