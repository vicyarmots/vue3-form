<template>
  <div class="login-form__wrapper">
    <v-input
      :type="`email`"
      :placeholder="`email`"
      :label="`email`"
      v-model:modelValue="email"
    ></v-input>
    <h1>{{ isValidEmail }}</h1>
    <v-input
      :type="`password`"
      :placeholder="`password`"
      :label="`password`"
      v-model:modelValue="password"
    ></v-input>
    <h1>{{ isValidPassword }}</h1>
    <v-button :title="`log in`"></v-button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const email = ref("");
const password = ref("");

const isValidEmail = computed(() =>
  !email.value.includes("@") ? "Email is not valid" : ""
);

const isValidPassword = computed(() =>
  password.value.length < 5 ? "Password is fucked up" : ""
);
</script>

<style scoped></style>
