import Layout from '@/layout'

import notFound from './404'

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
        redirect: 'home/cube',
        component: () => import(/* webpackChunkName: 'home' */ '@/views/Home'),
        children: [
          {
            path: 'digital-clock',
            name: 'DigitalClock',
            component: () => import(/* Digital clock */ '@/views/DigitalClock')
          },
          {
            path: 'cube',
            name: 'cube',
            component: () => import(/* Digital clock */ '@/views/Cube')
          },
          {
            path: 'animation-text',
            name: 'cube',
            component: () => import(/* Digital clock */ '@/views/Cube')
          }
        ]
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
