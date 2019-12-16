<template>
  <ul class="js-cube">
    <li v-for="index in 10" :key="index">
      <div class="active-item">
        <div class="front">
          <img src="./1.jpg" />
        </div>
        <div class="back">
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
        this.addClass(ev, 'in')
      }
      mouseOutHandler(ev) {
        this.addClass(ev, 'out')
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
        this.element.classList.add(state + class_suffix)
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
@keyframes in-top {
  from {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  to {
    transform: rotate3d(-1, 0, 0, 90deg);
  }
}

@keyframes out-top {
  from {
    transform: rotate3d(-1, 0, 0, 90deg);
  }
  to {
    transform: rotate3d(0, 0, 0, 0deg);
  }
}

@keyframes in-right {
  from {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  to {
    transform: rotate3d(0, -1, 0, 90deg);
  }
}

@keyframes out-right {
  from {
    transform: rotate3d(0, -1, 0, 90deg);
  }
  to {
    transform: rotate3d(0, 0, 0, 0deg);
  }
}

@keyframes in-bottom {
  from {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  to {
    transform: rotate3d(1, 0, 0, 90deg);
  }
}

@keyframes out-bottom {
  from {
    transform: rotate3d(1, 0, 0, 90deg);
  }
  to {
    transform: rotate3d(0, 0, 0, 0deg);
  }
}

@keyframes in-left {
  from {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  to {
    transform: rotate3d(0, 1, 0, 90deg);
  }
}

@keyframes out-left {
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
  .active-item {
    @include positionCenter;
    pointer-events: none;
    transform-style: preserve-3d;
    transform-origin: 50% 50% (-$size / 2);
    will-change: transform;
    animation: 200ms ease-out 0ms 1 normal forwards paused;
    .front,
    .back {
      @include positionCenter;
      color: white;
      transition: none;
    }
    .front {
      overflow: hidden;
      transform: translate3d(0, 0, 0);
      img {
        width: 100%;
      }
    }
    .back {
      background: linear-gradient(to bottom, #fdbb5a, #db5726);
      color: #fff;
      transform: translate3d(0, 0, -1px);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .in-top .back,
  .out-top .back {
    transform-origin: 0% 100%;
    transform: translate3d(0, -100%, 0) rotate3d(1, 0, 0, 90deg);
  }

  .in-right .back,
  .out-right .back {
    transform-origin: 0% 0%;
    transform: translate3d(100%, 0, 0) rotate3d(0, 1, 0, 90deg);
  }

  .in-bottom .back,
  .out-bottom .back {
    transform-origin: 0% 0%;
    transform: translate3d(0, 100%, 0) rotate3d(-1, 0, 0, 90deg);
  }

  .in-left .back,
  .out-left .back {
    transform-origin: 100% 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, -1, 0, 90deg);
  }

  $class-list: in-top, in-right, in-bottom, in-left, out-top, out-right, out-bottom, out-left;
  @each $value in $class-list {
    .#{$value} .active-item {
      animation-name: #{$value};
      animation-play-state: running;
    }
  }
}
</style>
