const jsRouter = [
  {
    path: 'calculator',
    name: 'calculator',
    component: () => import(/* webpackChunkName: 'calculator' */ '@/views/Calculator')
  }
]
export default jsRouter
