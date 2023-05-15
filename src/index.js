"use strict"


const showAllBtn = document.getElementById('show-all-btn');
const wrapperCards = document.querySelector('.wrapper-cards');
let isShowAll = false;

showAllBtn.addEventListener('click', function() {
    if (isShowAll) {
        wrapperCards.style.maxHeight = '220px';
        isShowAll = false;
        showAllBtn.innerHTML='Показать все'
    } else {
        wrapperCards.style.maxHeight = 'none';
        isShowAll = true;
        showAllBtn.innerHTML='Скрыть'
    }
});