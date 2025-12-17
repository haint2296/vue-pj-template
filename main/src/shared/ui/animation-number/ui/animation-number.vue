<script lang="ts" setup>
import { cn } from '@/shared/lib';
const props = withDefaults(
  defineProps<{
    tag?: string;
    class?: string;
    number: number;
  }>(),
  {
    tag: 'div',
    class: '',
  },
);
</script>

<template>
  <component
    :is="tag"
    :class="cn(props.class)"
  >
    {{ props.number }}<slot />
  </component>
</template>
