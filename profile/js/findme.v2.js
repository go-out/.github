'use strict'

// 現在位置の地理座標・位置情報を取得
function geoFindMe() {
    const thisLatLng = document.querySelector('#latlng');
    const thisAddress = document.querySelector('#address');
    const thisDate = document.querySelector('#datetime');
    const submitButton = document.querySelector('dialog form button');

    if (!navigator.geolocation) {
        thisLatLng.textContent = 'Geolocation API is not supported by your browser';
        thisAddress.textContent = 'このブラウザは位置情報サービスがサポートされていません';
        thisDate.textContent = '';
    } else {
        thisLatLng.textContent = 'Locating…';
        thisAddress.textContent = '現在地を取得中';
        thisDate.textContent = '';
        navigator.geolocation.getCurrentPosition(success, error);
    }

    // 現在地の取得に失敗した場合
    function error() {
        thisLatLng.textContent = 'Unable to retrieve your location';
        thisAddress.textContent = '現在地を取得できませんでした';
        thisDate.textContent = '';
    }

    // 現在地の取得に成功した場合
    function success(position) {
        // 緯度経度を変数に代入
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        let center = [longitude, latitude];
        submitButton.id = 'submit';
        submitButton.textContent = 'Submit';
        submitButton.setAttribute('onclick', 'submitThis()')
        const notice = document.querySelector('#notice');
        notice.innerHTML = `
        <strong>Submit</strong>
        を クリックすると、地図上に追加されたピンの位置情報などが記録されます。
        `;

        map.flyTo({
            center: center,
            essential: true,
            zoom: 17.5
        })

        let findme = new mapboxgl.Marker({
            color: "#87cefa",
            draggable: true
        })
            .setLngLat(center)
            .addTo(map)

        findme.on('dragend', onDragEnd)

        // ドラッグ可能マーカーの緯度・経度を取得
        function onDragEnd() {
            const lngLat = findme.getLngLat()
            thisLatLng.innerHTML = `
            <strong id="longitude">${lngLat.lng}</strong>,
            <strong id="latitude">${lngLat.lat}</strong>
            `;
            thisDate.textContent = 'Move a Pin to where you want to submit';

            // リバースジオコーディング
            let uri = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lngLat.lng},${lngLat.lat}.json?language=ja&access_token=${mapboxgl.accessToken}`;
            fetchData(uri).then(function (response) {
                return response.text().then(function (jsonStr) {
                    var data = JSON.parse(jsonStr)
                    var context = data.features[0].place_name.replace(/\,/g, "")
                    thisAddress.textContent = context;
                })
            }).catch(err => { console.log(err) })

            async function fetchData(_uri) {
                const res = await fetch(_uri)
                const data = res;
                return data;
            }
        }
        onDragEnd()
    }

    const goout = document.querySelector('#map');
    goout.style.pointerEvents = 'auto';
    goout.style.userSelect = 'auto';
}

function submitThis() {
    const thisLng = document.querySelector('#longitude').textContent;
    const thisLat = document.querySelector('#latitude').textContent;
    const thisAddress = document.querySelector('#address').textContent;
    const thisComment = document.querySelector('#comment').value;
    let timestamp = new Date().toLocaleString();

    // localStorageから位置情報を取得・最新の位置情報を追加
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
    addData(timestamp, thisLat, thisLng, thisAddress, thisComment.replace(/\r?\n/g, '<br>'))

    // PHPに最新の位置情報を送信
    const currentLocation = {
        latitude: thisLat,
        longitude: thisLng,
        timestamp: timestamp,
        address: thisAddress,
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
}
