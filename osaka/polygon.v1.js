map.on('load', () => {
    // クリックするとポップアップが表示されるポリゴンを追加
    map.addSource('polygonPopup', {
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
                                [135.4953517829611, 34.62702765533572],
                                [135.496113812079, 34.627361391282605],
                                [135.49614526253362, 34.62744858653359],
                                [135.4986553917384, 34.6306173286857],
                                [135.49888227683863, 34.631031461702975],
                                [135.50050200185234, 34.63787049683138],
                                [135.50243285813656, 34.642456687435114],
                                [135.5036324705627, 34.64499861629312],
                                [135.50241621224308, 34.64535569780462],
                                [135.48776750786493, 34.63920320769225],
                                [135.48717317682286, 34.63879986177503],
                                [135.48641471397286, 34.63357632592684],
                                [135.4953517829611, 34.62702765533572]
                            ]
                        ]
                    },
                    'properties': {
                        'title': 'やるぞ ‼',
                        'date': '大阪ヘルスバンクニュース掲示板',
                        'link': 'https://go-out.github.io/do/',
                        'zoom': 14
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [
                            [
                                [135.65261863391106, 34.85280861685034],
                                [135.6565742187487, 34.852151488050644],
                                [135.66161714520283, 34.854823826222926],
                                [135.66403626118543, 34.85738918915316],
                                [135.6669712369097, 34.86066165968385],
                                [135.66435518336968, 34.86164451406555],
                                [135.6632391202395, 34.859378343950375],
                                [135.66077999833922, 34.857298379484824],
                                [135.65849112333976, 34.85678614135907],
                                [135.65849112333976, 34.85678614135907],
                                [135.65438628139856, 34.85461297444731],
                                [135.65261863391106, 34.85280861685034]
                            ]
                        ]
                    },
                    'properties': {
                        'title': '鵜殿のヨシ原焼き',
                        'date': '毎年二月中頃 日曜日',
                        'link': 'date/udono-yoshihara/',
                        'zoom': 14
                    }
                }
            ]
        }
    });

    map.addLayer({
        'id': 'fillPolygon',
        'type': 'fill',
        'source': 'polygonPopup',
        'layout': {},
        'paint': {
            'fill-color': 'lemonchiffon',
            'fill-opacity': 0.75
        }
    });

    map.addLayer({
        'id': 'linePolygon',
        'type': 'line',
        'source': 'polygonPopup',
        'layout': {},
        'paint': {
            'line-color': 'lightskyblue',
            'line-width': 5
        }
    });

    map.on('click', 'fillPolygon', (e) => {
        new mapboxgl.Popup({
            className: "goout"
        })
            .setLngLat(e.lngLat)
            .setHTML(`
            <strong>${e.features[0].properties.title}</strong><br>
            <a href="${e.features[0].properties.link}">
            ${e.features[0].properties.date}
            </a>
            `)
            .addTo(map);
        map.flyTo({
            center: e.lngLat,
            essential: true,
            zoom: e.features[0].properties.zoom
        });
    });

    map.on('mouseenter', 'fillPolygon', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'fillPolygon', () => {
        map.getCanvas().style.cursor = '';
    });
});
