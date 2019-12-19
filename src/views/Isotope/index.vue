<template>
  <div class="shuffle-wrapper">
    <section style="margin-bottom: 50px;">
      <h2 style="margin-bottom: 1em;">插件名 -- shuffle</h2>
      <a href="https://vestride.github.io/Shuffle/" style="color: #ace;font-size: 18px;">
        文档地址
      </a>
    </section>
    <div class="shuffle">
      <el-button-group class="filter-wrapper">
        <el-button v-for="(item, i) in filterButtonList" :key="i" @click="filterItem(item.key)">
          {{ item.value }}
        </el-button>
      </el-button-group>
      <div ref="myShuffleContainer" class="shuffle-container">
        <!-- 1 -->
        <figure class="picture-item column" data-groups='["1", "blossom"]'>
          <img src="./imgs/1-blossom.png" />
        </figure>
        <figure class="picture-item column" data-groups='["1", "cube"]'>
          <img src="./imgs/1-cube.png" />
        </figure>
        <figure class="picture-item column" data-groups='["1", "redHeart"]'>
          <img src="./imgs/1-redHeart.png" />
        </figure>
        <figure class="picture-item column" data-groups='["1", "blackHeart"]'>
          <img src="./imgs/1-blackHeart.png" />
        </figure>
        <!-- 2 -->
        <figure class="picture-item column" data-groups='["2", "blossom"]'>
          <img src="./imgs/2-blossom.png" />
        </figure>
        <figure class="picture-item column" data-groups='["2", "cube"]'>
          <img src="./imgs/2-cube.png" />
        </figure>
        <figure class="picture-item column" data-groups='["2", "redHeart"]'>
          <img src="./imgs/2-redHeart.png" />
        </figure>
        <figure class="picture-item column" data-groups='["2", "blackHeart"]'>
          <img src="./imgs/2-blackHeart.png" />
        </figure>
        <!-- 3 -->
        <figure class="picture-item column" data-groups='["3", "blossom"]'>
          <img src="./imgs/3-blossom.png" />
        </figure>
        <figure class="picture-item column" data-groups='["3", "cube"]'>
          <img src="./imgs/3-cube.png" />
        </figure>
        <figure class="picture-item column" data-groups='["3", "redHeart"]'>
          <img src="./imgs/3-redHeart.png" />
        </figure>
        <figure class="picture-item column" data-groups='["3", "blackHeart"]'>
          <img src="./imgs/3-blackHeart.png" />
        </figure>
        <!-- 4 -->
        <figure class="picture-item column" data-groups='["4", "blossom"]'>
          <img src="./imgs/4-blossom.png" />
        </figure>
        <figure class="picture-item column" data-groups='["4", "cube"]'>
          <img src="./imgs/4-cube.png" />
        </figure>
        <figure class="picture-item column" data-groups='["4", "redHeart"]'>
          <img src="./imgs/4-redHeart.png" />
        </figure>
        <figure class="picture-item column" data-groups='["4", "blackHeart"]'>
          <img src="./imgs/4-blackHeart.png" />
        </figure>
        <!-- 5 -->
        <figure class="picture-item column" data-groups='["5", "blossom"]'>
          <img src="./imgs/5-blossom.png" />
        </figure>
        <figure class="picture-item column" data-groups='["5", "cube"]'>
          <img src="./imgs/5-cube.png" />
        </figure>
        <figure class="picture-item column" data-groups='["5", "redHeart"]'>
          <img src="./imgs/5-redHeart.png" />
        </figure>
        <figure class="picture-item column" data-groups='["5", "blackHeart"]'>
          <img src="./imgs/5-blackHeart.png" />
        </figure>
        <!-- 6 -->
        <figure class="picture-item column" data-groups='["6", "blossom"]'>
          <img src="./imgs/6-blossom.png" />
        </figure>
        <figure class="picture-item column" data-groups='["6", "cube"]'>
          <img src="./imgs/6-cube.png" />
        </figure>
        <figure class="picture-item column" data-groups='["6", "redHeart"]'>
          <img src="./imgs/6-redHeart.png" />
        </figure>
        <figure class="picture-item column" data-groups='["6", "blackHeart"]'>
          <img src="./imgs/6-blackHeart.png" />
        </figure>
        <!-- 7 -->
        <figure class="picture-item column" data-groups='["7", "blossom"]'>
          <img src="./imgs/7-blossom.png" />
        </figure>
        <figure class="picture-item column" data-groups='["7", "cube"]'>
          <img src="./imgs/7-cube.png" />
        </figure>
        <figure class="picture-item column" data-groups='["7", "redHeart"]'>
          <img src="./imgs/7-redHeart.png" />
        </figure>
        <figure class="picture-item column" data-groups='["7", "blackHeart"]'>
          <img src="./imgs/7-blackHeart.png" />
        </figure>
        <!-- 8 -->
        <figure class="picture-item column" data-groups='["8", "blossom"]'>
          <img src="./imgs/8-blossom.png" />
        </figure>
        <figure class="picture-item column" data-groups='["8", "cube"]'>
          <img src="./imgs/8-cube.png" />
        </figure>
        <figure class="picture-item column" data-groups='["8", "redHeart"]'>
          <img src="./imgs/8-redHeart.png" />
        </figure>
        <figure class="picture-item column" data-groups='["8", "blackHeart"]'>
          <img src="./imgs/8-blackHeart.png" />
        </figure>
        <!-- 9 -->
        <figure class="picture-item column" data-groups='["9", "blossom"]'>
          <img src="./imgs/9-blossom.png" />
        </figure>
        <figure class="picture-item column" data-groups='["9", "cube"]'>
          <img src="./imgs/9-cube.png" />
        </figure>
        <figure class="picture-item column" data-groups='["9", "redHeart"]'>
          <img src="./imgs/9-redHeart.png" />
        </figure>
        <figure class="picture-item column" data-groups='["9", "blackHeart"]'>
          <img src="./imgs/9-blackHeart.png" />
        </figure>
        <!-- 10 -->
        <figure class="picture-item column" data-groups='["10", "blossom"]'>
          <img src="./imgs/10-blossom.png" />
        </figure>
        <figure class="picture-item column" data-groups='["10", "cube"]'>
          <img src="./imgs/10-cube.png" />
        </figure>
        <figure class="picture-item column" data-groups='["10", "redHeart"]'>
          <img src="./imgs/10-redHeart.png" />
        </figure>
        <figure class="picture-item column" data-groups='["10", "blackHeart"]'>
          <img src="./imgs/10-blackHeart.png" />
        </figure>
        <!-- 11 -->
        <figure class="picture-item column" data-groups='["11", "blossom"]'>
          <img src="./imgs/11-blossom.png" />
        </figure>
        <figure class="picture-item column" data-groups='["11", "cube"]'>
          <img src="./imgs/11-cube.png" />
        </figure>
        <figure class="picture-item column" data-groups='["11", "redHeart"]'>
          <img src="./imgs/11-redHeart.png" />
        </figure>
        <figure class="picture-item column" data-groups='["11", "blackHeart"]'>
          <img src="./imgs/11-blackHeart.png" />
        </figure>
        <!-- 12 -->
        <figure class="picture-item column" data-groups='["12", "blossom"]'>
          <img src="./imgs/12-blossom.png" />
        </figure>
        <figure class="picture-item column" data-groups='["12", "cube"]'>
          <img src="./imgs/12-cube.png" />
        </figure>
        <figure class="picture-item column" data-groups='["12", "redHeart"]'>
          <img src="./imgs/12-redHeart.png" />
        </figure>
        <figure class="picture-item column" data-groups='["12", "blackHeart"]'>
          <img src="./imgs/12-blackHeart.png" />
        </figure>
        <!-- 13 -->
        <figure class="picture-item column" data-groups='["13", "blossom"]'>
          <img src="./imgs/13-blossom.png" />
        </figure>
        <figure class="picture-item column" data-groups='["13", "cube"]'>
          <img src="./imgs/13-cube.png" />
        </figure>
        <figure class="picture-item column" data-groups='["13", "redHeart"]'>
          <img src="./imgs/13-redHeart.png" />
        </figure>
        <figure class="picture-item column" data-groups='["13", "blackHeart"]'>
          <img src="./imgs/13-blackHeart.png" />
        </figure>

        <div ref="sizerElement" class="column sizer-element"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Shuffle from 'shufflejs'

