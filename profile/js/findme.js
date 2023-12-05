'use strict'

// 現在地を取得する
function geoFindMe() {
    const thisLatLng = document.querySelector('#latlng')
    const thisAddress = document.querySelector('#address')
    const thisDate = document.querySelector('#datetime')
    const thisComment = document.querySelector('#comment').value
    const goout = document.querySelector('#map')
    goout.style.pointerEvents = 'auto';
    goout.style.userSelect = 'auto';

    let timestamp = new Date().toLocaleString()
    thisDate.innerHTML = timestamp;

    if (!navigator.geolocation) {
        thisLatLng.textContent = 'Geolocation API is not supported by your browser';
        thisAddress.textContent = 'このブラウザは位置情報サービスがサポートされていません';
    } else {
        thisLatLng.textContent = 'Locating…';
        thisAddress.textContent = '現在地を取得中';
        navigator.geolocation.getCurrentPosition(success, error)
    }

    // 現在地の取得に失敗した場合
    function error() {
        thisLatLng.textContent = 'Unable to retrieve your location';
        thisAddress.textContent = '現在地を取得できませんでした';
    };

    // 現在地の取得に成功した場合
    function success(position) {
        userInteracting = !0;

        // 緯度経度を変数に代入
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        thisLatLng.innerHTML = `
        <b id="longitude">${longitude}</b>,
        <b id="latitude">${latitude}</b>
        `;

        // Mapbox リバースジオコーディング
        let uri = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?language=ja&access_token=${mapboxgl.accessToken}`;
        fetchData(uri).then(function (response) {
            return response.text().then(function (jsonStr) {
                var data = JSON.parse(jsonStr)
                var address = data.features[0].place_name.replace(/\,/g, "")
                thisAddress.textContent = address;

                // localStorageから位置情報を取得
                let array = JSON.parse(localStorage.getItem("goout")) || [];
                const addData = (timestamp, latitude, longitude, address, comment) => {
                    array.unshift({
                        timestamp,
                        latitude,
                        longitude,
                        address,
                        comment
                    })
                    localStorage.setItem("goout", JSON.stringify(array))
                    return { timestamp, latitude, longitude, address, comment }
                }

                // localStorageに最新の位置情報を追加
                addData(timestamp, latitude, longitude, address, thisComment)

                // PHPに最新の位置情報を送信
                const currentLocation = {
                    latitude: latitude,
                    longitude: longitude,
                    timestamp: timestamp,
                    address: address,
                    comment: thisComment.replace(/\r?\n/g, '<br>')
                };

                const gooutJSON = JSON.stringify(currentLocation)
                let response = fetch('profile/submit.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: gooutJSON
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                    })
                    .catch(error => {
                        console.log(error)
                    });

                setTimeout(() => {
                    csvtojson('profile/submit.csv')
                }, 1000);
            });
        }).catch(err => { console.log(err) })
        async function fetchData(_uri) {
            const res = await fetch(_uri)
            const data = await res;
            return data;
        };

        // 地図の中心を現在地へ移動
        let center = [longitude, latitude];
        map.flyTo({
            center: center,
            essential: true,
            zoom: 11.11
        });
    };
};
