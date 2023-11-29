'use strict'

async function csvtojson(csv) {
    const response = await fetch(csv);
    const text = await response.text();
    const data = text.trim().split('\n')
        .map(line => line.split(',').map(x => x.trim()))
        .map(marker => {
            let thisMarker = {
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [marker[2], marker[1]]
                },
                'properties': {
                    'title': `${marker[2]},${marker[1]}`,
                    'address': marker[3].replace('"',''),
                    'date': marker[4].replace('"',''),
                    'timestamp': marker[0],
                    'tags': 'submit',
                }
            }
            submitJson.features.push(thisMarker)
        })
    console.log(submitJson.features)
    addMarker()
}

// 地図にマーカーを追加
function addMarker() {
    for (const marker of submitJson.features) {
        const el = document.createElement('div');
        el.className = marker.properties.tags;
        new mapboxgl.Marker(el, {
            offset: [0, 0]
        })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map)

        el.addEventListener('click', () => {
            chengeHeader(marker);
            flyToCenter(marker);
        })
    };
};

function chengeHeader(currentFeature) {
    const thisLatLng = document.querySelector('#latlng');
    const thisAddress = document.querySelector('#address');
    const thisDate = document.querySelector('#datetime');
    thisLatLng.textContent = currentFeature.properties.title;
    thisAddress.textContent = currentFeature.properties.address;
    thisDate.className = currentFeature.properties.tags;
    thisDate.innerHTML = currentFeature.properties.date;
}

function flyToCenter(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15
    })
}

let submitJson = {
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
                'timestamp': 'Sat Dec 16 2017 - Sun Apr 29 2018 | Sun Jan 6 2019 - Sun 15 Sep 2019',
                'tags': 'pehu',
            }
        }
    ]
}