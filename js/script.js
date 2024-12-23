document.addEventListener('DOMContentLoaded', () => {
    // Инициализация FullPage.js
    new fullpage('#fullpage', {
        autoScrolling: true,
        navigationPosition: 'right',

        scrollingSpeed: 1200,
        navigation: true,
    });

    // Удаление водяного знака (дополнительно, если всё ещё появляется)
    const watermark = document.querySelector('.fp-watermark');
    // if (watermark) watermark.remove();
});
