<template>
  <div class="messenger-header d-flex align-items-center">
    <div class="user-profile d-flex">
      <Avatar :image="user.image" :status="user.status" />
      <UserInfo :name="user.name" :status="user.status" />
    </div>

    <div class="actions d-flex">
      <a href="#" title="Invite" class="text-secondary"><i class="fa-solid fa-user-plus"></i></a>
      <a href="#" title="Settings" class="text-secondary"><i class="fa-solid fa-gear"></i></a>
      <a href="#" class="sidebar-toggler text-secondary">
        <i class="fa-solid fa-bars"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
import Avatar from '@/components/Avatar.vue'
import UserInfo from '@/components/UserInfo.vue'
import carmenImg from '@/assets/images/carmen.jpg'

const user = {
  name: 'Carmen Smith',
  image: carmenImg,
  status: 'online'
}
</script>

<style scoped>
</style>