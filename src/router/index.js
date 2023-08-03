import { createRouter, createWebHistory } from 'vue-router'
import TheQuiz from '../views/TheQuiz.vue'
import TheNote from '../views/TheNote.vue'
import TheCounter from '../components/TheCounter.vue'
import TheQuestion from '../views/TheQuestion.vue'

const routes = [
  {
    path: '/',
    name: 'Quiz',
    component: TheQuiz,
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
    component: TheQuestion,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
