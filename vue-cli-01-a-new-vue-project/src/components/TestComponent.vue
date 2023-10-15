<template>
  <div>
    <h2>CHILD COMPONENT HERE</h2>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  inject: ['msg'],
}
</script>

<style lang="scss" scoped></style>
