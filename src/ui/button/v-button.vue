<template>
  <button class="button" @click="$emit('buttonAction')" :disabled="disabled">
    {{ title }}
  </button>
</template>

<script setup lang="ts">
import { ButtonProps } from "../../models/ui-models";

const { title } = withDefaults(defineProps<ButtonProps>(), {
  title: "default",
});

defineEmits(["buttonAction"]);
</script>

<style scoped lang="css">
.button {
  width: 200px;
  height: 50px;
  background: black;
  color: white;
  text-transform: capitalize;
}
</style>
