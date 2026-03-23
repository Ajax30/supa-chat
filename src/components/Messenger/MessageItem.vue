<template>
  <div class="message">
    <div class="d-flex align-items-center">
      <Avatar :image="message.image" :status="message.status" />
      <div class="user-info w-100">
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
import Avatar from "@/components/Avatar.vue";

defineProps({
  message: {
    type: Object,
    required: true,
    // expected shape: { name, image, status, time, text }
  },
});
</script>

<style scoped>
.message {
  margin-bottom: 30px;
  width: 100%;
  word-break: break-word;
}

.message:last-child {
  margin-bottom: 0;
}

.user-info {
  padding-left: 10px;
  line-height: 1;
}

.user-name {
  padding-right: 10px;
}

.user-message {
  display: inline-block;
  margin-top: -10px;
  padding: 10px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: auto;
  word-break: break-word;
}

.message:nth-child(odd) .user-message {
  margin-left: 55px;
  border-top-left-radius: 0;
  background-color: #44337b;
  color: #fff;
}

.message:nth-child(even) > div {
  float: right;
  clear: right;
  flex-direction: row-reverse;
}

.message:nth-child(even) .user-message {
  margin-right: 55px;
  border-top-right-radius: 0;
  background-color: #fff;
  color: #44337b;
}

.message:nth-child(even) .user-info {
  padding-right: 10px;
}
</style>
