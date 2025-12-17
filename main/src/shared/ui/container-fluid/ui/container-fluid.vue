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
  <div :class="cn('w-full', props.class)">
    <slot />
  </div>
</template>
