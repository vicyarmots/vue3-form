<template>
  <div>
    <input
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="childModel"
      @input="
        (event) => {
          const { value } = event.target as HTMLInputElement;
          $emit('update:childModel', value);
        }
      "
    />
  </div>
</template>

<script setup lang="ts">
interface InputProps {
  type: "text" | "number" | "email" | "password";
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  error: boolean;
  disabled?: boolean;
}

const { name, type, placeholder, childModel } = withDefaults(
  defineProps<InputProps & { childModel: string }>(),
  {
    name: "input",
    type: "text",
    placeholder: "default",
    value: "",
  }
);
</script>

<style scoped lang="css"></style>
