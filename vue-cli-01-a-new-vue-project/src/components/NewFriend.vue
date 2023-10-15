<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input v-model="enteredName" type="text" />
    </div>
    <div>
      <label>Phone</label>
      <input v-model="enteredPhone" type="tel" />
    </div>
    <div>
      <label>Email</label>
      <input v-model="enteredEmail" type="email" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['add-contact'],
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: '',
    }
  },
  methods: {
    submitData() {
      const contactData = {
        name: this.enteredName,
        phone: this.enteredPhone,
        email: this.enteredEmail,
      }
      this.$emit('add-contact', contactData)
      this.enteredName = ''
      this.enteredPhone = ''
      this.enteredEmail = ''
    },
  },
}
</script>
