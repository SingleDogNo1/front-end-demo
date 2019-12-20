<template>
  <div class="carousel">
    <div class="carousel-demo">
      <div ref="wrapper" class="carousel-wrapper">
        <div v-for="(item, index) in imagesList" :key="index"><img :src="item" /></div>
      </div>
      <div ref="pagination" class="carousel-pagination">
        <span v-for="(item, index) in imagesList" :key="index" @click="slideChange(index)"></span>
      </div>
    </div>

    <el-select v-model="effect" placeholder="选择切换效果" size="mini" class="selector">
      <el-option-group v-for="group in effectList" :key="group.label" :label="group.label">
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-option-group>
    </el-select>

    <div class="doc">
      <h2>options</h2>
      <el-table :data="optionsData" stripe style="width: 100%">
        <el-table-column prop="option" label="参数" width="180"></el-table-column>
        <el-table-column prop="value" label="值" width="180"></el-table-column>
        <el-table-column prop="type" label="类型" width="180"></el-table-column>
        <el-table-column prop="desc" label="描述"></el-table-column>
      </el-table>
      <h2>methods</h2>
      <el-table :data="methodsData" stripe style="width: 100%">
        <el-table-column prop="method" label="方法" width="180"></el-table-column>
        <el-table-column prop="desc" label="描述"></el-table-column>
      </el-table>
      <h2>Ease</h2>
      <p>
        无论 options 设置的 ease 还是 methods 里通过 setEase 修改
        ease，都可以使用内置的过渡方式，也可以自己定义过渡曲线函数。内置支持 linear、 ease、
        ease-in、 ease-out、 ease-in-out、 bounce等
      </p>
      <pre>
        <span>new pageSwitch('#ps',{ ease: 'ease' })</span>
        <span></span>
        <span>new pageSwitch('#ps',{ ease: function(t,b,c,d){ return c*t/d + b } })</span>
        <span></span>
        <span>pw.setEase('ease')</span>
        <span></span>
        <span>pw.setEase(function(t,b,c,d){ return c*t/d + b })</span>
      </pre>
      <h2>transition</h2>
      <p>设置和修改的方式同 ease，内置支持的切换方式见 demo</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  components: {},
  data() {
    return {
      pageSwitch: null,
      imagesList: [
        require('./images/1.jpg'),
        require('./images/2.jpg'),
        require('./images/3.jpg'),
        require('./images/4.jpg'),
        require('./images/5.jpg'),
        require('./images/6.jpg'),
        require('./images/7.jpg'),
        require('./images/8.jpg')
      ],
      effectList: [
        {
          label: '淡入淡出',
          options: [
            {
              value: 'fade',
              label: 'fade'
            }
          ]
        },
        {
          label: '滚动效果',
          options: [
            {
              value: 'scroll',
              label: 'scroll'
            },
            {
              value: 'scroll3d',
              label: 'scroll3d'
            },
            {
              value: 'scrollCover',
              label: 'scrollCover'
            },
            {
              value: 'scrollCoverReverse',
              label: 'scrollCoverReverse'
            },
            {
              value: 'scrollCoverIn',
              label: 'scrollCoverIn'
            },
            {
              value: 'scrollCoverOut',
              label: 'scrollCoverOut'
            },
            {
              value: 'scrollX',
              label: 'scrollX'
            },
            {
              value: 'scroll3dX',
              label: 'scroll3dX'
            },
            {
              value: 'scrollCoverX',
              label: 'scrollCoverX'
            },
            {
              value: 'scrollCoverReverseX',
              label: 'scrollCoverReverseX'
            },
            {
              value: 'scrollCoverInX',
              label: 'scrollCoverInX'
            },
            {
              value: 'scrollCoverOutX',
              label: 'scrollCoverOutX'
            },
            {
              value: 'scrollY',
              label: 'scrollY'
            },
            {
              value: 'scroll3dY',
              label: 'scroll3dY'
            },
            {
              value: 'scrollCoverY',
              label: 'scrollCoverY'
            },
            {
              value: 'scrollCoverReverseY',
              label: 'scrollCoverReverseY'
            },
            {
              value: 'scrollCoverInY',
              label: 'scrollCoverInY'
            },
            {
              value: 'scrollCoverOutY',
              label: 'scrollCoverOutY'
            }
          ]
        },
        {
          label: '滑动效果',
          options: [
            {
              value: 'slide',
              label: 'slide'
            },
            {
              value: 'slideCover',
              label: 'slideCover'
            },
            {
              value: 'slideCoverReverse',
              label: 'slideCoverReverse'
            },
            {
              value: 'slideCoverIn',
              label: 'slideCoverIn'
            },
            {
              value: 'slideCoverOut',
              label: 'slideCoverOut'
            },
            {
              value: 'slideCoverX',
              label: 'slideCoverX'
            },
            {
              value: 'slideCoverReverseX',
              label: 'slideCoverReverseX'
            },
            {
              value: 'slideCoverInX',
              label: 'slideCoverInX'
            },
            {
              value: 'slideCoverOutX',
              label: 'slideCoverOutX'
            },
            {
              value: 'slideY',
              label: 'slideY'
            },
            {
              value: 'slideCoverY',
              label: 'slideCoverY'
            },
            {
              value: 'slideCoverReverseY',
              label: 'slideCoverReverseY'
            },
            {
              value: 'slideCoverInY',
              label: 'slideCoverInY'
            },
            {
              value: 'slideCoverOutY',
              label: 'slideCoverOutY'
            }
          ]
        },
        {
          label: '封面效果',
          options: [
            {
              value: 'flow',
              label: 'flow'
            },
            {
              value: 'flowCover',
              label: 'flowCover'
            },
            {
              value: 'flowCoverReverse',
              label: 'flowCoverReverse'
            },
            {
              value: 'flowCoverIn',
              label: 'flowCoverIn'
            },
            {
              value: 'flowCoverOut',
              label: 'flowCoverOut'
            },
            {
              value: 'flowX',
              label: 'flowX'
            },
            {
              value: 'flowCoverX',
              label: 'flowCoverX'
            },
            {
              value: 'flowCoverReverseX',
              label: 'flowCoverReverseX'
            },
            {
              value: 'flowCoverInX',
              label: 'flowCoverInX'
            },
            {
              value: 'flowCoverOutX',
              label: 'flowCoverOutX'
            },
            {
              value: 'flowY',
              label: 'flowY'
            },
            {
              value: 'flowCoverY',
              label: 'flowCoverY'
            },
            {
              value: 'flowCoverReverseY',
              label: 'flowCoverReverseY'
            },
            {
              value: 'flowCoverInY',
              label: 'flowCoverInY'
            },
            {
              value: 'flowCoverOutY',
              label: 'flowCoverOutY'
            }
          ]
        },
        {
          label: '裁切效果',
          options: [
            {
              value: 'slice',
              label: 'slice'
            },
            {
              value: 'sliceX',
              label: 'sliceX'
            },
            {
              value: 'sliceY',
              label: 'sliceY'
            }
          ]
        },
        {
          label: '缩放效果',
          options: [
            {
              value: 'zoom',
              label: 'zoom'
            },
            {
              value: 'zoomCover',
              label: 'zoomCover'
            },
            {
              value: 'zoomCoverReverse',
              label: 'zoomCoverReverse'
            },
            {
              value: 'zoomCoverIn',
              label: 'zoomCoverIn'
            },
            {
              value: 'zoomCoverOut',
              label: 'zoomCoverOut'
            },
            {
              value: 'zoomX',
              label: 'zoomX'
            },
            {
              value: 'zoomCoverX',
              label: 'zoomCoverX'
            },
            {
              value: 'zoomCoverReverseX',
              label: 'zoomCoverReverseX'
            },
            {
              value: 'zoomCoverInX',
              label: 'zoomCoverInX'
            },
            {
              value: 'zoomCoverOutX',
              label: 'zoomCoverOutX'
            },
            {
              value: 'zoomY',
              label: 'zoomY'
            },
            {
              value: 'zoomCoverY',
              label: 'zoomCoverY'
            },
            {
              value: 'zoomCoverReverseY',
              label: 'zoomCoverReverseY'
            },
            {
              value: 'zoomCoverInY',
              label: 'zoomCoverInY'
            },
            {
              value: 'zoomCoverOutY',
              label: 'zoomCoverOutY'
            }
          ]
        },
        {
          label: '扭曲效果',
          options: [
            {
              value: 'skew',
              label: 'skew'
            },
            {
              value: 'skewCover',
              label: 'skewCover'
            },
            {
              value: 'skewCoverReverse',
              label: 'skewCoverReverse'
            },
            {
              value: 'skewCoverIn',
              label: 'skewCoverIn'
            },
            {
              value: 'skewCoverOut',
              label: 'skewCoverOut'
            },
            {
              value: 'skewX',
              label: 'skewX'
            },
            {
              value: 'skewCoverX',
              label: 'skewCoverX'
            },
            {
              value: 'skewCoverReverseX',
              label: 'skewCoverReverseX'
            },
            {
              value: 'skewCoverInX',
              label: 'skewCoverInX'
            },
            {
              value: 'skewCoverOutX',
              label: 'skewCoverOutX'
            },
            {
              value: 'skewY',
              label: 'skewY'
            },
            {
              value: 'skewCoverY',
              label: 'skewCoverY'
            },
            {
              value: 'skewCoverReverseY',
              label: 'skewCoverReverseY'
            },
            {
              value: 'skewCoverInY',
              label: 'skewCoverInY'
            },
            {
              value: 'skewCoverOutY',
              label: 'skewCoverOutY'
            }
          ]
        },
        {
          label: '翻转效果',
          options: [
            {
              value: 'flip',
              label: 'flip'
            },
            {
              value: 'flip3d',
              label: 'flip3d'
            },
            {
              value: 'flipClock',
              label: 'flipClock'
            },
            {
              value: 'flipPaper',
              label: 'flipPaper'
            },
            {
              value: 'flipCover',
              label: 'flipCover'
            },
            {
              value: 'flipCoverReverse',
              label: 'flipCoverReverse'
            },
            {
              value: 'flipCoverIn',
              label: 'flipCoverIn'
            },
            {
              value: 'flipCoverOut',
              label: 'flipCoverOut'
            },
            {
              value: 'flipX',
              label: 'flipX'
            },
            {
              value: 'flip3dX',
              label: 'flip3dX'
            },
            {
              value: 'flipClockX',
              label: 'flipClockX'
            },
            {
              value: 'flipPaperX',
              label: 'flipPaperX'
            },
            {
              value: 'flipCoverX',
              label: 'flipCoverX'
            },
            {
              value: 'flipCoverReverseX',
              label: 'flipCoverReverseX'
            },
            {
              value: 'flipCoverInX',
              label: 'flipCoverInX'
            },
            {
              value: 'flipCoverOutX',
              label: 'flipCoverOutX'
            },
            {
              value: 'flipY',
              label: 'flipY'
            },
            {
              value: 'flip3dY',
              label: 'flip3dY'
            },
            {
              value: 'flipClockY',
              label: 'flipClockY'
            },
            {
              value: 'flipPaperY',
              label: 'flipPaperY'
            },
            {
              value: 'flipCoverY',
              label: 'flipCoverY'
            },
            {
              value: 'flipCoverReverseY',
              label: 'flipCoverReverseY'
            },
            {
              value: 'flipCoverInY',
              label: 'flipCoverInY'
            },
            {
              value: 'flipCoverOutY',
              label: 'flipCoverOutY'
            }
          ]
        },
        {
          label: '爆炸效果',
          options: [
            {
              value: 'bomb',
              label: 'bomb'
            },
            {
              value: 'bombCover',
              label: 'bombCover'
            },
            {
              value: 'bombCoverReverse',
              label: 'bombCoverReverse'
            },
            {
              value: 'bombCoverIn',
              label: 'bombCoverIn'
            },
            {
              value: 'bombCoverOut',
              label: 'bombCoverOut'
            },
            {
              value: 'bombX',
              label: 'bombX'
            },
            {
              value: 'bombCoverX',
              label: 'bombCoverX'
            },
            {
              value: 'bombCoverReverseX',
              label: 'bombCoverReverseX'
            },
            {
              value: 'bombCoverInX',
              label: 'bombCoverInX'
            },
            {
              value: 'bombCoverOutX',
              label: 'bombCoverOutX'
            },
            {
              value: 'bombY',
              label: 'bombY'
            },
            {
              value: 'bombCoverY',
              label: 'bombCoverY'
            },
            {
              value: 'bombCoverReverseY',
              label: 'bombCoverReverseY'
            },
            {
              value: 'bombCoverInY',
              label: 'bombCoverInY'
            },
            {
              value: 'bombCoverOutY',
              label: 'bombCoverOutY'
            }
          ]
        }
      ],
      effect: '',
      optionsData: [
        {
          option: 'duration',
          value: '600(ms)',
          type: 'number',
          desc: '过渡持续时间'
        },
        {
          option: 'direction',
          value: '1',
          type: 'number',
          desc: '页面切换方向，0横向，1纵向'
        },
        {
          option: 'start',
          value: '0',
          type: 'number',
          desc: '默认显示第几张'
        },
        {
          option: 'loop',
          value: 'true',
          type: 'boolean',
          desc: '是否循环切换'
        },
        {
          option: 'ease',
          value: '详细见下方',
          type: 'string | function',
          desc: '过渡曲线动画'
        },
        {
          option: 'transition',
          value: '详细见下方',
          type: 'string | function',
          desc: '切换方式'
        },
        {
          option: 'freeze',
          value: 'false',
          type: 'boolean',
          desc: '是否冻结页面。冻结后不可响应用户操作，但可以通过方法操作。'
        },
        {
          option: 'mouse',
          value: 'true',
          type: 'boolean',
          desc: '是否启用鼠标拖拽'
        },
        {
          option: 'mousewheel',
          value: 'false',
          type: 'boolean',
          desc: '是否启用鼠标滚轮切换'
        },
        {
          option: 'arrowkey',
          value: 'false',
          type: 'boolean',
          desc: '是否启用键盘方向键切换'
        },
        {
          option: 'autoplay',
          value: 'false',
          type: 'boolean',
          desc: '是否自动播放幻灯'
        },
        {
          option: 'interval',
          value: '600(ms)',
          desc: '幻灯播放时间间隔'
        }
      ],
      methodsData: [
        {
          method: 'pw.prev()',
          desc: '上一张'
        },
        {
          method: 'pw.next()',
          desc: '下一张'
        },
        {
          method: 'pw.slide(index)',
          desc: '滑动到第 index 张'
        },
        {
          method: 'pw.setEase(ease)',
          desc: '重新设置过渡曲线'
        },
        {
          method: 'pw.setTransition(transition)',
          desc: '重新设置切换方式'
        },
        {
          method: 'pw. freeze(true | false)',
          desc: '冻结、解冻轮播，冻结后的页面不允许用户操作，但允许通过方法调用'
        },
        {
          method: 'pw.play()',
          desc: '自动切换轮播图'
        },
        {
          method: 'pw.pause()',
          desc: '暂停轮播图自动切换'
        },
        {
          method: 'pw.prepend(DOM)',
          desc: '往轮播图前插入节点'
        },
        {
          method: 'pw.append(DOM)',
          desc: '往轮播图最后插入节点'
        },
        {
          method: 'pw.insertBefore(DOM, index)',
          desc: '往轮播图第 index 张之后插入节点'
        },
        {
          method: 'pw.remove(index)',
          desc: '删除第 index 张轮播图'
        },
        {
          method: 'pw.isStatic()',
          desc: '查看轮播图是否为静止状态'
        },
        {
          method: 'pw.destroy()',
          desc: '销毁pageSwitch实例'
        },
        {
          method: 'pw.on(event, callback)',
          desc:
            '监听 pageSwitch 实例。before -- 页面切换前； after -- 页面切换后； update -- 页面切换中； dragStart -- 开始拖拽； dragMove -- 拖拽中； dragEnd -- 结束拖拽'
        }
      ]
    }
  },
  computed: {},
  watch: {
    effect(value) {
      this.pageSwitch.destroy()
      this.initPageSwitch(value)
    }
  },
  methods: {
    initPageSwitch(transitionName = 'flipClock') {
      const carouselWrapper = this.$refs.wrapper
      const carouselPagination = this.$refs.pagination.querySelectorAll('span')
      this.pageSwitch = new pageSwitch(carouselWrapper, {
        duration: 600,
        start: 0,
        direction: 1,
        loop: true,
        ease: /flip(?!Paper)/.test(transitionName) ? 'bounce' : 'ease',
        transition: transitionName,
        mouse: true,
        mousewheel: true,
        arrowkey: true,
        autoplay: true,
        interval: 2000
      })

      this.pageSwitch.on('before', (m, n) => {
        carouselPagination[m].classList.remove('active')
        carouselPagination[n].classList.add('active')
      })

      if (/^(?:scroll3d|flip)/.test(transitionName)) {
        carouselWrapper.classList.add('visible')
      } else {
        carouselWrapper.classList.remove('visible')
      }
    },
    slideChange(index) {
      this.pageSwitch.slide(index)
    }
  },
  mounted() {
    this.initPageSwitch()
  }
}
</script>

<style scoped lang="scss">
.carousel {
  padding: 30px;
  position: relative;
  .carousel-demo {
    @include cube(300px, 500px);
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    .carousel-wrapper {
      @include positionCenter();
      overflow: hidden;
      z-index: 1;
      &.visible {
        overflow: visible;
      }
      div {
        overflow: hidden;
      }
      img {
        display: block;
        @include cube();
      }
    }
    .carousel-pagination {
      z-index: 10;
      position: absolute;
      display: flex;
      justify-content: center;
      margin: 0 5px;
      width: 100%;
      height: 10px;
      bottom: 20px;
      span {
        overflow: hidden;
        display: block;
        box-sizing: border-box;
        @include radiusCube(14px);
        border: 3px solid #fff;
        margin: 0 4px;
        transition: all 0.6s ease;
        &.active {
          background: #fff;
        }
      }
    }
  }
  .selector {
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
  }
  .doc {
    h2 {
      margin: 1em 0;
    }
    p {
      margin-bottom: 20px;
    }
  }
}
</style>
