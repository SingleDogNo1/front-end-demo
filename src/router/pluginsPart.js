const PLUGINS_ROUTER = [
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
  },
  {
    path: 'calendar',
    name: 'calendar',
    component: () => import(/* webpackChunkName: 'calendar' */ '@/views/Calendar')
  }
]
export default PLUGINS_ROUTER
