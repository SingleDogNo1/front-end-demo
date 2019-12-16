<template>
  <div class="demo5">
    <div class="dot1"></div>
    <div class="dot2"></div>
  </div>
</template>

<script>
export default {
  name: 'demo5'
}
</script>

<style scoped lang="scss">
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}
$size: 60px;
.demo5 {
  @include square($size);
  position: relative;
  animation: rotate 2s infinite linear;
  [class^='dot'] {
    @include radiusCube(0.6 * $size);
    position: absolute;
    top: 0;
    background-color: #67cf22;
    animation: bounce 2s infinite ease-in-out;
  }
  .dot2 {
    top: auto;
    bottom: 0;
    animation-delay: -1s;
  }
}
</style>
