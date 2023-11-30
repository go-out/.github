'use strict'

let gooutArr = {
    'type': 'FeatureCollection',
    'features': []
}

// マップの移動
function flyToCenter(center) {
    map.flyTo({
        center: center,
        bearing: 0,
        pitch: 60,
        zoom: 17.5,
        essential: true
    });
}

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "interactive") {
        if (!localStorage.getItem("yourInfo")) {
            location.replace('../')
        } else {
            const yourInfo = JSON.parse(localStorage.getItem('yourInfo'));
            const h2 = document.querySelector('footer h2');
            h2.innerHTML = `
            <b>IP ${yourInfo.ip}</b>
            <small>Posted by ${yourInfo.os}</small>
            `
            // localStorageから位置情報を取得
            if (localStorage.getItem("goout")) {
                const gooutJSON = JSON.parse(localStorage.getItem('goout'));
                for (let i = 0; i < gooutJSON.length; i++) {
                    const thisLongitude = gooutJSON[i].longitude;
                    const thisLatitude = gooutJSON[i].latitude;
                    const thisAddress = gooutJSON[i].address;
                    const thisComment = gooutJSON[i].comment;
                    const thisTimestamp = gooutJSON[i].timestamp;
                    const thisCenter = [thisLongitude, thisLatitude];

                    const storageOl = document.querySelector('#localStorage');
                    const storageLi = document.createElement('li');
                    storageLi.id = `submit-${i}`;
                    storageLi.innerHTML = `
                    <span>
                    <u class="goout">${thisTimestamp}</u>
                    </span>
                    <p class="goout">${thisLongitude}, ${thisLatitude}</p>
                    `
                    storageOl.appendChild(storageLi);

                    let yourMarker = {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Point',
                            'coordinates': thisCenter
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

                    // li 要素を クリックすると 投稿した位置に地図の中心が移動
                    const address = document.querySelector('#address');
                    const latlng = document.querySelector('#latlng');
                    storageLi.addEventListener('click', () => {
                        address.textContent = thisAddress
                        latlng.textContent = thisComment
                        flyToCenter(thisCenter)
                    })
                }
            }
        }
    } else if (event.target.readyState === 'complete') {
        // 地図にマーカーを追加
        if (localStorage.getItem("goout")) {
            addMarker()
        }
        function addMarker() {
            for (const marker of gooutArr.features) {
                const el = document.createElement('div');
                el.className = marker.properties.tags;
                new mapboxgl.Marker(el, {
                    offset: [0, 0]
                })
                    .setLngLat(marker.geometry.coordinates)
                    .addTo(map)
            };
        };
    }
});