<template>
  <base-container title="Vuex">
    <h3>{{ counter }}</h3>
    <button @click="addOne">Add 1</button>
  </base-container>
  <the-counter></the-counter>
</template>

<script>
import TheCounter from './components/TheCounter.vue';
export default {
  components: {
    TheCounter,
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', { value: 10 });
      this.$store.commit({
        type: 'increase',
        value: 104,
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
