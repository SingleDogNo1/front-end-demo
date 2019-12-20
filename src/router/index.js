import Layout from '@/layout'

import notFound from './404'
import htmlRouter from './htmlPart'
import cssRouter from './cssPart'
import jsRouter from './jsPart'
import pluginsRouter from './pluginsPart'

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
        children: [...htmlRouter, ...cssRouter, ...jsRouter, ...pluginsRouter]
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
