'use strict'

let gooutArr = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'tags': '',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.50433479522678, 34.69699057458179]
            },
            'properties': {
                'title': '<a class="pehu" href="https://vg.pe.hu/jp/" target="_blank" rel="noopener">∧°┐ | creative, community space</a>',
                'address': '日本, 大阪府大阪市北区西天満4丁目8番1',
                'date': 'Sat Dec 16 2017 - Sun Apr 29 2018 | Sun Jan 6 - Sun 15 Sep 2019',
                'iconSize': ['https://pehu.creative-community.space/icon/favicon.png', '3.21rem', '3.21rem'],
                'zoom': 20,
            }
        },
        {
            'type': 'Feature',
            'tags': '',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.47306292634534, 34.62458544610712]
            },
            'properties': {
                'title': '<a href="https://vg.pe.hu/2019-2021/" target="_blank" rel="noopener">音ビル</a>',
                'address': '日本, 大阪府大阪市住之江区北加賀屋5丁目5-1',
                'date': 'OTO Building | 4.2.2019 - 3.30.2022',
                'iconSize': ['https://vg.pe.hu/2019-2021/img/favicon.png', '3.21rem', '3.21rem'],
                'zoom': 17.5,
            }
        }
    ]
}

// 地図にマーカーを追加
function addMarker(arr) {
    for (const marker of arr) {
        const el = document.createElement('div');
        el.className = marker.tags;

        if (!marker.properties.iconSize && marker.properties.youtube) {
            const url = `https://i.ytimg.com/vi/${marker.properties.youtube}/default.jpg`;
            el.style.backgroundImage = `url(${url})`;
            el.style.width = '5.5rem';
            el.style.height = '3.75rem';
        } else if (marker.properties.iconSize) {
            const url = marker.properties.iconSize[0];
            el.style.width = marker.properties.iconSize[1];
            el.style.height = marker.properties.iconSize[2];
            el.style.backgroundImage = `url(${url})`;
        }

        if (marker.tags === 'spot') {
            const h4 = document.createElement('h4');
            document.querySelector('#spot').appendChild(h4);
            if (marker.properties.href) {
                const moreinfo = document.createElement('a');
                moreinfo.href = directory + marker.properties.href;
                moreinfo.innerText = marker.properties.title;
                h4.appendChild(moreinfo);
                h4.appendChild(document.createElement('br'));
                const address = document.createElement('small');
                address.innerText = marker.properties.address;
                h4.appendChild(address);
            } else {
                h4.innerHTML = `
                ${marker.properties.title}<br>
                <small>${marker.properties.address}</small>
                `;
            }
        } else if (marker.tags === 'park') {
            const h4 = document.createElement('h4');
            document.querySelector('#park').appendChild(h4);
            if (marker.properties.href) {
                const moreinfo = document.createElement('a');
                moreinfo.href = directory + marker.properties.href;
                moreinfo.innerText = marker.properties.title;
                h4.appendChild(moreinfo);
                h4.appendChild(document.createElement('br'));
                const address = document.createElement('small');
                address.innerText = marker.properties.address;
                h4.appendChild(address);
            } else {
                h4.innerHTML = `
                ${marker.properties.title}<br>
                <small>${marker.properties.address}</small>
                `;
            }
        } else if (marker.tags === 'legacy') {
            const h4 = document.createElement('h4');
            document.querySelector('#legacy').appendChild(h4);
            if (marker.properties.href) {
                const moreinfo = document.createElement('a');
                moreinfo.href = directory + marker.properties.href;
                moreinfo.innerText = marker.properties.title;
                h4.appendChild(moreinfo);
                h4.appendChild(document.createElement('br'));
                const address = document.createElement('small');
                address.innerText = marker.properties.address;
                h4.appendChild(address);
            } else {
                h4.innerHTML = `
                ${marker.properties.title}<br>
                <small>${marker.properties.address}</small>
                `;
            }
        } else if (marker.tags === 'yu') {
            const h4 = document.createElement('h4');
            document.querySelector('#yu').appendChild(h4);
            if (marker.properties.href) {
                const moreinfo = document.createElement('a');
                moreinfo.href = directory + marker.properties.href;
                moreinfo.innerText = marker.properties.title;
                h4.appendChild(moreinfo);
                h4.appendChild(document.createElement('br'));
                const address = document.createElement('small');
                address.innerText = marker.properties.address;
                h4.appendChild(address);
            } else {
                h4.innerHTML = `
                ${marker.properties.title}<br>
                <small>${marker.properties.address}</small>
                `;
            }
        } else if (marker.tags === 'onsen') {
            const h4 = document.createElement('h4');
            document.querySelector('#yu').appendChild(h4);
            if (marker.properties.href) {
                const moreinfo = document.createElement('a');
                moreinfo.href = directory + marker.properties.href;
                moreinfo.innerText = marker.properties.title;
                h4.appendChild(moreinfo);
                h4.appendChild(document.createElement('br'));
                const address = document.createElement('small');
                address.innerText = marker.properties.address;
                h4.appendChild(address);
            } else {
                h4.innerHTML = `
                ${marker.properties.title}<br>
                <small>${marker.properties.address}</small>
                `;
            }
        } else if (marker.tags === 'submit') {
            const h4 = document.createElement('h4');
            document.querySelector('#list').appendChild(h4);
            if (marker.properties.href) {
                const moreinfo = document.createElement('a');
                moreinfo.href = directory + marker.properties.href;
                moreinfo.innerText = marker.properties.address;
                h4.appendChild(moreinfo);
                h4.appendChild(document.createElement('br'));
                const address = document.createElement('small');
                address.innerText = marker.properties.date;
                h4.appendChild(address);
            } else {
                h4.innerHTML = `
                ${marker.properties.title}<br>
                <small>${marker.properties.address}</small>
                `;
            }
        }

        new mapboxgl.Marker(el, {
            offset: [0, 0]
        })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map)

        el.addEventListener('click', () => {
            flyToCenter(marker);
            chengeHeader(marker);

            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                if (marker.properties.youtube) {
                    const main = document.querySelector('main');
                    main.hidden = false;
                    player.loadVideoById({ videoId: marker.properties.youtube });
                }
            }
        })
    }
}

function flyToCenter(e) {
    map.flyTo({
        center: e.geometry.coordinates,
        essential: true,
        zoom: e.properties.zoom
    })
}

// クリックされたマーカーの位置情報をヘッダーに表示
function chengeHeader(e) {
    const thisLatLng = document.querySelector('#latlng');
    const thisAddress = document.querySelector('#address');
    const thisDate = document.querySelector('#datetime');
    thisLatLng.innerHTML = e.properties.title;
    thisAddress.innerHTML = e.properties.address;

    if (e.properties.href) {
        thisDate.innerHTML = "";
        const a = document.createElement('a');
        a.href = directory + e.properties.href;
        a.innerHTML = e.properties.date.replace(/\n/g, '<br>');

        if (e.properties.targt) {
            a.setAttribute('targt', e.properties.targt);
        }

        thisDate.appendChild(a);
    } else {
        thisDate.innerHTML = e.properties.date.replace(/\n/g, '<br>');
    }
}