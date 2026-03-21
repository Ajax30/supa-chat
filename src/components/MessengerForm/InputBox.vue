<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    name="message"
    id="message"
    placeholder="Write a message"
    class="text-secondary"
  />
</template>

<script setup>
defineProps({
  modelValue: String
})
</script>

<style scoped>
</style>