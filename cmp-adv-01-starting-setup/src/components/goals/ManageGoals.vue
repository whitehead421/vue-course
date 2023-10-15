<template>
  <div>
    <h2>MANAGE GOALS</h2>
    <input type="text" ref="goal" />
    <button @click="addGoal">Add Goal</button>
    <error-alert v-if="!isInputValid">
      <h2>Please enter a goal</h2>
      <p>Your goal must be at least 5 characters long</p>
      <button @click="isInputValid = true">OK</button>
    </error-alert>
  </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue'
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      goals: [],
      isInputValid: true,
    }
  },
  methods: {
    addGoal() {
      if (this.$refs.goal.value === '') {
        this.isInputValid = false
        return
      }
      this.goals.push(this.$refs.goal.value)
      this.$refs.goal.value = ''
    },
  },
}
</script>
