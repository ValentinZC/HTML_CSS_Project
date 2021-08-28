const menuBtn = document.querySelector('.burger');
const closeMenuBtn = document.querySelector('.close');
const menu = document.querySelector('.menu_container');

menuBtn.addEventListener('click', toggle);
closeMenuBtn.addEventListener('click', toggle);

function toggle() {
   menu.classList.toggle('menu-container-open');
}