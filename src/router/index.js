import { createRouter, createWebHistory } from 'vue-router'
import KeySkills from '../views/KeySkills.vue'
import Experience from '../views/Experience.vue'
import Education from '../views/Education.vue'
import Portfolio from '../views/Portfolio.vue'

const routes = [
  {
    path: '/',
    name: 'KeySkills',
    component: KeySkills,
    props: false
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  }
  // {
    // path: '/about',
    // name: 'About',
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
