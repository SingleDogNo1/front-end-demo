<template>
  <div class="demo2"></div>
</template>

<script>
export default {
  name: 'demo2'
}
</script>

<style scoped lang="scss">
@keyframes rotate {
  0% {
    transform: perspective(120px);
  }

  50% {
    transform: perspective(120px) rotateY(180deg);
  }

  100% {
    transform: perspective(120px) rotateY(180deg) rotateX(180deg);
  }
}
$size: 60px;
.demo2 {
  @include square($size);
  background-color: #67cf22;
  animation: rotate 1.2s infinite ease-in-out;
}
</style>
