"use strict"




const showAllBtn = document.getElementById('show-all-btn');
const wrapperCards = document.querySelector('.wrapper-cards');
let isShowAll = false;

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





// showAllBtn.addEventListener('click', function() {
//     if (isShowAll) {
//         wrapperCards.style.maxHeight = '220px';
//         isShowAll = false;
//         showAllBtn.innerHTML='Показать все'
//     } else {
//         wrapperCards.style.maxHeight = 'none';
//         isShowAll = true;
//         showAllBtn.innerHTML='Скрыть'
//     }
// });