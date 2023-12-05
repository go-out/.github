'use strict'

let gooutArr = {
    'type': 'FeatureCollection',
    'features': []
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

// マップの移動
function flyToCenter(center) {
    map.flyTo({
        center: center,
        bearing: 0,
        pitch: getRandomInt(0, 75),
        zoom: 17.5,
        essential: true
    }, false)
}

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "interactive") {
        const now = new Date()
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
        document.querySelector('#timestamp').value = now.toISOString().slice(0, -5)

        const storageOl = document.querySelector('#localStorage')

        if (localStorage.getItem("goout")) {
            // localStorageから位置情報を取得
            const gooutJSON = JSON.parse(localStorage.getItem('goout'))
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
                gooutArr.features.push(yourMarker)

                const storageLi = document.createElement('li')
                storageLi.innerHTML = `
                <u class="goout">${thisTimestamp}</u><br>
                <p class="goout">${thisLongitude}, ${thisLatitude}</p>
                `
                storageOl.appendChild(storageLi)

                // li 要素を クリックすると 投稿した位置に地図の中心が移動
                const address = document.querySelector('#address')
                const latlng = document.querySelector('#latlng')
                storageLi.addEventListener('click', () => {
                    address.textContent = thisAddress;
                    latlng.innerHTML = thisComment.replace(/\n/g, '<br>');
                    flyToCenter(thisCenter)
                })
            }
        }

        const credit = document.createElement('li')
        credit.className = "goout"
        storageOl.appendChild(credit)
        const by = document.createElement('p')
        credit.appendChild(by)

        if (localStorage.getItem("goout")) {
            const yourInfo = JSON.parse(localStorage.getItem('yourInfo'))
            by.innerHTML = yourInfo.os;
        } else {
            by.innerHTML = "<strong>The Location where you were that saved in Local Storage.</strong>";
            const readme = document.createElement('div')
            credit.appendChild(readme)
            async function readmeMD(url) {
                fetch(url)
                    .then(response => response.text())
                    .then(innerText => {
                        readme.innerText = innerText;
                    });
            }
            readmeMD('README.md')
        }

        const dialog = document.querySelector("dialog")
        const open = document.querySelector('#open')
        open.addEventListener('click', function () {
            dialog.showModal()
        })

        const close = document.querySelector('#close')
        close.addEventListener('click', function () {
            dialog.close()
        })
    } else if (event.target.readyState === 'complete') {
        if (localStorage.getItem("goout")) {
            addMarker()
        }

        // 地図にマーカーを追加
        function addMarker() {
            for (const marker of gooutArr.features) {
                const el = document.createElement('div')
                el.className = marker.properties.tags;
                new mapboxgl.Marker(el, {
                    offset: [0, 0]
                })
                    .setLngLat(marker.geometry.coordinates)
                    .addTo(map)
                el.addEventListener('click', () => {
                    flyToCenter(marker.geometry.coordinates)
                })
            }
        }

        const submitForm = document.querySelector('dialog form')
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

            // localStorage に 位置情報 を追加
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
                comment: comment.split('\n')
            };

            // PHPに位置情報を送信
            const gooutJSON = JSON.stringify(addLocation)
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
});
