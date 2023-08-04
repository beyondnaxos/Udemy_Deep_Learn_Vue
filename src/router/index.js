import { createRouter, createWebHistory } from 'vue-router'
import TheQuiz from '../views/TheQuiz.vue'
import TheNote from '../views/TheNote.vue'
import TheCounter from '../views/TheCounter.vue'
import TheQuestionContainer from '../views/TheQuestionContainer.vue'
import The404 from '../views/The404.vue'
import TheMovies from '../views/TheMovies.vue'  


const routes = [
  {
    path: '/',
    name: 'Quiz',
    component: TheQuiz,
  },
  {
    path: '/quiz', 
    redirect: '/'
  },
  {
    path: '/note',
    name: 'Note',
    component: TheNote,
  },
  {
    path: '/counter',
    name: 'Counter',
    component: TheCounter,
  },
  {
    path: '/:id',
    name: 'questions',
    component: TheQuestionContainer,
  }, 
  {
    path: '/:catchall(.*)*',
    name: 'not-found',
    component: The404,
  },
  {
    path: '/movies',
    name: 'movies',
    component: TheMovies,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
