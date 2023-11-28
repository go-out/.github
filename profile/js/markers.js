let markerJson = {
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
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [133.91774108127242, 34.66596367986325]
            },
            'properties': {
                'title': "Hiroki Ito's Recommended Spots in Okayama",
                'address': '岡山県オススメ60スポット',
                'date': '<a href="https://go-out-mapbox.github.io/okayama/" target="_blank" rel="noopener">go-out-mapbox.github.io/okayama</a>',
                'timestamp': '',
                'tags': 'goout',
            }
        }
    ]
}

// 地図にマーカーを追加
function addMarkers() {
    for (const marker of markerJson.features) {
        const el = document.createElement('div');
        el.className = marker.properties.tags;
        new mapboxgl.Marker(el, {
            offset: [0, 0]
        })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map)

        el.addEventListener('click', (e) => {
            chengeHeader(marker);
            flyToCenter(marker);
        })
    };
};

/* Create a Mapbox GL JS `Popup`. */
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