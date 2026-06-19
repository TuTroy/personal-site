<script>
  import BlogCard from '$lib/components/BlogCard.svelte';
  import { blogPosts } from '$lib/data';
</script>

<svelte:head>
  <title>博客 — 涂炎钊</title>
</svelte:head>

<section class="section">
  <div class="wrap">
    <div class="section-header">
      <div class="section-header__rule"></div>
      <span class="section-header__number">03</span>
      <h2 class="section-header__title">博客</h2>
      <p class="section-header__sub">不是技术教程博客，是一个数据人转型 AI 的真实记录</p>
    </div>
    <div class="projects__grid">
      {#each blogPosts as post}
        <BlogCard {post} />
      {/each}
    </div>
  </div>
</section>

<style>
  .projects__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  @media (max-width: 860px) {
    .projects__grid { grid-template-columns: 1fr; }
  }
</style>
