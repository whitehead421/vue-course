Vue.createApp({
  data() {
    return {
      enteredValue: '',
      ozellikler: [],
    }
  },
  methods: {
    ozellikEkle() {
      this.ozellikler.push(this.enteredValue)
      this.enteredValue = ''
    },
  },
}).mount('#app')
