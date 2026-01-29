const glitch = document.querySelector('.glitch');

setInterval(() => {
  glitch.style.opacity = Math.random() > 0.8 ? '0.7' : '1';
}, 150);

