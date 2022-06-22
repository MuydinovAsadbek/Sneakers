const elBasketBtn = document.querySelector('.site-header__icon');
const elModalCard = document.querySelector('.site-header__modal-card-d-none');

if (elBasketBtn) {
    elBasketBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        elModalCard.classList.toggle('modal-card-d-block')
    })
}


// COUNTING SPLIT AND PUSH
const elSplit = document.querySelector('.split-btn');
const elPush = document.querySelector('.push-btn');
const elCounting = document.querySelector('.count-number');

elPush.addEventListener('click', function(){
    elCounting.textContent = + elCounting.textContent + 1
});

elSplit.addEventListener('click', function(){
    if(elCounting.textContent > 0){
        elCounting.textContent = + elCounting.textContent -1;
    } else {
        elCounting.textContent = 0;
    }
});