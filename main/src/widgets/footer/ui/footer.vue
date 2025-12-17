<script lang="ts" setup>
import { ContainerFluid, Container } from '@/shared/ui';
</script>

<template>
  <ContainerFluid class="text-whas-visited: w-full bg-gray-900 py-6">
    <Container>
      <footer
        class="flex flex-col-reverse justify-start gap-4 text-white transition-all duration-300 md:flex-row md:items-center md:justify-between"
      >
        <div class="space-y-4">
          <div class="flex flex-wrap gap-2">
            <div>Download now</div>
            <div>License</div>
          </div>
          <div class="flex flex-wrap gap-2">
            <div>About</div>
            <div>Features</div>
            <div>Pricing</div>
            <div>News</div>
            <div>Help</div>
            <div>Contact</div>
          </div>
          <p class="mt-6">&copy; 2025 Landify UI Kit. All rights reserved.</p>
        </div>
        <div class="space-y-4">
          <p>Get the app</p>
          <div>
            <img
              src="/icons/ios-download.png"
              alt="ios-download"
              class="h-10 w-35"
            />
          </div>
          <div>
            <img
              src="/icons/android-download.png"
              alt="android-download"
              class="h-10 w-35"
            />
          </div>
        </div>
      </footer>
    </Container>
  </ContainerFluid>
</template>
