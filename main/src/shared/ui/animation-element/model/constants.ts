import type {
  AnimationElementProps,
  AnimationType,
} from '@/shared/ui/animation-element/model/type';

const animationElementDefaultProps = {
  animation: 'fade-up',
  delay: 0,
  duration: 600,
  class: '',
  threshold: 0.1,
  tag: 'div',
} as const satisfies AnimationElementProps;

const animationClasses: Record<AnimationType, string> = {
  'fade-up': 'translate-y-10 opacity-0',
  'fade-down': '-translate-y-10 opacity-0',
  'fade-left': 'translate-x-10 opacity-0',
  'fade-right': '-translate-x-10 opacity-0',
  'fade-in': 'opacity-0',
  scale: 'scale-95 opacity-0',
  'zoom-in': 'scale-75 opacity-0',
};

const visibleClasses = 'translate-y-0 translate-x-0 opacity-100 scale-100';

export { animationElementDefaultProps, animationClasses, visibleClasses };
