const title = document.querySelector('.glitch');

setInterval(() => {
  if (Math.random() > 0.85) {
    title.style.opacity = '0.6';
    setTimeout(() => {
      title.style.opacity = '1';
    }, 80);
  }
}, 120);
