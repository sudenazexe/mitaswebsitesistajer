document.addEventListener("DOMContentLoaded", function () {
    const yazilar = document.querySelectorAll(".animasyonlu-yazi");
    const surdurulebilirlikKutu = document.querySelector(".container4");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("aktif"); // Animasyonu başlat
                observer.unobserve(entry.target); // Tekrar gözlemleme yapma
            }
        });
    }, { threshold: 0.3 }); // Elemanın %30'u görünür olduğunda tetiklenecek

    yazilar.forEach(yazi => {
        observer.observe(yazi);
    });

    if (surdurulebilirlikKutu) {
        observer.observe(surdurulebilirlikKutu);
    }

    // Butona basınca animasyon ekleyelim
    const button = document.querySelector(".button4");

    if (button) {
        button.addEventListener("click", function () {
            button.style.transform = "scale(0.9)";
            setTimeout(() => {
                button.style.transform = "scale(1)";
            }, 200);
        });
    }
});














document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const loaderShown = sessionStorage.getItem("loaderShown");

  if (!loaderShown) {
    // İlk kez giriliyorsa loader'ı göster
    setTimeout(() => {
      loader.style.opacity = "1";
    }, 100);

    setTimeout(() => {
      loader.style.opacity = "0";
    }, 5000);

    setTimeout(() => {
      loader.style.display = "none";
      sessionStorage.setItem("loaderShown", "true"); // Bu sekmede tekrar gösterilmesin
    }, 5000);
  } else {
    // Daha önce bu sekmede gösterildiyse direkt gizle
    loader.style.display = "none";
  }
});














