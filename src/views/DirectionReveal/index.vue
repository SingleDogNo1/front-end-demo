<template>
  <div class="direction-wrapper">
    <div class="demo-inner">
      <div class="separator">
        <h3>Swing</h3>
        <div class="direction-reveal demo-swing">
          <template v-for="index in 8">
            <div :key="index" class="direction-reveal__card card-item" :tabindex="index">
              <img src="./1.jpg" alt="" />
              <div class="overlay direction-reveal__anim--enter">
                <h3>Title</h3>
                <p>Hello, World!</p>
              </div>
            </div>
          </template>
        </div>
      </div>

      <div class="separator">
        <h3>Rotate</h3>
        <div class="direction-reveal demo-rotate">
          <template v-for="index in 8">
            <div :key="index" class="direction-reveal__card card-item" :tabindex="index">
              <img src="./1.jpg" alt="" />
              <div class="overlay direction-reveal__anim--enter">
                <h3>Title</h3>
                <p>Hello,World!</p>
              </div>
            </div>
          </template>
        </div>
      </div>

      <div class="separator">
        <h3>flip</h3>
        <div class="direction-reveal demo-flip">
          <template v-for="index in 8">
            <div :key="index" class="direction-reveal__card card-item" :tabindex="index">
              <img src="./1.jpg" alt="" class="direction-reveal__anim--leave" />
              <div class="overlay direction-reveal__anim--enter">
                <h3>Title</h3>
                <p>Hello,World!</p>
              </div>
            </div>
          </template>
        </div>
      </div>

      <div class="separator">
        <h3>slide</h3>
        <div class="direction-reveal demo-slide">
          <template v-for="index in 8">
            <div :key="index" class="direction-reveal__card card-item" :tabindex="index">
              <img src="./1.jpg" alt="" />
              <div class="overlay direction-reveal__anim--enter">
                <h3>Title</h3>
                <p>Hello,World!</p>
              </div>
            </div>
          </template>
        </div>
      </div>

      <div class="separator">
        <h3>slide Inverted</h3>
        <div class="direction-reveal demo-slide">
          <template v-for="index in 8">
            <div :key="index" class="direction-reveal__card card-item" :tabindex="index">
              <img src="./1.jpg" alt="" />
              <div class="overlay direction-reveal__anim--leave">
                <h3>Title</h3>
                <p>Hello,World!</p>
              </div>
            </div>
          </template>
        </div>
      </div>

      <div class="separator">
        <h3>slide &amp; Push</h3>
        <div class="direction-reveal demo-slide-push">
          <template v-for="index in 8">
            <div :key="index" class="direction-reveal__card card-item" :tabindex="index">
              <img src="./1.jpg" alt="" class="direction-reveal__anim--leave" />
              <div class="overlay direction-reveal__anim--enter">
                <h3>Title</h3>
                <p>Hello,World!</p>
              </div>
            </div>
          </template>
        </div>
      </div>

      <div class="separator">
        <h3>Roll out</h3>
        <div class="direction-reveal demo-roll-out">
          <template v-for="index in 8">
            <div :key="index" class="direction-reveal__card card-item" :tabindex="index">
              <img src="./1.jpg" alt="" />
              <div class="overlay direction-reveal__anim--enter">
                <h3>Title</h3>
                <p>Hello,World!</p>
              </div>
            </div>
          </template>
        </div>
      </div>

      <div class="separator">
        <h3>Options</h3>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="property" label="参数"></el-table-column>
          <el-table-column prop="default" label="默认值"></el-table-column>
          <el-table-column prop="type" label="类型"></el-table-column>
          <el-table-column prop="desc" label="描述"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import DirectionReveal from './package/direction-reveal'

export default {
  name: 'direction',
  data() {
    return {
      tableData: [
        {
          property: 'selector',
          default: '.direction-reveal',
          type: 'String',
          desc: '容器选择器'
        },
        {
          property: 'itemSelector',
          default: '.direction-reveal__card',
          type: 'String',
          desc: '自身选择器'
        },
        {
          property: 'animationName',
          default: 'swing',
          type: 'String',
          desc: '动画名称'
        },
        {
          property: 'animationPostfixEnter',
          default: 'enter',
          type: 'String',
          desc: '鼠标进入时，作为动画的 css 类名后缀'
        },
        {
          property: 'animationPostfixLeave',
          default: 'leave',
          type: 'String',
          desc: '鼠标离开时，作为动画的 css 类名后缀'
        },
        {
          property: 'enableTouch',
          default: 'true',
          type: 'Boolean',
          desc: '在第一次单击时显示内容，然后在第二次单击时单击链接'
        },
        {
          property: 'touchThreshold',
          default: '250',
          type: 'Number(ms)',
          desc: '设置防抖时间（以毫秒为单位），这是为了防止用户滚动时触发。'
        }
      ]
    }
  },
  mounted() {
    DirectionReveal({ selector: '.demo-swing' })
    DirectionReveal({ selector: '.demo-rotate', animationName: 'rotate' })
    DirectionReveal({ selector: '.demo-flip', animationName: 'flip' })
    DirectionReveal({ selector: '.demo-slide', animationName: 'slide' })
    DirectionReveal({ selector: '.demo-slide-push', animationName: 'slide' })
    DirectionReveal({ selector: '.demo-roll-out', animationName: 'roll-out' })
  }
}
</script>

<style scoped lang="scss">
@import './package/direction-reveal.scss';

.direction-wrapper {
  padding-top: 30px;
  .demo-inner {
    width: 880px;
    margin: 0 auto;
    .separator {
      margin-bottom: 50px;
    }
    h3 {
      font-size: 1.75em;
      margin-bottom: 1em;
    }
    .direction-reveal {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .card-item {
      @include square(200px);
      margin: 10px;
    }
  }
}
</style>
