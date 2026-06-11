<script>
  import '../app.css';
  import { fly, fade } from 'svelte/transition';
  import Nav from '$lib/components/Nav.svelte';
  import ScrollProgress from '$lib/components/ScrollProgress.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { page } from '$app/stores';

  let { children } = $props();
</script>

<ScrollProgress />
<Nav />

<main>
  {#key $page.url.pathname}
    <div in:fly={{ y: 12, duration: 350 }} out:fade={{ duration: 200 }}>
      {@render children()}
    </div>
  {/key}
</main>

<Footer />
