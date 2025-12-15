<script lang="ts" setup>
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
</script>

<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
