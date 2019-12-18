<template>
  <div class="draggable">
    <div class="drag-wrapper" ref="dragWrapper" draggable="true">
      <template v-for="(item, i) in imgs">
        <div :key="i" draggable="true" :id="i">
          <img :src="item" alt="" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'draggable',
  components: {},
  data() {
    return {
      imgs: [
        require('./1.jpg'),
        require('./2.jpg'),
        require('./3.jpg'),
        require('./4.jpg'),
        require('./5.jpg'),
        require('./6.jpg'),
        require('./7.jpg'),
        require('./8.jpg')
      ]
    }
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {
    const elms = this.$refs.dragWrapper.querySelectorAll('div')
    let elementDragged = null
    elms.forEach((item, index) => {
      item.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text', index)
        elementDragged = item
      })
      item.addEventListener('dragenter', e => {
        const currentId = item.getAttribute('id')
        e.preventDefault()
        e.stopPropagation()
        if (index != currentId) {
          let tempInnerHtml = item.innerHTML
          item.innerHTML = elementDragged.innerHTML
          elementDragged.innerHTML = tempInnerHtml
          elementDragged.removeAttribute('class')
          elementDragged = item
        }
      })
      item.addEventListener('dragover', e => {
        e.preventDefault()
        e.stopPropagation()
        e.dataTransfer.dropEffect = 'move'
        elementDragged.setAttribute('class', 'dragStart')
        return false
      })
      item.addEventListener('dragleave', e => {
        const currentId = item.getAttribute('id')
        e.preventDefault()
        e.stopPropagation()
        if (index != currentId) {
          item.removeAttribute('class')
        }
      })
      item.addEventListener('drop', e => {
        e.preventDefault()
        e.stopPropagation()
        elementDragged.removeAttribute('class')
        return false
      })
      item.addEventListener('dragend', () => {
        elementDragged = null
        item.removeAttribute('class')
      })
    })
  }
}
</script>

<style scoped lang="scss">
.draggable {
  display: flex;
  justify-content: center;
  align-items: center;
  .drag-wrapper {
    @include cube(800px, 250px);
    background: red;
    display: flex;
    flex-wrap: wrap;
    div {
      @include cube(200px, 125px);
      img {
        transition: 0.6s;
      }
    }
    .dragStart img {
      filter: blur(3px);
    }
  }
}
</style>
