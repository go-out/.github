const popupJson = [
    {
        'LngLat': [133.91774108127242, 34.66596367986325],
        'html': {
            'title': "Hiroki Ito's Recommended Spots in Okayama",
            'date': '岡山県オススメ60スポット',
            'link': 'https://go-out.github.io/that_be_in_fr/'
        }
    },
    {
        'LngLat': [2.3545577, 48.88845],
        'html': {
            'title': "that_be_in_fr",
            'date': 'from May 10 to June 5, 2018',
            'link': 'https://go-out.github.io/hirokiito/'
        }
    }
]

// 地図にポップアップを追加
map.on('load', () => {
    for (const popup of popupJson) {
        new mapboxgl.Popup({
            closeOnClick: false,
            className: "goout"
        })
            .setLngLat(popup.LngLat)
            .setHTML(`
            <b>${popup.html.title}</b><br>
            <a href="${popup.html.link}" target="_blank">
            ${popup.html.date}
            </a>
            `)
            .addTo(map)
    };
});

// 右クリックイベント
map.on("contextmenu", (e) => {
    new mapboxgl.Popup({
        closeOnClick: false,
        className: "goout"
    })
        .setLngLat([e.lngLat.lng, e.lngLat.lat])
        .setHTML(`
            <b>${e.lngLat.lng}</b>,
            <b>${e.lngLat.lat}</b>
            `)
        .addTo(map);
});