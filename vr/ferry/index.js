'use strict'

// https://www.eonet.ne.jp/~osaka-iroiro/tosen.html
// 大阪市大正区の旅自転車専門店「ナニワ銀輪堂」

function valueChange(e){
    // イベントが発生した時の処理
    e.preventDefault();
    let url = ferry.value;
    location.assign(url)
}

let ferry = document.querySelector('select[name="ferry"]');
ferry.addEventListener('change', valueChange);
