<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '<3' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    isFavorite: { type: Boolean, required: true },
  },
  data() {
    return {
      detailsAreVisible: false,
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id)
    },
  },
  // emits: {
  //   'toggle-favorite': function (id) {
  //     if (id) {
  //       return true
  //     } else {
  //       console.warn(
  //         'No id provided for toggle-favorite event! -- FriendContact.vue'
  //       )
  //       return false
  //     }
  //   },
  // },
  emits: ['toggle-favorite'],
}
</script>
