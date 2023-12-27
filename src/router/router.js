import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main'
import Posts from '@/pages/Posts'
import PostId from '@/pages/PostId'
import About from '@/pages/About'


const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: Posts
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/posts/:id',
    component: PostId
  }
]


const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
