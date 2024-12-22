document.addEventListener('DOMContentLoaded', () => {
    // Инициализация FullPage.js
    new fullpage('#fullpage', {
        autoScrolling: true,
        scrollingSpeed: 1200,
        navigation: true,
        licenseKey: 'OPEN-SOURCE-GPLV3', // Убирает водяной знак
    });

    // Удаление водяного знака (дополнительно, если всё ещё появляется)
    const watermark = document.querySelector('.fp-watermark');
    if (watermark) watermark.remove();
});