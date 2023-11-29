let heaedJson = [
    {
        'LngLat': [135.47306292634534, 34.62458544610712],
        'html': {
            'title': 'things that i (we) heard around OTO building',
            'address': '私（わたしたち）が 音ビル周辺で聞いた言葉',
            'date': 'Sun Jan 5 2020 - Sun May 22 2022',
            'link': 'https://things-that-i-we-heard.github.io/otobuilding/'
        },
    },
    {
        'LngLat': [135.76854055131543, 35.00017558944718],
        'html': {
            'title': 'things that i (we) heard around BnA Alter Museum',
            'address': '私（わたしたち）が 京都・河原町周辺で聞いた 55 の言葉',
            'date': 'Thu Jul 21 2022 - Mon Aug 15 2022',
            'link': 'https://things-that-i-we-heard.github.io/bnaaltermuseum/'
        }
    }
]

// 地図にポップアップを追加
function heardPopup() {
    for (const heaed of heaedJson) {
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
            </a>
            </p>
            `)
            .addTo(map)
    };
};