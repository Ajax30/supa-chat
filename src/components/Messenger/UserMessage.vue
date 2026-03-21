<template>
  <div class="user-message">
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
defineProps({
  message: String
})
</script>

<style scoped>
</style>