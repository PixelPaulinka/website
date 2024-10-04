// Функция для анимации логотипа
function animateLogo() {
    const logo = document.querySelector('.logo');
    logo.style.animation = 'likeAnimation 0.5s ease-in-out';
    logo.addEventListener('animationend', () => {
        logo.style.animation = '';
    });
}

// Функция для переключения выпадающего меню
function toggleMenu() {
    const menu = document.getElementById('kitchenMenu');
    menu.classList.toggle('show');
}

// Закрытие меню при клике вне его
window.onclick = function(event) {
    const menu = document.getElementById('kitchenMenu');
    if (!event.target.matches('.dropdown a') && !menu.contains(event.target)) {
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    }
}

// Событие загрузки страницы
window.addEventListener('load', () => {
    const headerExtra = document.querySelector('.header-extra');
    headerExtra.classList.add('fade-in');

    const logoContainer = document.querySelector('.logo-container');
    logoContainer.classList.add('fade-in');
    
    // Добавление fade-in к меню
    const nav = document.querySelector('nav');
    nav.classList.add('fade-in');

    animateLogo();
});
// Функция для анимации карточек
function animateCards() {
    const cards = document.querySelectorAll('.tech-card');
    cards.forEach((card, index) => {
        // Устанавливаем задержку для каждой карточки
        setTimeout(() => {
            card.style.animation = 'cardFadeIn 0.5s ease forwards';
            card.style.opacity = '1'; // Делаем карточку видимой
        }, index * 200); // Задержка 200 мс для каждой карточки
    });
}

// Событие загрузки страницы
window.addEventListener('load', () => {
    const headerExtra = document.querySelector('.header-extra');
    headerExtra.classList.add('fade-in');

    const logoContainer = document.querySelector('.logo-container');
    logoContainer.classList.add('fade-in');

    // Добавление fade-in к меню
    const nav = document.querySelector('nav');
    nav.classList.add('fade-in');

    animateCards(); // Запускаем анимацию карточек
});
