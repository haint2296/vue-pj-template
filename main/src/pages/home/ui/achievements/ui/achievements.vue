<script lang="ts" setup>
import { ContainerFluid, Container } from '@/shared/ui';
import { AnimationNumber } from '@/shared/ui/animation-number';
</script>

<template>
  <ContainerFluid class="bg-white">
    <Container class="py-10">
      <div class="flex flex-col justify-between gap-4 md:flex-row">
        <div class="w-full pl-0 md:w-[55%] md:pl-0">
          <h2 class="text-xl font-bold">Our 18 years of achievements</h2>
          <p class="mt-1">With our super powers we have reached this</p>
        </div>

        <div class="mt-8 grid w-full grid-cols-2 gap-2 md:mt-0 md:w-[45%]">
          <div>
            <h3 class="font-bold">
              <span class="flex items-center">
                <AnimationNumber :number="10000">+</AnimationNumber>
              </span>
            </h3>
            <p class="text-muted-foreground text-xs">Downloads per day</p>
          </div>
          <div>
            <h3 class="font-bold">
              <span class="flex items-center">
                <AnimationNumber :number="2"> Million</AnimationNumber>
              </span>
            </h3>
            <p class="text-muted-foreground text-xs">Users</p>
          </div>
          <div>
            <h3 class="font-bold">
              <span class="flex items-center">
                <AnimationNumber :number="500">+</AnimationNumber>
              </span>
            </h3>
            <p class="text-muted-foreground text-xs">Clients</p>
          </div>
          <div>
            <h3 class="font-bold">
              <span class="flex items-center">
                <AnimationNumber :number="140" />
              </span>
            </h3>
            <p class="text-muted-foreground text-xs">Countries</p>
          </div>
        </div>
      </div>
    </Container>
  </ContainerFluid>
</template>
