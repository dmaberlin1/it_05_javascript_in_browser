"use strict"
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const showAllBtn = document.getElementById('show-all-btn');
const wrapperCards = document.querySelector('.wrapper-cards');
const wrapper = document.querySelector('.wrapper');
const mySwiper = document.querySelector('.mySwiper');

let isShowAll = false;



if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
    showAllBtn.remove()
    wrapper.remove()
    

    // код, который будет загружаться на мобильных устройствах
     const swiper=new Swiper('.mySwiper',{
         slidesPerView: 1.2,
         // centeredSlides: true,
         centeredSlidesBounds: true,
         spaceBetween:30,
         navigation:{
             nextEl:'.swiper-button-next',
             prevEl:'.swiper-button-prev'
         },
         pagination:{
             el:'.swiper-pagination',
             mousewhell:true,
             keyboard:true,
             clickable: true
         },
         centeredSlidesOffset: 140,
         loop:true,
         
     })

    
 
    
    
} else {
    mySwiper.remove()
    showAllBtn.addEventListener('click', function() {
        if (isShowAll) {
            wrapperCards.style.maxHeight = '160px';
            isShowAll = false;
            // изменяем содержимое первого div
            showAllBtn.querySelector('div:first-child').innerHTML = `
          
            <img src="../src/assets/arrow-down.svg" alt="down">
           <img src="../src/assets/arrow-down.svg" alt="down">
        `;
            // изменяем содержимое второго div
            showAllBtn.querySelector('div:last-child').textContent = 'Показать все';
        } else {

            // код, который будет загружаться на устройствах с наличием ховера и точечного устройства
            wrapperCards.style.maxHeight = 'none';
            isShowAll = true;
            // изменяем содержимое первого div
            showAllBtn.querySelector('div:first-child').innerHTML = `
           <img src="../src/assets/up-arrow.svg" alt="down">
           <img src="../src/assets/up-arrow.svg" alt="down">
        `;
            // изменяем содержимое второго div
            showAllBtn.querySelector('div:last-child').textContent = 'Скрыть';
        }
    });
}

