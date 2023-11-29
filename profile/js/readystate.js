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
        const thisLatLng = document.querySelector('#latlng');
        const thisAddress = document.querySelector('#address');
        const thisDate = document.querySelector('#datetime');

        if (localStorage.getItem('goout')) {
            const geoJSON = JSON.parse(localStorage.getItem('goout'))[0];
            thisLatLng.innerHTML = `
            <small>Your device's last known location</small>
            `;
            thisAddress.innerHTML = `
            <strong id="longitude">${geoJSON.longitude}</strong>,
            <strong id="latitude">${geoJSON.latitude}</strong>
            `;
            thisDate.textContent = geoJSON.timestamp;
        }
    } else if (event.target.readyState === "complete") {
        const title = document.querySelector('#title')
        const readme = document.querySelector('#title button')
        const goout = document.querySelector('#map');
        const dialog = document.querySelector("dialog");
        const enter = document.querySelector('dialog #enter')
        const close = document.querySelector('dialog #close')
        readme.addEventListener('click', function () {
            title.hidden = true;
            dialog.showModal();
            readmeMD('dialog div', 'profile/README.md')
        })
        enter.addEventListener('click', function () {
            geoFindMe()
            dialog.close();
        })
        close.addEventListener('click', function () {
            userInteracting = !0;
            goout.style.pointerEvents = 'auto';
            goout.style.userSelect = 'auto';
            dialog.close();
        })
    }
});