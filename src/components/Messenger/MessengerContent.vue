<template>
  <div class="messenger-content d-flex flex-column">
    <MessageItem
      v-for="(msg, i) in messages"
      :key="i"
      :message="msg"
    />
  </div>
</template>

<script setup>
import MessageItem from '@/components/Messenger/MessageItem.vue'
import jane from '@/assets/images/jane.jpg'
import john from '@/assets/images/john.jpg'
import dean from '@/assets/images/dean.jpg'
import carmen from '@/assets/images/carmen.jpg'

const messages = [
  { name: 'Jane Fountain', image: jane, status: 'offline', time: '10:01', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'John Smith', image: john, status: 'online', time: '10:03', text: 'Lorem ipsum dolor sit amet.' },
  { name: 'Dean Clover', image: dean, status: 'online', time: '10:12', text: 'Lorem ipsum dolor sit amet consectetur.' },
  { name: 'John Smith', image: john, status: 'online', time: '10:13', text: 'Dolorem, perferendis, corporis quisquam.' },
  { name: 'Carmen Smith', image: carmen, status: 'away', time: '10:34', text: 'Lorem ipsum dolor sit amet.' }
]
</script>

<style scoped>
</style>