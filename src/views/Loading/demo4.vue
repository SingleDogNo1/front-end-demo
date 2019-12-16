<template>
  <div class="demo4">
    <div class="dot1"></div>
    <div class="dot2"></div>
  </div>
</template>

<script>
export default {
  name: 'demo4'
}
</script>

<style scoped lang="scss">
@keyframes cube {
  25% {
    transform: translateX(42px) rotate(-90deg) scale(0.5);
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  }
  50% {
    transform: translateX(42px) translateY(42px) rotate(-179deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
  }
  50.1% {
    transform: translateX(42px) translateY(42px) rotate(-180deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  }
  75% {
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
  }
  100% {
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
}
$size: 60px;
.demo4 {
  @include square($size);
  position: relative;
  [class^='dot'] {
    background-color: #67cf22;
    @include square($size / 2);
    position: absolute;
    top: 0;
    left: 0;
    animation: cube 2s infinite ease-in-out;
  }
  .dot2 {
    animation-delay: -1s;
  }
}
</style>
