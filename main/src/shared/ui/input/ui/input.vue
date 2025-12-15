<script setup lang="ts">
import { computed } from 'vue';
import { ulid } from 'ulid';
import { cn } from '@/shared/lib';

import type { AppInputProps } from '../model/type';
import { appInputDefaultProps } from '../model/constants';

const _props = withDefaults(defineProps<AppInputProps>(), appInputDefaultProps);

const _emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const id = computed(() => {
  return _props.id || ulid();
});

const modelValue = computed({
  get: () => _props.modelValue,
  set: (value: string) => {
    _emit('update:modelValue', value);
  },
});
</script>

<template>
  <input
    :id="id"
    v-bind="$attrs"
    v-model="modelValue"
    :type="_props.type"
    :autocomplete="_props.autocomplete"
    :class="
      cn(
        'placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        _props.class,
      )
    "
    :placeholder="_props.placeholder"
    data-app-input
  />
</template>
