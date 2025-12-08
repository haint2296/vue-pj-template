<script setup lang="ts">
import { ref } from 'vue';

import { AppInput, AppButton } from '@/shared/ui';

const props = withDefaults(
  defineProps<{
    class?: string;
  }>(),
  {
    class: '',
  },
);

const email = ref('');
const password = ref('');

function handleSubmit() {
  console.log(email.value, password.value);
}
</script>

<template>
  <div :class="props.class" class="mx-4 max-w-[368px]">
    <div class="mb-16">
      <h1 class="text-2xl font-bold">Welcome back</h1>
      <p class="text-sm text-gray-500">Enter your email and password to continue</p>
    </div>
    <form class="space-y-2" @submit.prevent="handleSubmit">
      <AppInput v-model="email" placeholder="Email" />
      <AppInput v-model="password" placeholder="Password" />
      <AppButton aria-label="Login" class="mt-10 px-4 text-center">Login</AppButton>
    </form>
  </div>
</template>
