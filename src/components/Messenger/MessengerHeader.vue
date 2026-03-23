<template>
  <div class="messenger-header d-flex align-items-center">
    <div class="user-profile d-flex align-items-center">
      <Avatar :image="user.image" :status="user.status" />
      <UserInfo :name="user.name" :status="user.status" :isHeader="true" />
    </div>

    <div class="actions d-flex align-items-center ms-auto">
      <span title="Invite" class="action text-secondary">
        <i class="fa-solid fa-user-plus"></i>
      </span>

      <span title="Settings" class="text-secondary action">
        <i class="fa-solid fa-gear"></i>
      </span>

      <span
        title="Toggle"
        class="action sidebar-toggler text-secondary"
        @click="sidebarRef.toggleSidebar()"
      >
        <i class="fa-solid fa-bars"></i>
      </span>
    </div>
  </div>
</template>

<script setup>
import Avatar from "@/components/Avatar.vue";
import UserInfo from "@/components/UserInfo.vue";
import carmenImg from "@/assets/images/carmen.jpg";

const props = defineProps({
  sidebarRef: Object,
});

const user = {
  name: "Carmen Smith",
  image: carmenImg,
  status: "Online",
};
</script>

<style scoped>
.messenger-header {
  height: 90px; 
  box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.2);
}

.actions {
  margin-left: auto;
  padding-left: 15px;
}

.action {
  margin-left: 10px;
}

.action:first-child {
  margin-left: 0;
}

.sidebar-toggler {
  display: none;
}

@media (max-width: 767px) {
  .sidebar-toggler {
    display: block;
  }
}
</style>
