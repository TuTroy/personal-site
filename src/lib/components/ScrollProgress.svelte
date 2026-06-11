<script>
  import { onMount } from 'svelte';

  let width = $state(0);

  onMount(() => {
    function handle() {
      const h = document.documentElement;
      width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    }
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  });
</script>

<div class="scroll-progress">
  <div class="scroll-progress__bar" style="width: {Math.min(width, 100)}%"></div>
</div>

<style>
  .scroll-progress {
    position: fixed; top: 0; left: 0; right: 0; z-index: 999;
    height: 2px; background: transparent;
  }
  .scroll-progress__bar {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, var(--accent), var(--accent-glow));
    transition: width 100ms linear;
  }
</style>
