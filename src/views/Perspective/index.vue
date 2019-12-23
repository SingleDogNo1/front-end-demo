<template>
  <div class="perspective">
    <div class="wrapper" ref="wrapper">
      <img src="./1.jpg" class="blur" alt="" />
      <div class="mask">
        <img src="./1.jpg" class="img" ref="maskImage" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'perspective',
  mounted() {
    /**
     * @param {string} addScale 点击增加透镜范围的按钮
     * @param {string} delScale 点击缩小透镜范围的按钮
     * @param {string} zoomEvent 定义触发缩放透镜范围的鼠标事件
     * @param {'circular' || 'square'} shape 定义透镜框的形状
     * @param {string || DOM_object} target 渲染透镜的容器
     */
    class Perspective {
      constructor(options) {
        this.addScale = options && options.addScale ? options.addScale : 'up'
        this.delScale = options && options.delScale ? options.delScale : 'down'
        this.zoomEvent = options && options.zoomEvent ? options.zoomEvent : 'keydown'
        this.shape = options && options.shape ? options.shape : 'circular'
        if (!(options && options.target)) {
          this.target = document.querySelector('.wrapper')
        } else {
          if (typeof options.target === 'string') {
            this.target = document.querySelector(this.target)
          } else {
            this.target = options.target
          }
        }
        this.init()
      }
      initImagesSize() {
        const el = this.target
        const images = el.querySelectorAll('img')
        for (const value of images) {
          value.style.width = el.clientWidth + 'px'
          value.style.height = el.clientHeight + 'px'
        }
      }
      initBlur(wrapper) {
        wrapper.style.top = 0
        wrapper.style.left = 0
        wrapper.style.cursor = 'none'
        wrapper.style.display = 'block'
        wrapper.querySelector('img').style.top = 0
        wrapper.querySelector('img').style.left = 0
      }
      blur() {
        const el = this.target
        const blurWrapper = el.querySelector('div')
        const getStyles = function(elm, pos) {
          return elm.getBoundingClientRect()[pos]
        }
        switch (this.shape) {
          case 'circular':
            blurWrapper.style.borderRadius = '50%'
            break
          case 'cube':
            blurWrapper.style.borderRadius = '50%'
            break
        }
        this.initBlur(blurWrapper)
        el.addEventListener('mousemove', function(e) {
          let x = e.pageX - getStyles(this, 'left') - getStyles(blurWrapper, 'width') / 2
          let y = e.pageY - getStyles(this, 'top') - getStyles(blurWrapper, 'height') / 2
          if (x < 0) x = 0
          if (y < 0) y = 0
          if (x > getStyles(this, 'width') - getStyles(blurWrapper, 'width')) {
            x = getStyles(this, 'width') - getStyles(blurWrapper, 'width')
          }
          if (y > getStyles(this, 'height') - getStyles(blurWrapper, 'height')) {
            y = getStyles(this, 'height') - getStyles(blurWrapper, 'height')
          }
          blurWrapper.style.top = y + 'px'
          blurWrapper.style.left = x + 'px'
          blurWrapper.style.cursor = 'none'
          blurWrapper.style.display = 'block'
          blurWrapper.querySelector('img').style.top = -y + 'px'
          blurWrapper.querySelector('img').style.left = -x + 'px'
        })
      }
      changeSize() {
        const el = this.target
        const blurWrapper = el.querySelector('div')
        const getStyles = function(elm, pos) {
          return elm.getBoundingClientRect()[pos]
        }
        let size = getStyles(blurWrapper, 'width')
        window.addEventListener(this.zoomEvent, e => {
          if (e.key.toLowerCase().includes(this.addScale)) {
            size++
            blurWrapper.style.width = size + 'px'
            blurWrapper.style.height = size + 'px'
          }
          if (e.key.toLowerCase().includes(this.delScale)) {
            size--
            blurWrapper.style.width = size + 'px'
            blurWrapper.style.height = size + 'px'
          }
        })
        window.addEventListener('onmousewhell', e => {
          console.log(e)
        })
      }
      init() {
        this.initImagesSize()
        this.blur()
        this.changeSize()
      }
    }

    new Perspective({
      target: this.$refs.wrapper
    })
  }
}
</script>

<style scoped lang="scss">
.perspective {
  padding: 30px;
  .wrapper {
    @include cube(800px, 600px);
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .blur {
      filter: blur(10px);
    }
    .img {
      position: absolute;
      top: 0;
    }
    .mask {
      @include radiusCube(200px);
      position: absolute;
      overflow: hidden;
      top: 0;
      left: 0;
      display: none;
    }
  }
}
</style>
