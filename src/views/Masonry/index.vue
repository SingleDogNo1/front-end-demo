<template>
  <div class="masonry-wrapper">
    <section style="margin-bottom: 50px;">
      <h2 style="margin-bottom: 1em;">插件名 -- masonry</h2>
      <a href="https://masonry.desandro.com/" style="color: #ace;font-size: 18px;">文档地址</a>
    </section>
    <div ref="grid" class="grid">
      <div
        class="grid-item"
        v-for="i in 40"
        :key="i"
        :class="[
          `width${Math.floor(Math.random() * 4 + 1)}`,
          `height${Math.floor(Math.random() * 4 + 1)}`
        ]"
      >
        {{ i }}
      </div>
    </div>
  </div>
</template>

<script>
import Masonry from 'masonry-layout'

export default {
  name: 'masonry',
  components: {},
  data() {
    return {
      msg: 'hello, masonry'
    }
  },
  created() {
    this.a = Math.floor(Math.random() * 4 + 1)
  },
  mounted() {
    var elem = this.$refs.grid
    new Masonry(elem, {
      itemSelector: '.grid-item'
    })
  }
}
</script>

<style scoped lang="scss">
$width: 80px;
$height: 60px;
.masonry-wrapper {
  padding: 30px 50px;
  .grid {
    .grid-item {
      @include cube($width, $height);
      background: #ace;
      border: 2px solid rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      color: #fff;
      font-weight: 600;
    }
    @for $i from 1 through 4 {
      .width#{$i} {
        width: $width * $i;
      }
      .height#{$i} {
        height: $height * 2.4;
      }
    }
  }
}
</style>
