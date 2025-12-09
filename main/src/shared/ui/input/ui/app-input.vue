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
    placeholder?: string;
  }>(),
  {
    size: 'md',
    id: null,
    placeholder: '',
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
    v-bind="$attrs"
    :id="id"
    v-model="value"
    type="text"
    :placeholder="placeholder"
    autocomplete="off"
    class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-[1px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
    :class="[sizeClass, props.class]"
  />
</template>
