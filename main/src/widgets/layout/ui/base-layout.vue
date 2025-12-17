<script lang="ts" setup>
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
</script>

<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>
