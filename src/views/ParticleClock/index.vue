<template>
  <div ref="wrapper" class="clock">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import digit from './digit'

export default {
  name: 'ParticleClock',
  mounted() {
    this.$nextTick(() => {
      let [preHours, preMinutes, preSeconds] = []
      const [width, height] = [this.$refs.wrapper.offsetWidth, this.$refs.wrapper.offsetHeight]
      const [top, left] = [height / 2 - 80, width / 2 - 500]
      const balls = []
      const colors = [
        '#33B5E5',
        '#0099CC',
        '#AA66CC',
        '#669900',
        '#FFBB33',
        '#FF8800',
        '#FF4444',
        '#CC0000',
        '#AACCEE'
      ]
      const r = colors.length
      const canvas = document.getElementById('canvas')
      const context = canvas.getContext('2d')

      canvas.width = width
      canvas.height = height

      setInterval(function() {
        const [curHours, curMinutes, curSeconds] = [
          new Date().getHours(),
          new Date().getMinutes(),
          new Date().getSeconds()
        ]
        if (preSeconds != curSeconds) {
          if (parseInt(curHours / 10) != parseInt(preHours / 10)) {
            addBall(left, top, parseInt(curHours / 10))
          }
          if (parseInt(curHours % 10) != parseInt(preHours % 10)) {
            addBall(left + 15 * (r + 1), top, parseInt(curHours % 10))
          }
          if (parseInt(curMinutes / 10) != parseInt(preMinutes / 10)) {
            addBall(left + 39 * (r + 1), top, parseInt(curMinutes / 10))
          }
          if (parseInt(curMinutes % 10) != parseInt(preMinutes % 10)) {
            addBall(left + 54 * (r + 1), top, parseInt(curMinutes % 10))
          }
          if (parseInt(curSeconds / 10) != parseInt(preSeconds / 10)) {
            addBall(left + 78 * (r + 1), top, parseInt(curSeconds / 10))
          }
          if (parseInt(curSeconds % 10) != parseInt(preSeconds % 10)) {
            addBall(left + 93 * (r + 1), top, parseInt(curSeconds % 10))
          }
        }
        render(context)
      }, 50)

      function addBall(x, y, num) {
        for (let i = 0; i < digit[num].length; i++) {
          for (let j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] == 1) {
              const ball = {
                x: x + j * 2 * (r + 1) + r + 1,
                y: y + i * 2 * (r + 1) + r + 1,
                g: 1.5 + Math.random(),
                vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
                vy: -5,
                color: colors[Math.floor(Math.random() * colors.length)]
              }
              balls.push(ball)
            }
          }
        }
      }
      function renderBalls(context) {
        for (let i = 0; i < balls.length; i++) {
          context.beginPath()
          context.arc(balls[i].x, balls[i].y, r, 0, 2 * Math.PI, false)
          context.fillStyle = balls[i].color
          context.fill()
          context.closePath()
        }
      }
      //更新彩色小球位置
      function UpdateBalls() {
        for (let i = 0; i < balls.length; i++) {
          balls[i].x += balls[i].vx
          balls[i].y += balls[i].vy
          balls[i].vy += balls[i].g
          if (balls[i].y + r >= height) {
            balls[i].y = height - r
            balls[i].vy = -balls[i].vy * 0.6
          }
        }
      }
      function render(context) {
        context.clearRect(0, 0, width, height)
        const [hours, minutes, seconds] = ([preHours, preMinutes, preSeconds] = [
          new Date().getHours(),
          new Date().getMinutes(),
          new Date().getSeconds()
        ])
        //时
        renderDigit(left, top, parseInt(hours / 10), context)
        renderDigit(left + 15 * (r + 1), top, hours % 10, context)
        renderDigit(left + 30 * (r + 1), top, 10, context)
        //分
        renderDigit(left + 39 * (r + 1), top, parseInt(minutes / 10), context)
        renderDigit(left + 54 * (r + 1), top, minutes % 10, context)
        renderDigit(left + 69 * (r + 1), top, 10, context)
        //秒
        renderDigit(left + 78 * (r + 1), top, parseInt(seconds / 10), context)
        renderDigit(left + 93 * (r + 1), top, seconds % 10, context)
        //画小球
        renderBalls(context)
        //改变小球路径
        UpdateBalls()
      }
      //渲染每个数字
      function renderDigit(x, y, num, context) {
        context.fillStyle = 'green'
        for (let i = 0; i < digit[num].length; i++) {
          for (let j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] == 1) {
              context.beginPath()
              context.arc(
                x + j * 2 * (r + 1) + r + 1,
                y + i * 2 * (r + 1) + r + 1,
                r,
                0,
                2 * Math.PI,
                false
              )
              context.closePath()
              context.fill()
            }
          }
        }
      }
    })
  }
}
</script>
