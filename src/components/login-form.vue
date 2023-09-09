<template>
  <div class="login-form__wrapper">
    <v-input
      :type="`email`"
      :placeholder="`Type your email`"
      :label="`email`"
      :autocomplete="`off`"
      v-model:modelValue="formState.email"
      @keyup="isValidatedEmail"
      @blur="isValidatedEmail"
    ></v-input>
    <v-error v-if="errors.email" :error="errors.email"></v-error>

    <v-input
      :type="`password`"
      :placeholder="`Type your password`"
      :label="`password`"
      :autocomplete="`off`"
      v-model:modelValue="formState.password"
      @keyup="isValidatedPassword"
      @blur="isValidatedPassword"
    ></v-input>
    <v-error v-if="errors.email" :error="errors.email"></v-error>

    <v-input
      :type="`password`"
      :placeholder="`Confirm your password`"
      :label="`confirm password`"
      :autocomplete="`off`"
      v-model:modelValue="formState.confirmPassword"
      @keyup="validateConfirmPasswordField"
      @blur="validateConfirmPasswordField"
    ></v-input>
    <v-error v-if="errors.password" :error="errors.password"></v-error>

    <v-input
      :type="`name`"
      :placeholder="`Type your name`"
      :label="`name`"
      :autocomplete="`off`"
      v-model:modelValue="formState.name"
      @keyup="isValidatedName"
      @blur="isValidatedName"
    ></v-input>
    <v-error v-if="errors.name" :error="errors.name"></v-error>

    <v-input
      :type="`tel`"
      :placeholder="`Phone number`"
      :label="`Phone`"
      :autocomplete="`off`"
      v-model:modelValue="formState.phone"
      @keyup="isValidatedPhone"
      @blur="isValidatedPhone"
    ></v-input>
    <v-error v-if="errors.phone" :error="errors.phone"></v-error>

    <v-button :title="`log in`"></v-button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import useFormValidation from "../hooks/useFormValidation";

export type UserFormState = Record<
  "email" | "password" | "confirmPassword" | "name" | "phone",
  string
>;

const formState: UserFormState = reactive({
  email: "",
  password: "",
  confirmPassword: "",
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

const validateConfirmPasswordField = () =>
  formState.confirmPassword === formState.password
    ? ""
    : "Password is not confirmed !";
</script>

<style scoped lang="css">
.login-form__wrapper {
  padding: 60px;
  border-radius: 40px;
  box-shadow: 0 0 1em 0.5em hsl(0, 0, 0, 0.25);
  border: 1px solid hsl(0, 0, 100, 0.25);
  background: white;
}
</style>
