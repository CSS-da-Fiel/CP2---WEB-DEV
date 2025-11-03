// Slideshow
(() => {
  const slides = document.querySelectorAll('.slideshow img');
  if (!slides.length) return;
  let idx = 0, timer;

  const show = i => slides.forEach((s, j) => s.classList.toggle('active', i === j));
  const next = () => show(idx = (idx + 1) % slides.length);
  const prev = () => show(idx = (idx - 1 + slides.length) % slides.length);

  timer = setInterval(next, 4000);

  ['next','prev'].forEach(id => {
    const btn = document.getElementById(id);
    if(btn) btn.addEventListener('click', () => {
      id === 'next' ? next() : prev();
      clearInterval(timer);
      timer = setInterval(next, 4000);
    });
  });
})();

// Theme color buttons
document.querySelectorAll('.theme-btn').forEach(btn =>
  btn.addEventListener('click', () =>
    document.documentElement.style.setProperty('--accent', btn.dataset.color)
  )
);

