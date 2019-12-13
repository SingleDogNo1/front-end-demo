<template>
  <div class="flip">
    <template v-for="index in 4">
      <div class="flip-item" :key="index">
        <div class="flip-wrapper">
          <div class="face front">
            <img src="./1.jpg" />
          </div>
          <div class="face back">Hello,world</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'flip',
  components: {},
  data() {
    return {
      msg: 'hello, flip'
    }
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {}
}
</script>

<style scoped lang="scss">
$width: 220px;
$height: 300px;
.flip {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .flip-item {
    perspective: 1000;
    @include cube($width, $height);
    margin: 20px;
    &:hover {
      .flip-wrapper {
        transform: rotateY(180deg);
      }
    }
    .flip-wrapper {
      @include cube();
      transform-style: preserve-3d;
      transition: 1s;
      .face {
        position: absolute;
        backface-visibility: hidden;
      }
      .back {
        transform: rotateY(180deg);
        background: linear-gradient(top, #fdbb5a, #db5726);
        @include cube();
        color: white;
        font-size: 24px;
        text-align: center;
        line-height: $height;
      }
    }
  }
}
</style>
