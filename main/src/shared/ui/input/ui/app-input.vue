<script setup lang="ts">
import { computed } from 'vue';
import { ulid } from 'ulid';

const props = withDefaults(
  defineProps<{
    modelValue: string;
    /**
     * size of the input
     * - sm: small
     * - md: default
     * - lg: large
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * additional class for the input
     */
    class?: string;
    /**
     * id optional
     * if not provided, will be generated automatically
     */
    id?: string | null;
  }>(),
  {
    size: 'md',
    id: null,
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-8 px-2 text-xs';
    case 'lg':
      return 'h-11 px-4 text-base';
    case 'md':
    default:
      return 'h-10 px-3 text-sm';
  }
});

const id = computed(() => {
  if (props.id) return props.id;

  return ulid();
});
</script>

<template>
  <input
    :id="id"
    v-model="value"
    type="text"
    class="flex w-full rounded-md border border-neutral-300 bg-white text-black shadow-sm transition-colors placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
    :class="[sizeClass, props.class]"
  />
</template>
