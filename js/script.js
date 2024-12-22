document.addEventListener('DOMContentLoaded', () => {
    // Инициализация FullPage.js
    new fullpage('#fullpage', {
        anchors: ['about-section'],
        autoScrolling: true,
        navigationPosition: 'right',

        scrollingSpeed: 1200,
        navigation: true,
        licenseKey: 'OPEN-SOURCE-GPLV3', // Убирает водяной знак
    });

    // Удаление водяного знака (дополнительно, если всё ещё появляется)
    const watermark = document.querySelector('.fp-watermark');
    if (watermark) watermark.remove();
});
document.querySelector('.btn').addEventListener('click', function (event) {
    event.preventDefault(); // Отключаем стандартное поведение ссылки

    // Получаем секцию "О нас" по ID
    const aboutSection = document.querySelector('#about-section');

    // Прокручиваем страницу до этой секции
    if (aboutSection) {
        window.scrollTo({
            top: aboutSection.offsetTop, // Отступ секции от верхней границы страницы
            behavior: 'smooth' // Плавная прокрутка
        });
    }
});
