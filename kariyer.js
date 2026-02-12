window.onload = function() {
    // Aktif menü vurgusu
    const currentPage = window.location.pathname.split('/').pop();
    const menuItems = document.querySelectorAll('.menu a');

    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Video animasyonu
    const videoSection = document.querySelector('.video-kutu');
    const observerVideo = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                videoSection.classList.add('visible');
                observerVideo.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });
    observerVideo.observe(videoSection);

    // Mitaş Staj kutusu animasyonu
    const mitasStaj = document.getElementById("mitasStaj");
    if (mitasStaj) {
        const observerStaj = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    mitasStaj.classList.add("visible");
                    observerStaj.unobserve(mitasStaj);
                }
            });
        }, {
            threshold: 0.3
        });
        observerStaj.observe(mitasStaj);
    }

    // İlk Adım kutusu animasyonu (aşağıdan kayan yazı)
    const ilkAdimKutu = document.querySelector(".ilk-adim-kutu");
    if (ilkAdimKutu) {
        const observerIlkAdim = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    ilkAdimKutu.classList.add("visible");
                    observerIlkAdim.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.3
        });
        observerIlkAdim.observe(ilkAdimKutu);
    }
};




// İlk Adım kutusu için animasyon
const ilkAdimKutu = document.getElementById("ilkAdimKutu");
if (ilkAdimKutu) {
    const observerIlkAdim = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                ilkAdimKutu.classList.add("visible");
                observerIlkAdim.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    observerIlkAdim.observe(ilkAdimKutu);
}
















// Sayfa kaydırıldığında animasyon başlatılacak
window.addEventListener('scroll', function() {
    const content = document.querySelector('.content');
    const title = document.querySelector('.title');
    const pTags = document.querySelectorAll('.content p');
    
    const contentPosition = content.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (contentPosition < screenHeight * 0.8) {
        // Sayfa içeriği ekrana yaklaşınca animasyon başlasın
        content.style.opacity = 1;
        title.style.opacity = 1;
        pTags.forEach(p => p.style.opacity = 1);
    }
});






// Stajyer Başvuru kutusu animasyonu
const stajyerKutu = document.getElementById("stajyerKutu");
if (stajyerKutu) {
    const observerStajyer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                stajyerKutu.classList.add("visible");
                observerStajyer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });
    observerStajyer.observe(stajyerKutu);
}

