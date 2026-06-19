<script>
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { projects, events } from '$lib/data';

  let eventCountBySlug = $derived.by(() => {
    const map = new Map();
    for (const e of events) {
      map.set(e.projectSlug, (map.get(e.projectSlug) || 0) + 1);
    }
    return map;
  });
</script>

<svelte:head>
  <title>项目 — 涂炎钊</title>
</svelte:head>

<section class="section">
  <div class="wrap">
    <div class="section-header">
      <div class="section-header__rule"></div>
      <span class="section-header__number">02</span>
      <h2 class="section-header__title">项目</h2>
      <p class="section-header__sub">每个项目都是一个真实问题，以及我找到的解法</p>
    </div>
    <div class="projects__grid">
      {#each projects as project}
        <ProjectCard {project} eventCount={eventCountBySlug.get(project.slug) || 0} />
      {/each}
    </div>
  </div>
</section>

<style>
  .projects__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 860px) {
    .projects__grid { grid-template-columns: 1fr; }
  }
</style>
