
const menu = document.querySelector('.menu');
const iconmenu = document.querySelector("ul#Iconmenu")

iconmenu.addEventListener('mouseenter', () => {
  menu.classList.add('show');

});

menu.addEventListener('mouseleave', () => {
  menu.classList.remove('show');

});
menu.addEventListener('mouseleave', () => {
  menu.classList.remove('show');

});

const categorias = document.querySelector('li#categorias')
const submenu = document.querySelector('div.submenu')
const subitens = document.querySelector('a.subitens')

categorias.addEventListener('click', () => {
  submenu.classList.add('aberto');
  

});
submenu.addEventListener('mouseleave', () => {
  submenu.classList.remove('aberto');
});







