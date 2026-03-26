const banner = document.querySelector('.power-box-banner');
const topVideo = document.querySelector('.top-video');

banner.addEventListener('mousemove', (e) => {
  const rect = banner.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  topVideo.style.clipPath = `circle(150px at ${x}px ${y}px)`; // reveal circle
});

banner.addEventListener('mouseleave', () => {
  topVideo.style.clipPath = `circle(0px at 0 0)`;
});


