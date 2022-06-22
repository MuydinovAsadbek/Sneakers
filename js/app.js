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