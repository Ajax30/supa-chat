<template>
  <div class="actions d-flex">
    <button class="icon" title="Add attachment">
      <i class="fa-solid fa-paperclip"></i>
    </button>
    <button class="icon" title="Emoji">
      <i class="fa-regular fa-face-smile"></i>
    </button>
    <button class="submit" title="Send" @click="handleSend">
      <i class="fa-solid fa-paper-plane"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['sendMessage'])
const message = ref('')

function handleSend() {
  if (message.value.trim()) {
    emit('sendMessage', message.value)
    message.value = ''
  }
}
</script>

<style scoped>
</style>