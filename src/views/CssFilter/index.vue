<template>
  <div class="filter">
    <h1 style="margin-bottom: 20px">css filter 的语法</h1>
    <el-table :data="tableData" style="width: 100%;margin-bottom: 40px;">
      <el-table-column prop="name" label="参数" align="center" />
      <el-table-column prop="desc" label="描述" align="center" />
      <el-table-column prop="value" label="取值" align="center" />
      <el-table-column prop="default" label="默认值" align="center" />
    </el-table>
    <img v-for="(item, index) in filters" :key="index" src="./1.jpg" alt="" :class="item" />
  </div>
</template>
<script>
export default {
  name: 'filter',
  components: {},
  data() {
    return {
      tableData: [
        {
          name: 'grayscale(100%)',
          desc: '只有黑白俩种颜色的灰度',
          value: '0%-100%',
          default: '100%'
        },
        {
          name: 'sepia(100%)',
          desc: '降低饱和度到橙黄色，几乎所有色相值都集中在35-40之间',
          value: '0%-100%',
          default: '100%'
        },
        {
          name: 'saturate(500%)',
          desc: '饱和度',
          value: '0-infinite',
          default: '100%'
        },
        {
          name: 'hue-rotate(0deg)',
          desc: '色相旋转',
          value: '0-360deg',
          default: '0deg'
        },
        {
          name: 'invert(100%)',
          desc: '反色',
          value: '0%-100%',
          default: '100%'
        },
        {
          name: 'opacity(100%)',
          desc: '透明度',
          value: '0%-100%',
          default: '100%'
        },
        {
          name: 'brightness(100%)',
          desc: '亮度',
          value: '0%-100%',
          default: '100%'
        },
        {
          name: 'contrast(100%)',
          desc: '对比度',
          value: '0-infinite',
          default: '100%'
        },
        {
          name: 'blur(2px)',
          desc: '模糊',
          value: '0-infinite',
          default: '0'
        },
        {
          name: 'drop-shadow',
          desc: '阴影，写法和 box-shadow 一样',
          value: '',
          default: ''
        }
      ],
      filters: [
        'grayscale',
        'sepia',
        'saturate',
        'hue-rotate',
        'invert',
        'opacity',
        'brightness',
        'contrast',
        'blur',
        'drop-shadow'
      ]
    }
  },
  mounted() {}
}
</script>
<style scoped lang="scss">
.filter {
  padding: 20px;
  img {
    &.grayscale:hover {
      filter: grayscale(100%);
    }
    &.sepia:hover {
      filter: sepia();
    }
    &.saturate:hover {
      filter: saturate(500%);
    }
    &.hue-rotate:hover {
      filter: hue-rotate(90deg);
    }
    &.invert:hover {
      filter: invert(100%);
    }
    &.opacity:hover {
      filter: opacity(50%);
    }
    &.brightness:hover {
      filter: brightness(50%);
    }
    &.contrast:hover {
      filter: contrast(50%);
    }
    &.blur:hover {
      filter: blur(4px);
    }
    &.drop-shadow:hover {
      filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 1));
    }
  }
}
</style>
