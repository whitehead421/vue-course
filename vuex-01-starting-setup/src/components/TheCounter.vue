<template>
  <base-container>
    <h3>From A Different Component</h3>
    <p>
      {{ $store.state.counter }}
    </p>
  </base-container>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    },
  },
};
</script>
