import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/Index.vue'),
      meta: {
        layout: 'site',
      }
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('@/views/Menu.vue'),
      meta: {
        layout: 'site'
      }
    },
    {
      path: '/booths',
      name: 'booths',
      component: () => import('@/views/Booths.vue'),
      meta: {
        layout: 'site'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue'),
      meta: {
        layout: 'site'
      }
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('@/views/Post.vue'),
      meta: {
        layout: 'blog'
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/Blog.vue'),
      meta: {
        layout: 'blog'
      }
    },
  ]
})

export default router
