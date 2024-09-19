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
      Menghindari Akhlak Madzmumah dan Membiasakan Akhlak Mamudah Agar Hidup Lebih Nyaman dan Berkah
    </h1>
    <p>
      Temperamental atau sifat mudah marah dalam bahasa Arab berasal dari kata ghadhab, dari kata
      dasar ghadhiba-yaghdhibu-ghadhaban. Menurut istilah, ghadhab berarti sifat seseorang yang
      mudah marah karena tidak senang dengan perlakuan atau perbuatan orang lain. Sifat amarah,
      selalu mendorong manusia untuk bertingkah laku buruk. Menurut Sayyid Muhammad Nuh dalam kitab
      'Afatun 'ala at-Thariq marah adalah perubahan emosional yang menimbulkan penyerangan dan
      penyiksaan guna melampiaskan dan mengobati apa yang ada di dalam hati. Sedangkan dalam
      perspektif ilmu tasawuf, Imam An-Nawawi menyebutkan bahwa marah adalah tekanan nafsu dari hati
      yang mengalirkan darah pada bagian wajah yang mengakibatkan kebencian kepada seseorang.
    </p>
    <br />
    <!-- Button to trigger modal -->
    <button type="button" @click="showModal = true">Full Materi</button>

    <!-- Include the Modal Component, conditionally rendered -->
    <Modal
      v-if="showModal"
      :isVisible="showModal"
      :close="handleClose"
      slideId="1POjEO6S8EVvk_rkd332pTAFx2eeZH743"
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
