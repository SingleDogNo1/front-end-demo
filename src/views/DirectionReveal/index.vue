<template>
  <div class="direction">
    <div class="direction-reveal">
      <div class="direction-reveal__card" tabindex="0">
        <img src="./1.jpg" alt="Image" />
        <div class="direction-reveal__overlay direction-reveal__anim--enter">
          <h3 class="direction-reveal__title">Title</h3>
          <p class="direction-reveal__text">Description text.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DirectionReveal from './direction-reveal'

export default {
  name: 'direction',
  components: {},
  data() {
    return {
      msg: 'hello, '
    }
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {
    DirectionReveal({
      selector: '.direction-reveal',
      animationName: 'rotate'
    })
  }
}
</script>

<style scoped lang="scss">
@import './direction-reveal.css';
@import './site.css';
.direction {
  padding: 30px;
}
</style>