export default {
  name: 'shuffle',
  components: {},
  data() {
    return {
      shuffle: null,
      filterButtonList: [
        { key: 'all', value: '所有' },
        { key: '1', value: 'A' },
        { key: '2', value: '2' },
        { key: '3', value: '3' },
        { key: '4', value: '4' },
        { key: '5', value: '5' },
        { key: '6', value: '6' },
        { key: '7', value: '7' },
        { key: '8', value: '8' },
        { key: '9', value: '9' },
        { key: '10', value: '10' },
        { key: '11', value: 'J' },
        { key: '12', value: 'Q' },
        { key: '13', value: 'K' },
        { key: 'redHeart', value: '红桃' },
        { key: 'blackHeart', value: '黑桃' },
        { key: 'cube', value: '方块' },
        { key: 'blossom', value: '梅花' }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {
    filterItem(value) {
      if (value === 'all') {
        this.shuffle.filter(Shuffle.ALL_ITEMS)
      } else {
        this.shuffle.filter(value)
      }
    }
  },
  created() {},
  mounted() {
    const element = this.$refs.myShuffleContainer
    const sizer = this.$refs.sizerElement
    this.shuffle = new Shuffle(element, {
      itemSelector: '.picture-item',
      sizer,
      isCentered: true
    })
  }
}
</script>

<style scoped lang="scss">
.shuffle-wrapper {
  padding: 30px;
  .shuffle {
    height: 100%;
  }
  .filter-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
  .picture-item {
    box-shadow: 5px 3px 10px 1px rgba(0, 0, 0, 0.3);
  }
  .column {
    width: 12%;
  }
  .sizer-element {
    width: 2.33333%;
  }
}
</style>
