<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: ['type', 'mode'],
};
</script>
<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #640032;
  border-radius: 10px;
  border: 1px solid #640032;
  color: white;
  cursor: pointer;
  margin: 10px;
}

button:hover,
button:active {
  background-color: #8d0247;
  border-color: #640032;
}

.flat {
  background-color: transparent;
  color: #640032;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>
