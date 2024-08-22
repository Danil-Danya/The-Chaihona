import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      if (savedPosition) {
        resolve(savedPosition);
      } else if (to.hash) {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth'
          });
        }, 300); 
      } else if (to.path !== from.path) {
        resolve({ top: 0 });
      } else {
        resolve(false);
      }
    });
  },

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
      path: '/:pathName(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
      meta: {
        layout: 'blog'
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
      path: '/post/:unical_url',
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

export default router;