<template>
  <div class="demo6">
    <div class="wrapper1">
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="circle4"></div>
    </div>
    <div class="wrapper2">
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="circle4"></div>
    </div>
    <div class="wrapper3">
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="circle4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo6'
}
</script>

<style scoped lang="scss">
@keyframes bouncedelay {
  0%,
  80%,
  100% {
    transform: scale(0);
  }

  40% {
    transform: scale(1);
  }
}
$size: 60px;
.demo6 {
  @include square($size);
  position: relative;
  [class^='wrapper'] {
    position: absolute;
    @include cube();
    > div {
      @include radiusCube($size / 4);
      background-color: #67cf22;
      position: absolute;
      animation: bouncedelay 1.2s infinite ease-in-out;
      animation-fill-mode: both;
    }
    .circle1 {
      top: 0;
      left: 0;
    }
    .circle2 {
      top: 0;
      right: 0;
    }
    .circle3 {
      right: 0;
      bottom: 0;
    }
    .circle4 {
      left: 0;
      bottom: 0;
    }
  }
  .wrapper1 {
    .circle2 {
      animation-delay: -0.9s;
    }
    .circle3 {
      animation-delay: -0.6s;
    }
    .circle4 {
      animation-delay: -0.3s;
    }
  }
  .wrapper2 {
    transform: rotateZ(45deg);
    .circle1 {
      animation-delay: -1.1s;
    }
    .circle2 {
      animation-delay: -0.8s;
    }
    .circle3 {
      animation-delay: -0.5s;
    }
    .circle4 {
      animation-delay: -0.2s;
    }
  }
  .wrapper3 {
    transform: rotateZ(90deg);
    .circle1 {
      animation-delay: -1s;
    }
    .circle2 {
      animation-delay: -0.7s;
    }
    .circle3 {
      animation-delay: -0.4s;
    }
    .circle4 {
      animation-delay: -0.1s;
    }
  }
}
</style>
