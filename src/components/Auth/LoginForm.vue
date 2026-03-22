<template>
  <FormCard title="Login">
    <form @submit.prevent="submit">
    <div class="form-field">
      <label class="d-block">Email</label>
      <input
        class="d-block w-100"
        type="email"
        placeholder="yorname@example.com"
        v-model="email"
        required
      />
      </div>

      <div class="form-field">
        <label class="d-block">Password</label>
        <input
          class="d-block w-100"
          type="password"
          placeholder="Your password here"
          v-model="password"
          required
        />
      </div>

      <button type="submit" class="w-100">Login</button>
    </form>
  </FormCard>
</template>

<script setup>
import { ref } from "vue";
import FormCard from "@/components/Auth/FormCard.vue";

const email = ref("");
const password = ref("");

function submit() {
  console.log(email.value, password.value);
}
</script>
