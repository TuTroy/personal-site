# Event-Driven 个人网站改造 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将个人网站从介绍型改造为事件驱动型，主页展示所有项目的事件时间线，项目详情页增加该项目的事件日志。

**Architecture:** 新增 `events.js` 数据文件 + `EventTimeline.svelte` 可复用组件。首页替换 Hero/About 为事件时间线，项目详情页在现有内容下方追加事件时间线。沿用现有 CSS 变量体系。

**Tech Stack:** SvelteKit (SSG), existing CSS variables

---

### Task 1: 创建事件数据文件

**Files:**
- Create: `src/lib/data/events.js`

- [ ] **Step 1: 编写 events.js 数据文件**

```js
export const events = [
  {
    date: '2026-06-18',
    projectSlug: 'capital-cloud-map',
    projectTitle: '资金云图',
    desc: '修复港股通数据源，成交额口径统一为人民币',
  },
  {
    date: '2026-06-16',
    projectSlug: 'capital-cloud-map',
    projectTitle: '资金云图',
    desc: '添加行业分类切换组件，支持申万二级/三级分类切换',
  },
  {
    date: '2026-06-12',
    projectSlug: 'capital-cloud-map',
    projectTitle: '资金云图',
    desc: 'CI/CD 部署流程打通，push 自动发布到生产服务器',
  },
  {
    date: '2026-06-17',
    projectSlug: 'place-exploration',
    projectTitle: 'Place Soul Explorer',
    desc: '深圳政府开放数据平台 API 接入完成',
  },
  {
    date: '2026-06-14',
    projectSlug: 'place-exploration',
    projectTitle: 'Place Soul Explorer',
    desc: '三段式探索方法论 pipeline 初步跑通，单次探索成本降至 $0.10',
  },
  {
    date: '2026-06-15',
    projectSlug: 'ops-monitor',
    projectTitle: '运维监控可视化看板',
    desc: '新增磁盘 I/O 指标面板，替换旧的静态报表',
  },
  {
    date: '2026-06-10',
    projectSlug: 'ops-monitor',
    projectTitle: '运维监控可视化看板',
    desc: '告警聚合逻辑重构，误报率降低 40%',
  },
  {
    date: '2026-06-08',
    projectSlug: 'incident-ticket-analysis',
    projectTitle: '运维事件工单分析系统',
    desc: 'P0 紧急工单自动升级逻辑上线',
  },
];
```

- [ ] **Step 2: 在 index.js 中导出 events**

Edit `src/lib/data/index.js`，在最后添加一行：

```js
export { events } from './events.js';
```

- [ ] **Step 3: 验证数据可导入**

Run: `node -e "import('./src/lib/data/index.js').then(m => console.log(m.events.length))"`
Expected: `8`

- [ ] **Step 4: Commit**

```bash
git add src/lib/data/events.js src/lib/data/index.js
git commit -m "feat: add events data file with sample entries"
```

---

### Task 2: 创建 EventTimeline 组件

**Files:**
- Create: `src/lib/components/EventTimeline.svelte`

- [ ] **Step 1: 编写 EventTimeline.svelte**

```svelte
<script>
  let { events = [] } = $props();

  let groupedByYear = $derived.by(() => {
    const map = new Map();
    for (const e of events) {
      const year = e.date.slice(0, 4);
      if (!map.has(year)) map.set(year, []);
      map.get(year).push(e);
    }
    return [...map.entries()].sort((a, b) => b[0].localeCompare(a[0]));
  });
</script>

<div class="timeline">
  {#each groupedByYear as [year, yearEvents]}
    <div class="timeline__year">{year}</div>
    <div class="timeline__line">
      {#each yearEvents as event}
        <div class="timeline__item">
          <div class="timeline__date">{event.date.slice(5)}</div>
          <div class="timeline__body">
            <a href="/projects/{event.projectSlug}" class="timeline__project">{event.projectTitle}</a>
            <span class="timeline__desc">{event.desc}</span>
          </div>
        </div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .timeline { padding: 24px 0; }
  .timeline__year {
    font-family: var(--display);
    font-size: 28px;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: var(--ink);
    margin: 40px 0 20px;
  }
  .timeline__year:first-child { margin-top: 0; }
  .timeline__line {
    border-left: 2px solid var(--accent);
    padding-left: 20px;
    margin-left: 6px;
  }
  .timeline__item {
    padding: 8px 0;
    position: relative;
  }
  .timeline__item::before {
    content: '';
    position: absolute;
    left: -26px;
    top: 14px;
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--accent);
    border: 2px solid var(--canvas);
  }
  .timeline__date {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--muted-lighter);
    margin-bottom: 3px;
  }
  .timeline__body {
    display: flex;
    align-items: baseline;
    gap: 8px;
    flex-wrap: wrap;
  }
  .timeline__project {
    font-family: var(--mono);
    font-size: 11px;
    font-weight: 500;
    color: var(--accent);
    background: var(--accent-subtle);
    padding: 2px 8px;
    border-radius: 4px;
    white-space: nowrap;
    transition: opacity 0.2s ease;
  }
  .timeline__project:hover { opacity: 0.7; }
  .timeline__desc {
    font-size: 15px;
    line-height: 1.65;
    color: var(--ink-2);
  }

  @media (max-width: 860px) {
    .timeline__line { padding-left: 14px; margin-left: 4px; }
    .timeline__item::before { left: -19px; width: 6px; height: 6px; }
    .timeline__body { flex-direction: column; gap: 4px; }
  }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/components/EventTimeline.svelte
git commit -m "feat: add EventTimeline component"
```

