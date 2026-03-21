<template>
  <div class="messenger-footer w-100 d-flex align-items-center">
    <InputBox v-model="message" />
    <Actions :message="message" @sendMessage="handleSend" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputBox from '@/components/MessengerForm/InputBox.vue'
import Actions from '@/components/MessengerForm/Actions.vue'

const message = ref('')

function handleSend(msg) {
  console.log('Send message:', msg)
  message.value = ''
}
</script>

<style scoped>
</style>