let heaedPopup = [
    {
        'LngLat': [135.4827971, 34.6096113],
        'html': {
            'title': 'things that i (we) heard around OTO building',
            'address': '私（わたしたち）が 音ビル周辺で聞いた言葉',
            'date': 'Sun Jan 5 2020 - Sun May 22 2022',
            'link': 'heard/otobuilding/'
        }
    },
    {
        'LngLat': [135.76854055131543, 35.00017558944718],
        'html': {
            'title': 'things that i (we) heard around BnA Alter Museum',
            'address': '私（わたしたち）が 京都・河原町周辺で聞いた 55 の言葉',
            'date': 'Thu Jul 21 2022 - Mon Aug 15 2022',
            'link': 'heard/bnaaltermuseum/'
        }
    }
]

map.on('load', () => {
    for (const heaed of heaedPopup) {
        new mapboxgl.Popup({
            closeOnClick: false,
            className: "heard"
        })
            .setLngLat(heaed.LngLat)
            .setHTML(`
            <a href="${heaed.html.link}" target="_blank">
            ${heaed.html.title}
            </a>
            <p>
            ${heaed.html.date}<br>
            ${heaed.html.address}
            </p>
            `)
            .addTo(map)
    };

    // Add a data source containing GeoJSON data.
    map.addSource('heardPolygon', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [
                            [
                                [135.41570459932808, 34.6444498906305],
                                [135.40108965184288, 34.634712067653496],
                                [135.4016286962231, 34.61486617414742],
                                [135.46833474746012, 34.603447361713776],
                                [135.47666421864864, 34.60006459036512],
                                [135.49227968288875, 34.605819819360846],
                                [135.50391050613052, 34.64546789712162],
                                [135.49603212288486, 34.64744739591383],
                                [135.41570459932808, 34.6444498906305]
                            ]
                        ]
                    },
                    'properties': {
                        'title': 'things that i (we) heard around OTO building',
                        'address': '<a href="heard/otobuilding/">私（わたしたち）が 音ビル周辺で聞いた言葉</a>',
                        'date': 'Sun Jan 5 2020 - Sun May 22 2022'
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [
                            [
                                [135.7610870139788, 35.003577397910576],
                                [135.77127222646072, 35.00395605842333],
                                [135.77182001546186, 34.99863256550397],
                                [135.7695921021695, 34.995663687378766],
                                [135.76610542193487, 34.99538439351177],
                                [135.7610870139788, 35.003577397910576]
                            ]
                        ]
                    },
                    'properties': {
                        'title': 'things that i (we) heard around BnA Alter Museum',
                        'address': '<a href="heard/bnaaltermuseum/">私（わたしたち）が 京都・河原町周辺で聞いた 55 の言葉</a>',
                        'date': 'Thu Jul 21 2022 - Mon Aug 15 2022'
                    }
                }
            ]
        }
    });

    map.addLayer({
        'id': 'heardFill',
        'type': 'fill',
        'source': 'heardPolygon',
        'layout': {},
        'paint': {
            'fill-color': '#CDCBCC',
            'fill-opacity': 0.75
        }
    });

    map.addLayer({
        'id': 'heardLine',
        'type': 'line',
        'source': 'heardPolygon',
        'layout': {},
        'paint': {
            'line-color': '#fff',
            'line-width': 2
        }
    });

    map.on('click', 'heardFill', (e) => {
        map.flyTo({
            center: e.lngLat
        });

        const thisLatLng = document.querySelector('#latlng');
        const thisAddress = document.querySelector('#address');
        const thisDate = document.querySelector('#datetime');
        thisLatLng.textContent = e.features[0].properties.title;
        thisAddress.textContent = e.features[0].properties.date;
        thisDate.innerHTML = e.features[0].properties.address;
        thisDate.className = 'goout';
    });

    map.on('mouseenter', 'heardFill', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'heardFill', () => {
        map.getCanvas().style.cursor = '';
    });
});
