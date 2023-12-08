'use strict'

// index.html のコンテンツを動的に生成
let gooutArr = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.50433479522678, 34.69699057458179]
            },
            'properties': {
                'title': '135.50433479522678, 34.69699057458179',
                'address': '日本, 大阪府大阪市北区西天満4丁目8番1',
                'date': '<a href="https://vg.pe.hu/jp/" target="_blank" rel="noopener">∧°┐ | creative, community space</a>',
                'timestamp': 'Sat Dec 16 2017 - Sun Apr 29 2018 | Sun Jan 6 - Sun 15 Sep 2019',
                'tags': 'pehu',
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.47306292634534, 34.62458544610712]
            },
            'properties': {
                'title': '135.47306292634534, 34.62458544610712',
                'address': '日本, 大阪府大阪市住之江区北加賀屋5丁目5-1',
                'date': '<b class="goout"><a href="https://vg.pe.hu/2019-2021/" target="_blank" rel="noopener">音ビル</a></b>',
                'timestamp': '4.2.2019 - 3.30.2022 | OTO Building',
                'tags': 'otubuil',
            }
        }
    ]
}

if (localStorage.getItem("goout")) {
    // localStorageから位置情報を取得
    const gooutJSON = JSON.parse(localStorage.getItem('goout'));
    for (let i = 0; i < gooutJSON.length; i++) {
        const thisLongitude = gooutJSON[i].longitude;
        const thisLatitude = gooutJSON[i].latitude;
        const thisAddress = gooutJSON[i].address;
        const thisComment = gooutJSON[i].comment;
        const thisTimestamp = gooutJSON[i].timestamp;
        const thisCenter = [thisLongitude, thisLatitude];
        let yourMarker = {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': thisCenter,
            },
            'properties': {
                'title': `${thisLongitude}, ${thisLatitude}`,
                'address': thisAddress,
                'date': thisComment,
                'timestamp': thisTimestamp,
                'tags': 'submit',
            }
        }
        gooutArr.features.push(yourMarker);
    }
}

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

// 地図にマーカーを追加
function addMarker(arr) {
    for (const marker of arr) {
        const el = document.createElement('div');
        el.className = marker.properties.tags;
        new mapboxgl.Marker(el, {
            offset: [0, 0]
        })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map)

        el.addEventListener('click', () => {
            flyToCenter(marker)
            chengeHeader(marker)
        })
    }
}

function flyToCenter(e) {
    map.flyTo({
        center: e.geometry.coordinates,
        essential: true,
        zoom: 15
    })
}

// クリックされたマーカーの位置情報をヘッダーに表示
function chengeHeader(e) {
    const thisLatLng = document.querySelector('#latlng');
    const thisAddress = document.querySelector('#address');
    const thisDate = document.querySelector('#datetime');
    thisLatLng.textContent = e.properties.address;
    thisAddress.textContent = e.properties.timestamp;
    thisDate.innerHTML = e.properties.date.replace(/\n/g, '<br>');
    thisDate.className = e.properties.tags;
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
            thisDate.textContent = geoJSON.timestamp;
        }

        fetchHTML('dialog ul', 'date.html');
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
            addMarker(gooutArr.features);
        }

        readme.addEventListener('click', function () {
            title.hidden = true;
            dialog.showModal();
        })

        enter.addEventListener('click', function () {
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
