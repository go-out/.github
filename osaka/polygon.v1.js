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
                                [135.42209067084394, 34.64325587363153],
                                [135.42176390292178, 34.64238215722756],
                                [135.42191911826217, 34.642167087972865],
                                [135.42195179507416, 34.6420984245536],
                                [135.4221399466826, 34.64140605517798],
                                [135.42297929272047, 34.64153094208136],
                                [135.423269492148, 34.641527268939726],
                                [135.42352949545983, 34.641494209987556],
                                [135.42378540175918, 34.641373003559536],
                                [135.42719728149166, 34.639234000055126],
                                [135.42744028846988, 34.63897193219783],
                                [135.42777911964373, 34.63715988469693],
                                [135.43437648837386, 34.63822628940561],
                                [135.43678938168682, 34.642247797774516],
                                [135.43456960662354, 34.64315992184595],
                                [135.43390664637963, 34.64331375716988],
                                [135.43264022327844, 34.64332774233658],
                                [135.4324532346318, 34.64411090788356],
                                [135.42420297108237, 34.642706601150095],
                                [135.42209067084394, 34.64325587363153]
                            ]
                        ]
                    },
                    'properties': {
                        'title': '咲洲コンテナターミナル',
                        'date': '咲洲（さきしま）の東側一帯は、コンテナ埠頭と呼ばれるエリアの一部らしい',
                        'link': '../vr/?id=cycling&area=osaka&name=container_berth',
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
