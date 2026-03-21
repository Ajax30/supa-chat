<template>
  <div id="app" class="app-wrapper d-flex">
    <Sidebar />

    <div class="messenger d-flex flex-column">
      <MessengerHeader />
      <MessengerContent />
      <MessengerFooter />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import MessengerHeader from '@/components/Messenger/MessengerHeader.vue'
import MessengerContent from '@/components/Messenger/MessengerContent.vue'
import MessengerFooter from '@/components/Messenger/MessengerFooter.vue'
</script>