<template>
  <div class="cube-container">
    <div class="cube">
      <div v-for="(item, index) in direction" :key="index" :class="item"></div>
      <span v-for="(item, index) in direction" :key="index" :class="item + '-in'"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cube',
  data() {
    return {
      direction: ['front', 'back', 'left', 'right', 'top', 'bottom']
    }
  },
}
</script>
<style scoped lang="scss">
@keyframes rotate {
  from { transform: rotate3d(1,1,1,0deg) }
  to { transform: rotate3d(1, 1, 1, 360deg) }
}

.cube-container {
  @include center;
  background: #333;
  .cube {
    @include square(202px);
    position: relative;
    transform-style: preserve-3d;
    animation: rotate 10s infinite ease;
    animation-play-state: running;
    div {
      position: absolute;
      top: 0;
      left: 0;
      @include square(100%);
      background: rgba($color: #ffffff, $alpha: 0.4);
      border: 1px solid #fff;
      transition: all 1.5s ease;
      &.front {
        transform: translateZ(100px);
      }
      &.back {
        transform: translateZ(-100px) rotateY(-180deg);
      }
      &.left {
        transform: translateX(-100px) rotateY(-90deg);
      }
      &.right {
        transform: translateX(100px) rotateY(90deg);
      }
      &.top {
        transform: translateY(-100px) rotateX(90deg);
      }
      &.bottom {
        transform: translateY(100px) rotateX(-90deg);
      }
    }
    span {
      position: absolute;
      @include square(100px);
      border: 1px solid black;
      background: url(./demo.jpg) center 0/contain no-repeat;
      top: 50px;
      left: 50px;
      transition: all 1.5s ease;
      &.front-in {
        transform: translateZ(50px);
      }
      &.back-in {
        transform: translateZ(-50px) rotateY(180deg);
      }
      &.left-in {
        transform: translateX(50px) rotateY(90deg);
      }
      &.right-in {
        transform: translateX(-50px) rotateY(-90deg);
      }
      &.top-in {
        transform: translateY(50px) rotateX(90deg);
      }
      &.bottom-in {
        transform: translateY(-50px) rotateX(-90deg);
      }
    }
    &:hover {
      animation-play-state: paused;
      .front {
        transform: translateZ(200px) rotateY(-180deg);
      }
      .back {
        transform: translateZ(-200px) rotateY(180deg);
      }
      .left {
        transform: translateX(200px) rotateY(-90deg);
      }
      .right {
        transform: translateX(-200px) rotateY(-90deg);
      }
      .top {
        transform: translateY(200px) rotateX(-90deg);
      }
      .bottom {
        transform: translateY(-200px) rotateX(90deg);
      }
      .in-front {
        transform: translateZ(100px) rotateY(-180deg);
      }
      .back-in {
        transform: translateZ(-100px) rotateY(180deg);
      }
      .left-in {
        transform: translateX(100px) rotateY(-90deg);
      }
      .right-in {
        transform: translateX(-100px) rotateY(-90deg);
      }
      .top-in {
        transform: translateY(100px) rotateX(-90deg);
      }
      .bottom-in {
        transform: translateY(-100px) rotateX(90deg);
      }
    }
  }
}
</style>
