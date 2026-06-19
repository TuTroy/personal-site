# Event-Driven 个人网站改造设计

## 目标

将个人网站从介绍型改造为事件驱动型，主页成为项目活动日志，去掉 Hero/About 等自述内容。

## 数据层

### 新增 `src/lib/data/events.js`

```js
export const events = [
  { date: '2026-06-18', projectSlug: 'capital-cloud-map', projectTitle: '资金云图', desc: '...' },
  // ...
];
```

- `date`: ISO 日期字符串
- `projectSlug`: 关联项目 slug
- `projectTitle`: 项目中文名（冗余存储，避免每次 join）
- `desc`: 一句话描述

### 更新 `src/lib/data/index.js`

新增 events 导出。

## 页面改造

### 首页 `src/routes/+page.svelte`

- 移除 Hero、About 组件的导入和使用
- 顶部：极简名字 + tagline（居中，小于原 Hero 字体）
- 主体：`EventTimeline` 组件，传入所有事件，按日期倒序排列
- 年分组：不同年份之间加年份标签分隔
- 移除 snap-scroll 逻辑

### 项目列表 `src/routes/projects/+page.svelte`

- 保持现有卡片网格布局
- 每个卡片底部加事件计数（如 "12 条更新"），点击进入项目详情

### 项目详情 `src/routes/projects/[slug]/+page.svelte`

- 上方：保留现有项目信息（标题、分类、技术栈、问题/方案/结果、图表）
- 下方：该项目的事件时间线，标题为 "事件日志"

### 博客页面

不修改。

## 组件变化

### 新增 `EventTimeline.svelte`

可复用竖线时间线组件。

Props:
- `events`: 事件数组
- `showProject`: 是否显示项目标签（首页 true，项目详情页 false）

结构：
- 左侧竖线（accent 色，2px）
- 每条：日期 → 项目标签（可选）→ 描述
- 支持年分组

### 不再使用

- `Hero.svelte` — 保留文件不删除，从首页移除引用
- `About.svelte` — 保留文件不删除，从首页移除引用

## 导航

保持 `Nav.svelte` 三链接不变：首页 / 项目 / 博客。

## 样式

- 沿用现有 CSS 变量和设计 token（颜色、字体、间距）
- 时间线竖线使用 `--accent` 色
- 保持现有响应式断点（860px）

## 不做的事

- 不改博客功能
- 不删 Hero.svelte 或 About.svelte 文件
- 不改变 RSS/SEO 相关逻辑
- 不增加评论、搜索、筛选等交互功能
