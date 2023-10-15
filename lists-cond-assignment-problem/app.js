Vue.createApp({
  data() {
    return { enteredValue: '', tasks: [], hide: true }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredValue)
      this.enteredValue = ''
    },
    changeVisibility() {
      this.hide = !this.hide
    },
  },
  computed: {
    btnValue() {
      return this.hide ? 'Hide' : 'Show List'
    },
  },
}).mount('#assignment')
