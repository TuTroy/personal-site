<script>
  import { onMount } from 'svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import BlogCard from '$lib/components/BlogCard.svelte';
  import RevealWrapper from '$lib/components/RevealWrapper.svelte';
  import { projects, blogPosts } from '$lib/data.js';

  const featuredProjects = projects.slice(0, 3);
  const featuredPosts = blogPosts.slice(0, 3);

  onMount(() => {
    const sections = document.querySelectorAll('.snap-section');
    if (sections.length === 0) return;

    let current = 0;
    let scrolling = false;
    let scrollDir = 0;
    let scrollTimer = null;

    function scrollToSection(idx) {
      if (idx < 0 || idx >= sections.length) return;

      if (scrolling) {
        window.scrollTo({ top: window.scrollY, behavior: 'instant' });
        clearTimeout(scrollTimer);
      }

      current = idx;
      scrolling = true;
      sections[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });

      scrollTimer = setTimeout(() => { scrolling = false; scrollDir = 0; }, 700);
    }

    function handleWheel(e) {
      const dir = e.deltaY > 25 ? 1 : e.deltaY < -25 ? -1 : 0;
      if (dir === 0) return;
      e.preventDefault();

      if (scrolling && dir === scrollDir) return;

      scrollDir = dir;
      scrollToSection(current + dir);
    }

    function handleKey(e) {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        if (scrolling && scrollDir === 1) return;
        scrollDir = 1;
        scrollToSection(current + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (scrolling && scrollDir === -1) return;
        scrollDir = -1;
        scrollToSection(current - 1);
      }
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            const idx = Array.from(sections).indexOf(entry.target);
            if (idx >= 0) current = idx;
          }
        }
      },
      { threshold: [0.3, 0.5, 0.7] }
    );
    sections.forEach((s) => obs.observe(s));

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKey);
      obs.disconnect();
    };
  });
</script>

<svelte:head>
  <title>涂炎钊 — 技术是手段，认知是壁垒</title>
</svelte:head>

<div class="snap-section snap-section--full">
  <Hero />
</div>

<div class="snap-section">
  <About />
</div>

<!-- 精选项目 -->
<div class="snap-section">
  <section class="section" id="projects">
    <div class="wrap">
      <RevealWrapper>
        <div class="section-header">
          <div class="section-header__rule"></div>
          <span class="section-header__number">02</span>
          <h2 class="section-header__title">项目</h2>
          <p class="section-header__sub">每个项目都是一个真实问题，以及我找到的解法</p>
        </div>
      </RevealWrapper>
      <div class="projects__grid">
        {#each featuredProjects as project, i}
          <RevealWrapper delay={i * 80}>
            <ProjectCard {project} />
          </RevealWrapper>
        {/each}
      </div>
      <div class="section__more">
        <a href="/projects" class="more-link">查看所有项目 →</a>
      </div>
    </div>
  </section>
</div>

<!-- 精选博客 -->
<div class="snap-section">
  <section class="section section--alt" id="blog">
    <div class="wrap">
      <RevealWrapper>
        <div class="section-header">
          <div class="section-header__rule"></div>
          <span class="section-header__number">03</span>
          <h2 class="section-header__title">博客</h2>
          <p class="section-header__sub">不是技术教程博客，是一个数据人转型 AI 的真实记录</p>
        </div>
      </RevealWrapper>
      <div class="projects__grid">
        {#each featuredPosts as post, i}
          <RevealWrapper delay={i * 70}>
            <BlogCard {post} />
          </RevealWrapper>
        {/each}
      </div>
      <div class="section__more">
        <a href="/blog" class="more-link">查看所有文章 →</a>
      </div>
    </div>
  </section>
</div>

<style>
  .snap-section > :global(.section) {
    min-height: 100vh;
  }
  .projects__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .section__more {
    margin-top: 32px;
    text-align: center;
  }
  .more-link {
    font-family: var(--mono);
    font-size: 13px;
    font-weight: 500;
    color: var(--accent);
    transition: opacity 0.2s ease;
  }
  .more-link:hover { opacity: 0.7; }

  @media (max-width: 860px) {
    .projects__grid { grid-template-columns: 1fr; }
  }
</style>
