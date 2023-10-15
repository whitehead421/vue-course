<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: none;
  color: white;
  background: #c89300;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  transition: all 0.3s ease-out;
}

button:hover,
button:active {
  background: #ce5c00;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}

.flat {
  background: transparent;
  color: #c89300;
  box-shadow: none;
}

.flat:hover,
.flat:active {
  background: #ebebeb;
  opacity: 0.8;
  color: #ce5c00;
  box-shadow: none;
}
</style>
