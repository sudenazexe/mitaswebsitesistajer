document.addEventListener("DOMContentLoaded", function() {
    // CevreContainer ve CevreImg için hover efekti
    const cevreContainer = document.querySelector(".cevre-container");
    const cevreImg = document.querySelector(".cevre-img");

    cevreContainer.addEventListener("mouseenter", function() {
        cevreImg.style.transform = "scale(1.1)";
    });

    cevreContainer.addEventListener("mouseleave", function() {
        cevreImg.style.transform = "scale(1)";
    });

    // Tablodaki satırlara hover efekti eklemek
    document.querySelectorAll('#sustainability-table tr').forEach((row) => {
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = '#e0e0e0';
        });
        row.addEventListener('mouseout', () => {
            row.style.backgroundColor = '';
        });
    });

    // Video elementinin kaydını başlat
    const video = document.getElementById('myVideo');
    if (video) {
        video.src = "video.mp4";
        video.play();
    }

// Intersection Observer ile animasyonları tetikle
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.5  // Çizginin %50'si göründüğünde animasyon başlasın
});



document.addEventListener("DOMContentLoaded", function() {
    // Butonun görünür olup olmadığını kontrol et
    window.onscroll = function() {
        const scrollToTopBtn = document.getElementById("scrollToTopBtn");
        
        // Sayfa 200px'den fazla kayarsa butonu göster
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.classList.add("show"); // Butonu göster
        } else {
            scrollToTopBtn.classList.remove("show"); // Butonu gizle
        }
    };
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

const scrollTopBtn = document.getElementById("scrollTopBtn");

// Sayfayı aşağı kaydırınca butonu göster
window.onscroll = function () {
    if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};document.addEventListener("DOMContentLoaded", function () {
    let paragraphs = document.querySelectorAll(".etik-content p");

    paragraphs.forEach((para, index) => {
        setTimeout(() => {
            para.style.opacity = "1";
            para.style.transform = "translateY(0)";
        }, 500 * index);
    });

    // Arka planda havalı bir parıltı efekti
    let etikContainer = document.querySelector(".etik-container");
    setInterval(() => {
        etikContainer.style.boxShadow = `0px 0px 20px rgba(255, 215, 0, 0.6)`;
        setTimeout(() => {
            etikContainer.style.boxShadow = `0px 0px 10px rgba(255, 215, 0, 0.3)`;
        }, 500);
    }, 1000);
});






document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  let index = 0;

  function showNextCard() {
    if (index < cards.length) {
      cards[index].classList.add("show");
      index++;
      setTimeout(showNextCard, 1500); // Her kart arasında 1.5 saniye bekle
    }
  }

  showNextCard(); // Sayfa yüklendiğinde ilk kartı göster
});











