<template>
  <div class="calendar">
    <Calendar
      ref="calendarItem"
      :zero="calendar.zero"
      :lunar="calendar.lunar"
      @prev="getPrevMonth"
      @next="getNextMonth"
      @select="getFullDay"
    />
  </div>
</template>

<script>
import Calendar from '@/components/Calendar'

export default {
  name: 'calendar',
  components: {
    Calendar
  },
  data() {
    return {
      calendar: {
        zero: true,
        lunar: false
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    getPrevMonth(month, year) {
      console.log(year, month)
    },
    getNextMonth(month, year) {
      console.log(year, month)
    },
    getFullDay(data) {
      console.log(data)
    }
  },
  created() {},
  mounted() {}
}
</script>

<style scoped lang="scss">
.calendar {
  padding: 30px;
}
</style>
