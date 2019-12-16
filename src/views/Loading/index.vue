<template>
  <ul class="loading">
    <li><demo1></demo1></li>
    <li><demo2></demo2></li>
    <li><demo3></demo3></li>
    <li><demo4></demo4></li>
    <li><demo5></demo5></li>
    <li><demo6></demo6></li>
    <li><demo7></demo7></li>
  </ul>
</template>

<script>
import demo1 from './demo1'
import demo2 from './demo2'
import demo3 from './demo3'
import demo4 from './demo4'
import demo5 from './demo5'
import demo6 from './demo6'
import demo7 from './demo7'

export default {
  name: 'loading',
  components: { demo1, demo2, demo3, demo4, demo5, demo6, demo7 }
}
</script>

<style scoped lang="scss">
.loading {
  display: flex;
  flex-wrap: wrap;
  li {
    @include square(60px);
    margin: 50px;
  }
}
</style>
