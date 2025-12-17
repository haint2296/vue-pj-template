<script lang="ts" setup>
import { cn } from '@/shared/lib';

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
  <div :class="cn('container mx-auto px-4', props.class)">
    <slot />
  </div>
</template>
