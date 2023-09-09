<script setup lang="ts">
import loginForm from "./components/login-form.vue";
</script>

<template>
  <div>
    <login-form></login-form>
  </div>
</template>

<style scoped>
.text {
  color: red;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
