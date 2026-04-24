// Nav burger
const burger = document.querySelector('.nav-burger');
const links  = document.querySelector('.nav-links');
burger?.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!open));
  links?.classList.toggle('open', !open);
});
links?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  burger?.setAttribute('aria-expanded', 'false');
}));

// Scroll-triggered fade-up via IntersectionObserver
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.scroll-fu').forEach(el => obs.observe(el));
