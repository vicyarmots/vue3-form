<template>
  <div class="login-form__wrapper">
    <v-input
      :type="`email`"
      :placeholder="`email`"
      :label="`email`"
      :autocomplete="`off`"
      v-model:modelValue="formState.email"
      @keyup="isValidatedEmail"
      @blur="isValidatedEmail"
    ></v-input>
    <v-error v-if="errors.email" :error="errors.email"></v-error>
    <v-input
      :type="`password`"
      :placeholder="`password`"
      :label="`password`"
      :autocomplete="`off`"
      v-model:modelValue="formState.password"
      @keyup="isValidatedPassword"
      @blur="isValidatedPassword"
    ></v-input>

    <v-input
      :type="`name`"
      :placeholder="`name`"
      :label="`name`"
      :autocomplete="`off`"
      v-model:modelValue="formState.name"
      @keyup="isValidatedName"
      @blur="isValidatedName"
    ></v-input>
    <v-error v-if="errors.name" :error="errors.name"></v-error>
    <v-button :title="`log in`"></v-button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import useFormValidation from "../hooks/useFormValidation";

export type UserFormState = Record<
  "email" | "password" | "name" | "phone",
  string
>;

const formState: UserFormState = reactive({
  email: "",
  password: "",
  name: "",
  phone: "",
});

const {
  validateNameField,
  validateEmailField,
  validatePasswordField,
  validatePhoneField,
  errors,
} = useFormValidation();

const isValidatedName = () => validateNameField("name", formState.name);
const isValidatedEmail = () => validateEmailField("email", formState.email);
const isValidatedPassword = () =>
  validatePasswordField("password", formState.password);
const isValidatedPhone = () => validatePhoneField("phone", formState.phone);

console.log(isValidatedPhone);
</script>

<style scoped></style>
