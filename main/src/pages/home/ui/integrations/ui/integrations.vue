<script lang="ts" setup>
import { ContainerFluid, Container } from '@/shared/ui';
</script>

<template>
  <ContainerFluid class="bg-white">
    <Container class="py-10">
      <div class="flex flex-row gap-6 max-[568px]:flex-col">
        <div class="w-full pl-0 md:w-1/2 md:pl-0">
          <h2 class="text-xl font-bold">Easy integrations with 170+ tools</h2>
          <p class="mt-1">
            Connect Landify with your favourite tools that you use daily and keep things on track.
          </p>
        </div>
        <div class="max-auto relative flex w-full justify-center">
          <div class="relative max-w-[368px]">
            <img
              src="/images/integrations-bg-left.png"
              alt="integration"
              class="w-full"
            />
            <div class="absolute top-4 right-0 bottom-0 left-0 p-2">
              <div class="flex items-center justify-evenly gap-2">
                <img
                  src="/icons/integrations/icon1.png"
                  alt="integration"
                  class="h-16 w-16 min-[568px]:h-12 min-[568px]:w-12"
                />
                <img
                  src="/icons/integrations/icon2.png"
                  alt="integration"
                  class="h-16 w-16 min-[568px]:h-12 min-[568px]:w-12"
                />
                <img
                  src="/icons/integrations/icon3.png"
                  alt="integration"
                  class="h-16 w-16 min-[568px]:h-12 min-[568px]:w-12"
                />
                <img
                  src="/icons/integrations/icon4.png"
                  alt="integration"
                  class="h-16 w-16 min-[568px]:h-12 min-[568px]:w-12"
                />
              </div>
              <div class="mt-3 flex items-center justify-center gap-2">
                <img
                  src="/icons/integrations/icon5.png"
                  alt="integration"
                  class="h-16 w-16 min-[568px]:h-12 min-[568px]:w-12"
                />
                <img
                  src="/icons/integrations/icon6.png"
                  alt="integration"
                  class="h-16 w-16 min-[568px]:h-12 min-[568px]:w-12"
                />
                <img
                  src="/icons/integrations/icon7.png"
                  alt="integration"
                  class="h-16 w-16 min-[568px]:h-12 min-[568px]:w-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </ContainerFluid>
</template>
