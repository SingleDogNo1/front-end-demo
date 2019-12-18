<template>
  <ul class="js-cube">
    <li v-for="index in 10" :key="index">
      <div class="direction-reveal__card">
        <div class="front">
          <img src="./1.jpg" />
        </div>
        <div class="overlay">
          <h3>Hello, World!</h3>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'js-cube',
  data() {
    return {
      msg: 'hello, js-cube'
    }
  },
  mounted() {
    class Node {
      constructor(node) {
        this.element = node
        this.init()
      }
      init() {
        this.bindEvent()
        this.update()
      }
      bindEvent() {
        this.element.addEventListener('mouseenter', this.mouseEnterHandler.bind(this), false)
        this.element.addEventListener('mouseout', this.mouseOutHandler.bind(this), false)
      }
      update() {
        this.w = this.element.offsetWidth
        this.h = this.element.offsetHeight
        this.l = this.element.offsetLeft
        this.t = this.element.offsetTop
      }
      mouseEnterHandler(ev) {
        this.addClass(ev, 'enter')
      }
      mouseOutHandler(ev) {
        this.addClass(ev, 'leave')
      }
      addClass(ev, state) {
        const direction = this.getDirection(ev)
        let class_suffix = ''
        switch (direction) {
          case 0:
            class_suffix = '-top'
            break
          case 1:
            class_suffix = '-right'
            break
          case 2:
            class_suffix = '-bottom'
            break
          case 3:
            class_suffix = '-left'
            break
        }
        this.element.className = ''
        this.element.classList.add(`cube--${state}${class_suffix}`)
      }
      getDirection(ev) {
        const RADIAN_TO_ANGLE = 1.57079633
        let w = this.w,
          h = this.h,
          x = ev.pageX - this.l - (w / 2) * (w > h ? h / w : 1),
          y = ev.pageY - this.t - (h / 2) * (h > w ? w / h : 1),
          d = Math.round(Math.atan2(y, x) / RADIAN_TO_ANGLE + 5) % 4
        return d
      }
    }

    class ActiveNodes {
      constructor(nodes) {
        this.nodes = []
        Array.prototype.slice.call(nodes, 0).forEach(node => {
          this.nodes.push(new Node(node))
        })
      }
    }

    const nodes = document.querySelector('.js-cube').querySelectorAll('li')
    new ActiveNodes(nodes)
  }
}
</script>

<style scoped lang="scss">
@keyframes cube--enter-top {
  from {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  to {
    transform: rotate3d(-1, 0, 0, 90deg);
  }
}

@keyframes cube--leave-top {
  from {
    transform: rotate3d(-1, 0, 0, 90deg);
  }
  to {
    transform: rotate3d(0, 0, 0, 0deg);
  }
}

@keyframes cube--enter-right {
  from {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  to {
    transform: rotate3d(0, -1, 0, 90deg);
  }
}

@keyframes cube--leave-right {
  from {
    transform: rotate3d(0, -1, 0, 90deg);
  }
  to {
    transform: rotate3d(0, 0, 0, 0deg);
  }
}

@keyframes cube--enter-bottom {
  from {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  to {
    transform: rotate3d(1, 0, 0, 90deg);
  }
}

@keyframes cube--leave-bottom {
  from {
    transform: rotate3d(1, 0, 0, 90deg);
  }
  to {
    transform: rotate3d(0, 0, 0, 0deg);
  }
}

@keyframes cube--enter-left {
  from {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  to {
    transform: rotate3d(0, 1, 0, 90deg);
  }
}

@keyframes cube--leave-left {
  from {
    transform: rotate3d(0, 1, 0, 90deg);
  }
  to {
    transform: rotate3d(0, 0, 0, 0deg);
  }
}
$size: 180px;
.js-cube {
  padding: 30px;
  li {
    margin: 10px;
    position: relative;
    @include square($size);
    perspective: 1000px;
    display: inline-block;
    transform-origin: 50% 50% $size / 2;
  }
  .direction-reveal__card {
    @include positionCenter;
    pointer-events: none;
    transform-style: preserve-3d;
    transform-origin: 50% 50% (-$size / 2);
    will-change: transform;
    animation: 200ms ease-out 0ms 1 normal forwards paused;
    .front,
    .overlay {
      @include positionCenter;
      color: white;
      transition: none;
    }
    .front {
      overflow: hidden;
      transform: translate3d(0, 0, 0);
    }
    .overlay {
      background: linear-gradient(to bottom, #fdbb5a, #db5726);
      color: #fff;
      transform: translate3d(0, 0, -1px);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .cube--enter-top .overlay,
  .cube--leave-top .overlay {
    transform-origin: 0% 100%;
    transform: translate3d(0, -100%, 0) rotate3d(1, 0, 0, 90deg);
  }

  .cube--enter-right .overlay,
  .cube--leave-right .overlay {
    transform-origin: 0% 0%;
    transform: translate3d(100%, 0, 0) rotate3d(0, 1, 0, 90deg);
  }

  .cube--enter-bottom .overlay,
  .cube--leave-bottom .overlay {
    transform-origin: 0% 0%;
    transform: translate3d(0, 100%, 0) rotate3d(-1, 0, 0, 90deg);
  }

  .cube--enter-left .overlay,
  .cube--leave-left .overlay {
    transform-origin: 100% 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, -1, 0, 90deg);
  }

  $class-list: cube--enter-top, cube--enter-right, cube--enter-bottom, cube--enter-left,
    cube--leave-top, cube--leave-right, cube--leave-bottom, cube--leave-left;
  @each $value in $class-list {
    .#{$value} .direction-reveal__card {
      animation-name: #{$value};
      animation-play-state: running;
    }
  }
}
</style>
