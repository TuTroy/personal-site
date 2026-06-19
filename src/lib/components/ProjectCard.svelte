<script>
  let { project, eventCount = 0 } = $props();
</script>

<a href="/projects/{project.slug}" class="project-card" class:project-card--ongoing={project.inProgress}>
  <div class="project-card__head">
    <h3 class="project-card__title">{project.title}</h3>
    {#if project.inProgress}
      <span class="badge">进行中</span>
    {/if}
  </div>
  <div class="project-card__rows">
    <div class="project-card__row">
      <span class="project-card__row-label">问题</span>
      <p>{project.problem}</p>
    </div>
    <div class="project-card__row">
      <span class="project-card__row-label">方案</span>
      <p>{project.solution}</p>
    </div>
    <div class="project-card__row">
      <span class="project-card__row-label">结果</span>
      <p>{project.result}</p>
    </div>
  </div>
  {#if eventCount > 0}
    <div class="project-card__events">
      <span class="project-card__events-count">{eventCount} 条更新</span>
    </div>
  {/if}
</a>

<style>
  .project-card {
    display: block;
    padding: 32px 34px;
    background: var(--canvas);
    border: 1px solid var(--hairline);
    border-radius: var(--radius);
    transition: transform 0.35s var(--ease-spring), box-shadow 0.35s ease, border-color 0.35s ease;
  }
  .project-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.06);
    border-color: var(--hairline-strong);
  }
  .project-card:active { transform: translateY(-1px); }
  .project-card--ongoing {
    border-left: 2.5px solid var(--accent);
  }
  .project-card__head {
    display: flex; align-items: center; gap: 10px;
    margin-bottom: 20px;
  }
  .project-card__title {
    font-size: 17px; font-weight: 600;
    letter-spacing: -0.01em;
    color: var(--ink);
  }
  .project-card__rows {
    display: flex; flex-direction: column; gap: 12px;
  }
  .project-card__row {
    display: grid;
    grid-template-columns: 32px 1fr;
    gap: 10px;
    font-size: 14px; line-height: 1.7;
    color: var(--ink-2);
  }
  .project-card__row-label {
    font-family: var(--mono);
    font-size: 10px; font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--muted-lighter);
    padding-top: 3px;
  }
  .project-card__events {
    margin-top: 16px;
    padding-top: 12px;
    border-top: 1px solid var(--hairline);
  }
  .project-card__events-count {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--muted-lighter);
  }
  @media (max-width: 480px) {
    .project-card { padding: 24px 22px; }
    .project-card__row { grid-template-columns: 1fr; gap: 2px; }
  }
</style>
