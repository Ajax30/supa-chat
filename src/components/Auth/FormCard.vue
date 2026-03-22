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

.form-field {
  position: relative;
  margin-bottom: 15px;
}

.form-field.bordered {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 9px;
}

.form-card input[type="text"],
.form-card input[type="email"],
.form-card input[type="password"] {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 6px 3px 6px;
  color: #8b8da9;
  font-size: 14px;
}

.file-upload-btn {
  max-width: 300px;
  position: relative;
  padding-left: 0;
  color: #6c757d;
}

.file-upload-btn:focus {
  border-width: 0 !important;
  outline: none !important;
  box-shadow: none;
}

.file-upload-btn::-webkit-file-upload-button {
  visibility: hidden;
}

.file-upload-btn::before {
  content: "Upload";
  display: inline-block;
  background-color: #372379;
  border-radius: 3px;
  padding: 9px 10px 9px 34px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  color: #fff;
  line-height: 1;
}

.file-upload-btn:hover::before {
  background: #4e3e81;
}

.file-upload-btn:active::before {
  background: #4e3e81;
}

.file-upload-btn::after {
  content: "\f0ee";
  font-family: "Font Awesome 7 Free";
  font-weight: 900;
  text-decoration: inherit;
  color: #fff;
  font-size: 16px;
  padding-right: 12px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
}

.form-card button[type="submit"] {
  line-height: 1;
  outline: none;
  background: #372379;
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
  background: #4e3e81;
}
</style>