---

### Task 3: 改造首页为事件时间线

**Files:**
- Modify: `src/routes/+page.svelte`

- [ ] **Step 1: 重写 +page.svelte**

将整个文件替换为：

```svelte
<script>
  import { site, events } from '$lib/data';
  import EventTimeline from '$lib/components/EventTimeline.svelte';

  let sortedEvents = $derived(
    [...events].sort((a, b) => b.date.localeCompare(a.date))
  );
</script>

<svelte:head>
  <title>{site.name} — 项目日志</title>
</svelte:head>

<header class="log-header">
  <h1 class="log-header__name">{site.name}</h1>
  <p class="log-header__tagline">{site.tagline}</p>
</header>

<section class="section">
  <div class="wrap-narrow">
    <EventTimeline events={sortedEvents} />
  </div>
</section>

<style>
  .log-header {
    text-align: center;
    padding: 80px 32px 24px;
  }
  .log-header__name {
    font-family: var(--display);
    font-size: clamp(32px, 5vw, 48px);
    font-weight: 400;
    letter-spacing: -0.03em;
    color: var(--ink);
  }
  .log-header__tagline {
    margin-top: 8px;
    font-size: 14px;
    color: var(--muted);
    max-width: 36ch;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 860px) {
    .log-header { padding: 60px 24px 16px; }
  }
</style>
```

- [ ] **Step 2: 验证页面无报错**

Run: `npm run dev` (briefly) then check that the page compiles

- [ ] **Step 3: Commit**

```bash
git add src/routes/+page.svelte
git commit -m "feat: replace Hero/About with event timeline on homepage"
```

---

### Task 4: 项目详情页接入事件时间线

**Files:**
- Modify: `src/routes/projects/[slug]/+page.js`
- Modify: `src/routes/projects/[slug]/+page.svelte`

- [ ] **Step 1: 在 +page.js load 中注入项目事件**

在 `+page.js` 的 `load` 函数中添加 events 过滤：

```js
import { projects, events } from '$lib/data';

export function entries() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function load({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { status: 404, error: new Error('Not found') };
  const projectEvents = events
    .filter((e) => e.projectSlug === params.slug)
    .sort((a, b) => b.date.localeCompare(a.date));
  return { project, projectEvents };
}
```

- [ ] **Step 2: 在项目详情页 Svelte 中渲染事件时间线**

在 `+page.svelte` script 中添加数据解构和组件导入：

```svelte
import EventTimeline from '$lib/components/EventTimeline.svelte';

let { data } = $props();
let project = $derived(data.project);
let projectEvents = $derived(data.projectEvents);
let analysis = $derived(project.cityAnalysis);
```

在模板中，在 `</section>` 关闭之前（图表区域之后、`</section>` 之前），添加：

```svelte
{#if projectEvents.length > 0}
  <div class="project-events" style="margin-top: 56px;">
    <div class="section-header__rule"></div>
    <h3 style="font-family: var(--display); font-size: 24px; font-weight: 400; color: var(--ink); margin-top: 16px; margin-bottom: 8px;">事件日志</h3>
    <EventTimeline events={projectEvents} />
  </div>
{/if}
```

- [ ] **Step 3: Commit**

```bash
git add src/routes/projects/[slug]/+page.js src/routes/projects/[slug]/+page.svelte
git commit -m "feat: add event timeline to project detail pages"
```

---

### Task 5: 项目卡片显示事件计数

**Files:**
- Modify: `src/lib/components/ProjectCard.svelte`
- Modify: `src/routes/projects/+page.svelte`

- [ ] **Step 1: ProjectCard 接受并显示事件计数**

Edit `src/lib/components/ProjectCard.svelte`:

在 script 中添加 `eventCount` prop：

```svelte
<script>
  let { project, eventCount = 0 } = $props();
</script>
```

在 `</a>` 之前，`project-card__rows` 之后，添加事件计数行：

```svelte
{#if eventCount > 0}
  <div class="project-card__events">
    <span class="project-card__events-count">{eventCount} 条更新</span>
  </div>
{/if}
```

在 style 中添加：

```css
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
```

- [ ] **Step 2: 项目列表页传入事件计数**

Edit `src/routes/projects/+page.svelte`:

在 script 中导入 events：

```svelte
import { projects, events } from '$lib/data';
```

添加计数函数：

```svelte
let eventCountBySlug = $derived.by(() => {
  const map = new Map();
  for (const e of events) {
    map.set(e.projectSlug, (map.get(e.projectSlug) || 0) + 1);
  }
  return map;
});
```

修改每个 ProjectCard 传递 eventCount：

```svelte
<ProjectCard {project} eventCount={eventCountBySlug.get(project.slug) || 0} />
```

- [ ] **Step 3: Commit**

```bash
git add src/lib/components/ProjectCard.svelte src/routes/projects/+page.svelte
git commit -m "feat: show event count on project cards"
```

---

### Task 6: 验证构建

**Files:** (none — verification only)

- [ ] **Step 1: 运行生产构建**

Run: `npm run build`
Expected: build 成功，无报错

- [ ] **Step 2: 验证输出文件**

Run: `ls build/`
Expected: 包含 `index.html`, `projects/`, `blog/` 等目录

- [ ] **Step 3: 快速检查页面内容**

Run: `grep -c 'timeline' build/index.html`
Expected: 返回大于 0 的数字（确认时间线 HTML 已渲染到静态页面中）

- [ ] **Step 4: Commit (if any build config needed)**

如果构建成功无需修改则跳过。
