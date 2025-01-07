
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
// { path: "/", component: import("@/components/index.vue")},

// { path: '/about', component: import("@/components/About.vue")},
{path: "/about", component: import("@/components/About.vue")},
{
  path: '/',
  name: 'index',
  component: () => import('@/components/index.vue')
},
{
  path: '/about/:id',
  name: 'About',
  props: true, 
  component: () => import('@/components/About.vue')
},
{
  path: '/videoplayer/:id',
  name: 'videos',
  props: true, 
  component: () => import('@/components/videoplayer.vue')
}


]

export default createRouter({
  history: createWebHistory(),
  routes: routes
})