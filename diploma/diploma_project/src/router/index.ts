import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/UserLogin.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/UserRegister.vue')
    },
    {
      path: '/updatepwd',
      name: 'updatepwd',
      component: () => import('../views/Updatepwd.vue')
    },
    {
      path: '/',
      name: 'index',
      component: () => import('../views/Index.vue')
    },
    {
      path: '/graduationindex',
      name: 'graduationindex',
      component: () => import('../views/Graduationindex.vue'),
      children: [{
        path: 'graduation',
        name: 'graduation',
        component: () => import('../views/Graduation.vue')
      },
      {
        path: 'campusadvise',
        name: 'campusadvise',
        component: () => import('../views/Campusadvise.vue')
      },
      {
        path: 'match',
        name: 'match',
        component: () => import('../views/Match.vue')
      },
      {
        path: 'compensation',
        name: 'compensation',
        component: () => import('../views/compensation.vue')
      },
      {
        path: 'ashore',
        name: 'ashore',
        component: () => import('../views/ashore.vue')
      },
      {
        path: 'postgraduate',
        name: 'postgraduate',
        component: () => import('../views/postgraduate.vue')
      },
      ]
    },
   
    
    {
      path: '/organization',
      name: 'organization',
      component: () => import('../views/Organization.vue')
    },
    {
      path: '/club',
      name: 'club',
      component: () => import('../views/Organizationtwo.vue')
    },
    {
      path: '/exp',
      name: 'exp',
      component: () => import('../views/Expsharing.vue')
    },
    {
      path: '/publish',
      name: 'publish',
      component: () => import('../views/Publish.vue')
    },
    {
      path: '/personage',
      name: 'personage',
      component: () => import('../views/Personage.vue')
    },

  ]
})

export default router
