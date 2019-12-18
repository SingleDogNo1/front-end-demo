<template>
  <div class="font-animate">
    <div ref="text" style="display: none;">
      北国风光，千里冰封，万里雪飘。 望长城内外，惟馀莽莽； 大河上下，顿失滔滔。
      山舞银蛇，原驰蜡象，欲与天公试比高。 须晴日，看红妆素裹，分外妖娆。 江山如此多娇，
      引无数英雄竞折腰。 惜秦皇汉武，略输文采； 唐宗宋祖，稍逊风骚。
      一代天骄，成吉思汗，只识弯弓射大雕。 俱往矣，数风流人物，还看今朝。
    </div>
    <template v-for="index in 10">
      <div :key="index" :class="['demo' + index]" :id="index">
        <span
          v-for="(item, i) in demo1Text"
          :key="i"
          class="ele"
          :style="{ 'animation-delay': delay * i + 'ms' }"
        >
          {{ item }}
        </span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'fontAnimate',
  components: {},
  data() {
    return {
      delay: 60,
      demo1Text: ''
    }
  },
  watch: {},
  methods: {},
  mounted() {
    this.$nextTick(() => {
      this.demo1Text = this.$refs.text.innerText.replace(' ', '')
    })
  }
}
</script>

<style scoped lang="scss">
@keyframes demo1 {
  0% {
    opacity: 1;
    transform: translate(0, -20px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes demo2 {
  0% {
    opacity: 1;
    transform: translate(-25px, 0);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes demo3 {
  0% {
    opacity: 1;
    transform: rotate(135deg);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg);
  }
}

@keyframes demo4 {
  0% {
    opacity: 1;
    transform: rotateX(-180deg);
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg);
  }
}

@keyframes demo5 {
  0% {
    opacity: 1;
    transform: rotateY(-180deg);
  }
  100% {
    opacity: 1;
    transform: rotateY(0deg);
  }
}

@keyframes demo6 {
  0% {
    opacity: 1;
    transform: scale(1.5, 1.5);
  }
  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
}

@keyframes demo7 {
  0% {
    opacity: 1;
    transform: scale(0.3, 0.3);
  }
  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
}

@keyframes demo8 {
  0% {
    opacity: 1;
    transform: translate(-10px, 20px);
  }
  50% {
    transform: translate(-5px, -20px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}

@keyframes demo9 {
  from {
    opacity: 1;
    transform: rotateX(0deg);
    transform-origin: 0 0;
  }
  to {
    opacity: 1;
    transform: rotateX(360deg);
    transform-origin: 0 0;
  }
}

.font-animate {
  padding: 30px;
  span {
    display: inline-block;
    opacity: 0;
    white-space: nowrap;
  }
  [class^='demo'] {
    font-size: 18px;
    margin-bottom: 40px;
  }
  @for $i from 1 through 9 {
    .demo#{$i} {
      .ele {
        animation: demo#{$i} 0.5s ease forwards;
      }
    }
  }
  .demo10 {
    .ele:nth-child(even) {
      animation: demo2 0.5s ease-out forwards;
    }
    .ele:nth-child(odd) {
      animation: demo8 0.5s ease-out forwards;
    }
  }
}
</style>
