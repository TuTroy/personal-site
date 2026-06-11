<script>
  import { onMount } from 'svelte';
  import * as echarts from 'echarts';

  let { option, height = '400px' } = $props();
  let container = $state(null);

  onMount(() => {
    if (!container) return;
    const chart = echarts.init(container, null, { renderer: 'canvas' });
    chart.setOption(option);

    const ro = new ResizeObserver(() => chart.resize());
    ro.observe(container);

    return () => {
      ro.disconnect();
      chart.dispose();
    };
  });
</script>

<div bind:this={container} style="width: 100%; height: {height};"></div>
