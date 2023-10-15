<template>
  <ul>
    <resource-item
      v-for="res in resources"
      :id="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
      :key="res.id"
    >
    </resource-item>
  </ul>
</template>

<script>
import ResourceItem from './ResourceItem.vue';
export default {
  components: {
    ResourceItem,
  },
  inject: ['resources'],
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
