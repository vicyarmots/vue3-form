<script setup lang="ts">
import { reactive } from "vue";
import useFormValidation from "../hooks/useFormValidation";
import useSubmitButtonState from "../hooks/useSubmitButtonState";
import { IUser } from "../models/user-models";
import neverStopIcon from "../assets/neverstop-icon.svg";
import { phonePattern } from "../constants";

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

const userState: IUser = reactive({
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
  validateConfirmPassword,
  errors,
} = useFormValidation();

const { isSignupButtonDisabled } = useSubmitButtonState(
  userState as IUser & string,
  errors as string[]
);

function handleSignIn(): void {
  alert("not implemented");
  console.log(userState); // TODO: ADD USER STORE
}

const isValidatedName = () => validateNameField("name", formState.name);

const isValidatedEmail = () => validateEmailField("email", formState.email);

const isValidatedPassword = () =>
  validatePasswordField("password", formState.password);

const isValidatedConfirmPassword = () =>
  validateConfirmPassword(
    "confirmPassword",
    formState.password,
    formState.confirmPassword
  );

const isValidatedPhone = () => validatePhoneField("phone", formState.phone);
</script>

<template>
  <div class="login-form__wrapper">
    <img :src="neverStopIcon" alt="neverstop icon" class="icon" />
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
      :name="`password`"
      :placeholder="`Type your password`"
      :label="`password`"
      :autocomplete="`off`"
      v-model:modelValue="formState.password"
      @keyup="isValidatedPassword"
      @blur="isValidatedPassword"
    ></v-input>
    <v-error v-if="errors.password" :error="errors.password"></v-error>

    <v-input
      :type="`password`"
      :name="`comfirm password`"
      :placeholder="`Confirm your password`"
      :label="`confirm password`"
      :autocomplete="`off`"
      v-model:modelValue="formState.confirmPassword"
      @keyup="isValidatedConfirmPassword"
      @blur="isValidatedConfirmPassword"
    ></v-input>
    <v-error
      v-if="errors.confirmPassword"
      :error="errors.confirmPassword"
    ></v-error>

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
      :pattern="phonePattern"
      :autocomplete="`off`"
      v-model:modelValue="formState.phone"
      @keyup="isValidatedPhone"
      @blur="isValidatedPhone"
    ></v-input>
    <v-error v-if="errors.phone" :error="errors.phone"></v-error>

    <v-button
      :title="`log in`"
      @click="handleSignIn"
      :disabled="isSignupButtonDisabled"
    ></v-button>
  </div>
</template>

<style scoped lang="css">
.login-form__wrapper {
  padding: 60px;
  border-radius: 40px;
  box-shadow: 0 0 1em 0.5em hsl(0, 0, 0, 0.25);
  border: 1px solid hsl(0, 0, 100, 0.25);
  background: white;
}

.icon {
  width: 150px;
}
</style>
