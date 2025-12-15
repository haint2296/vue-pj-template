<script lang="ts" setup>
import { ContainerFluid } from '@/shared/ui/container-fluid';
</script>

<template>
  <ContainerFluid class="w-full bg-gray-900 text-white">
    <footer class="p-10">
      <div
        class="flex flex-col-reverse justify-start gap-4 transition-all duration-300 md:flex-row md:items-center md:justify-between"
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
          <div>IOS</div>
          <div>Android</div>
        </div>
      </div>
    </footer>
  </ContainerFluid>
</template>
