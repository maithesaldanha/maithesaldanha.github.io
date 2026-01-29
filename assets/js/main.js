const title = document.querySelector('.glitch');

setInterval(() => {
  if (Math.random() > 0.9) {
    title.style.opacity = '0.6';
    setTimeout(() => title.style.opacity = '1', 80);
  }
}, 120);

setInterval(() => {
  document.body.style.opacity = Math.random() > 0.98 ? '0.97' : '1';
}, 200);
