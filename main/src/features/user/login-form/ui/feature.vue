<script setup lang="ts">
import { computed, ref } from 'vue';

import { AppInput, AppButton } from '@/shared/ui';
import { useLogin } from '../model/use-login';
import type { LoginFormPayload } from '../model/type';

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

const { login, isPending } = useLogin();

const canSubmit = computed(() => {
  return !!email.value && !!password.value && !isPending.value;
});

async function handleSubmit() {
  if (!canSubmit.value) return;

  const payload: LoginFormPayload = {
    email: email.value,
    password: password.value,
  };

  try {
    login({ data: payload });
    // TODO: handle success (e.g. lưu token, redirect)
  } catch (err) {
    // error đã được mutation giữ, ở đây chỉ để tránh crash
    console.error('Login failed', err);
  }
}
</script>

<template>
  <div :class="props.class" class="mx-4 max-w-[368px]">
    <div class="mb-16">
      <h1 class="text-2xl font-bold">Welcome back</h1>
      <p class="text-sm text-gray-500">Enter your email and password to continue</p>
    </div>

    <form class="space-y-2" @submit.prevent="handleSubmit">
      <AppInput id="email" v-model="email" type="email" placeholder="Email" />
      <AppInput id="password" v-model="password" type="password" placeholder="Password" />

      <!-- <p v-if="isError && error" class="text-sm text-red-500">
        {{ (error.response?.data as any)?.message ?? 'Login failed' }}
      </p> -->

      <AppButton aria-label="Login" class="mt-10 w-full px-4 text-center" :disabled="!canSubmit">
        <span v-if="isPending">Logging in...</span>
        <span v-else>Login</span>
      </AppButton>
    </form>
  </div>
</template>
