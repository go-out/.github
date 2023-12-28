'use strict'

function valueChange(e){
    // イベントが発生した時の処理
    e.preventDefault();
    let url = ferry.value;
    location.assign(url)
}

let ferry = document.querySelector('select[name="ferry"]');
ferry.addEventListener('change', valueChange);
