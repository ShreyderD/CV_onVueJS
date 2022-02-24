import { createRouter, createWebHistory } from 'vue-router'
import KeySkills from '../views/KeySkills.vue'
import Experience from '../views/Experience.vue'
import Education from '../views/Education.vue'
import Portfolio from '../views/Portfolio.vue'
import Page404 from '../views/Page404.vue'


const routes = [
  {
    path: '/keyskills/:id',
    name: 'KeySkills',
    component: KeySkills
  },
  {
    path: '/experience/:id',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/education/:id',
    name: 'Education',
    component: Education
  },
  {
    path: '/portfolio/:id',
    name: 'Portfolio',
    component: Portfolio
  },
  //Catch all 404
  {
    path: '/:catchAll(.*)',
    name: 'Page404',
    component: Page404
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
