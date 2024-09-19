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
    <h1>
      Peran Tokoh Ulama dalam Penyebaran Islam di Indonesia (Metode Dakwah Islam Oleh Wali Songo di
      Tanah Jawa
    </h1>
    <p>
      Dalam buku The Golden Kersonese: Studies in the Historical Geography of The Malay Peninsula
      Before A.D. 1500, karya P. Wheatley, Islam masuk ke Indonesia pada pertengahan abad ke-7. Dan
      yang paling awal menyebarkan ajaran Islam ke tanah Jawa adalah para pedagang Arab, melalui
      jalur perdagangan dengan Nusantara, jauh sebelum Islam. Pada abad ke-7 di masa kekuasaan Ratu
      Simha di kerajaan Kalingga yang terkenal keras dalam penegakan hukum, datangnya para pedagang
      Arab diberitakan cukup banyak oleh sumber-sumber dari Dinasti Tang di Cina. Dalam Islam Comes
      to Malaysia, S.Q. Fatimi menuliskan bahwa pada abad ke-10 Masehi telah terjadi migrasi
      keluarga yang berasal dari bangsa Persia.
    </p>
    <br />
    <!-- Button to trigger modal -->
    <button type="button" @click="showModal = true">Full Materi</button>

    <!-- Include the Modal Component, conditionally rendered -->
    <Modal
      v-if="showModal"
      :isVisible="showModal"
      :close="handleClose"
      slideId="1oDVH3q7HFOxuk6vFp87ehh25fdFQci3F"
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
