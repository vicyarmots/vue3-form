<script setup lang="ts">
import store from "./store/todo";
import { provide } from "vue";

provide("store", store);
</script>

<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  background: white;
}
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
