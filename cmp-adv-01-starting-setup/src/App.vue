<template>
  <div>
    <the-header></the-header>
    <button @click="setComponent('active-goals')">Active Goals</button>
    <button @click="setComponent('manage-goals')">Manage Goals</button>
    <!-- <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals> -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import ActiveGoals from './components/goals/ActiveGoals.vue'
import ManageGoals from './components/goals/ManageGoals.vue'

export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: 'active-goals',
    }
  },
  methods: {
    setComponent(cmp) {
      this.selectedComponent = cmp
    },
  },
}
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
