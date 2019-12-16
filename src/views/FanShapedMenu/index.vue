<template>
  <div class="FanShapedMenu">
    <div class="menuHolder">
      <div class="menuWindow">
        <ul class="p1">
          <li class="s1">
            <a href="#">导航菜单</a>
            <ul class="p2">
              <li class="s2">
                <a href="#"><span>首页</span></a>
              </li>
              <li class="s2">
                <a href="#"><span>服务</span></a>
                <ul class="p3 a3">
                  <li><a href="#">打印</a></li>
                  <li><a href="#">编辑</a></li>
                  <li><a href="#">保管</a></li>
                </ul>
              </li>
              <li class="s2">
                <a href="#url"><span>联系</span></a>
                <ul class="p3 a6">
                  <li><a href="#">支持</a></li>
                  <li><a href="#">销售</a></li>
                  <li><a href="#">购买</a></li>
                  <li><a href="#">摄影师</a></li>
                  <li><a href="#">零售商</a></li>
                  <li><a href="#">常规</a></li>
                </ul>
              </li>
              <li class="s2">
                <a href="#url"><span>商店</span></a>
                <ul class="p3 a3">
                  <li><a href="#">南区</a></li>
                  <li><a href="#">北区</a></li>
                  <li><a href="#">中心区</a></li>
                </ul>
              </li>
              <li class="s2">
                <a href="#url"><span>联系我们</span></a>
                <ul class="p3 a3">
                  <li><a href="#">邮箱</a></li>
                  <li><a href="#">邮递</a></li>
                  <li><a href="#">电话</a></li>
                </ul>
              </li>
              <li class="s2 b6">
                <a href="#url"><span>销量</span></a>
                <ul class="p3 a5">
                  <li><a href="#">数码单反机身</a></li>
                  <li><a href="#">镜头</a></li>
                  <li><a href="#">闪光枪</a></li>
                  <li><a href="#">三角架</a></li>
                  <li><a href="#">过滤器</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FanShapedMenu',
  components: {},
  data() {
    return {
      msg: 'hello, FanShapedMenu'
    }
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {}
}
</script>

<style scoped lang="scss">
.FanShapedMenu {
  padding: 30px;
  .menuHolder {
    @include square(100px);
    @include positionCenter();
    ul {
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 0;
      li {
        border-radius: 0 0 50% 0;
        width: 0;
        height: 0;
        &.s1 > a {
          color: #000;
          font: bold 14px/30px arial, sans-serif;
          text-align: center;
          line-height: 80px;
          box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.4);
          transform-origin: 0 0;
        }
        a {
          color: #000;
          font: bold 14px/30px arial, sans-serif;
          text-align: center;
          box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.4);
          transform-origin: 0 0;
        }
      }
      ul {
        transform-origin: 0 0;
        transform: rotate(90deg);
        transition: 1s;
      }
    }
    > ul li {
      position: absolute;
      left: 0;
      top: 0;
    }
    .p2,
    .p3 {
      z-index: -1;
    }
    .s1 > a {
      position: absolute;
      display: block;
      width: 100px;
      height: 100px;
      background: #c8c8c8;
      border-radius: 0 0 100px 0;
    }
    .s2 > a {
      position: absolute;
      display: block;
      width: 100px;
      padding-left: 100px;
      height: 200px;
      background: #ddd;
      border-radius: 0 0 200px 0;
    }
    ul.p3 li a {
      position: absolute;
      display: block;
      width: 100px;
      padding-left: 200px;
      height: 300px;
      background: #999;
      border-radius: 0 0 300px 0;
    }
    li.s2:nth-of-type(6) > a {
      background: #888;
      transform: rotate(75deg);
    }
    li.s2:nth-of-type(5) > a {
      background: #999;
      transform: rotate(60deg);
    }
    li.s2:nth-of-type(4) > a {
      background: #aaa;
      transform: rotate(45deg);
    }
    li.s2:nth-of-type(3) > a {
      background: #bbb;
      transform: rotate(30deg);
    }
    li.s2:nth-of-type(2) > a {
      background: #ccc;
      transform: rotate(15deg);
    }
    .a6 {
      li:nth-of-type(6) > a {
        background: #444;
        transform: rotate(75deg);
      }
      li:nth-of-type(5) > a {
        background: #555;
        transform: rotate(60deg);
      }
      li:nth-of-type(4) > a {
        background: #666;
        transform: rotate(45deg);
      }
      li:nth-of-type(3) > a {
        background: #777;
        transform: rotate(30deg);
      }
      li:nth-of-type(2) > a {
        background: #888;
        transform: rotate(15deg);
      }
    }
    .a5 {
      li:nth-of-type(5) > a {
        background: #555;
        transform: rotate(72deg);
      }
      li:nth-of-type(4) > a {
        background: #666;
        transform: rotate(54deg);
      }
      li:nth-of-type(3) > a {
        background: #777;
        transform: rotate(36deg);
      }
      li:nth-of-type(2) > a {
        background: #888;
        transform: rotate(18deg);
      }
    }
    .a3 {
      li:nth-of-type(3) > a {
        background: #777;
        transform: rotate(60deg);
      }
      li:nth-of-type(2) > a {
        background: #888;
        transform: rotate(30deg);
      }
    }
    li.s1:hover ul.p2 {
      transform: rotate(0deg);
    }
    li.s2:hover ul.p3 {
      transform: rotate(0deg);
    }
    ul li:hover > a {
      background: #ace;
      color: #fff;
    }
    li.s2:hover > a {
      background: #ace;
      color: #fff;
    }
    .a6 li:hover > a {
      background: #ace;
      color: #fff;
    }
    .a5 li:hover > a {
      background: #ace;
      color: #fff;
    }
    .a3 li:hover > a {
      background: #ace;
      color: #fff;
    }
    .menuWindow {
      width: 110px;
      height: 110px;
      overflow: hidden;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 100;
      transition: 0s 1s;
    }
    &:hover {
      .menuWindow {
        width: 310px;
        height: 310px;
        transition: 0s 0s;
      }
      ~ img.close {
        width: 100%;
        height: 100%;
      }
    }
    span {
      display: block;
      transform: rotate(5deg);
    }
    ~ img.close {
      width: 0;
      height: 0;
      position: fixed;
      z-index: -1;
      left: 0;
      top: 0;
    }
  }
}
</style>
