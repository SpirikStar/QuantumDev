function setSlideHeight() {
    const slides = document.querySelectorAll('.slide');
    const viewportHeight = window.innerHeight; // Текущая высота окна
    slides.forEach(slide => {
        slide.style.height = `${viewportHeight}px`;
    });
}

// Вызываем при загрузке страницы и изменении размера окна
window.addEventListener('resize', setSlideHeight);
window.addEventListener('load', setSlideHeight);