<script setup lang="ts">
import { HeroBanner } from './hero-banner';
import { Manage } from './manage';
import { Achievements } from './achievements';
import { Integrations } from './integrations';
import { RealStories } from './real-stories';
import { Features } from './features';

import { ContainerFluid } from '@/shared/ui';
</script>

<template>
  <div>
    <ContainerFluid>
      <HeroBanner />
      <Features />
      <section class="flex flex-col transition-all duration-300">
        <RealStories class="order-2 md:order-1" />
        <Achievements class="order-1 md:order-2" />
      </section>
    </ContainerFluid>
    <Integrations />
    <Manage />
  </div>
</template>
