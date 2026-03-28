<template>
  <ul class="users-list">
    <li v-for="user in users" :key="user.id">
      <SidebarUser
        :avatar="user.avatar"
        :name="user.name"
        :latestMessage="user.latestMessage"
        :status="user.status"
      />
    </li>
  </ul>
</template>

<script setup>
import SidebarUser from "@/components/Sidebar/User.vue";

const users = [
  { id: 1, name: "Dean Clover", avatar: "/src/assets/images/dean.jpg", latestMessage: "Lorem ipsum dolor sit amet [...]", status: "online" },
  { id: 2, name: "Carmen Smith", avatar: "/src/assets/images/carmen.jpg", latestMessage: "Lorem ipsum dolor sit amet [...]", status: "online" },
  { id: 3, name: "Jane Fountain", avatar: "/src/assets/images/jane.jpg", latestMessage: "Lorem ipsum dolor sit amet [...]", status: "online" },
  { id: 4, name: "John Smith", avatar: "/src/assets/images/john.jpg", latestMessage: "Lorem ipsum dolor sit amet [...]", status: "online" },
  { id: 5, name: "Tom Kane", avatar: "/src/assets/images/default-avatar.png", latestMessage: "Lorem ipsum dolor sit amet [...]", status: "online" },
];

</script>

<style scoped>
.users-list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.users-list li {
  padding: 25px;
  cursor: pointer;
  background: transparent;
  transition: all 0.25s ease-in-out;
}

.users-list li:hover {
  background: rgba(0, 0, 0, 0.1);
}
</style>
