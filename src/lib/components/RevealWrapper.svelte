<script>
  import { onMount } from 'svelte';

  let { delay = 0, children } = $props();
  let el = $state(null);
  let visible = $state(false);

  onMount(() => {
    const target = el;
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(target);
    return () => observer.disconnect();
  });
</script>

<div
  bind:this={el}
  class="reveal"
  class:reveal--visible={visible}
  style="transition-delay: {delay}ms"
>
  {@render children?.()}
</div>

<style>
  .reveal {
    opacity: 0;
    transform: translateY(180px);
    transition: opacity 1.4s var(--ease), transform 1.4s var(--ease);
  }
  .reveal--visible {
    opacity: 1;
    transform: translateY(0);
  }
</style>
