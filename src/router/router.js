import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main'
import Posts from '@/pages/Posts'
import PostId from '@/pages/PostId'
import About from '@/pages/About'
import PostsWithStore from '@/pages/PostsWithStore'
import PostsWithComposition from '@/pages/PostsWithComposition'
import PostsSetup from '@/pages/PostsSetup'


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
  },
  {
    path: '/store',
    component: PostsWithStore
  },
  {
    path: '/composition',
    component: PostsWithComposition
  },
  {
    path: '/setup',
    component: PostsSetup
  }
]


const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
