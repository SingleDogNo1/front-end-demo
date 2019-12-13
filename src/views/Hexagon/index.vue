<template>
  <div class="hexagon">
    <template v-for="index in 8">
      <div class="hex-item" :key="index">
        <div class="outer">
          <div class="inner">
            <div class="main">{{ index }}</div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'hexagon'
}
</script>

<style scoped lang="scss">
$width: 200px;
$height: 250px;
.hexagon {
  padding: 20px;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  .hex-item,
  .outer,
  .inner,
  .main {
    @include cube($width, $height);
    overflow: hidden;
  }

  .hex-item {
    margin: 10px;
    transform: rotate(120deg);
  }

  .inner,
  .outer {
    transform: rotate(-60deg);
  }

  .main {
    background-color: rgba(0, 0, 0, 0.2);
    font-size: 50px;
    color: #fff;
    text-align: center;
    line-height: $height;
  }
}
</style>
