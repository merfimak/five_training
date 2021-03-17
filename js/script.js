window.onload = function() {




//бургер
const header__burger = document.querySelector('.burger');
const menu__nav = document.querySelector('.block_one_right');
const menu__link = document.querySelectorAll('.menu__link');
const menu__overlay = document.querySelector('.menu__overlay');
header__burger.addEventListener('click', (event) => { 
  header__burger.classList.toggle('active');
  menu__nav.classList.toggle('active');
  menu__overlay.classList.toggle('active');
})
for (i = 0; i < menu__link.length; i++) {
  menu__link[i].addEventListener('click', (event) => { 
  header__burger.classList.toggle('active');
  menu__nav.classList.toggle('active');
  menu__overlay.classList.toggle('active');
})
}
menu__overlay.addEventListener('click', (event) => { 
  header__burger.classList.toggle('active');
  menu__nav.classList.toggle('active');
  menu__overlay.classList.toggle('active');
})




//включение видео в хедере при нажатии на картинку поверх видоса
const block_one_middle_videocover = document.querySelector('.block_one_middle_videocover');
const video = document.querySelector('.video');
block_one_middle_videocover.addEventListener('click', (event) => {
	block_one_middle_videocover.style.display = "none";
	video.play();
})

//слайдер lock_tree
var mySwiper = new Swiper('.block_tree_slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  //centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {// настройки для разных разрешений
            992: {
                slidesPerView: 2,
               // centeredSlides: true,
            }
          }
})


//слайдер block_five
var mySwiper = new Swiper('.block_five_slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {// настройки для разных разрешений
            1040: {
                slidesPerView: 3,
            },
            786: {
                slidesPerView: 2,
                centeredSlides: false,
            },
          }
})



function tabs(){
  const tabs__item = document.querySelectorAll('.block_four_tabs__item');//достаем все кнопки для табов и на каждый цепляем событие клик

  for (i = 0; i < tabs__item.length; i++) {

    tabs__item[i].addEventListener('click', (event) => { 

      tabs__item_active = document.querySelectorAll('.block_four_tabs__item.active');// при клике выбераем все элементы с класом active и убираем его
    
       tabs__block_active = document.querySelectorAll('.block_four_tabs_block.active');// у блоков тоже убираем active
       targen_tabs_item = event.currentTarget.getAttribute("data-tab");//берем атрибут из выбранного айтема
       targen_tabs_block = document.querySelector('#' + targen_tabs_item);// достаем нужный таб по Id
        tabs__item_active.forEach(element => {
          element.classList.remove("active");
        });
         tabs__block_active.forEach(element => {
          element.classList.remove("active");// убераем active у всех блоков кроме выбранного
        });
        event.currentTarget.classList.add("active");   // добавляем к active к тому на который клацнули
        targen_tabs_block.classList.add("active");//добавляем к active к нужному  блоку 
    })
  }
}
tabs()


}


