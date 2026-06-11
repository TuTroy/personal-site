<script>
  let { post } = $props();
</script>

<a href="/blog/{post.slug}" class="blog-card">
  <span class="blog-card__type">{post.type}</span>
  <h3 class="blog-card__title">{post.title}</h3>
  <p class="blog-card__angle">{post.angle}</p>
  <span class="blog-card__arrow">→</span>
</a>

<style>
  .blog-card {
    position: relative;
    display: block;
    padding: 28px 32px;
    background: var(--canvas);
    border: 1px solid var(--hairline);
    border-radius: var(--radius);
    transition: transform 0.35s var(--ease-spring), box-shadow 0.35s ease, border-color 0.35s ease;
  }
  .blog-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(0,0,0,0.05);
    border-color: var(--hairline-strong);
  }
  .blog-card__type {
    font-family: var(--mono);
    font-size: 10px; font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
  }
  .blog-card__title {
    margin-top: 10px;
    font-size: 15px; font-weight: 600;
    line-height: 1.55;
    color: var(--ink);
    letter-spacing: -0.005em;
  }
  .blog-card__angle {
    margin-top: 8px;
    font-size: 13px;
    line-height: 1.55;
    color: var(--muted);
  }
  .blog-card__arrow {
    position: absolute;
    bottom: 22px; right: 26px;
    font-size: 16px;
    color: var(--muted-lighter);
    opacity: 0;
    transform: translateX(-6px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    font-family: var(--sans);
  }
  .blog-card:hover .blog-card__arrow {
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 480px) {
    .blog-card { padding: 22px 20px; }
  }
</style>
