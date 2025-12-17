<script lang="ts" setup>
import { ContainerFluid, Container } from '@/shared/ui';
</script>

<template>
  <ContainerFluid class="bg-[#1DB5BE]">
    <Container>
      <div class="flex flex-col justify-start gap-4 md:flex-row md:justify-between">
        <div class="mb-2 flex h-full w-full items-center justify-start space-y-1 py-10 md:w-1/2">
          <div>
            <h3 class="mb-6 text-2xl font-bold md:text-3xl">
              Manage all projects from your mobile
            </h3>
            <p class="text-sm">
              Download the app to manage your projects, keep track of the progress and complete
              tasks without procastinating. Stay on track and complete on time!
            </p>

            <div class="mt-10 space-y-2">
              <p>Get the app</p>
              <div class="flex items-center gap-2">
                <div>
                  <img
                    src="/icons/android-download.png"
                    alt="android-download"
                    class="h-10 w-35"
                  />
                </div>
                <div>
                  <img
                    src="/icons/ios-download.png"
                    alt="ios-download"
                    class="h-10 w-35"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1 shrink-0 md:mt-0">
          <div class="flex gap-1">
            <div class="flex h-100 flex-col justify-start">
              <img
                src="/images/manage-iphone-1.png"
                alt="mobile-mockup"
                class=""
              />
            </div>
            <div class="flex h-100 flex-col justify-end">
              <img
                src="/images/manage-iphone-2.png"
                alt="mobile-mockup"
                class=""
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </ContainerFluid>
</template>
