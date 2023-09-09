<template>
  <div class="input-wrapper">
    <label for="input">{{ label }}</label>
    <input
      id="id"
      :autocomplete="autocomplete"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="
        (event) => {
          const { value } = event.target as HTMLInputElement;
          $emit('update:modelValue', value);
        }
      "
    />
  </div>
</template>

<script setup lang="ts">
import { InputProps } from "../../models/ui-models";

const { label, name, type, placeholder, modelValue, autocomplete } =
  withDefaults(defineProps<InputProps & { modelValue: string }>(), {
    name: "input",
    type: "text",
    placeholder: "default",
  });
</script>

<style scoped lang="css"></style>
