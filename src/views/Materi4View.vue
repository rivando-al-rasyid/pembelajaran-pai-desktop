<script setup>
import { ref } from 'vue'
import Modal from '../components/PPTModal.vue' // Adjust the path as necessary

// Reactive state to control modal visibility
const showModal = ref(false)

// Function to close the modal
const handleClose = () => {
  showModal.value = false
}
</script>

<template>
  <div>
    <h1>Menerapkan al-Kulliyatu al-Khamsah dalam Kehidupan sehari-hari</h1>
    <p>
      Kata al-kulliyatul al-khamsah, terdiri dari dua kata yaitu al-kulliyatudan al-khamsah.
      Al-kulliyatu artinya prinsip dasar, sedangkan al- khamsahberarti lima, jadi al-kulliyatu
      al-khamsah berarti lima prinsip dasar hukum Islam. Dalam istilah ushul fiqih, kata
      al-kulliyatu al-khamsah sering disebut dengan maqashid al-khamsah (lima tujuan) dan
      al-dharuriyyat al-khamsah (lima kepentingan yang vital). Maka dapat disimpulkan bahwa
      al-kulliyatu alkhamsah berarti lima prinsip dasar hukum Islam yang bertujuan mewujudkan
      kemaslahatan (al-maslahat), dan apabila hal ini tidak ada maka akan muncul kerusakan
      (mafsadat). Lima prinsip dasar hukum Islam yaitu menjaga agama (hifzhu al-din), menjaga jiwa
      (hifzhu al-nafs), menjaga akal (hifzhu al-'Aql), menjaga keturunan (hifzhu al-nasl), dan
      menjaga harta (hifzhu al-mal).
    </p>
    <br />
    <!-- Button to trigger modal -->
    <button type="button" @click="showModal = true">Full Materi</button>

    <!-- Include the Modal Component, conditionally rendered -->
    <Modal
      v-if="showModal"
      :isVisible="showModal"
      :close="handleClose"
      slideId="1zYmykSlov6hz0yBW-8MeZfZPI-boUXv0"
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
