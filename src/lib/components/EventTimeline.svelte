<script>
  let { events = [] } = $props();

  let groupedByYear = $derived.by(() => {
    const map = new Map();
    for (const e of events) {
      const year = e.date.slice(0, 4);
      if (!map.has(year)) map.set(year, []);
      map.get(year).push(e);
    }
    return [...map.entries()].sort((a, b) => b[0].localeCompare(a[0]));
  });
</script>

<div class="timeline">
  {#each groupedByYear as [year, yearEvents]}
    <div class="timeline__year">{year}</div>
    <div class="timeline__line">
      {#each yearEvents as event}
        <div class="timeline__item">
          <div class="timeline__date">{event.date.slice(5)}</div>
          <div class="timeline__body">
            <a href="/projects/{event.projectSlug}" class="timeline__project">{event.projectTitle}</a>
            <span class="timeline__desc">{event.desc}</span>
          </div>
        </div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .timeline { padding: 24px 0; }
  .timeline__year {
    font-family: var(--display);
    font-size: 28px;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: var(--ink);
    margin: 40px 0 20px;
  }
  .timeline__year:first-child { margin-top: 0; }
  .timeline__line {
    border-left: 2px solid var(--accent);
    padding-left: 20px;
    margin-left: 6px;
  }
  .timeline__item {
    padding: 8px 0;
    position: relative;
  }
  .timeline__item::before {
    content: '';
    position: absolute;
    left: -26px;
    top: 14px;
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--accent);
    border: 2px solid var(--canvas);
  }
  .timeline__date {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--muted-lighter);
    margin-bottom: 3px;
  }
  .timeline__body {
    display: flex;
    align-items: baseline;
    gap: 8px;
    flex-wrap: wrap;
  }
  .timeline__project {
    font-family: var(--mono);
    font-size: 11px;
    font-weight: 500;
    color: var(--accent);
    background: var(--accent-subtle);
    padding: 2px 8px;
    border-radius: 4px;
    white-space: nowrap;
    transition: opacity 0.2s ease;
  }
  .timeline__project:hover { opacity: 0.7; }
  .timeline__desc {
    font-size: 15px;
    line-height: 1.65;
    color: var(--ink-2);
  }

  @media (max-width: 860px) {
    .timeline__line { padding-left: 14px; margin-left: 4px; }
    .timeline__item::before { left: -19px; width: 6px; height: 6px; }
    .timeline__body { flex-direction: column; gap: 4px; }
  }
</style>
