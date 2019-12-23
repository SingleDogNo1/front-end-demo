<template>
  <div class="carousel">
    <el-button-group class="ctrl-wrapper">
      <el-button @click="explode">爆炸</el-button>
      <el-button @click="tile">翻转</el-button>
      <el-button>扭曲</el-button>
      <el-button>立方体</el-button>
      <el-button>翻页</el-button>
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
    }
  },
  created() {},
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
