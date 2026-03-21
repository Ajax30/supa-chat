<template>
  <div class="messenger-content d-flex flex-column">
    <MessageItem
      v-for="(msg, index) in messages"
      :key="index"
      :image="msg.image"
      :name="msg.name"
      :status="msg.status"
      :time="msg.time"
      :message="msg.message"
    />
  </div>
</template>

<script setup>
import MessageItem from '@/components/Messenger/MessageItem.vue'

defineProps({
  messages: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
</style>