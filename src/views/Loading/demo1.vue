<template>
  <div class="demo1">
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
    <div class="rect5"></div>
  </div>
</template>

<script>
export default {
  name: 'loading-demo1'
}
</script>

<style scoped lang="scss">
@keyframes scale {
  0%,
  40%,
  100% {
    transform: scale(0.4);
  }
  20% {
    transform: scale(1);
  }
}
$size: 60px;
.demo1 {
  @include square($size);
  display: flex;
  justify-content: center;
  div {
    background-color: #67cf22;
    @include cube($size / 10, 100%);
    margin-right: $size / 15;
    animation: scale 1.2s infinite ease-in-out;
  }
  @for $i from 2 through 5 {
    .rect#{$i} {
      animation-delay: #{($i / 10 - 1.3)}s;
    }
  }
}
</style>
