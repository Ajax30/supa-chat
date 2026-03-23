<template>
  <Sidebar ref="sidebarRef" />
  <div class="messenger d-flex flex-column">
    <MessengerHeader :sidebarRef="sidebarRef" />
    <MessengerContent />
    <MessengerFooter />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import MessengerHeader from "@/components/Messenger/MessengerHeader.vue";
import MessengerContent from "@/components/Messenger/MessengerContent.vue";
import MessengerFooter from "@/components/Messenger/MessengerFooter.vue";

const sidebarRef = ref(null);
</script>

<style scoped>
.messenger {
  flex: 1;
  min-width: 0;
}
</style>
