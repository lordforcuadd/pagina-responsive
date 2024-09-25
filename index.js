// Script para el menú hamburguesa
const mobileMenu = document.getElementById('mobile-menu');
const navUL = document.querySelector('.nav ul');

mobileMenu.addEventListener('click', () => {
    navUL.classList.toggle('active');
});
