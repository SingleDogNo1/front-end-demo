const cssRouter = [
  {
    path: 'css-test',
    name: 'cssTest',
    component: () => import(/* webpackChunkName: 'cssTest' */ '@/views/CssTest')
  },
  {
    path: 'cube',
    name: 'cube',
    component: () => import(/* webpackChunkName: 'cube' */ '@/views/Cube')
  },
  {
    path: 'css-filter',
    name: 'cssFilter',
    component: () => import(/* webpackChunkName: 'css-filter' */ '@/views/CssFilter')
  },
  {
    path: 'hexagon',
    name: 'hexagon',
    component: () => import(/* webpackChunkName: 'hexagon' */ '@/views/Hexagon')
  },
  {
    path: 'flip',
    name: 'cssFlip',
    component: () => import(/* webpackChunkName: 'flip' */ '@/views/CssFlip')
  },
  {
    path: 'loading',
    name: 'loading',
    component: () => import(/* webpackChunkName: 'loading' */ '@/views/Loading')
  },
  {
    path: 'fan-shaped-menu',
    name: 'FanShapedMenu',
    component: () => import(/* webpackChunkName: 'FanShapedMenu' */ '@/views/FanShapedMenu')
  },
  {
    path: 'font-animate',
    name: 'fontAnimate',
    component: () => import(/* webpackChunkName: 'fontAnimate' */ '@/views/FontAnimate')
  },
  {
    path: 'taiji',
    name: 'TaiJi',
    component: () => import(/* webpackChunkName: 'taiji */ '@/views/TaiJi')
  }
]
export default cssRouter
