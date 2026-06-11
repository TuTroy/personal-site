<script>
  let { name, url, desc, tags = [] } = $props();
</script>

<a href={url} target="_blank" rel="noopener" class="ref-card">
  <div class="ref-card__top">
    <h4 class="ref-card__name">{name}</h4>
    <span class="ref-card__arrow">↗</span>
  </div>
  <p class="ref-card__desc">{desc}</p>
  <div class="ref-card__tags">
    {#each tags as tag}
      <span class="ref-card__tag">{tag}</span>
    {/each}
  </div>
</a>

<style>
  .ref-card {
    display: flex; flex-direction: column; gap: 10px;
    background: var(--surface);
    border: 1px solid var(--hairline);
    border-radius: var(--radius);
    padding: 20px 22px;
    transition: all 0.25s var(--ease);
  }
  .ref-card:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.06);
  }
  .ref-card__top {
    display: flex; align-items: center; justify-content: space-between;
  }
  .ref-card__name {
    font-size: 15px; font-weight: 600;
    color: var(--ink); letter-spacing: -0.01em;
  }
  .ref-card__arrow {
    font-size: 14px; color: var(--muted-lighter);
    transition: all 0.2s ease;
  }
  .ref-card:hover .ref-card__arrow { color: var(--accent); }
  .ref-card__desc {
    font-size: 13.5px; line-height: 1.65;
    color: var(--muted);
  }
  .ref-card__tags {
    display: flex; flex-wrap: wrap; gap: 6px; margin-top: 2px;
  }
  .ref-card__tag {
    font-family: var(--mono); font-size: 10.5px;
    color: var(--accent); background: rgba(44, 82, 130, 0.06);
    padding: 3px 10px; border-radius: 20px;
    letter-spacing: 0.02em;
  }
</style>
