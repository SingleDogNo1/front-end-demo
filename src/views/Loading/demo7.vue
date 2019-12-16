<template>
  <div class="demo7"></div>
</template>

<script>
export default {
  name: 'demo7'
}
</script>

<style scoped lang="scss">
@keyframes scale {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
$size: 60px;
.demo7 {
  @include radiusCube($size);
  background-color: #67cf22;
  animation: scale 1s infinite ease-in-out;
}
</style>
