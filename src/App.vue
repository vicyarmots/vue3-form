<script setup lang="ts">
import { ref } from "vue";

const error = ref<string>("");

const childModel = ref<string>("");

const handleEvent = () => (error.value = "Error");
</script>

<template>
  <div>
    <v-button :title="`submit`" @buttonAction="handleEvent"></v-button>
    <v-input v-model:childModel="childModel"></v-input>
    <h1 class="text">{{ childModel }}</h1>
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
