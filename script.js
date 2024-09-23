const menuActive = document.querySelector('.main__menu-active');
const burger = document.querySelector('.menu__burger-button');
const menuClose = document.querySelector('.main__menu-close');

function toggleMenu() {
    menuActive.classList.toggle('menu__hide-menu');
}

burger.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);