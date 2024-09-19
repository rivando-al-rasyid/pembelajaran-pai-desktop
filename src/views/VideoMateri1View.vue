<script setup>
import { ref } from 'vue'
import Modal from '../components/VideoModal.vue' // Adjust the path as necessary

// Reactive state to control modal visibility
const showModal = ref(false)

// Function to close the modal
const handleClose = () => {
  showModal.value = false
}
</script>

<template>
  <div>
    <h1>Materi PAI dan Budi Pekerti Kelas 10 Bab 6 Semester 2 Kurikulum Merdeka</h1>
    <p>
      Video ini membahas mengenai Materi PAI dan Budi Pekerti Kelas 10 Bab 6 Semester 2 Kurikulum
      Merdeka tentang Menjauhi Pergaulan Bebas dan Perbuatan Zina untuk Melindungi Harkat dan
      Martabat Manusia
    </p>
    <br />
    <!-- Button to trigger modal -->
    <button type="button" @click="showModal = true">Video</button>

    <!-- Include the Modal Component, conditionally rendered -->
    <Modal v-if="showModal" :isVisible="showModal" :close="handleClose" videoId="YEcBo4UahnI" />
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
