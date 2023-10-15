<template>
  <div>
    <h3>DEEPER COMPONENT HERE</h3>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  inject: ['msg'],
}
</script>

<style lang="scss" scoped></style>
