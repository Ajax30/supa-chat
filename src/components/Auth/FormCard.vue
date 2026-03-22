<template>
  <div class="form-container d-flex flex-column">
    <div class="form-card">
      <h3 class="form-title">{{ title }}</h3>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style>
.form-container {
  flex: 1;
  justify-content: center;
  align-items: center;
}

.form-card {
  background: #fff;
  padding: 1.5rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 90%;
  max-width: 360px;
}

.form-card .form-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #372379;
  line-height: 1;
  margin-bottom: 10px;
}

.form-card label {
  padding-left: 6px;
  color: #6c757d;
  font-weight: bold;
}

.form-card input[type="text"],
.form-card input[type="email"],
.form-card input[type="password"] {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 6px 3px 6px;
  color: #8b8da9;
  margin-bottom: 15px;
  font-size: 14px;
}

.form-card button[type="submit"] {
  line-height: 1;
  outline: none;
  background: #4e3e81;
  border: 0;
  border-radius: 3px;
  padding: 10px 20px;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}

.form-card button[type="submit"]:hover {
  background: #372379;
}
</style>
