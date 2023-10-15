<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    259deg,
    rgba(255, 214, 0, 1) 0%,
    rgba(200, 147, 0, 1) 100%
  );
  padding: 1rem;
}

header h1 {
  color: white;
  margin: 0;
  font-weight: 200;
}
</style>
