import type { Component } from 'vue';

export type AnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade-in'
  | 'scale'
  | 'zoom-in';

export type AnimationElementProps = {
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  class?: string;
  threshold?: number;
  tag?: string | Component;
};
