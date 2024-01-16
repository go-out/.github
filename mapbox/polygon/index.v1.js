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
                [135.4960245179385, 34.627339317979306],
                [135.50391050613052, 34.64546789712162],
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
                [135.50283745748544,34.62365657487743],
                [135.4996690796325,34.62469299632161],
                [135.4990723755218,34.624717279967186],
                [135.49605339668125,34.62317920483221],
                [135.49536461888755,34.62314681626687],
                [135.49340569642368,34.61597994662446],
                [135.4973612488967,34.61587467461051],
                [135.49764298589128,34.611854192909405],
                [135.49939826507102,34.61177991946904],
                [135.49943702869376,34.61211908411872],
                [135.49971354924566,34.61275716315288],
                [135.498580962777,34.61309389987828],
                [135.49875384788027,34.613909710095726],
                [135.50159106712096,34.61863554721464],
                [135.50449080076453,34.62319954097046],
                [135.50283745748544,34.62365657487743]
              ]
            ]
          },
          'properties': {
            'title': '帝塚山',
            'date': '住吉区帝塚山東・帝塚山中・帝塚山西',
            'link': 'vr/?id=cycling&area=osaka&name=tezukayama',
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
      <a href="${e.features[0].properties.link}" target="_blank">
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
