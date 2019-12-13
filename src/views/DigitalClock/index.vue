<template>
  <div class="digital-clock">
    <div id="hours" class="flex">
      <div class="number">
        <div
          v-for="item in 15"
          :key="item"
          :class="['rect', { show: dist[hour[0]].includes(item) }]"
        ></div>
      </div>
      <div class="number">
        <div
          v-for="item in 15"
          :key="item"
          :class="['rect', { show: dist[hour[1]].includes(item) }]"
        ></div>
      </div>
    </div>
    <div class="flash-dot">
      <div v-for="item in 2" :key="item" :class="{ show: time % 2 !== 0 }"></div>
    </div>
    <div id="minute" class="flex">
      <div class="number">
        <div
          v-for="item in 15"
          :key="item"
          :class="['rect', { show: dist[minute[0]].includes(item) }]"
        ></div>
      </div>
      <div class="number">
        <div
          v-for="item in 15"
          :key="item"
          :class="['rect', { show: dist[minute[1]].includes(item) }]"
        ></div>
      </div>
    </div>
    <div class="flash-dot">
      <div v-for="item in 2" :key="item" :class="{ show: time % 2 !== 0 }"></div>
    </div>
    <div id="second" class="flex">
      <div class="number">
        <div
          v-for="item in 15"
          :key="item"
          :class="['rect', { show: dist[second[0]].includes(item) }]"
        ></div>
      </div>
      <div class="number">
        <div
          v-for="item in 15"
          :key="item"
          :class="['rect', { show: dist[second[1]].includes(item) }]"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'digitalClock',
  data() {
    return {
      hour: '',
      minute: '',
      second: '',
      time: 0,
      dist: [
        [1, 2, 3, 4, 6, 7, 9, 10, 12, 13, 14, 15],
        [3, 6, 9, 12, 15],
        [1, 2, 3, 6, 7, 8, 9, 10, 13, 14, 15],
        [1, 2, 3, 6, 7, 8, 9, 12, 13, 14, 15],
        [1, 3, 4, 6, 7, 8, 9, 12, 15],
        [1, 2, 3, 4, 7, 8, 9, 12, 13, 14, 15],
        [1, 2, 3, 4, 7, 8, 9, 10, 12, 13, 14, 15],
        [1, 2, 3, 6, 9, 12, 15],
        [1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 13, 14, 15],
        [1, 2, 3, 4, 6, 7, 8, 9, 12, 13, 14, 15]
      ]
    }
  },
  methods: {
    getTime() {
      let [hour, minute, second] = [
        new Date().getHours(),
        new Date().getMinutes(),
        new Date().getSeconds()
      ]

      hour = hour < 10 ? '0' + hour : hour.toString()
      minute = minute < 10 ? '0' + minute : minute.toString()
      second = second < 10 ? '0' + second : second.toString()

      this.hour = hour
      this.minute = minute
      this.second = second
    }
  },
  created() {
    this.getTime()
    setInterval(() => {
      this.getTime()
      this.time++
    }, 1000)
  }
}
</script>
<style scoped lang="scss">
$dotSize: 35px;
$color: #666;
.digital-clock {
  display: flex;
  justify-content: center;
  align-items: center;
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    .number {
      @include cube($dotSize * 3);
      margin: 0 20px;
      display: flex;
      flex-wrap: wrap;
      .rect {
        @include square($dotSize);
        background: $color;
        border: 2px solid transparent;
        border-right-color: #fff;
        border-bottom-color: #fff;
        transform: scale(0);
        transition: 0.2s;
        &.show {
          transform: scale(1);
        }
      }
    }
  }
  .flash-dot {
    @include cube($dotSize, $dotSize * 5);
    padding: $dotSize 0;
    margin: 0 $dotSize;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
      @include square($dotSize);
      background: $color;
      border: 2px solid transparent;
      border-right-color: #fff;
      border-bottom-color: #fff;
      transform: scale(0);
      transition: 0.2s;
      &.show {
        transform: scale(1);
      }
    }
  }
}
</style>
