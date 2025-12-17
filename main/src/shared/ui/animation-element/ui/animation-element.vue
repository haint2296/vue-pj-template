<script lang="ts" setup>
/**
 * AnimationElement
 */
import { computed } from 'vue';
import { cn } from '@/shared/lib';
import type { AnimationElementProps } from '../model/type';
import { animationElementDefaultProps, animationClasses } from '../model/constants';
import { useIntersectionObserver } from '@/shared/composable';

defineOptions({
  name: 'AnimationElement',
});

const _props = withDefaults(defineProps<AnimationElementProps>(), animationElementDefaultProps);

const visibleClasses = 'translate-y-0 translate-x-0 opacity-100 scale-100';

const { refElement, isVisible } = useIntersectionObserver({
  threshold: _props.threshold,
  triggerOnce: true,
});

const refComputed = computed(() => {
  return refElement;
});
</script>

<template>
  <component
    :is="_props.tag"
    :ref="refComputed"
    :class="[
      cn(
        'transition-all ease-out',
        !isVisible ? animationClasses[_props.animation] : '',
        isVisible ? visibleClasses : '',
        _props.class,
      ),
    ]"
    :style="{
      transitionDuration: `${_props.duration}ms`,
      transitionDelay: `${_props.delay}ms`,
    }"
  >
    <slot />
  </component>
</template>
