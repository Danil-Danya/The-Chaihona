import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'login'
      }
    },
    {
      path: '/buths',
      name: 'buths',
      component: () => import('@/views/Buths.vue'),
      meta: {
        layout: 'view'
      }
    },
    {
      path: '/buths-create',
      name: 'buths-create',
      component: () => import('@/views/ButhsAdd.vue'),
      meta: {
        layout: 'create'
      }
    },
    {
      path: '/buths-edite/:id',
      name: 'buths-edite',
      component: () => import('@/views/ButhsEdite.vue'),
      meta: {
        layout: 'create'
      }
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/Product.vue'),
      meta: {
        layout: 'view'
      }
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('@/views/Blog.vue'),
      meta: {
        layout: 'view'
      }
    },
    {
      path: '/post-create',
      name: 'posts-create',
      component: () => import('@/views/BlogCreate.vue'),
      meta: {
        layout: 'create'
      }
    },
  ]
})

export default router
