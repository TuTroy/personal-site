<script>
  import Chart from '$lib/components/Chart.svelte';
  import ReferenceCard from '$lib/components/ReferenceCard.svelte';
  import EventTimeline from '$lib/components/EventTimeline.svelte';
  import { references } from '$lib/data';

  let { data } = $props();
  let project = $derived(data.project);
  let projectEvents = $derived(data.projectEvents);
  let analysis = $derived(project.cityAnalysis);
</script>

<svelte:head>
  <title>{project.title} — 涂炎钊</title>
</svelte:head>

<section class="section ca-page">
  <!-- 背景光晕 — 玻璃需要背后有色彩可模糊 -->
  <div class="ca-orb ca-orb--1"></div>
  <div class="ca-orb ca-orb--2"></div>
  <div class="ca-orb ca-orb--3"></div>
  <div class="wrap">
    <a href="/projects" class="back-link">← 所有项目</a>
    <div class="section-header" style="margin-top: 24px;">
      <div class="section-header__rule"></div>
      <h2 class="section-header__title">{project.title}</h2>
    </div>

    {#if analysis}
      <!-- CITY ANALYSIS LAYOUT -->
      <!-- 光晕放在 wrap 内，与卡片同层级，backdrop-filter 可模糊到 -->
      <div class="ca-orb-inline ca-orb-inline--1"></div>
      <div class="ca-orb-inline ca-orb-inline--2"></div>
      <div class="ca-hero">
        <p class="ca-hero__city">{analysis.city}</p>
        <p class="ca-hero__oneliner">{analysis.oneLiner}</p>
        <div class="ca-hero__stats">
          {#each analysis.heroStats as s}
            <div class="ca-hero__stat">
              <span class="ca-hero__stat-value">{s.value}</span>
              <span class="ca-hero__stat-label">{s.label}</span>
              <span class="ca-hero__stat-note">{s.note}</span>
            </div>
          {/each}
        </div>
      </div>

      <div class="ca-body">
        <div class="ca-body__intro">
          <div class="ca-problem-solution">
            <div class="ca-ps__item">
              <span class="ca-ps__label">问题</span>
              <p>{project.problem}</p>
            </div>
            <div class="ca-ps__item">
              <span class="ca-ps__label">方案</span>
              <p>{project.solution}</p>
            </div>
          </div>
        </div>

        {#each analysis.sections as section}
          <div class="ca-section" id="ca-{section.id}">
            <h3 class="ca-section__title">{section.title}</h3>
            <p class="ca-section__intro">{section.intro}</p>

            {#if section.table}
              <div class="ca-table-wrap">
                <table class="ca-table">
                  <thead>
                    <tr>
                      {#each section.table.headers as h}
                        <th>{h}</th>
                      {/each}
                    </tr>
                  </thead>
                  <tbody>
                    {#each section.table.rows as row}
                      <tr>
                        {#each row as cell}
                          <td>{cell}</td>
                        {/each}
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </div>
              <div class="ca-insight">
                <span class="ca-insight__label">分析</span>
                <p>{section.insight}</p>
              </div>
            {/if}

            {#if section.districts}
              <div class="ca-districts">
                {#each section.districts as d}
                  <div class="ca-district">
                    <div class="ca-district__head">
                      <h4 class="ca-district__name">{d.name}</h4>
                      <span class="ca-district__gdp">GDP {d.gdp}</span>
                    </div>
                    <p class="ca-district__note">{d.note}</p>
                    {#if d.companies.length > 0}
                      <div class="ca-district__companies">
                        {#each d.companies as c}
                          <span class="ca-company-tag">{c}</span>
                        {/each}
                      </div>
                    {/if}
                  </div>
                {/each}
              </div>
            {/if}

            {#if section.highlight}
              <div class="ca-highlight">
                <h4 class="ca-highlight__title">{section.highlight.title}</h4>
                <div class="ca-highlight__stats">
                  {#each section.highlight.stats as s}
                    <div class="ca-highlight__stat">
                      <span class="ca-highlight__stat-value">{s.value}</span>
                      <span class="ca-highlight__stat-label">{s.label}</span>
                    </div>
                  {/each}
                </div>
                <p class="ca-highlight__note">{section.highlight.note}</p>
              </div>
            {/if}

            {#if section.items}
              <div class="ca-items">
                {#each section.items as item}
                  {#if item.theme !== undefined}
                    <!-- Contradiction item -->
                    <div class="ca-contradiction">
                      <h4 class="ca-contradiction__theme">{item.theme}</h4>
                      <div class="ca-contradiction__pair">
                        <div class="ca-contradiction__side ca-contradiction__side--official">
                          <span class="ca-contradiction__tag">官方叙事</span>
                          <p>{item.official}</p>
                        </div>
                        <span class="ca-contradiction__vs">vs</span>
                        <div class="ca-contradiction__side">
                          <span class="ca-contradiction__tag ca-contradiction__tag--real">地面真相</span>
                          <p>{item.reality}</p>
                        </div>
                      </div>
                    </div>
                  {:else}
                    <!-- Hidden data item -->
                    <div class="ca-item">
                      <h4 class="ca-item__title">{item.title}</h4>
                      <p class="ca-item__body">{item.body}</p>
                    </div>
                  {/if}
                {/each}
              </div>
            {/if}
          </div>
        {/each}

        {#if analysis.dataSources}
          <div class="ca-section">
            <h3 class="ca-section__title ca-section__title--small">数据来源</h3>
            <ul class="ca-sources">
              {#each analysis.dataSources as src}
                <li>{src}</li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>

    {:else}
      <!-- STANDARD PROJECT LAYOUT -->
      <div class="project-detail__rows">
        <div class="project-detail__row">
          <h3 class="project-detail__label">问题</h3>
          <p class="project-detail__text">{project.problem}</p>
        </div>
        <div class="project-detail__row">
          <h3 class="project-detail__label">方案</h3>
          <p class="project-detail__text">{project.solution}</p>
        </div>
        <div class="project-detail__row">
          <h3 class="project-detail__label">结果</h3>
          <p class="project-detail__text">{project.result}</p>
        </div>
      </div>
    {/if}

    {#if project.references}
      <div class="refs-section" style="margin-top: 48px;">
        <div class="refs-section__intro">
          <h3 class="refs-section__title">收录网站</h3>
          <p class="refs-section__sub">精选自全球数据可视化社区、新闻媒体、独立艺术家和个人博客。每个都经过长期验证，持续产出高质量内容。</p>
        </div>
        <div class="refs__grid">
          {#each references as ref}
            <ReferenceCard {...ref} />
          {/each}
        </div>
      </div>
    {/if}

    {#if project.reportUrl}
      <div style="margin-top: 48px;">
        <a href={project.reportUrl} target="_blank" rel="noopener" class="report-link">
          <span>🔗 在线体验</span>
          <span class="report-link__arrow">→</span>
        </a>
      </div>
    {/if}

    {#if project.charts}
      <div class="charts-section" style="margin-top: 40px;">
        <div class="charts__grid">
          {#each project.charts as chart}
            <div class="chart__card">
              <h4 class="chart__title">{chart.title}</h4>
              <Chart option={chart.option} height={chart.height || '360px'} />
            </div>
          {/each}
        </div>
      </div>
    {/if}

    {#if projectEvents.length > 0}
      <div class="project-events" style="margin-top: 56px;">
        <div class="section-header__rule"></div>
        <h3 style="font-family: var(--display); font-size: 24px; font-weight: 400; color: var(--ink); margin-top: 16px; margin-bottom: 8px;">事件日志</h3>
        <EventTimeline events={projectEvents} />
      </div>
    {/if}
  </div>
</section>

<style>
  .back-link {
    font-family: var(--mono); font-size: 13px;
    color: var(--muted); transition: color 0.2s ease;
  }
  .back-link:hover { color: var(--accent); }

  /* ── Page background & orbs ── */
  .ca-page {
    background:
      radial-gradient(ellipse at 10% 0%, rgba(160,190,220,0.35) 0%, transparent 50%),
      radial-gradient(ellipse at 85% 60%, rgba(200,180,160,0.2) 0%, transparent 55%),
      radial-gradient(ellipse at 50% 90%, rgba(180,200,210,0.18) 0%, transparent 50%),
      var(--canvas);
    overflow: hidden;
  }
  .ca-orb {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
  }
  .ca-orb--1 {
    width: 500px; height: 500px;
    top: -120px; left: -180px;
    background: radial-gradient(circle, rgba(120,150,200,0.18) 0%, transparent 70%);
    animation: orbDrift1 18s ease-in-out infinite;
  }
  .ca-orb--2 {
    width: 400px; height: 400px;
    top: 60%; right: -120px;
    background: radial-gradient(circle, rgba(200,160,130,0.16) 0%, transparent 70%);
    animation: orbDrift2 22s ease-in-out infinite;
  }
  .ca-orb--3 {
    width: 350px; height: 350px;
    bottom: -80px; left: 40%;
    background: radial-gradient(circle, rgba(140,170,190,0.14) 0%, transparent 70%);
    animation: orbDrift3 20s ease-in-out infinite;
  }

  /* ── Inline orbs (same stacking context as cards → backdrop-filter works) ── */
  .ca-orb-inline {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: -1;
  }
  .ca-orb-inline--1 {
    width: 520px; height: 520px;
    top: -80px; left: -180px;
    background: radial-gradient(circle, rgba(130,180,210,0.24) 0%, rgba(180,200,220,0.08) 40%, transparent 65%);
    animation: orbDrift1 20s ease-in-out infinite;
  }
  .ca-orb-inline--2 {
    width: 380px; height: 380px;
    top: -40px; right: -140px;
    background: radial-gradient(circle, rgba(190,150,140,0.18) 0%, rgba(200,170,150,0.06) 40%, transparent 65%);
    animation: orbDrift2 24s ease-in-out infinite;
  }
  @keyframes orbDrift1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(40px, 30px) scale(1.08); }
    66% { transform: translate(-20px, -15px) scale(0.94); }
  }
  @keyframes orbDrift2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(-35px, 25px) scale(0.92); }
    66% { transform: translate(25px, -20px) scale(1.06); }
  }
  @keyframes orbDrift3 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-30px, -35px) scale(1.1); }
  }

  /* ── Standard layout ── */
  .project-detail__rows {
    display: flex; flex-direction: column; gap: 32px; margin-bottom: 32px;
  }
  .project-detail__label {
    font-family: var(--mono); font-size: 10.5px; font-weight: 600;
    letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--muted-lighter); margin-bottom: 8px;
  }
  .project-detail__text {
    font-size: 16px; line-height: 1.85; color: var(--ink-2);
  }

  /* ── Content layering ── */
  .ca-page .wrap { position: relative; z-index: 1; }

  /* ── City Analysis Hero ── */
  .ca-hero {
    padding: 56px 0 48px; text-align: center;
  }
  .ca-hero__city {
    font-family: var(--display); font-size: 48px;
    color: var(--ink); letter-spacing: -0.03em; line-height: 1.1;
  }
  .ca-hero__oneliner {
    font-size: 18px; color: var(--muted);
    margin-top: 12px; letter-spacing: -0.01em;
  }
  .ca-hero__stats {
    display: flex; justify-content: center; gap: 48px;
    margin-top: 36px; flex-wrap: wrap;
  }
  .ca-hero__stat {
    display: flex; flex-direction: column; align-items: center; gap: 2px;
    background: rgba(255,255,255,0.16);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(255,255,255,0.45);
    border-radius: 16px;
    padding: 20px 32px;
    box-shadow:
      0 4px 24px rgba(0,0,0,0.03),
      inset 0 1px 0 rgba(255,255,255,0.5);
    transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
  }
  .ca-hero__stat:hover {
    transform: translateY(-2px);
    box-shadow:
      0 8px 32px rgba(0,0,0,0.06),
      inset 0 1px 0 rgba(255,255,255,0.5);
  }
  .ca-hero__stat-value {
    font-family: var(--display); font-size: 32px;
    color: var(--ink); letter-spacing: -0.02em;
  }
  .ca-hero__stat-label {
    font-family: var(--mono); font-size: 11px;
    color: var(--muted-lighter); letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .ca-hero__stat-note {
    font-size: 12px; color: var(--muted);
  }

  /* ── Body ── */
  .ca-body { max-width: 780px; margin: 0 auto; }
  .ca-body__intro { margin-bottom: 56px; }
  .ca-problem-solution {
    display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
  }
  .ca-ps__item {
    background: rgba(255,255,255,0.16);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(255,255,255,0.45);
    border-radius: 16px;
    padding: 24px 26px;
    box-shadow:
      0 4px 24px rgba(0,0,0,0.03),
      inset 0 1px 0 rgba(255,255,255,0.5);
  }
  .ca-ps__label {
    font-family: var(--mono); font-size: 10px; font-weight: 600;
    letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--muted-lighter); margin-bottom: 8px; display: block;
  }
  .ca-ps__item p {
    font-size: 14px; line-height: 1.7; color: var(--ink-2);
  }

  /* ── Sections ── */
  .ca-section { margin-top: 56px; }
  .ca-section__title {
    font-family: var(--display); font-size: 28px; font-weight: 400;
    color: var(--ink); letter-spacing: -0.02em; margin-bottom: 12px;
  }
  .ca-section__title--small {
    font-size: 20px; font-family: var(--sans); font-weight: 600;
  }
  .ca-section__intro {
    font-size: 15px; line-height: 1.75; color: var(--muted);
    margin-bottom: 24px;
  }

  /* ── Table ── */
  .ca-table-wrap {
    overflow-x: auto; margin-bottom: 20px;
  }
  .ca-table {
    width: 100%; border-collapse: collapse;
    font-size: 13.5px;
  }
  .ca-table th {
    text-align: left; font-family: var(--mono); font-size: 10.5px;
    font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--muted-lighter); padding: 10px 14px;
    border-bottom: 1px solid var(--hairline-strong);
  }
  .ca-table td {
    padding: 10px 14px; color: var(--ink-2);
    border-bottom: 1px solid var(--hairline);
    line-height: 1.5;
  }
  .ca-table tr:last-child td { border-bottom: none; }
  .ca-table tbody tr:hover { background: rgba(0,0,0,0.015); }

  /* ── Insight block ── */
  .ca-insight {
    background: rgba(44,82,130,0.06);
    backdrop-filter: blur(14px) saturate(160%);
    -webkit-backdrop-filter: blur(14px) saturate(160%);
    border-left: 3px solid var(--accent);
    border-top: 1px solid rgba(255,255,255,0.3);
    border-right: 1px solid rgba(255,255,255,0.3);
    border-bottom: 1px solid rgba(255,255,255,0.3);
    border-radius: 0 16px 16px 0;
    padding: 20px 24px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.02);
  }
  .ca-insight__label {
    font-family: var(--mono); font-size: 10px; font-weight: 600;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--accent); margin-bottom: 6px; display: block;
  }
  .ca-insight p {
    font-size: 14px; line-height: 1.75; color: var(--ink-2);
  }

  /* ── Districts ── */
  .ca-districts {
    display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
  }
  .ca-district {
    background: rgba(255,255,255,0.16);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(255,255,255,0.45);
    border-radius: 16px;
    padding: 22px 24px;
    box-shadow:
      0 4px 24px rgba(0,0,0,0.03),
      inset 0 1px 0 rgba(255,255,255,0.5);
    transition: transform 0.3s var(--ease);
  }
  .ca-district:hover { transform: translateY(-2px); }
  .ca-district__head {
    display: flex; align-items: baseline; justify-content: space-between;
    margin-bottom: 8px;
  }
  .ca-district__name {
    font-size: 15px; font-weight: 600;
    color: var(--ink); letter-spacing: -0.01em;
  }
  .ca-district__gdp {
    font-family: var(--mono); font-size: 11px; color: var(--muted);
  }
  .ca-district__note {
    font-size: 13px; line-height: 1.6; color: var(--muted);
    margin-bottom: 10px;
  }
  .ca-district__companies { display: flex; flex-wrap: wrap; gap: 6px; }
  .ca-company-tag {
    font-family: var(--mono); font-size: 10.5px;
    color: var(--accent); background: rgba(44,82,130,0.06);
    padding: 3px 10px; border-radius: 20px;
  }

  /* ── Highlight card (dark liquid glass) ── */
  .ca-highlight {
    margin-top: 28px;
    background:
      radial-gradient(ellipse at 20% 0%, rgba(120,140,180,0.15) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 100%, rgba(180,150,120,0.12) 0%, transparent 50%),
      linear-gradient(135deg, rgba(26,26,25,0.85) 0%, rgba(35,35,33,0.85) 50%, rgba(45,45,43,0.85) 100%);
    backdrop-filter: blur(24px) saturate(140%);
    -webkit-backdrop-filter: blur(24px) saturate(140%);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px;
    padding: 32px 36px;
    box-shadow:
      0 12px 48px rgba(0,0,0,0.2),
      inset 0 1px 0 rgba(255,255,255,0.08),
      inset 0 -1px 0 rgba(0,0,0,0.15);
    position: relative;
    overflow: hidden;
  }
  .ca-highlight::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(255,255,255,0.12) 20%,
      rgba(200,200,255,0.18) 50%,
      rgba(255,255,255,0.12) 80%,
      transparent 100%
    );
    pointer-events: none;
  }
  .ca-highlight__title {
    font-family: var(--display); font-size: 22px; font-weight: 400;
    color: #F7F5F0; margin-bottom: 20px; letter-spacing: 0.02em;
    position: relative; z-index: 1;
  }
  .ca-highlight__stats {
    display: flex; gap: 32px; flex-wrap: wrap; position: relative; z-index: 1;
  }
  .ca-highlight__stat {
    display: flex; flex-direction: column; gap: 2px;
  }
  .ca-highlight__stat-value {
    font-family: var(--display); font-size: 28px; color: #F7F5F0;
  }
  .ca-highlight__stat-label {
    font-family: var(--mono); font-size: 10px; color: #A5A39E;
    letter-spacing: 0.06em; text-transform: uppercase;
  }
  .ca-highlight__note {
    font-size: 13px; line-height: 1.65; color: #B8A088;
    margin-top: 16px; border-top: 1px solid rgba(255,255,255,0.08);
    padding-top: 14px; position: relative; z-index: 1;
  }

  /* ── Hidden data items ── */
  .ca-items { display: flex; flex-direction: column; gap: 20px; }
  .ca-item {
    background: rgba(255,255,255,0.16);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(255,255,255,0.45);
    border-radius: 16px;
    padding: 24px 28px;
    box-shadow:
      0 4px 24px rgba(0,0,0,0.03),
      inset 0 1px 0 rgba(255,255,255,0.5);
  }
  .ca-item__title {
    font-size: 15px; font-weight: 600; color: var(--ink);
    letter-spacing: -0.01em; margin-bottom: 8px;
  }
  .ca-item__body {
    font-size: 14px; line-height: 1.75; color: var(--muted);
  }

  /* ── Contradictions ── */
  .ca-contradiction {
    background: rgba(255,255,255,0.16);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(255,255,255,0.45);
    border-radius: 16px;
    padding: 28px 32px;
    box-shadow:
      0 4px 24px rgba(0,0,0,0.03),
      inset 0 1px 0 rgba(255,255,255,0.5);
  }
  .ca-contradiction__theme {
    font-family: var(--display); font-size: 20px; font-weight: 400;
    color: var(--ink); margin-bottom: 16px; letter-spacing: 0.02em;
  }
  .ca-contradiction__pair {
    display: grid; grid-template-columns: 1fr auto 1fr; gap: 16px;
    align-items: start;
  }
  .ca-contradiction__tag {
    font-family: var(--mono); font-size: 9.5px; font-weight: 600;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--muted-lighter); margin-bottom: 6px; display: block;
  }
  .ca-contradiction__tag--real {
    color: #8B7355;
  }
  .ca-contradiction__side p {
    font-size: 13.5px; line-height: 1.65; color: var(--ink-2);
  }
  .ca-contradiction__vs {
    font-family: var(--mono); font-size: 11px;
    color: var(--muted-lighter); padding-top: 18px;
  }

  /* ── Data sources ── */
  .ca-sources {
    list-style: none; display: flex; flex-direction: column; gap: 4px;
  }
  .ca-sources li {
    font-family: var(--mono); font-size: 11.5px; color: var(--muted-lighter);
    padding-left: 16px; position: relative;
  }
  .ca-sources li::before {
    content: '—'; position: absolute; left: 0; color: var(--hairline-strong);
  }

  /* ── Shared ── */
  .charts__grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 24px; padding-bottom: 40px;
  }
  .chart__card {
    background: var(--surface); border: 1px solid var(--hairline);
    border-radius: var(--radius); padding: 24px 20px 16px;
  }
  .chart__title {
    font-size: 14px; font-weight: 600; color: var(--ink);
    margin-bottom: 16px; letter-spacing: -0.01em;
  }
  .report-link {
    display: inline-flex; align-items: center; gap: 10px;
    font-family: var(--mono); font-size: 14px; font-weight: 500;
    color: var(--ink); background: var(--surface);
    border: 1px solid var(--hairline-strong);
    border-radius: var(--radius); padding: 16px 24px;
    transition: all 0.2s ease;
  }
  .report-link:hover { border-color: var(--accent); color: var(--accent); }
  .report-link__arrow { transition: transform 0.2s ease; }
  .report-link:hover .report-link__arrow { transform: translateX(4px); }
  .refs-section__intro { margin-bottom: 28px; }
  .refs-section__title {
    font-size: 18px; font-weight: 600; color: var(--ink);
    letter-spacing: -0.02em;
  }
  .refs-section__sub {
    font-size: 14px; color: var(--muted);
    line-height: 1.6; margin-top: 6px; max-width: 560px;
  }
  .refs__grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 16px; padding-bottom: 40px;
  }

  @media (max-width: 860px) {
    .ca-hero__city { font-size: 36px; }
    .ca-hero__stats { gap: 28px; }
    .ca-hero__stat-value { font-size: 26px; }
    .ca-body { max-width: 100%; }
    .ca-problem-solution { grid-template-columns: 1fr; }
    .ca-districts { grid-template-columns: 1fr; }
    .ca-highlight__stats { gap: 20px; }
    .ca-highlight__stat-value { font-size: 22px; }
    .ca-contradiction__pair { grid-template-columns: 1fr; }
    .ca-contradiction__vs { text-align: center; padding-top: 4px; }
    .charts__grid { grid-template-columns: 1fr; }
    .refs__grid { grid-template-columns: 1fr; }
  }
</style>
