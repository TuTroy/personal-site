<script>
  import { site } from '$lib/data.js';
</script>

<section class="hero">
  <div class="hero__bg"></div>
  <div class="hero__inner">
    <h1 class="hero__name">{site.name}</h1>
    <p class="hero__tagline">{site.tagline}</p>
  </div>
  <div class="hero__scroll-hint">
    <svg width="16" height="36" viewBox="0 0 16 36" fill="none">
      <rect x="1" y="1" width="14" height="34" rx="7" stroke="currentColor" stroke-width="1" opacity="0.3"/>
      <circle cx="8" cy="10" r="2" fill="currentColor" opacity="0.5">
        <animate attributeName="cy" values="10;18;10" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0.15;0.5" dur="2.5s" repeatCount="indefinite"/>
      </circle>
    </svg>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 80px 0;
    position: relative;
    overflow: hidden;
  }
  .hero__bg {
    position: absolute; inset: 0;
    background-image: radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px);
    background-size: 24px 24px;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, transparent 80%);
    -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, transparent 80%);
  }
  .hero__inner {
    position: relative; z-index: 1;
    max-width: 820px; margin: 0 auto; padding: 0 32px;
    text-align: center;
  }
  .hero__name {
    font-family: var(--display);
    font-size: clamp(56px, 9vw, 110px);
    line-height: 1.02;
    letter-spacing: -0.03em;
    font-weight: 400;
    color: var(--ink);
    opacity: 0;
    animation: fadeSlideIn 0.8s var(--ease) 0.15s forwards;
  }
  .hero__tagline {
    margin-top: 22px;
    font-size: clamp(17px, 2.2vw, 22px);
    line-height: 1.65;
    color: var(--muted);
    max-width: 40ch;
    margin-left: auto; margin-right: auto;
    opacity: 0;
    animation: fadeSlideIn 0.8s var(--ease) 0.3s forwards;
  }
  .hero__scroll-hint {
    position: absolute;
    bottom: 44px; left: 50%;
    transform: translateX(-50%);
    color: var(--muted-lighter);
    opacity: 0;
    animation: fadeIn 1s var(--ease) 1.5s forwards;
  }

  @media (max-width: 480px) {
    .hero__name { font-size: clamp(40px, 14vw, 56px); }
  }
</style>
