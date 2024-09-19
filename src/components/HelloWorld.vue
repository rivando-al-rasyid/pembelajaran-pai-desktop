<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 600; /* Updated font weight */
  font-size: 2.8rem; /* Updated font size */
  position: relative;
  top: -5px; /* Updated position */
}

h2 {
  font-size: 1.5rem; /* Added styling for h2 */
}

.greetings h1,
.greetings h2 {
  text-align: center; /* Updated to include h2 */
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h2 {
    text-align: left; /* Updated to include h2 */
  }
}
</style>
