document.addEventListener('DOMContentLoaded', () => {
    // Инициализация FullPage.js
    new fullpage('#fullpage', {
        autoScrolling: true,
        navigationPosition: 'right',

        scrollingSpeed: 1200,
        navigation: true,
        // Разрешаем прокрутку внутри элементов input, textarea
        normalScrollElements: '.form__input, textarea',
        // Убираем автофокусировку
        fitToSection: true,
    });

    // Удаление водяного знака (дополнительно, если всё ещё появляется)
    const watermark = document.querySelector('.fp-watermark');
    if (watermark) watermark.remove();

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        document.addEventListener('focusin', () => {
            fullpage_api.setAutoScrolling(false);
        });

        document.addEventListener('focusout', () => {
            fullpage_api.setAutoScrolling(true);
        });
    }
});
