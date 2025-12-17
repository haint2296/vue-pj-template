<script lang="ts" setup>
import { ContainerFluid, Container } from '@/shared/ui';
import Airbnb from './airbnb.vue';
import Hubspot from './hubspot.vue';
import Strapi from './strapi.vue';
import { AnimationElement } from '@/shared/ui';
</script>

<template>
  <ContainerFluid class="bg-[#D5FAFC]">
    <Container class="pt-10">
      <div class="relative">
        <img
          src="/images/real-stories-quote.png"
          alt="real-stories-bg"
          class="absolute top-0 left-0 z-10 h-[116px] w-[146px]"
        />
        <div class="relative top-0 left-0 z-10">
          <div class="pt-15 md:pt-[70px] md:pl-[75px]">
            <AnimationElement
              animation="fade-left"
              :duration="700"
              class="w-full md:w-1/2"
            >
              <h2 class="text-3xl font-bold">Real Stories from Real Customers</h2>
              <p>Get inspired by these stories.</p>
            </AnimationElement>

            <div class="relative z-10 mt-15 mb-10 min-[798px]:mt-[-40px] min-[798px]:mb-0">
              <div class="grid gap-6 min-[798px]:grid-cols-2 min-[798px]:grid-rows-2">
                <AnimationElement
                  animation="fade-left"
                  :duration="700"
                  class="order-1 min-[798px]:order-2"
                >
                  <Airbnb />
                </AnimationElement>
                <AnimationElement
                  animation="fade-up"
                  :duration="700"
                  class="order-2 min-[798px]:order-1 min-[798px]:mt-[35%] md:row-span-2"
                >
                  <Hubspot />
                </AnimationElement>

                <AnimationElement
                  animation="scale"
                  :duration="1000"
                  class="order-3 min-[798px]:order-3"
                >
                  <Strapi />
                </AnimationElement>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </ContainerFluid>
</template>
