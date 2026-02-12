// Sayfa yüklendiğinde animasyonlu yazıları göster
document.addEventListener("DOMContentLoaded", function () {
    const yazilar = document.querySelectorAll(".animasyonlu-yazi");

    yazilar.forEach((yazi, index) => {
        setTimeout(() => {
            yazi.classList.add("aktif"); // Animasyonu başlat
        }, index * 400); // Yazılar arasındaki animasyon gecikmesi
    });
});
