<template>
  <div class="carousel">
    <el-button-group class="ctrl-wrapper">
      <el-button @click="explode">爆炸</el-button>
      <el-button @click="tile">翻转</el-button>
      <el-button @click="bars">扭曲</el-button>
      <el-button @click="cube">立方体</el-button>
      <el-button @click="turn">翻页</el-button>
    </el-button-group>
    <div ref="wrapper" class="images" :style="background"></div>
  </div>
</template>

<script>
import { fx, Utils } from './utils'
export default {
  name: 'Carousel',
  components: {},
  data() {
    return {
      imagesList: [require('./images/1.jpg'), require('./images/2.jpg'), require('./images/3.jpg')],
      current: 0, // 当前激活的 index
      ready: true,
      width: '',
      height: '',
      imgWrapper: '',
      background: {
        backgroundImage: null,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }
    }
  },
  computed: {
    len() {
      return this.imagesList.length
    },
    next() {
      return (this.current + 1) % this.len
    }
  },
  watch: {},
  methods: {
    // 爆炸
    explode() {
      if (!this.ready) return
      this.ready = false
      const [R, C] = [4, 7]
      let [cw, ch] = [this.width / 2, this.height / 2]
      this.background.backgroundImage = `url(${this.imagesList[this.next]})`
      const aData = []
      let wait = R * C
      for (let i = 0; i < R; i++) {
        for (let j = 0, k = 0; j < C; j++, k++) {
          aData[i] = {
            left: (this.width * j) / C,
            top: (this.height * i) / R
          }
          const newDiv = document.createElement('div')
          newDiv.style.position = 'absolute'
          newDiv.style.width = Math.ceil(this.width / C) + 'px'
          newDiv.style.height = Math.ceil(this.height / R) + 'px'
          newDiv.style.background = `url(${this.imagesList[this.current]}) -${aData[i].left}px -${
            aData[i].top
          }px no-repeat`
          newDiv.style.left = aData[i].left + 'px'
          newDiv.style.top = aData[i].top + 'px'
          this.imgWrapper.appendChild(newDiv)
          let l =
            (aData[i].left + this.width / (2 * C) - cw) * Utils.rnd(2, 3) +
            cw -
            this.width / (2 * C)
          let t =
            (aData[i].top + this.height / (2 * R) - ch) * Utils.rnd(2, 3) +
            ch -
            this.height / (2 * R)
          const $this = this
          setTimeout(
            ((newDiv, l, t) => {
              return function() {
                fx.buffer(
                  newDiv,
                  {
                    left: newDiv.offsetLeft,
                    top: newDiv.offsetTop,
                    opacity: 100,
                    x: 0,
                    y: 0,
                    z: 0,
                    scale: 1,
                    a: 0
                  },
                  {
                    left: l,
                    top: t,
                    opacity: 0,
                    x: Utils.rnd(-180, 180),
                    y: Utils.rnd(-180, 180),
                    z: Utils.rnd(-180, 180),
                    scale: Utils.rnd(1.5, 3),
                    a: 1
                  },
                  function(now) {
                    this.style.left = now.left + 'px'
                    this.style.top = now.top + 'px'
                    this.style.opacity = now.opacity / 100
                    Utils.setStyle3(
                      newDiv,
                      'transform',
                      'perspective(500px) rotateX(' +
                        now.x +
                        'deg) rotateY(' +
                        now.y +
                        'deg) rotateZ(' +
                        now.z +
                        'deg) scale(' +
                        now.scale +
                        ')'
                    )
                  },
                  function() {
                    setTimeout(() => {
                      $this.imgWrapper.removeChild(newDiv)
                    }, 200)
                    if (--wait === 0) {
                      $this.ready = true
                      $this.current = $this.next
                    }
                  },
                  10
                )
              }
            })(newDiv, l, t),
            Utils.rnd(0, 200)
          )
        }
      }
    },
    // 翻转
    tile() {
      if (!this.ready) return
      this.ready = false
      const [R, C] = [3, 6]
      let wait = R * C
      let [dw, dh] = [Math.ceil(this.width / C), Math.ceil(this.height / R)]
      this.imgWrapper.style.background = 'none'
      for (let i = 0; i < C; i++) {
        for (let j = 0; j < R; j++) {
          let newDiv = document.createElement('div')
          let t = Math.ceil((this.height * j) / R)
          let l = Math.ceil((this.width * i) / C)
          Utils.setStyle(newDiv, {
            position: 'absolute',
            background: `url(${this.imagesList[this.current]}) -${l}px -${t}px no-repeat`,
            left: l + 'px',
            top: t + 'px',
            width: dw + 'px',
            height: dh + 'px'
          })
          const $this = this
          ;(function(newDiv, l, t) {
            newDiv.ch = false
            setTimeout(() => {
              fx.linear(
                newDiv,
                { y: 0 },
                { y: 180 },
                now => {
                  if (now.y > 90 && !newDiv.ch) {
                    newDiv.ch = true
                    newDiv.style.background = `url(${
                      $this.imagesList[$this.next]
                    }) -${l}px -${t}px no-repeat`
                  }
                  if (now.y > 90) {
                    Utils.setStyle3(
                      newDiv,
                      'transform',
                      'perspective(500px) rotateY(' + now.y + 'deg) scale(-1,1)'
                    )
                  } else {
                    Utils.setStyle3(
                      newDiv,
                      'transform',
                      'perspective(500px) rotateY(' + now.y + 'deg)'
                    )
                  }
                },
                () => {
                  if (--wait == 0) {
                    $this.ready = true
                    $this.current = $this.next
                  }
                },
                22
              )
            }, (i + j) * 200)
          })(newDiv, l, t)
          this.imgWrapper.appendChild(newDiv)
        }
      }
    },
    // 扭曲
    bars() {
      if (!this.ready) return
      const $this = this
      this.ready = false
      const C = 7
      let wait = C
      let dw = Math.ceil(this.width / C)
      this.imgWrapper.style.background = 'none'
      for (let i = 0; i < C; i++) {
        const newDiv = document.createElement('div')
        Utils.setStyle(newDiv, {
          width: dw + 'px',
          height: '100%',
          position: 'absolute',
          left: (this.width * i) / C + 'px',
          top: 0
        })
        Utils.setStyle3(newDiv, 'transformStyle', 'preserve-3d')
        Utils.setStyle3(newDiv, 'transform', 'perspective(1000px) rotateX(0deg)')
        ;(function(newDiv, i) {
          newDiv.style.zIndex = C / 2 - Math.abs(i - C / 2)
          setTimeout(() => {
            fx.buffer(
              newDiv,
              { a: 0, x: 0 },
              { a: 100, x: -90 },
              now => {
                Utils.setStyle3(
                  newDiv,
                  'transform',
                  `perspective(1000px) rotateY(${(3 * (i - C / 2) * (50 - Math.abs(now.a - 50))) /
                    50}deg) rotateX(${now.x}deg)`
                )
              },
              () => {
                if (--wait === 0) {
                  $this.ready = true
                }
                $this.current = $this.next
              },
              8
            )
          }, (i + 1) * 130)
        })(newDiv, i)
        newDiv.innerHTML = '<div></div><div></div><div></div><div></div>'
        let oNext = newDiv.getElementsByTagName('div')[0]
        let oNow = newDiv.getElementsByTagName('div')[1]
        let oBack = newDiv.getElementsByTagName('div')[2]
        let oBack2 = newDiv.getElementsByTagName('div')[3]
        Utils.setStyle([oNext, oNow, oBack, oBack2], {
          width: '100%',
          height: '100%',
          position: 'absolute',
          left: 0,
          top: 0
        })
        Utils.setStyle(oNext, {
          background: `url(${$this.imagesList[$this.next]}) ${(-$this.width * i) / C}px 0 no-repeat`
        })
        Utils.setStyle3(
          oNext,
          'transform',
          'scale3d(0.836,0.836,0.836) rotateX(90deg) translateZ(' + $this.height / 2 + 'px)'
        )
        Utils.setStyle(oNow, {
          background: `url(${$this.imagesList[$this.current]}) ${(-$this.width * i) /
            C}px 0 no-repeat`
        })
        Utils.setStyle3(
          oNow,
          'transform',
          'scale3d(0.834,0.834,0.834) rotateX(0deg) translateZ(' + $this.height / 2 + 'px)'
        )
        Utils.setStyle(oBack, {
          background: '#666'
        })
        Utils.setStyle3(
          oBack,
          'transform',
          'scale3d(0.834,0.834,0.834) rotateX(0deg) translateZ(-' + $this.height / 2 + 'px)'
        )
        Utils.setStyle(oBack2, {
          background: '#666'
        })
        Utils.setStyle3(
          oBack2,
          'transform',
          'scale3d(0.834,0.834,0.834) rotateX(90deg) translateZ(-' + $this.height / 2 + 'px)'
        )
        this.imgWrapper.appendChild(newDiv)
      }
    },
    // 立方体
    cube() {
      if (!this.ready) return
      const $this = this
      this.ready = false
      this.imgWrapper.style.background = 'none'
      Utils.setStyle3(this.imgWrapper, 'transformStyle', 'preserve-3d')
      Utils.setStyle3(this.imgWrapper, 'transform', 'perspective(1000px) rotateY(0deg)')
      var oNow = document.createElement('div')
      var oNext = document.createElement('div')
      Utils.setStyle([oNow, oNext], {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0
      })
      Utils.setStyle3(
        oNow,
        'transform',
        `scale3d(0.741,0.741,0.741) rotate3d(0,1,0,0deg) translate3d(0,0,${this.width / 2}px)`
      )
      Utils.setStyle3(
        oNext,
        'transform',
        `scale3d(0.741,0.741,0.741) rotate3d(0,1,0,90deg) translate3d(0,0,${this.width / 2}px)`
      )
      this.imgWrapper.appendChild(oNext)
      this.imgWrapper.appendChild(oNow)
      oNow.style.background = 'url(' + this.imagesList[this.current] + ') center no-repeat'
      oNext.style.background = 'url(' + this.imagesList[this.next] + ') center no-repeat'
      setTimeout(() => {
        fx.flex(
          $this.imgWrapper,
          { y: 0 },
          { y: -90 },
          now => {
            Utils.setStyle3(
              $this.imgWrapper,
              'transform',
              'perspective(1000px) rotateY(' + now.y + 'deg)'
            )
          },
          () => {
            const oDiv = $this.imgWrapper
            Utils.setStyle3(oDiv, 'transition', 'none')
            Utils.setStyle3(oDiv, 'transformStyle', 'flat')
            Utils.setStyle3(oDiv, 'transform', 'none')
            oDiv.innerHTML = ''
            oDiv.style.background = 'url(' + $this.imagesList[$this.next] + ') center no-repeat'
            $this.current = $this.next
            $this.ready = true
          },
          10,
          0.6
        )
      }, 0)
    },
    // 翻页
    turn() {
      if (!this.ready) return
      const $this = this
      this.ready = false
      this.imgWrapper.style.background = `url(${this.imagesList[this.next]}) center no-repeat`
      const oDivPage = document.createElement('div')
      Utils.setStyle(oDivPage, {
        position: 'absolute',
        background: `url(${this.imagesList[this.next]}) right no-repeat`,
        zIndex: 3,
        left: '50%',
        top: 0,
        width: '50%',
        height: '100%',
        overflow: 'hidden'
      })
      Utils.setStyle3(oDivPage, 'transform', 'perspective(1000px) rotateY(0deg)')
      Utils.setStyle3(oDivPage, 'transformOrigin', 'left')
      this.imgWrapper.appendChild(oDivPage)
      const oDivOld = document.createElement('div')
      Utils.setStyle(oDivOld, {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '50%',
        height: '100%',
        zIndex: 2,
        background: `url(${this.imagesList[this.current]}) left no-repeat`
      })
      this.imgWrapper.appendChild(oDivOld)
      var oDivShadow = document.createElement('div')
      Utils.setStyle(oDivShadow, {
        position: 'absolute',
        right: 0,
        top: 0,
        width: '50%',
        height: '100%',
        zIndex: 2,
        background: 'rgba(0,0,0,1)'
      })
      this.imgWrapper.appendChild(oDivShadow)
      oDivPage.ch = false
      fx.buffer(
        oDivPage,
        { y: 0, opacity: 1 },
        { y: -180, opacity: 0 },
        now => {
          if (now.y < -90 && !oDivPage.ch) {
            oDivPage.ch = true
            oDivPage.innerHTML = '<img />'
            var oImg = oDivPage.getElementsByTagName('img')[0]
            oImg.src = $this.imagesList[$this.next]
            Utils.setStyle3(oImg, 'transform', 'scaleX(-1)')
            Utils.setStyle(oImg, {
              position: 'absolute',
              right: 0,
              top: 0,
              width: '200%',
              height: '100%'
            })
            Utils.setStyle3(oDivPage, 'transformOrigin', 'left')
          }
          if (now.y < -90) {
            Utils.setStyle3(
              oDivPage,
              'transform',
              'perspective(1000px) scale(-1,1) rotateY(' + (180 - now.y) + 'deg)'
            )
          } else {
            Utils.setStyle3(oDivPage, 'transform', 'perspective(1000px) rotateY(' + now.y + 'deg)')
          }
          oDivShadow.style.background = 'rgba(0,0,0,' + now.opacity + ')'
        },
        () => {
          $this.current = $this.next
          $this.ready = true
        },
        14
      )
    }
  },
  mounted() {
    this.$nextTick(() => {
      const wrapper = this.$refs.wrapper
      this.imgWrapper = wrapper
      this.width = wrapper.getBoundingClientRect().width
      this.height = wrapper.getBoundingClientRect().height
      this.background.backgroundImage = `url(${this.imagesList[0]})`
    })
  }
}
</script>

<style scoped lang="scss">
.carousel {
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .ctrl-wrapper {
    margin-bottom: 50px;
  }
  .images {
    @include cube(700px, 400px);
    position: relative;
  }
}
</style>
