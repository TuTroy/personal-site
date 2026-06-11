<script>
  import { page } from '$app/stores';

  const links = [
    { href: '/', label: '首页', match: '/' },
    { href: '/projects', label: '项目', match: '/projects' },
    { href: '/blog', label: '博客', match: '/blog' },
  ];

  function isActive(match) {
    if (match === '/') return $page.url.pathname === '/';
    return $page.url.pathname.startsWith(match);
  }
</script>

<div class="nav-shell">
  <nav class="nav">
    <a href="/" class="nav__brand">涂炎钊</a>
    <ul class="nav__list">
      {#each links as link}
        <li>
          <a
            href={link.href}
            class="nav__link"
            class:nav__link--active={isActive(link.match)}
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>

<style>
  .nav-shell {
    position: sticky; top: 16px; z-index: 100;
    margin: 16px auto 0;
    padding: 5px;
    width: max-content; max-width: calc(100% - 48px);
    border-radius: 999px;
    background: rgba(247,245,240,0.5);
    backdrop-filter: saturate(140%) blur(18px);
    -webkit-backdrop-filter: saturate(140%) blur(18px);
    box-shadow: 0 0 0 1px var(--hairline), 0 8px 28px -12px rgba(0,0,0,0.12);
  }
  .nav {
    display: flex; align-items: center; gap: 6px;
    padding: 5px 6px 5px 18px;
    border-radius: 999px;
    background: rgba(255,255,255,0.5);
  }
  .nav__brand {
    font-family: var(--sans);
    font-size: 14px; font-weight: 600;
    letter-spacing: -0.01em;
    color: var(--ink);
    margin-right: 10px;
    white-space: nowrap;
  }
  .nav__list { list-style: none; display: flex; gap: 4px; margin: 0; padding: 0; }
  .nav__link {
    display: inline-block;
    padding: 7px 14px;
    border-radius: 999px;
    font-size: 13px; font-weight: 500;
    color: var(--muted);
    transition: background 0.25s ease, color 0.25s ease;
    white-space: nowrap;
  }
  .nav__link:hover { color: var(--ink); background: rgba(0,0,0,0.04); }
  .nav__link--active {
    background: var(--surface);
    color: var(--ink);
    box-shadow: 0 1px 2px rgba(0,0,0,0.06);
  }

  @media (max-width: 860px) {
    .nav-shell { margin: 12px 12px 0; max-width: calc(100% - 24px); }
    .nav__brand { display: none; }
    .nav { padding: 5px; justify-content: center; }
    .nav__link { padding: 6px 12px; font-size: 12px; }
  }
</style>
