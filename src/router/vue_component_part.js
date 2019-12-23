const VUE_COMPONENT_ROUTER = [
  {
    path: 'grid',
    name: 'draggableGrid',
    component: () => import(/* webpackChunkName: 'draggableGrid' */ '@/views/DraggableGrid')
  },
  {
    path: 'masonry',
    name: 'masonry',
    component: () => import(/* webpackChunkName: 'masonry' */ '@/views/Masonry')
  },
  {
    path: 'isotope',
    name: 'isotope',
    component: () => import(/* webpackChunkName: 'isotope' */ '@/views/Isotope')
  }
]
export default VUE_COMPONENT_ROUTER
