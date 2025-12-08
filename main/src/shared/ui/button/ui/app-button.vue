<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    class?: string;
  }>(),
  {
    class: '',
  },
);
</script>

<template>
  <button
    v-bind="$attrs"
    class="flex cursor-pointer items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-white"
    :class="props.class"
  >
    <slot />
  </button>
</template>
