import Vue from 'vue'
import VueRouter from 'vue-router'

import globalAuthGuard from '../guards/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/movies'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/movies',
    name: 'movies',
    meta: { authRequired: true },
    component: () => import('../components/MovieList.vue')
  },
  {
    path: '/movies/:id',
    name: 'movie',
    meta: { authRequired: true },
    component: () => import('../components/Movie.vue')
  },
  {
    path: '/add',
    name: 'add',
    meta: { authRequired: true },
    component: () => import('../components/AddMovie.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: { guestRequired: true },
    component: () => import('../components/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: { guestRequired: true },
    component: () => import('../components/Login.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(globalAuthGuard);

export default router
