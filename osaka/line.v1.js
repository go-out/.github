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
              [135.53450260612686, 34.688496339894954],
              [135.5354424361597, 34.69242388834881],
              [135.53531023841867, 34.693699643521356],
              [135.5330439390151, 34.698893529353285],
              [135.53220603151203, 34.69992010017009],
              [135.52439430104204, 34.704692888393325],
              [135.5222800276979, 34.70518247253948],
              [135.5204493925728, 34.704924936880275],
              [135.51647977297216, 34.703671466960145],
              [135.51484414217254, 34.70371124282535],
              [135.51352255387275, 34.70412169253132],
              [135.5104712918939, 34.70599305077192],
              [135.50910075587757, 34.70643568031724],
              [135.50582128363862, 34.70660468363279],
              [135.50358370694653, 34.70598021194429],
              [135.50122444222114, 34.70468448019783],
              [135.49958961204516, 34.70412917690382],
              [135.48656423280556, 34.697090482577366]
            ]
          },
          'properties': {
            'title': 'Osaka Castle Park to Fukushima 🇯🇵 Osaka Loop Line',
            'address': '大阪JR環状線（大阪城公園駅→福島駅）',
            'date': '',
            'youtube': 'Fkiq6MvW868',
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
            'title': '16 Minute Cycling in Taisho 🇯🇵 Osaka, Japan',
            'address': '木津川渡船場（船町）⇄ 千本松渡船場（南恩加島）',
            'date': 'More Info',
            'href': 'vr/?id=cycling&area=osaka&name=taisho-minami',
            'youtube': 'ro1iQcEl2m8',
            'zoom': 14.5
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [135.51411388098006, 34.64719329063942],
              [135.5190702216264, 34.64580472176178],
              [135.52252640610055, 34.64712716041433],
              [135.5253572221883, 34.650267713027105],
              [135.5326799850228, 34.672159115783046],
              [135.5331130709123, 34.67450978871571],
              [135.53414439908613, 34.677853434544446],
              [135.53419959431164, 34.679095090294155],
              [135.53388083546326, 34.68108346805866]
            ]
          },
          'properties': {
            'title': 'Tennoji ⇄ Morinomiya 🇯🇵 Osaka Loop Line',
            'address': '大阪JR環状線（天王寺⇄森ノ宮）',
            'date': '',
            'youtube': 'tOOHtkKQVnM',
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
            'title': 'New Tram (Osaka, Japan) 🇯🇵 Trade Center mae ⇄ Suminoekouen',
            'address': 'ニュートラム（トレードセンター前⇄住之江公園）',
            'date': '',
            'youtube': 'jDv57WWjJ58',
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
            'title': '21 Minute Cycling Suminoe Park to Nanko Fishing Port 🇯🇵 Osaka, Japan',
            'address': '住之江公園駅から南港南の西の果てまで',
            'date': 'More Info',
            'href': 'vr/?id=cycling&area=osaka&name=nanko-minami',
            'youtube': 'tinBEuiKqzU',
            'zoom': 13
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [135.49127079351257, 34.6175381365812],
              [135.49071982435572, 34.61763976670055],
              [135.4908124441697, 34.61742673419286],
              [135.49088588041127, 34.617335534638784],
              [135.4908977547467, 34.617250516832144],
              [135.49088756069222, 34.61685689830988]
            ]
          },
          'properties': {
            'title': '粉浜本通商店街',
            'address': 'Kohama Shopping Street',
            'date': 'More Info',
            'href': 'vr/?id=walking&area=osaka&name=kohama-ss',
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
  const thisLatLng = document.querySelector('#latlng');
  const thisAddress = document.querySelector('#address');
  const thisDate = document.querySelector('#datetime');
  thisLatLng.innerHTML = e.features[0].properties.title;
  thisAddress.innerHTML = e.features[0].properties.address;

  if (e.features[0].properties.href) {
    thisDate.innerHTML = "";
    const a = document.createElement('a');
    a.href = directory + e.features[0].properties.href;
    a.textContent = e.features[0].properties.date;

    if (e.features[0].properties.targt) {
      a.setAttribute('targt', e.features[0].properties.targt);
    }

    thisDate.appendChild(a);
  } else {
    thisDate.innerHTML = e.features[0].properties.date;
  }

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    if (e.features[0].properties.youtube) {
      const main = document.querySelector('main');
      main.hidden = false;
      player.loadVideoById({ videoId: e.features[0].properties.youtube });
    }
  }
  
  map.flyTo({
    center: e.lngLat,
    essential: true,
    zoom: e.features[0].properties.zoom
  });
});
