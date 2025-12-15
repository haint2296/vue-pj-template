<script setup lang="ts">
import { computed, ref } from 'vue';

import { Input, AppButton } from '@/shared/ui';
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
  <div
    :class="props.class"
    class="mx-4 max-w-[368px] md:rounded-2xl md:border md:border-gray-200 md:p-6"
  >
    <div class="mb-10 text-center">
      <h1 class="text-2xl font-bold">Welcome back</h1>
      <p class="text-sm text-gray-500">
        Sign in to access your account, personalized travel plans made for you.
      </p>
    </div>

    <form
      class="space-y-3"
      @submit.prevent="handleSubmit"
    >
      <div class="space-y-1">
        <label
          class="block text-sm text-gray-500"
          for="email"
          >Email address*</label
        >
        <Input
          id="email"
          v-model="email"
          type="email"
          placeholder="Email"
          aria-label="Email"
        />
      </div>
      <div class="space-y-1">
        <label
          class="block text-sm text-gray-500"
          for="password"
          >Password*</label
        >
        <Input
          id="password"
          v-model="password"
          type="password"
          placeholder="Password"
          aria-label="Password"
        />
      </div>
      <div class="text-muted-foreground my-2 flex justify-end text-xs">Forgot password?</div>
      <AppButton
        aria-label="Login"
        class="mt-10 w-full px-4 text-center"
        :disabled="!canSubmit"
      >
        <span v-if="isPending">Logging in...</span>
        <span v-else>Login</span>
      </AppButton>

      <div class="text-muted-foreground text-md flex justify-center">
        <span>Don't have an account?</span>
        <Link to="/register">Register</Link>
      </div>
    </form>
  </div>
</template>
