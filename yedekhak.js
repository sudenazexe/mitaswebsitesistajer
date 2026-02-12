<script>
    document.addEventListener("DOMContentLoaded", () => {
        const timelineItems = document.querySelectorAll('.timeline-item');

        // IntersectionObserver ile öğenin görünürlüğünü kontrol et
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Öğe ekranda görünür olduğunda animasyonu başlat
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Görünür olduktan sonra gözlemeyi durdur
                }
            });
        }, {
            threshold: 0.5  // Öğenin yarısı görünür olduğunda animasyon başlar
        });

        // Timeline öğelerini gözlemeye başla
        timelineItems.forEach(item => {
            observer.observe(item);
        });
    });

    // Scroll olayı
    window.onscroll = function() {changeHeaderColor()};

    function changeHeaderColor() {
        var header = document.querySelector('header');
        var navLinks = document.querySelectorAll('nav ul li a');

        // Eğer sayfa 100px'lik bir mesafeye kayarsa
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            header.style.backgroundColor = '#004080';  // Koyu mavi arka plan
            navLinks.forEach(function(link) {
                link.style.color = 'white';  // Beyaz yazı rengi
            });
        } else {
            header.style.backgroundColor = '#0074d9';  // Parlak mavi arka plan
            navLinks.forEach(function(link) {
                link.style.color = '#004080';  // Koyu mavi yazı rengi
            });
        }
    }
</script>


