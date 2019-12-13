<template>
  <div class="grid">
    <el-button class="course" type="text">
      <a href="https://github.com/jbaysolutions/vue-grid-layout#readme" target="_blank">
        vue-grid-layout详细文档
      </a>
    </el-button>
    <grid-layout
      :layout.sync="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transform="true"
      @layout-updated="layoutUpdated"
    >
      <grid-item
        class="grid-demo"
        v-for="(item, index) in layout"
        :key="index"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
      >
        <span>{{ item.i }}</span>
      </grid-item>
    </grid-layout>
  </div>
</template>
<script>
import VueGridLayout from 'vue-grid-layout'

export default {
  name: 'grid',
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  data() {
    return {
      layout: [
        { x: 0, y: 0, w: 2, h: 2, i: '0' },
        { x: 2, y: 0, w: 2, h: 4, i: '1' },
        { x: 4, y: 0, w: 2, h: 5, i: '2' },
        { x: 6, y: 0, w: 2, h: 3, i: '3' },
        { x: 8, y: 0, w: 2, h: 3, i: '4' },
        { x: 10, y: 0, w: 2, h: 3, i: '5' },
        { x: 0, y: 5, w: 2, h: 5, i: '6' },
        { x: 2, y: 5, w: 2, h: 5, i: '7' },
        { x: 4, y: 5, w: 2, h: 5, i: '8' },
        { x: 6, y: 3, w: 2, h: 4, i: '9' }
      ]
    }
  },
  methods: {
    layoutUpdated(layout) {
      const h = this.$createElement
      this.$msgbox({
        title: '顺序改变了',
        message: h('p', null, [
          h('span', null, '更改后的节点JSON为'),
          h('i', { style: 'color: teal' }, JSON.stringify(layout))
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
    }
  }
}
</script>
<style scoped lang="scss">
.grid {
  padding: 20px;
  .course {
    padding-left: 10px;
  }
  .grid-demo {
    background: #ace;
  }
}
</style>
