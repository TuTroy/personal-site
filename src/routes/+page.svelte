<script>
  import { site, events } from '$lib/data';
  import EventTimeline from '$lib/components/EventTimeline.svelte';

  let sortedEvents = $derived(
    [...events].sort((a, b) => b.date.localeCompare(a.date))
  );
</script>

<svelte:head>
  <title>{site.name} — 项目日志</title>
</svelte:head>

<header class="log-header">
  <h1 class="log-header__name">{site.name}</h1>
  <p class="log-header__tagline">{site.tagline}</p>
</header>

<section class="section">
  <div class="wrap-narrow">
    <EventTimeline events={sortedEvents} />
  </div>
</section>

<style>
  .log-header {
    text-align: center;
    padding: 80px 32px 24px;
  }
  .log-header__name {
    font-family: var(--display);
    font-size: clamp(32px, 5vw, 48px);
    font-weight: 400;
    letter-spacing: -0.03em;
    color: var(--ink);
  }
  .log-header__tagline {
    margin-top: 8px;
    font-size: 14px;
    color: var(--muted);
    max-width: 36ch;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 860px) {
    .log-header { padding: 60px 24px 16px; }
  }
</style>
