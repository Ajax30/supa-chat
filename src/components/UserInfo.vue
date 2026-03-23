<template>
  <div class="user-info d-flex flex-column" :class="{'w-100': isMyProfile}">
    <!-- Name -->
    <p :class="nameClass">{{ name }}</p>

    <!-- Header status -->
    <p v-if="isHeader && status" class="status text-secondary">
      {{ status }}
    </p>

    <!-- Sidebar latest message -->
    <p v-else-if="latestMessage" class="latest-message">
      {{ latestMessage }}
    </p>

    <!-- MyProfile custom status -->
    <p v-if="isMyProfile && status" class="my-status">
      {{ status }}
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: String,
  status: String,
  latestMessage: String,
  isHeader: Boolean,
  isMyProfile: Boolean
});

// Use props object to compute the name class
const nameClass = computed(() => {
  if (props.isHeader) return "name";
  if (props.isMyProfile) return "name fw-normal text-white";
  if (props.latestMessage) return "name fw-normal text-white"; 
  return "name";
});
</script>

<style scoped>
.user-info {
  padding-left: 10px;
  line-height: 1;
}

.name {
  font-weight: bold;
}

.latest-message {
  font-size: 12px;
  color: #8b8da9;
  padding-top: 2px;
}

.status {
  font-size: 12px;
  padding-top: 2px;
}

.my-status {
  color: #8b8da9;
  font-size: 12px;
}
</style>