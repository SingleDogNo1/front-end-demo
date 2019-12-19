const CSS_AND_JS_ROUTER = [
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
  }
]
export default CSS_AND_JS_ROUTER
