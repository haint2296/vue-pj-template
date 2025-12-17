<script lang="ts" setup>
interface CardProps {
  title: string;
  description: string;
  icon: string;
}

const _props = withDefaults(defineProps<CardProps>(), {
  title: '',
  description: '',
  icon: '',
});
</script>

<template>
  <div class="flex flex-col items-center gap-4 p-2">
    <div>
      <img
        :src="_props.icon"
        :alt="_props.title"
        class="h-8 w-8"
      />
    </div>
    <div class="mt-2 text-center">
      <h3 class="text-lg font-bold">
        {{ _props.title }}
      </h3>
      <p class="text-muted-foreground text-x3 mt-2">
        {{ _props.description }}
      </p>
    </div>
  </div>
</template>
