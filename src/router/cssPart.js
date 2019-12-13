const cssRouter = [
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
  }
]
export default cssRouter
