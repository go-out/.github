'use strict'

document.addEventListener('readystatechange', e => {
    if (e.target.readyState === 'interactive') {
        const thisLatLng = document.querySelector('#latlng');
        const thisAddress = document.querySelector('#address');

        // ジオコーダーコントロールを追加
        const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            marker: false,
            zoom: 17.5,
            language: 'ja',
            country: 'jp',
            mapboxgl: mapboxgl,
            reverseGeocode: true
        })

        // ジオコーダー を #geocoder に配置
        document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

        // ジオコーダーの結果後にドラッグ可能マーカーを設定
        geocoder.on('result', function (e) {
            let marker = new mapboxgl.Marker({
                draggable: true,
                color: "red"
            })
                .setLngLat(e.result.center)
                .addTo(map);

            // マーカーの座標を表示
            function onDragEnd() {
                const lngLat = marker.getLngLat();
                thisLatLng.innerHTML = `
                <strong id="longitude">${lngLat.lng}</strong>,
                <strong id="latitude">${lngLat.lat}</strong>
                `;

                // Mapbox リバースジオコーディング
                let uri = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lngLat.lng},${lngLat.lat}.json?language=ja&access_token=${mapboxgl.accessToken}`;
                fetchData(uri).then(function (response) {
                    return response.text().then(function (jsonStr) {
                        var data = JSON.parse(jsonStr);
                        var context = data.features[0].place_name.replace(/\,/g, "");
                        thisAddress.textContent = context;
                    });
                }).catch(err => { console.log(err); });

                async function fetchData(_uri) {
                    const res = await fetch(_uri);
                    const data = await res;
                    return data;
                };
            }

            onDragEnd();
            marker.on('dragend', onDragEnd);
        });
    } else if (e.target.readyState === 'complete') {
        const submitForm = document.querySelector('dialog form');
        submitForm.addEventListener('submit', (e) => {
            e.preventDefault()

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

            // localStorage に 最新の位置情報 を追加
            const timestamp = document.querySelector('#timestamp').value;
            const latitude = document.querySelector('#latitude').textContent;
            const longitude = document.querySelector('#longitude').textContent;
            const thisAddress = document.querySelector('#address').textContent;;
            const comment = document.querySelector('#comment').value;
            const thisTime = new Date(timestamp).toLocaleString();
            addData(thisTime, latitude, longitude, thisAddress, comment)

            const addLocation = {
                latitude: latitude,
                longitude: longitude,
                timestamp: thisTime,
                address: thisAddress,
                comment: comment
            };

            // PHPに現在地を送信
            const gooutJSON = JSON.stringify(addLocation);
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
                location.reload()
            }, 1000);
        }, false)
    }
}, false)
