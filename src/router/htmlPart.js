const htmlRouter = [
  {
    path: 'draggable',
    name: 'html5Draggable',
    component: () => import(/* webpackChunkName: 'draggable' */ '@/views/HTML5Draggable')
  }
]
export default htmlRouter
