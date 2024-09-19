<!-- Modal.vue -->
<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <button class="close-button" @click="close">✕</button>
      <iframe
        :src="embedUrl"
        width="100%"
        height="100%"
        frameborder="0"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        >Loading...</iframe
      >
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true
  },
  close: {
    type: Function,
    required: true
  },
  docId: {
    type: String,
    required: true
  }
})

// Generate Google Docs embed URL
const embedUrl = computed(() => {
  return `https://docs.google.com/document/d/${props.docId}/preview`
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 0;
  width: 100%;
  height: 100%;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
}
</style>
