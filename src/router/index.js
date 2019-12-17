import Layout from '@/layout'

import notFound from './404'
import cssRouter from './cssPart'
import jsRouter from './jsPart'
import allRouter from './all'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        redirect: 'home/css-test',
        component: () => import(/* webpackChunkName: 'home' */ '@/views/Home'),
        children: [...cssRouter, ...jsRouter, ...allRouter]
      }
    ]
  },
  ...notFound
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
