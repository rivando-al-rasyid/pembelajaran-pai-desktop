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
      Menjauhi Pergaulan Bebas dan Perbuatan Zina untuk Melindungi Harkat dan Martabat Manusia
    </h1>
    <p>
      Zina secara bahasa berasal dari kata zana yazni, yaitu hubungan badan antara laki-laki dan
      perempuan yang sudah balig, tanpa adanya ikatan pernikahan yang sah sesuai dengan tuntunan
      agama Islam. Zina secara harfiah berarti fahisah yaitu perbuatan keji, dan zina secara istilah
      adalah hubungan selayaknya suami istri yang dilakukan oleh seorang perempuan dan laki-laki
      yang tidak terikat dalam hubungan pernikahan, baik itu dilakukan oleh salah satu atau keduanya
      yang sudah menikah, atau pun belum menikah sama sekali. Menurut pasal 284 Kitab Undang-undang
      Hukum Pidana (KUHP) zina adalah hubungan badan yang dilakukan oleh seorang laki-laki dan
      perempuan yang bukan istri atau suaminya.
    </p>
    <br />
    <!-- Button to trigger modal -->
    <button type="button" @click="showModal = true">Full Materi</button>

    <!-- Include the Modal Component, conditionally rendered -->
    <Modal
      v-if="showModal"
      :isVisible="showModal"
      :close="handleClose"
      slideId="1Hs8CmyzQ1OwCCY7-SveKbEfC5YoykVmP"
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
