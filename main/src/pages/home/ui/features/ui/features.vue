<script lang="ts" setup>
import { ContainerFluid, Container } from '@/shared/ui';
import { AnimationElement } from '@/shared/ui';

import Card from './card.vue';

const features = [
  {
    title: 'Robust workflow',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: '/icons/features/robust-workflow.png',
  },
  {
    title: 'Flexibility',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: '/icons/features/flexibility.png',
  },
  {
    title: 'User friendly',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: '/icons/features/user-friendly.png',
  },
  {
    title: 'Multiple layouts',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: '/icons/features/multiple-layouts.png',
  },
  {
    title: 'Better components',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: '/icons/features/better-components.png',
  },
  {
    title: 'Well organised',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: '/icons/features/well-organised.png',
  },
];
</script>

<template>
  <ContainerFluid class="bg-white">
    <Container class="py-10">
      <AnimationElement
        tag="div"
        animation="scale"
        :duration="400"
        class="flex flex-wrap items-center justify-evenly gap-6 border-t border-b border-gray-100 p-4 md:gap-4"
      >
        <img
          src="/icons/features/head-airbnb.png"
          alt="features-head-airbnb"
          class="h-[28px] w-[90px]"
        />
        <img
          src="/icons/features/head-hubspot.png"
          alt="features-head-hubspot"
          class="h-[24px] w-[86px]"
        />
        <img
          src="/icons/features/head-google.png"
          alt="features-head-google"
          class="h-[24px] w-[84px]"
        />
        <img
          src="/icons/features/head-microsoft.png"
          alt="features-head-microsoft"
          class="h-[26px] w-[128px]"
        />
        <img
          src="/icons/features/head-walmart.png"
          alt="features-head-walmart"
          class="h-[26px] w-[112px]"
        />
        <img
          src="/icons/features/head-fed-ex.png"
          alt="features-head-fex-ex"
          class="h-[26px] w-[80px]"
        />
      </AnimationElement>
      <AnimationElement
        animation="fade-up"
        tag="div"
        :duration="400"
        class="mt-20 w-full text-center"
      >
        <h2 class="text-4xl font-bold">Tailor-made features</h2>
        <p class="text-muted-foreground mx-auto mt-2 max-w-[75%] text-base">
          Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a
          document or visual presentation.
        </p>
      </AnimationElement>
      <div class="mt-16 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card
          v-for="feature in features"
          :key="feature.title"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
        />
      </div>
    </Container>
  </ContainerFluid>
</template>
