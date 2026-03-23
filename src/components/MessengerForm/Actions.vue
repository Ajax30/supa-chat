<template>
  <div class="actions d-flex align-items-center">
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
import { ref, defineEmits } from "vue";

const emit = defineEmits(["sendMessage"]);
const message = ref("");

function handleSend() {
  if (message.value.trim()) {
    emit("sendMessage", message.value);
    message.value = "";
  }
}
</script>

<style scoped>
.actions {
  margin-left: 15px;
}

.actions button {
  padding: 5px;
  color: #6c757d;
}

.actions button.submit {
  font-size: 150%;
  color: #331c7c;
  padding-right: 0;
}
</style>
