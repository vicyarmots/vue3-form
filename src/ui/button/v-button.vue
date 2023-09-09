<template>
  <button class="button" @click="handleEmit">
    {{ title }}
  </button>
</template>

<script setup lang="ts">
const { title } = withDefaults(
  defineProps<{
    title: string;
  }>(),
  { title: "default" }
);

const emit = defineEmits<{ (e: "buttonAction", payload?: object): void }>();

const handleEmit = () => emit("buttonAction");
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
