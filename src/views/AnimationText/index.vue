<template>
  <div class="animationText">
    <p>CSS Animation is</p>
    <p>
      <span class="word alizarin">awesome.</span>
      <span class="word wisteria">beautiful.</span>
      <span class="word peter-river">creative.</span>
      <span class="word emerald">fabulous.</span>
      <span class="word sun-flower">interesting.</span>
    </p>
    <p v-if="words">
      <span
        v-for="(item, index) in words"
        :key="index"
        :class="item.tag"
        :style="{ opacity: index === activeTag ? 1 : 0 }"
      >
        <span
          v-for="(item2, index2) in item.text"
          :key="index2"
          class="letter active"
          :style="{
            transition: 'all 0.08s ease ' + (80 * index2) / 1000 + 's',
            transform: 'translateY(-100%)'
          }"
        >
          {{ item2 }}
        </span>
      </span>
    </p>
  </div>
</template>
<script>
export default {
  name: 'animationText',
  data() {
    return {
      words: [],
      currentWordIndex: 0,
      maxWordIndex: 0
    }
  },
  computed: {
    activeTag() {
      return this.currentWordIndex % this.words.length
    }
  },
  methods: {
    classList(index) {
      setTimeout(() => {
        return 'out'
      }, 80 * index)
    },
    rotateText(words) {
      let currentWord = words[this.currentWordIndex]
      var nextWord =
        this.currentWordIndex === this.maxWordIndex ? words[0] : words[this.currentWordIndex + 1]

      Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
          letter.classList.add('out')
        }, i * 80)
      })

      Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = 'letter behind'
        setTimeout(function() {
          letter.className = 'letter in'
        }, 340 + i * 80)
      })
      currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1
    }
  },
  mounted() {
    const words = document.querySelectorAll('.word')
    words.forEach(word => {
      this.words.push({
        tag: word.classList.value,
        text: word.textContent
      })
    })
    setInterval(() => {
      this.currentWordIndex++
    }, 4000)
  }
}
</script>
<style scoped lang="scss">
.animationText {
  @include center;
  background: #333;
  font-size: 36px;
  font-weight: 600;
  color: #fff;
  p {
    display: inline-flex;
    margin: 0;
    .word {
      position: absolute;
      display: flex;
      opacity: 0;
      .letter {
        transform-origin: center center 25px;
        .active {
          transform: translateY(0);
        }
      }
    }

    .alizarin {
      color: #e74c3c;
    }

    .wisteria {
      color: #8e44ad;
    }

    .peter-river {
      color: #3498db;
    }

    .emerald {
      color: #2ecc71;
    }

    .sun-flower {
      color: #f1c40f;
    }
  }
}
</style>
