<script>
  function updateCharCount(el) {
    const max = el.getAttribute('maxlength');
    const count = document.getElementById('charCount');
    count.textContent = max - el.value.length;
  }

  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Test için gönderimi engelle

    const mesaj = document.getElementById("basvuruMesaji");
    mesaj.style.display = "block";
    mesaj.classList.remove("fade-out"); // tekrar animasyon için
    mesaj.classList.add("basvuru-mesaji");

    setTimeout(() => {
      mesaj.style.display = "none";
    }, 3000);
  });
</script>
