<template>
  <div class="messenger d-flex">
    <MessengerHeader
      :user="headerUser"
      @toggleSidebar="toggleSidebar"
    />
    <MessageList :messages="messages" />
    <MessengerFooter
      v-model:message="newMessage"
      @sendMessage="sendMessage"
    />
  </div>
</template>

<script setup>
import MessengerHeader from '@/components/Messenger/MessengerHeader.vue'
import MessageList from '@/components/Messenger/MessageList.vue'
import MessengerFooter from '@/components/Messenger/MessengerFooter.vue'
import { ref } from 'vue'

const headerUser = {
  image: '/src/assets/images/carmen.jpg',
  name: 'Carmen Smith',
  status: 'online'
}

const messages = ref([
  {
    image: '/src/assets/images/jane.jpg',
    name: 'Jane Fountain',
    status: 'offline',
    time: '10:01',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...'
  },
  {
    image: '/src/assets/images/john.jpg',
    name: 'John Smith',
    status: 'online',
    time: '10:03',
    message: 'Lorem ipsum dolor sit amet sed.'
  }
  // add other messages similarly
])

const newMessage = ref('')

function sendMessage(msg) {
  messages.value.push({
    image: '/src/assets/images/carmen.jpg',
    name: 'You',
    status: 'online',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    message: msg
  })
  newMessage.value = ''
}

function toggleSidebar() {
  // emit event to toggle sidebar on small screens
}
</script>

<style scoped>
</style>