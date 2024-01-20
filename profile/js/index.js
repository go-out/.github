'use strict'

async function fetchHTML(query, url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.querySelector(query).innerHTML = html
        })
}

async function readmeMD(query, url) {
    fetch(url)
        .then(response => response.text())
        .then(innerText => {
            document.querySelector(query).innerText = innerText;
        })
}

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "interactive") {
        // ヘッダーに最新の投稿を表示
        const thisLatLng = document.querySelector('#latlng');
        const thisAddress = document.querySelector('#address');
        const thisDate = document.querySelector('#datetime');

        if (localStorage.getItem('goout')) {
            const geoJSON = JSON.parse(localStorage.getItem('goout'))[0];
            thisLatLng.innerHTML = `
            <small>Your device's latest post</small>
            `;
            thisAddress.innerHTML = `
            <strong id="longitude">${geoJSON.longitude}</strong>,
            <strong id="latitude">${geoJSON.latitude}</strong>
            `;
            thisDate.className = 'goout';
            thisDate.textContent = geoJSON.timestamp;
            
            fetchHTML('dialog ul', 'date.html')
        } else {
            readmeMD('dialog ul', 'README.md')
        };
    } else if (event.target.readyState === "complete") {
        const goout = document.querySelector('#map');
        const title = document.querySelector('#title');
        const readme = document.querySelector('#title button');
        const dialog = document.querySelector("dialog");
        const enter = document.querySelector('dialog #enter');
        const close = document.querySelector('dialog #close');
        const menu = document.querySelector('footer button');

        if (localStorage.getItem("goout")) {
            goout.style.pointerEvents = 'auto';
            goout.style.userSelect = 'auto';
            title.hidden = true;
            menu.hidden = false;
        }

        readme.addEventListener('click', function () {
            title.hidden = true;
            dialog.showModal();
        })

        enter.addEventListener('click', function () {
            const thisDate = document.querySelector('#datetime');
            thisDate.className = 'goout';
            menu.hidden = false;
            dialog.close();
            geoFindMe();
        })

        close.addEventListener('click', function () {
            goout.style.pointerEvents = 'auto';
            goout.style.userSelect = 'auto';
            menu.hidden = false;
            dialog.close();
        })

        menu.addEventListener('click', function () {
            dialog.showModal();
        })
    }
})
