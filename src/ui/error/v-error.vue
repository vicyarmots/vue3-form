<template>
  <div class="error-wrapper">{{ error }}</div>
</template>

<script setup lang="ts">
const { error } = withDefaults(defineProps<{ error: string }>(), {
  error: "error",
});
</script>

<style scoped lang="css">
.error-wrapper {
  background: black;
  color: red;
  text-transform: capitalize;
}
</style>
