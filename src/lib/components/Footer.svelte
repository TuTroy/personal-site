<script>
  import { site } from '$lib/data.js';
</script>

<footer class="footer">
  <div class="footer__contact">
    <a href="https://github.com/{site.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
    <span class="footer__sep">·</span>
    <a href="mailto:{site.email}">Email</a>
  </div>
  <p class="footer__text">Built with ♥ by {site.name} · 2026</p>
</footer>

<style>
  .footer {
    padding: 28px 32px 22px;
    border-top: 1px solid var(--hairline);
    text-align: center;
  }
  .footer__contact {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
  }
  .footer__contact a {
    font-size: 13px;
    font-weight: 500;
    color: var(--muted);
    transition: color 0.2s ease;
  }
  .footer__contact a:hover { color: var(--accent); }
  .footer__sep { color: var(--hairline-strong); font-size: 12px; }
  .footer__text {
    font-size: 11px;
    color: var(--muted-lighter);
    letter-spacing: 0.03em;
  }
</style>
