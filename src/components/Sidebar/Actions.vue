<template>
  <div class="d-flex my-actions">
    <button class="text-white">
      <i class="fa-solid fa-comment-dots"></i>
      <div class="bubble"></div>
    </button>
    <button class="text-muted">
      <i class="fa-solid fa-user-group"></i>
    </button>
    <button class="text-muted">
      <i class="fa-solid fa-phone"></i>
    </button>
    <button class="text-muted">
      <i class="fa-solid fa-gear"></i>
    </button>
  </div>
</template>

<script setup></script>

<style scoped>
.my-actions {
  padding: 0 25px;
  justify-content: space-around;
}

.my-actions button {
  position: relative;
}

.my-actions .bubble {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  top: 1px;
  right: 0;
  background-color: #44b6ff;
  box-shadow:
    0 0 6px #44b6ff,
    0 0 12px #44b6ff;
}
</style>
