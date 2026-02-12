window.addEventListener("DOMContentLoaded", function() {
    const modules = document.querySelectorAll('.modul');
    modules.forEach((module, index) => {
        module.style.animationDelay = `${index * 0.2}s`;
    });
});
