let data;

// Загрузка JSON
async function loadJSON() {
    const response = await fetch('./media/cards.json'); // Укажите путь к файлу JSON
    data = await response.json();
    loadCards('Многостроничный сайт'); // Категория по умолчанию
}

let btns = document.querySelectorAll('.projects__works__filter button');
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        loadCards(btn.textContent);
    })
})


function loadCards(category) {
    const container = document.getElementById('cards-container');
    container.classList.remove('visible'); // Убрать видимость для анимации
    setTimeout(() => {
        container.innerHTML = ''; // Очистить контейнер

        const cards = data.categories[category];
        if (cards) {
            cards.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('card');
                cardElement.innerHTML = `
                    <img src="${card.image}" alt="${card.title}">
                    <h3 class="card-title">${card.title}</h3>
                    <a class="card-link" href="gallery/?gallery=${card.link}">Посмотреть &rarr;</a>
                `;
                container.appendChild(cardElement);
            });
        }

        // Добавить анимацию появления
        setTimeout(() => {
            container.classList.add('visible');
        }, 100);
    }, 300);

    // Обновление активной кнопки
    document.querySelectorAll('.projects__works__filter button').forEach(button => {
        button.classList.remove('active');
        console.log(button.textContent === category);
        if (button.textContent === category) {
            button.classList.add('active');
        }
    });
}

// Инициализация
loadJSON();