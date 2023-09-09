<template>
  <p class="error-wrapper">{{ error }}</p>
</template>

<script setup lang="ts">
const { error } = withDefaults(defineProps<{ error: string }>(), {
  error: "",
});
</script>

<style scoped lang="css">
.error-wrapper {
  color: red;
  text-transform: capitalize;
  font-size: 12px;
  text-align: start;
  margin-left: 20px;
}
</style>
