
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
const plus = document.querySelector("a#plus")
const categorias = document.querySelector('li#categorias')
const submenu = document.querySelector('div.submenu')
const subitens = document.querySelector('a.subitens')

categorias.addEventListener('click', () => {
  if(submenu === 'aberto'){
  submenu.classList.remove('aberto');}
    else{
      submenu.classList.add('aberto')
    }
  

});

submenu.addEventListener('mouseleave', () => {
  submenu.classList.remove('aberto');
});
menu.addEventListener('mouseleave', () => {
  submenu.classList.remove('aberto');
});


//-------------------SLIDESHOW--------------------//
const prevButton = document.querySelector('#prevbtn')
const nextButton = document.querySelector('#nextbtn')
const slider = document.querySelector('.slider')

prevButton.addEventListener('click', () => {
    if(slider.style.left = '1100px'){
      slider.style.right = '-1100px';

    }

}); 