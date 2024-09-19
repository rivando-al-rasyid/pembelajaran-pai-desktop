<script setup>
import { ref } from 'vue'
import Modal from '../components/DocumentModal.vue' // Adjust the path as necessary

// Reactive state to control modal visibility
const showModal = ref(false)

// Function to close the modal
const handleClose = () => {
  showModal.value = false
}
</script>

<template>
  <div>
    <h1>Dokumen KD KI</h1>
    <p>Berisikan document Kompetensi dasar dan Kurikulum</p>
    <br />
    <!-- Button to trigger modal -->
    <button type="button" @click="showModal = true">Doc</button>

    <!-- Include the Modal Component, conditionally rendered -->
    <Modal
      v-if="showModal"
      :isVisible="showModal"
      :close="handleClose"
      docId="1oSLP68tRB1cHTQ4Rv_i6AN_hwMkD3Vcu"
    />
  </div>
</template>

<style scoped>
/* Style for current label */
.current-label {
  color: green;
  cursor: pointer;
}

/* Style for buttons */
button {
  background-color: blue;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-right: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
}

/* Space between icon and text */
button i {
  margin-right: 0.5rem;
}

/* Hover effect for buttons */
button:hover {
  background-color: darkblue;
}
</style>
