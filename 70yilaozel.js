const starContainer = document.querySelector('body');

function createStars() {
  for (let i = 0; i < 50; i++) {
    let star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 1 + 1}s`;
    starContainer.appendChild(star);
  }
}

createStars();

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });

  const contentSection = document.querySelector('.content');
  if (contentSection) {
    observer.observe(contentSection);
  }
});




document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("sliderTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;
  const visibleItems = 3;

  function getImageWidth() {
    const img = track.querySelector("img");
    const style = window.getComputedStyle(img);
    const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    return img.offsetWidth + margin;
  }

  function updateSlider() {
    const imageWidth = getImageWidth();
    track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

    // Aktif sınıfı tüm görsellerden kaldır
    Array.from(track.children).forEach(img => img.classList.remove("active"));

    // Ortadaki görsele "active" sınıfı ekle
    const centerIndex = currentIndex + 1; // çünkü ortadaki = current + 1
    if (track.children[centerIndex]) {
      track.children[centerIndex].classList.add("active");
    }
  }

  nextBtn.addEventListener("click", () => {
    const totalItems = track.children.length;
    if (currentIndex < totalItems - visibleItems) {
      currentIndex++;
    } else {
      currentIndex = 0; // Başa dön
    }
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    const totalItems = track.children.length;
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalItems - visibleItems; // Sona git
    }
    updateSlider();
  });

  updateSlider();
  window.addEventListener("resize", updateSlider);
});
