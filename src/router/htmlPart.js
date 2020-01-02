const htmlRouter = [
  {
    path: 'draggable',
    name: 'html5Draggable',
    component: () => import(/* webpackChunkName: 'draggable' */ '@/views/HTML5Draggable')
  },
  {
    path: 'svg-test',
    name: 'svgTest',
    component: () => import(/* webpackChunkName: 'svgTest' */ '@/views/SvgTest')
  }
]
export default htmlRouter
