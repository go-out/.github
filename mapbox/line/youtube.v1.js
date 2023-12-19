map.on('load', () => {
  map.addSource('addLine', {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [135.53444380945922, 34.68832520359457],
              [135.53402016429442, 34.69661260060202],
              [135.52045533413775, 34.70489978498655],
              [135.51212796430684, 34.70503896287316],
              [135.49567092888248, 34.702696901458054],
              [135.48671949582973, 34.69721769118584]
            ]
          },
          'properties': {
            'title': 'View from the Window',
            'address': '大阪JR環状線（大阪城公園駅→福島駅）',
            'date': 'Osaka Castle Park to Fukushima 🇯🇵 Osaka Loop Line',
            'id': 'Fkiq6MvW868',
            'zoom': 13
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [135.4632278536988, 34.629289223177636],
              [135.46729651978637, 34.62871866153678],
              [135.46853656762892, 34.63458250979764],
              [135.47401271758065, 34.63301208712039]
            ]
          },
          'properties': {
            'title': '16 Minute Cycling View',
            'address': '木津川渡船場⇄千本松渡船場',
            'date': 'Taisho 🇯🇵 Osaka, Japan',
            'id': 'ro1iQcEl2m8',
            'zoom': 14.5
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [135.51517506294186, 34.647529228293834],
              [135.52342275117815, 34.647880650421726],
              [135.52814033021986, 34.658934053247535],
              [135.5302296800166, 34.66546143669656],
              [135.53292918102449, 34.67377404794008],
              [135.53391006659564, 34.681174041158485]
            ]
          },
          'properties': {
            'title': 'View from the Window',
            'address': '大阪JR環状線（天王寺⇄森ノ宮）',
            'date': 'Tennoji ⇄ Morinomiya 🇯🇵 Osaka Loop Line',
            'id': 'tOOHtkKQVnM',
            'zoom': 12.5
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [135.412229, 34.638613],
              [135.42053883035527, 34.63089786792125],
              [135.4306430763076, 34.63077239124429],
              [135.43712825653267, 34.61386196885539],
              [135.44734419136574, 34.6138015358478],
              [135.4574741169689, 34.61081596196347],
              [135.4721442754983, 34.60918231176075]
            ]
          },
          'properties': {
            'title': 'View from the Window',
            'address': 'ニュートラム（トレードセンター前⇄住之江公園）',
            'date': 'New Tram (Osaka, Japan) 🇯🇵 Trade Center mae ⇄ Suminoekouen',
            'id': 'jDv57WWjJ58',
            'zoom': 13
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [135.4721442754983, 34.60918231176075],
              [135.4574741169689, 34.61081596196347],
              [135.44734419136574, 34.6138015358478],
              [135.43382953510434, 34.613907109890135],
              [135.43385144843262, 34.61169118729816],
              [135.41843968425383, 34.61184220479092],
              [135.41730047899017, 34.61548320882365],
              [135.41141605710726, 34.61545785643571],
              [135.40865560733192, 34.614595779048614],
              [135.40203058269532, 34.614595779048614]
            ]
          },
          'properties': {
            'title': '21 Minute Cycling View',
            'address': '住之江公園駅から南港南の西の果てまで',
            'date': 'Suminoe Park to Nanko Fishing Port 🇯🇵 Osaka, Japan',
            'id': 'tinBEuiKqzU',
            'zoom': 13
          }
        }
      ]
    }
  });

  map.addLayer({
    'id': 'line',
    'type': 'line',
    'source': 'addLine',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': 'lightskyblue',
      'line-width': 11
    }
  });
});

map.on('mouseenter', 'line', () => {
  map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'line', () => {
  map.getCanvas().style.cursor = '';
});

map.on('click', 'line', (e) => {
  map.flyTo({
    center: e.lngLat,
    essential: true,
    zoom: e.features[0].properties.zoom
  });

  const main = document.querySelector('main');
  main.hidden = false;

  player.loadVideoById({ videoId: e.features[0].properties.id });

  const thisLatLng = document.querySelector('#latlng');
  const thisAddress = document.querySelector('#address');
  const thisDate = document.querySelector('#datetime');
  thisLatLng.innerHTML = e.features[0].properties.title;
  thisAddress.innerHTML = e.features[0].properties.address;
  thisDate.innerHTML = e.features[0].properties.date;
});
