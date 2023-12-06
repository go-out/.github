'use strict'

async function readmeMD(query, url) {
    fetch(url)
        .then(response => response.text())
        .then(innerText => {
            document.querySelector(query).innerText = innerText;
        });
}

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "interactive") {
        // ヘッダーに最新の投稿を表示
        const thisLatLng = document.querySelector('#latlng')
        const thisAddress = document.querySelector('#address')
        const thisDate = document.querySelector('#datetime')
        if (localStorage.getItem('goout')) {
            const geoJSON = JSON.parse(localStorage.getItem('goout'))[0]
            thisLatLng.innerHTML = `
            <small>Your device's latest post</small>
            `;
            thisAddress.innerHTML = `
            <strong id="longitude">${geoJSON.longitude}</strong>,
            <strong id="latitude">${geoJSON.latitude}</strong>
            `;
            thisDate.textContent = geoJSON.timestamp;
        }

        readmeMD('dialog div', 'README.md')
    } else if (event.target.readyState === "complete") {
        const goout = document.querySelector('#map')
        const title = document.querySelector('#title')
        const readme = document.querySelector('#title button')
        const dialog = document.querySelector("dialog")
        const enter = document.querySelector('dialog #enter')
        const close = document.querySelector('dialog #close')
        const menu = document.querySelector('footer button')
        
        if (localStorage.getItem("goout")) {
            userInteracting = !0;
            goout.style.pointerEvents = 'auto';
            goout.style.userSelect = 'auto';
            title.hidden = true;
            menu.hidden = false;
            csvtojson('profile/submit.csv')
        } else {
            userInteracting = 0;
        }

        readme.addEventListener('click', function () {
            title.hidden = true;
            dialog.showModal()
        })

        enter.addEventListener('click', function () {
            menu.hidden = false;
            dialog.close()
            geoFindMe()
        })

        close.addEventListener('click', function () {
            goout.style.pointerEvents = 'auto';
            goout.style.userSelect = 'auto';
            menu.hidden = false;
            dialog.close()
            csvtojson('profile/submit.csv')
        })

        menu.addEventListener('click', function () {
            dialog.showModal()
        })
    }
});
