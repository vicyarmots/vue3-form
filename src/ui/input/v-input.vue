<template>
  <div class="input-wrapper">
    <label for="input">{{ label }}:</label>
    <input
      id="id"
      :autocomplete="autocomplete"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      class="field"
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

<style scoped lang="css">
input {
  outline: none;
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

label {
  color: black;
  text-transform: capitalize;
  text-align: start;
  font-size: 12px;
  color: rgb(0, 0, 0);
  font-weight: bold;
  margin: 10px 0px 5px 10px;
}
.input-wrapper {
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.field {
  color: rgb(56, 56, 56);
  padding: 20px;
  width: 300px;
  flex-shrink: 0;
  border-radius: 42.5px;
  background: #f9f9f9;
  box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.08) inset,
    -10px -10px 20px 0px #ffffff7b inset;

  fill: linear-gradient(309deg, #f2f3f6 -13.68%, #e5e6ec 171.92%);
  cursor: pointer;
}
</style>
