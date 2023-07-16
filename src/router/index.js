import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviePage from '../views/MoviePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // redirect: '/movie/1'
    },
    {
      path: "/movie/:id",
      name: "MovieDetails",
      component: MoviePage,
    },
  ]
})

export default router
