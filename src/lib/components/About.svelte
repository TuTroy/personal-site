<script>
  import { about } from '$lib/data';
  import RevealWrapper from './RevealWrapper.svelte';
</script>

<section class="section section--alt about-section" id="about">
  <div class="wrap">
    <RevealWrapper>
      <div class="section-header">
        <div class="section-header__rule"></div>
        <span class="section-header__number">01</span>
        <h2 class="section-header__title">关于我</h2>
      </div>
    </RevealWrapper>
    <div class="about__layout">
      <RevealWrapper>
        <div class="about__avatar">
          <img src="/images/avatar.png" alt="涂炎钊" class="about__avatar-img" />
        </div>
      </RevealWrapper>
      <div class="about__blocks">
        {#each about.blocks as block, i}
          <RevealWrapper delay={i * 100}>
            <h3 class="about__label">{block.label}</h3>
            <p class="about__text">{block.text}</p>
          </RevealWrapper>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .about-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 100px 0;
  }
  .about__layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    text-align: center;
    margin-top: 16px;
  }
  .about__avatar {
    width: 88px; height: 88px;
    border-radius: 50%;
    background: var(--accent-ghost);
    border: 1px solid rgba(44,82,130,0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .about__avatar-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  .about__blocks {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 44px;
    text-align: left;
    max-width: 880px;
  }
  .about__label {
    font-family: var(--mono);
    font-size: 10.5px; font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted-lighter);
    margin-bottom: 10px;
  }
  .about__text {
    font-size: 15px;
    line-height: 1.85;
    color: var(--ink-2);
    text-wrap: pretty;
  }

  @media (max-width: 860px) {
    .about-section { min-height: auto; padding: 80px 0; }
    .about__blocks {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 32px;
    }
    .about__layout { gap: 32px; }
  }
</style>
