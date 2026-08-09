// Shared interactions: sticky-nav/footer toggle, work page hover-swap, about lightbox.

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

  // Work index: hover a row to swap the sticky cover panel + summary.
  const rows = document.querySelectorAll('[data-work-row]');
  if (rows.length) {
    const slides = document.querySelectorAll('[data-cover-slide]');
    const summaryEl = document.querySelector('[data-cover-summary]');
    rows.forEach((row) => {
      row.addEventListener('mouseenter', () => {
        const i = row.getAttribute('data-work-row');
        slides.forEach((s) => s.classList.toggle('active', s.getAttribute('data-cover-slide') === i));
        if (summaryEl) summaryEl.textContent = row.getAttribute('data-summary') || '';
      });
    });
  }

  // About page: lightbox galleries.
  const lightbox = document.querySelector('[data-lightbox]');
  if (lightbox) {
    const galleries = lightbox.querySelectorAll('[data-gallery]');
    const openers = document.querySelectorAll('[data-open-gallery]');
    const open = (key) => {
      galleries.forEach((g) => g.style.display = g.getAttribute('data-gallery') === key ? '' : 'none');
      lightbox.classList.add('open');
    };
    const close = () => lightbox.classList.remove('open');
    openers.forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        open(el.getAttribute('data-open-gallery'));
      });
    });
    lightbox.addEventListener('click', close);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }
});
