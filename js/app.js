
// VIEW PURCHASED PRODUCTS
const elBasketBtn = document.querySelector('.site-header__icon');
const elShoppingCard = document.querySelector('.shopping-card');

if (elBasketBtn) {
    elBasketBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        elShoppingCard.classList.toggle('shopping-card-d-block')
    });
};


// IMG-SHOWCASE
const elShowcaseImgActive = document.querySelector('.img-showcase__active-img')
const elsImgShowcaseButton = document.querySelectorAll('.js-img-showcase__thumbnail-button');
const elsImgThumbniels = document.querySelectorAll('.img-showcase__thumbnail');
elsImgShowcaseButton.forEach(function (elButton) {
    elButton.addEventListener('click', function () {
        //Remove active state from all buttons
elsImgThumbniels.forEach(function (elImgThumbniels) {
    elImgThumbniels.classList.remove('img-showcase__thumbnail--active')
});

// Add active state to clicked button
elButton.parentElement.classList.add('img-showcase__thumbnail--active')

    elShowcaseImgActive.src = elButton.dataset.imgShowcaseBig;
    elShowcaseImgActive.srcset = `${elButton.dataset.imgShowcaseBig} 1x ${elButton.dataset.imgShowcaseRetina} 2x`

    });
});



// CANCEL PURCHASE
const elRemoveShopping = document.querySelector('.shopping-card__remove-btn');
const elEmpty = document.querySelector('.shopping-card__text');
const elShoppingProduct = document.querySelector('.shopping-card__product');

if (elRemoveShopping) {
    elRemoveShopping.addEventListener('click', function () {
        elEmpty.classList.add('shopping-card-text-js')
    elShoppingProduct.classList.add('shopping-card__product-js')
    });
};


// COUNTING SPLIT AND PUSH
const elSplit = document.querySelector('.split-btn');
const elPush = document.querySelector('.push-btn');
const elCounting = document.querySelector('.count-number');
const elCardCount = document.querySelector('.card-counter');

// ADD A PURCHASE
elPush.addEventListener('click', function(){
    elCounting.textContent = + elCounting.textContent + 1;
    elCardCount.textContent = + elCardCount.textContent + 1;
});


// REDUCE PURCHASING
elSplit.addEventListener('click', function(){
    if(elCounting.textContent > 1){
        elCounting.textContent = + elCounting.textContent -1;
        elCardCount.textContent = + elCardCount.textContent -1;
    } else {
        elCounting.textContent = 0;
        elCardCount.textContent = 0;
    }
});