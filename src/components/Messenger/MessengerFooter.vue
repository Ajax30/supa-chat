<template>
  <div class="messenger-footer w-100 d-flex align-items-center">
    <InputBox v-model="message" />
    <Actions :message="message" @sendMessage="handleSend" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputBox from "@/components/MessengerForm/InputBox.vue";
import Actions from "@/components/MessengerForm/Actions.vue";

const message = ref("");

function handleSend(msg) {
  console.log("Send message:", msg);
  message.value = "";
}
</script>

<style scoped>
.messenger-footer {
  height: 75px;
  box-shadow: 0px 0px 25px 2px rgba(0, 0, 0, 0.07);
  width: 100%;
}

input[type="text"] {
  flex: 1;
  padding: 5px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}
</style>
