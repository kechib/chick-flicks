import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MovieFlicks from '../views/MovieFlicks.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'Movie Flicks',
    component: MovieFlicks
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
