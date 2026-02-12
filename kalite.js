// Menü overlay aç/kapa
function openNav() {
  document.querySelector('.menu-overlay').classList.add('open');
}
function closeNav() {
  document.querySelector('.menu-overlay').classList.remove('open');
}

// Sayfa yüklendiğinde
document.addEventListener("DOMContentLoaded", () => {
  // Aktif sayfayı işaretle
  const currentUrl = window.location.href;
  document.querySelectorAll(".menu a").forEach(link => {
    if (link.href === currentUrl) {
      link.classList.add("active");
    }
  });

  // Kalite Kontrol alanı için
  const kaliteBolgesi = document.querySelector('.kalite-kontrol-section');
  if (kaliteBolgesi) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          kaliteBolgesi.classList.add('visible');
          obs.unobserve(entry.target); // Sadece bir kere çalışsın
        }
      });
    }, { threshold: 0.25 });

    observer.observe(kaliteBolgesi);
  }
});










