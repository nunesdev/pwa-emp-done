import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/videos/:slug',
      name: 'videos',
      props: true,
      component: () => import('./views/Videos.vue')
    },
    {
      path: '/videos',
      component: () => import('./views/Videos.vue'),
      redirect: '/videos/video-1',
      children: [
        {
          path: '/videos/:slug',
          name: 'videos',
          component: () => import('./views/Videos.vue'),
          props: true,
        }
      ],
    },
  ]
})
