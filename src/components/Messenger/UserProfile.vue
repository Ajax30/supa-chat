<template>
  <div class="user-profile d-flex">
    <Avatar :image="user.image" :alt="user.name" :status="user.status" />
    <UserInfo :name="user.name" :status="user.status" :latestMessage="user.latestMessage" />
  </div>
</template>

<script setup>
import Avatar from '@/components/Avatar.vue'
import UserInfo from '@/components/UserInfo.vue'

defineProps({
  user: Object
})
</script>

<style scoped>
</style>