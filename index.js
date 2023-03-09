const menuToggle = document.querySelector('.menuToggle');
const menu = document.querySelector('.menu');
const iconmenu = document.querySelector('div#Iconmenu')

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  menu.classList.toggle('show');

});




