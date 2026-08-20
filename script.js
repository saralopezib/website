// Shared interactions: sticky-nav/footer toggle, work page hover-swap.

document.addEventListener('DOMContentLoaded', () => {
  // Nav un-sticks while the footer is in view.
  const nav = document.querySelector('.site-nav');
  const footer = document.getElementById('site-footer');
  if (nav && footer && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      nav.classList.toggle('is-static', entries[0].isIntersecting);
    });
    io.observe(footer);
  }

  // Work index: hover a row to swap the sticky cover panel, its summary,
  // and its link destination (each project now has its own page).
  const rows = document.querySelectorAll('[data-work-row]');
  if (rows.length) {
    const cover = document.getElementById('work-cover');
    const slides = document.querySelectorAll('[data-cover-slide]');
    const summaryEl = document.querySelector('[data-cover-summary]');
    const hrefs = cover ? JSON.parse(cover.getAttribute('data-hrefs') || '[]') : [];
    rows.forEach((row) => {
      row.addEventListener('mouseenter', () => {
        const i = row.getAttribute('data-work-row');
        slides.forEach((s) => s.classList.toggle('active', s.getAttribute('data-cover-slide') === i));
        if (summaryEl) summaryEl.textContent = row.getAttribute('data-summary') || '';
        if (cover && hrefs[i]) cover.setAttribute('href', hrefs[i]);
      });
    });
  }
});
