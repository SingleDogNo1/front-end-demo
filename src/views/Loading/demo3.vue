<template>
  <div class="demo3">
    <div class="dot1"></div>
    <div class="dot2"></div>
  </div>
</template>

<script>
export default {
  name: 'demo3'
}
</script>

<style scoped lang="scss">
@keyframes scale {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}
$size: 60px;
.demo3 {
  @include square($size);
  position: relative;
  [class^='dot'] {
    @include radiusCube($size);
    background-color: #67cf22;
    opacity: 0.62;
    position: absolute;
    top: 0;
    left: 0;
    animation: scale 1.2s infinite ease-in-out;
  }
  .dot2 {
    animation-delay: -0.6s;
  }
}
</style>
