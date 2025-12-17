<script lang="ts" setup>
import { ContainerFluid, Container } from '@/shared/ui';
import { AnimationElement } from '@/shared/ui';
</script>

<template>
  <ContainerFluid class="bg-[url('/images/hero-banner.png')] bg-cover bg-center">
    <Container class="h-full py-10">
      <div class="flex h-full flex-col gap-4 md:flex-row">
        <div class="flex w-full flex-col items-center gap-2 md:w-1/2">
          <div class="mt-4">
            <AnimationElement
              tag="h1"
              :duration="1000"
              animation="fade-left"
              class="text-5xl font-bold"
            >
              The easiest way to manage projects
            </AnimationElement>
            <AnimationElement
              tag="p"
              animation="fade-down"
              :duration="1000"
              class="text-muted-foreground mt-4 text-base"
            >
              From the small stuff to the big picture, organizes the work so teams know what to do,
              why it matters, and how to get it done.
            </AnimationElement>
          </div>
          <div class="mt-10 flex w-full justify-start gap-6">
            <button
              animation="zoom-in"
              tag="button"
              class="cursor-pointer rounded-md bg-[#7C3AED] px-4 py-2 text-white"
            >
              Get Started
            </button>
            <button
              class="flex cursor-pointer items-center gap-1 rounded-md border border-gray-300 bg-transparent px-4 py-2"
            >
              <img
                src="/icons/video-play.png"
                alt="play"
                class="h-6 w-6"
              />
              Watch Video
            </button>
          </div>
        </div>
        <div class="mt-10 flex w-full justify-center md:mt-0 md:w-1/2">
          <img
            src="/images/hero-fone-mobile.png"
            alt="hero-banner-phone"
            class="h-[640px] w-[320px]"
          />
        </div>
      </div>
    </Container>
  </ContainerFluid>
</template>
