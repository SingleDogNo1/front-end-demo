<template>
  <div class="calculator-wrapper">
    <div class="calculator">
      <button @click="changeModeEvent" class="toggle-button">
        <p v-if="!changeMode">科学计算器（点击切换至普通计算器）</p>
        <p v-else>普通计算器（点击切换至科学计算器）</p>
      </button>
      <div class="results">
        <input class="input" v-model="current" />
      </div>
      <div class="mode" v-if="changeMode">
        <button
          v-for="(item, index) in commonKey"
          :key="index"
          :class="['button', { 'equal-sign': item === '=' }]"
          @click="press(item)"
        >
          {{ item }}
        </button>
      </div>
      <div class="mode" v-else>
        <button
          v-for="(item, index) in scienceKey"
          :key="index"
          :class="['button', { 'equal-sign': item === '=' }]"
          @click="press(item)"
        >
          {{ item }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'calculator',
  components: {},
  data() {
    return {
      commonKey: [
        '7',
        '8',
        '9',
        '*',
        '<=',
        'C',
        '4',
        '5',
        '6',
        '/',
        '(',
        ')',
        '1',
        '2',
        '3',
        '-',
        'x2',
        '±',
        '0',
        '.',
        '%',
        '+',
        '='
      ],
      scienceKey: [
        'sin',
        'cos',
        'tan',
        'x^',
        '<=',
        'C',
        'log',
        'ln',
        'e',
        '°',
        'rad',
        '√',
        '7',
        '8',
        '9',
        '/',
        'x2',
        'x!',
        '4',
        '5',
        '6',
        '*',
        '(',
        ')',
        '1',
        '2',
        '3',
        '-',
        '%',
        '±',
        '0',
        '.',
        'π',
        '+',
        '='
      ],
      current: '',
      changeMode: true
    }
  },
  methods: {
    press(key) {
      switch (key) {
        case '=':
          if (this.current.includes('^')) {
            let base = this.current.slice(0, this.current.indexOf('^'))
            let exponent = this.current.slice(this.current.indexOf('^') + 1)
            this.current = eval('Math.pow(' + base + ',' + exponent + ')')
          } else {
            this.current = eval(this.current)
          }
          break
        case 'C':
          this.current = ''
          break
        case '*':
          this.current += '*'
          break
        case '/':
          this.current += '/'
          break
        case '+':
          this.current += '+'
          break
        case '-':
          this.current += '-'
          break
        case '±':
          if (this.current.charAt(0) === '-') {
            this.current = this.current.slice(1)
          } else {
            this.current = '-' + this.current
          }
          break
        case '<=':
          this.current = this.current.substring(0, this.current.length - 1)
          break
        case '%':
          this.current = this.current / 100
          break
        case 'π':
          this.current = this.current * Math.PI
          break
        case 'x2':
          this.current = eval(this.current * this.current)
          break
        case '√':
          this.current = Math.sqrt(this.current)
          break
        case 'sin':
          this.current = Math.sin(this.current)
          break
        case 'cos':
          this.current = Math.cos(this.current)
          break
        case 'tan':
          this.current = Math.tan(this.current)
          break
        case 'log':
          this.current = Math.log10(this.current)
          break
        case 'ln':
          this.current = Math.log(this.current)
          break
        case 'x^':
          this.current += '^'
          break
        case 'x!':
          if (this.current === 0) {
            this.current = '1'
          } else if (this.current < 0) {
            this.current = NaN
          } else {
            let number = 1
            for (let i = this.current; i > 0; i--) {
              number *= i
            }
            this.current = number
          }
          break
        case 'e':
          this.current = Math.exp(this.current)
          break
        case 'rad':
          this.current = this.current * (Math.PI / 180)
          break
        case '°':
          this.current = this.current * (180 / Math.PI)
          break
        default:
          this.current += key
      }
    },
    changeModeEvent: function() {
      this.changeMode = !this.changeMode
    }
  }
}
</script>

<style scoped lang="scss">
.calculator-wrapper {
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.calculator {
  width: 480px;
  padding: 20px;
  border-radius: 5px;
  margin: 20px auto;
  font-size: 16px;
  background-color: #333333;
}

.input {
  width: 420px;
  height: 50px;
  border-radius: 0;
  border: 1px solid black;
  background-color: #333333;
  color: #d9d9d9;
  padding: 0 5px 0 5px;
  margin: 0 0px 10px 0px;
  font-size: 30px;
}

.input:focus,
.input:active {
  border-color: #03a9f4;
  box-shadow: 0 0 4px #03a9f4;
  outline: none 0;
}

.button {
  margin: 3px;
  width: 63px;
  border: 1px solid #0d0d0d;
  height: 30px;
  border-radius: 4px;
  color: #d9d9d9;
  background-color: #1a1a1a;
  cursor: pointer;
  outline: none;
}

.mode {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.equal-sign {
  background-color: green;
  width: 133px;
}

.toggle-button {
  border: none;
  background-color: #333333;
  cursor: pointer;
  outline: none;
  font-size: 1rem;
  color: #fff;
  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.35);
}

p {
  margin-top: 0;
}

button::-moz-focus-inner {
  border-color: transparent;
}
</style>
