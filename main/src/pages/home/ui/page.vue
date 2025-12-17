<script setup lang="ts">
import { Manage } from './manage';
import { Achievements } from './achievements';
import { Integrations } from './integrations';
import { RealStories } from './real-stories';
import { Features } from './features';

import { ContainerFluid } from '@/shared/ui';
</script>

<template>
  <div>
    <h1>Home</h1>
    <ContainerFluid>
      <Features />
      <div class="flex flex-col transition-all duration-300">
        <RealStories class="order-2 md:order-1" />
        <Achievements class="order-1 md:order-2" />
      </div>
    </ContainerFluid>
    <Integrations />
    <Manage />
  </div>
</template>
