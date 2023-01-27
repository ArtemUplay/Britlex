const menuOverlay = document.querySelector('.menu__overlay');
const burgerButton = document.querySelector('.burger');
const menuCloseButton = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');

burgerButton.addEventListener('click', () => {
  menu.classList.add('menu_active');
  menuOverlay.classList.add('menu__overlay_active');
})

menuCloseButton.addEventListener('click', () => {
  menu.classList.remove('menu_active');
  menuOverlay.classList.remove('menu__overlay_active');
})