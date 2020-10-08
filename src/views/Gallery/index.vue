<template>
  <div class="gallery">
    <div class="wrapper">
      <div
        class="photo photo-front"
        v-for="(item, index) in poster"
        :key="index"
        @click="turn(item)"
        :id="'photo_' + index"
      >
        <!--控制2D位置、旋转-->
        <div class="photo-wrap">
          <!--控制3D翻转-->
          <div class="side side-front">
            <p class="image">
              <img :src="require(`./${item.img}`)" alt="" />
            </p>
            <p class="caption">{{ item.caption }}</p>
          </div>
          <div class="side side-back">
            <p class="desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import poster from './data'

export default {
  name: 'galleryA',
  components: {},
  data() {
    return {
      poster
    }
  },
  computed: {},
  watch: {},
  methods: {
    turn(item) {
      console.log(item)
    },
    //通用函数，生成范围内随机整数，参数为长度为2的数组range=[min,max]
    random(range) {
      let max = Math.max(range[0], range[1])
      let min = Math.min(range[0], range[1])
      const diff = max - min
      const number = Math.random() * diff + min
      return parseInt(number)
    }
  },
  created() {},
  mounted() {}
}
</script>

<style scoped lang="scss">
.gallery {
  @include cube();
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  width: 100%;
  height: 100%;
  background-color: #333;
  position: relative;
  overflow: hidden;
  /* background: url(./background.jpg); */
}

/*海报样式*/
.photo {
  width: 260px;
  height: 320px;
  position: absolute;
  z-index: 2;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.01);
  cursor: pointer;
  transition: all 0.6s ease-in-out;
  left: 50%;
  top: 50%;
  margin-top: -160px;
  margin-left: -130px;
}

.photo .side {
  width: 100%;
  height: 100%;
  background-color: #eee;
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
  box-sizing: border-box;
  /*重点*/
}

.photo .side-front .image {
  width: 100%;
  height: 250px;
  line-height: 250px;
  overflow: hidden;
}

.photo .side-front .image img {
  width: 100%;
}

.photo .side-front .caption {
  text-align: center;
  font-size: 16px;
  line-height: 50px;
}

.side-back .desc {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
}

/*选中海报*/
.photo-center {
  left: 50% !important;
  top: 50% !important;
  transform: rotate(0deg) scale(1.3, 1.3) !important;
  margin-top: -160px;
  margin-left: -130px;
  z-index: 99;
}

/*翻转*/
#wrap {
  perspective: 1200px;
  -webkit-perspective: 1200px;
  -moz-perspective: 1200px;
}

.photo {
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
}

.photo-wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  /*-webkit-transform-style: preserve-3d;*/
  transform-origin: 0 0;
  transition: all 0.6s ease-in-out;
}

.photo-wrap .side-front {
  transform: rotateY(0deg);
}

.photo-wrap .side-back {
  transform: rotateY(180deg);
}

.photo-wrap .side {
  backface-visibility: hidden;
}

.photo-front .photo-wrap {
  transform: translate(0px, 0px) rotateY(0deg);
}

.photo-back .photo-wrap {
  transform: translate(260px, 0px) rotateY(-180deg);
}

/*导航条*/
.nav {
  width: 80%;
  height: 0;
  /*防止.nav覆盖.photo*/
  position: absolute;
  bottom: 60px;
  left: 10%;
  z-index: 100;
  text-align: center;
}

.nav span.i {
  display: inline-block;
  width: 35px;
  height: 35px;
  background: rgba(166, 166, 166, 0.8);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.6s ease-in-out;
  transform: scale(0.4);
}

.nav .i-current {
  transform: scale(0.7) !important;
  transition: all 0.6s ease-in-out;
}

.nav .i-current::after {
  content: '\e600';
  font-family: 'icons';
  font-size: 80%;
  display: inline-block;
  line-height: 35px;
  text-align: center;
  color: #fff;
  vertical-align: 38%;
  opacity: 1;
}

.nav .i-front {
  transform: rotateY(0deg) !important;
}

.nav .i-back {
  transform: rotateY(180deg) !important;
  background: rgba(84, 84, 84, 0.8) !important;
}
</style>
