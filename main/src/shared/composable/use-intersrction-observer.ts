import { ref, onMounted, onUnmounted } from 'vue';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const useIntersectionObserver = (options: UseIntersectionObserverOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const refElement = ref<HTMLElement | null>(null);
  const isVisible = ref(false);

  const observer = ref<IntersectionObserver | null>(null);

  onMounted(() => {
    const element = refElement.value;
    if (!refElement.value) {
      return;
    }

    observer.value = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          isVisible.value = true;
          if (triggerOnce) {
            observer.value?.unobserve(element as Element);
          }
        } else if (!triggerOnce) {
          isVisible.value = false;
        }
      },
      { threshold, rootMargin },
    );

    observer.value.observe(element as Element);
  });

  onUnmounted(() => {
    if (refElement.value) {
      observer.value?.unobserve(refElement.value as Element);
    }
  });

  return { refElement, isVisible };
};

export { useIntersectionObserver };
