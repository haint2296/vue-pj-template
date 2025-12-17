<script lang="ts" setup>
import { Container, ContainerFluid } from '@/shared/ui';
</script>

<template>
  <ContainerFluid>
    <Container>
      <header class="flex h-16 items-center justify-between">
        <div class="flex items-center gap-4">
          <img
            src="/icons/header/logo.png"
            alt="Logo"
            class="h-8 w-[128px]"
          />
          <ul class="ml-4 flex items-center gap-4">
            <li>Features</li>
            <li>Pricing</li>
            <li>Careers</li>
            <li>Help</li>
          </ul>
        </div>
        <div class="flex items-center gap-4">
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
      </header>
    </Container>
  </ContainerFluid>
</template>
