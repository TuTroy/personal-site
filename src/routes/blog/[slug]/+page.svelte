<script>
  let { data } = $props();
  let post = $derived(data.post);
</script>

<svelte:head>
  <title>{post.title} — 涂炎钊</title>
</svelte:head>

<section class="section">
  <div class="wrap-narrow">
    <a href="/blog" class="back-link">← 所有文章</a>
    <article style="margin-top: 24px;">
      <span class="blog-detail__type">{post.type}</span>
      <h1 class="blog-detail__title">{post.title}</h1>
      <div class="blog-detail__body">
        <p class="blog-detail__text">{post.angle}</p>
        <p class="blog-detail__note">（文章内容即将上线）</p>
      </div>
    </article>
  </div>
</section>

<style>
  .back-link {
    font-family: var(--mono);
    font-size: 13px;
    color: var(--muted);
    transition: color 0.2s ease;
  }
  .back-link:hover { color: var(--accent); }
  .blog-detail__type {
    font-family: var(--mono);
    font-size: 10px; font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
  }
  .blog-detail__title {
    margin-top: 12px;
    font-family: var(--display);
    font-size: clamp(28px, 4vw, 40px);
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1.2;
    color: var(--ink);
  }
  .blog-detail__body {
    margin-top: 40px;
    font-size: 16px;
    line-height: 1.85;
    color: var(--ink-2);
  }
  .blog-detail__text {
    font-size: 16px;
    line-height: 1.85;
    color: var(--ink-2);
  }
  .blog-detail__note {
    margin-top: 16px;
    font-size: 14px;
    color: var(--muted-lighter);
    font-style: italic;
  }
</style>
