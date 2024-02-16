'use strict'

// 現在位置の地理座標・位置情報を取得
function geoFindMe() {
    const thisLatLng = document.querySelector('#latlng');
    const thisAddress = document.querySelector('#address');
    const thisComment = document.querySelector('#comment').value;
    let timestamp = new Date().toLocaleString();

    if (!navigator.geolocation) {
        thisLatLng.textContent = 'Geolocation API is not supported by your browser';
        thisAddress.textContent = 'このブラウザは位置情報サービスがサポートされていません';
    } else {
        thisLatLng.textContent = 'Locating…';
        thisAddress.textContent = '現在地を取得中';
        navigator.geolocation.getCurrentPosition(success, error);
    }

    // 現在地の取得に失敗した場合
    function error() {
        thisLatLng.textContent = 'Unable to retrieve your location';
        thisAddress.textContent = '現在地を取得できませんでした';
    }

    // 現在地の取得に成功した場合
    function success(position) {
        // 緯度経度を変数に代入
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Mapbox リバースジオコーディング
        let uri = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?language=ja&access_token=${mapboxgl.accessToken}`;
        fetchData(uri).then(function (response) {
            return response.text().then(function (jsonStr) {
                var data = JSON.parse(jsonStr);
                var address = data.features[0].place_name.replace(/\,/g, "");

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
                    localStorage.setItem("goout", JSON.stringify(array));
                    return { timestamp, latitude, longitude, address, comment }
                }

                // localStorageに最新の位置情報を追加
                addData(timestamp, latitude, longitude, address, thisComment.replace(/\r?\n/g, '<br>'))

                // PHPに最新の位置情報を送信
                const currentLocation = {
                    latitude: latitude,
                    longitude: longitude,
                    timestamp: timestamp,
                    address: address,
                    comment: thisComment.replace(/\r?\n/g, '<br>')
                };

                const gooutJSON = JSON.stringify(currentLocation);
                let response = fetch('submit.php', {
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
                    location.replace("profile/")
                }, 1000);
            });
        }).catch(err => { console.log(err) });

        async function fetchData(_uri) {
            const res = await fetch(_uri);
            const data = await res;
            return data;
        }
    }

    const goout = document.querySelector('#map');
    goout.style.pointerEvents = 'auto';
    goout.style.userSelect = 'auto';
}
