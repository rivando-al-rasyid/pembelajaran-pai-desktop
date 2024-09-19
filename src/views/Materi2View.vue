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
    <h1>Hakikat Mencintai Allah Swt., Khauf, Raja', dan Tawakal Kepada-Nya</h1>
    <p>
      Cinta adalah perasaan yang suci dan lembut berupa rasa kasih sayang. Perasaan cinta ditandai
      dengan rasa rindu kepada yang dicintai. Tingkatan cinta tertinggi dan hakiki adalah cinta
      kepada Allah Swt. Cinta kepada Allah Swt. (mahabbatullah) berarti menempatkan Allah Swt. dalam
      hati sanubari. Cinta merupakan unsur terpenting dalam ibadah, di samping khauf (takut) dan
      raja' (berharap). Ketiganya menjadi perasaan hati yang harus dimiliki setiap mukmin dalam
      melaksanakan ibadah kepada Allah Swt.
    </p>
    <p>
      Cinta seseorang kepada Allah tumbuh dari pengaruh akal dan jiwa yang kuat akibat berpikir
      mendalam terhadap kekuasaan-Nya di langit dan bumi. Cinta ini akan semakin menggelora dengan
      merenungkan ayat-ayat Al-Qur'an dan membiasakan diri berzikir dengan nama dan sifat- sifat
      Allah Swt.
    </p>
    <br />
    <!-- Button to trigger modal -->
    <button type="button" @click="showModal = true">Full Materi</button>

    <!-- Include the Modal Component, conditionally rendered -->
    <Modal
      v-if="showModal"
      :isVisible="showModal"
      :close="handleClose"
      slideId="1MYpubd3Tv4alYdVwdH2xZ7beeONh6HMI"
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
