<template>
  <div class="message">
    <div class="d-flex align-items-center">
      <Avatar :image="message.image" :status="message.status" />
      <div class="user-info">
        <p class="message-info d-flex">
          <span class="user-name">{{ message.name }}</span>
          <span class="text-secondary">{{ message.time }}</span>
        </p>
      </div>
    </div>
    <div class="user-message">
      <p>{{ message.text }}</p>
    </div>
  </div>
</template>

<script setup>
import Avatar from '@/components/Avatar.vue'

defineProps({
  message: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
</style>