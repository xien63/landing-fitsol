// Form submit — redirect to WhatsApp with pre-filled message
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const question = document.getElementById('question').value.trim();

  const msg = `Halo, saya ${name} (${phone}).\n\n${question || 'Saya ingin tahu lebih lanjut tentang Fitsol.'}`;
  const waNumber = '6281234567890'; // TODO: ganti dengan nomor WA aktif
  const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
});

// Smooth reveal on scroll
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.1 }
);
document.querySelectorAll('.tension__card, .product__card, .edu__card, .testi__card, .rp').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
document.addEventListener('animationend', () => {}, { once: true });
// Apply visible state
const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: none !important; }';
document.head.appendChild(style);
