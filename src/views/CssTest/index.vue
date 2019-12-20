<template>
  <div class="cssTest">
    <h1>打包后文件不方便查看，建议在源码中查看</h1>
    <div class="eg1">
      <h2>标签选择器</h2>
      <ul>
        <li v-for="index in 6" :key="index">
          <strong v-if="index !== 6">{{ index }}</strong>
          <span>{{ index }}</span>
        </li>
      </ul>
    </div>
    <div class="eg2">
      <h2>属性选择器</h2>
      <p>
        因为使用了<code>::selection</code>,所以当你选中这张网页里的内容时，文字会变成白色，背景变成粉红色。
      </p>
      <ul>
        <li type="a-active">
          独立寒秋，湘江北去，橘子洲头。看万山红遍，层林尽染；漫江碧透，百舸争流。鹰击长空，鱼翔浅底，万类霜天竞自由。怅寥廓，问苍茫大地，谁主沉浮？携来百侣曾游。忆往昔峥嵘岁月稠。恰同学少年，风华正茂；书生意气，挥斥方遒。
        </li>
        <li type="active abc">
          独立寒秋，湘江北去，橘子洲头。看万山红遍，层林尽染；漫江碧透，百舸争流。鹰击长空，鱼翔浅底，万类霜天竞自由。怅寥廓，问苍茫大地，谁主沉浮？携来百侣曾游。忆往昔峥嵘岁月稠。恰同学少年，风华正茂；书生意气，挥斥方遒。
        </li>
        <li type="cmd">
          独立寒秋，湘江北去，橘子洲头。看万山红遍，层林尽染；漫江碧透，百舸争流。鹰击长空，鱼翔浅底，万类霜天竞自由。怅寥廓，问苍茫大地，谁主沉浮？携来百侣曾游。忆往昔峥嵘岁月稠。恰同学少年，风华正茂；书生意气，挥斥方遒。
        </li>
        <li type="devtools">
          独立寒秋，湘江北去，橘子洲头。看万山红遍，层林尽染；漫江碧透，百舸争流。鹰击长空，鱼翔浅底，万类霜天竞自由。怅寥廓，问苍茫大地，谁主沉浮？携来百侣曾游。忆往昔峥嵘岁月稠。恰同学少年，风华正茂；书生意气，挥斥方遒。
        </li>
        <li type="eval">
          独立寒秋，湘江北去，橘子洲头。看万山红遍，层林尽染；漫江碧透，百舸争流。鹰击长空，鱼翔浅底，万类霜天竞自由。怅寥廓，问苍茫大地，谁主沉浮？携来百侣曾游。忆往昔峥嵘岁月稠。恰同学少年，风华正茂；书生意气，挥斥方遒。
        </li>
      </ul>
    </div>
    <div class="eg3">
      <h2>径向渐变可以偏离圆心，并且可以规定渐变的形状</h2>
      <ul>
        <li class="circle"></li>
        <li class="ellipse"></li>
      </ul>
    </div>
    <div class="eg4">
      <h2>过渡和变形</h2>
      <section>
        <div>hello</div>
        <div>world</div>
      </section>
    </div>
    <div class="eg5">
      <h2>综合练习</h2>
      <div class="demo">
        <div class="item">
          <img src="./1.jpg" alt="" />
          <p>hello, world!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cssTest'
}
</script>

<style scoped lang="scss">
::selection {
  background: pink;
  color: #fff;
}
.cssTest {
  padding: 30px;
  h2 {
    margin: 20px 0;
  }
  .eg1 {
    ul {
      display: flex;
      li {
        @include square(50px);
        margin: 0 20px;
        color: #fff;
        text-align: center;
        line-height: 50px;
        &:nth-child(n + 4) {
          // 从第四个开始往后所有的
          background: #ace;
        }
        &:nth-child(-n + 3) {
          // 选中前三个
          background: #333;
        }
        &:nth-last-child(-n + 3) {
          // 选中后三个
          color: red;
        }
        span:only-child {
          // 当 span 是唯一子元素时
          color: #fff;
        }
      }
    }
  }
  .eg2 {
    .desc {
      font-size: 20px;
      font-weight: bold;
      color: green;
      text-shadow: 0 1px red, 0 -1px red, 1px 0 red, -1px 0 red;
    }
    [type] {
      // 所有含有自定义属性 type 的元素
      margin: 40px 0;
      line-height: 1.35;
      color: pink;
      &::first-letter {
        // 选中第一个文字
        padding-left: 1em;
        font-size: 24px;
        color: #ace;
        font-weight: bold;
        text-shadow: 1px 0px 1px red, 0px 1px 1px red, -1px 0px 1px red, 0px -1px 1px red;
      }
      &::first-line {
        // 选中第一行
        font-weight: bold;
      }
    }
    [type|='a'] {
      // 选中type属性为a或者是以a- 开始的属性的标签
      color: green;
    }
    [type~='abc'] {
      // 选中type属性包含a的标签
      color: blue;
    }
    [type^='d'] {
      // 选中type属性以 d 开头的标签
      color: maroon;
    }
    [type*='d'] {
      // 选中 type 属性值任意位置有 d 的标签
      color: purple;
    }
    [type$='d'] {
      // 选中 type 属性值以 d 结尾的标签
      color: #ace;
    }
  }
  .eg3 {
    ul {
      display: flex;
      li {
        @include radiusCube(30vh);
        margin: 0 50px;
        &.circle {
          background: radial-gradient(circle at 0%, red 10%, blue 50%, red 80%);
        }
        &.ellipse {
          background: radial-gradient(ellipse at 70% 30%, red 10%, blue 50%, red 80%);
        }
      }
    }
  }
  .eg4 {
    section {
      position: relative;
      @include square(30vh);
      div {
        position: absolute;
        @include square();
        font-size: 30px;
        transition: 0.4s;
        transform-style: preserve-3d;
        transform: translateX(50px) rotateX(45deg) rotateZ(-45deg);
        &:nth-child(1) {
          background: #ace;
          color: #fff;
          z-index: 99;
          text-align: center;
          line-height: 30vh;
        }
        &:nth-child(2) {
          background: #ccc;
          color: #fff;
          z-index: 9;
        }
      }
      &:hover {
        div:nth-child(1) {
          transform: translateX(50px) rotateX(-45deg) rotateZ(-45deg) translateZ(-100px);
        }
      }
    }
  }
  .eg5 {
    .demo {
      @include square(200px);
      transform-style: preserve-3d;
      margin: 50px 0;
      perspective: 1000;
      .item {
        @include square();
        position: relative;
        transform-style: preserve-3d;
        transition: 0.4s;
        img {
          position: absolute;
          top: 0;
          transform: translateZ(100px);
          transition: 0.6s;
        }
        p {
          position: absolute;
          top: 0;
          @include square();
          background: #ace;
          transform: rotateX(-90deg) translateZ(100px);
        }
      }
      &:hover {
        .item {
          transform: translateZ(-100px) rotateX(90deg);
        }
      }
    }
  }
}
</style>
