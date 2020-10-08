const jsRouter = [
  {
    path: 'calculator',
    name: 'calculator',
    component: () => import(/* webpackChunkName: 'calculator' */ '@/views/Calculator')
  },
  {
    path: 'digital-clock',
    name: 'DigitalClock',
    component: () => import(/* webpackChunkName: 'clock' */ '@/views/DigitalClock')
  },
  {
    path: 'particle-clock',
    name: 'ParticleClock',
    component: () => import(/* webpackChunkName: 'ParticleClock' */ '@/views/ParticleClock')
  },
  {
    path: 'animation-text',
    name: 'animationText',
    component: () => import(/* webpackChunkName: 'animationText' */ '@/views/AnimationText')
  },
  {
    path: 'js-cube',
    name: 'jsCube',
    component: () => import(/* webpackChunkName: 'js-cube' */ '@/views/JSCube')
  },
  {
    path: 'direction-reveal',
    name: 'directionReveal',
    component: () => import(/* webpackChunkName: 'direction-reveal' */ '@/views/DirectionReveal')
  },
  {
    path: 'carousel',
    name: 'carousel',
    component: () => import(/* webpackChunkName: 'carousel' */ '@/views/Carousel')
  },
  {
    path: 'perspective',
    name: 'perspective',
    component: () => import(/* webpackChunkName: 'perspective' */ '@/views/Perspective')
  },
  {
    path: 'special-carousel',
    name: 'specialCarousel',
    component: () => import(/* webpackChunkName: 'specialCarousel' */ '@/views/SpecialCarousel')
  },
  {
    path: 'gallery',
    name: 'gallery',
    component: () => import(/* webpackChunkName: 'galleryA' */ '@/views/Gallery')
  }
]
export default jsRouter
