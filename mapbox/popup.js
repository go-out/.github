let heaedJson = [
    {
        'LngLat': [133.91774108127242, 34.66596367986325],
        'html': {
            'title': "Hiroki Ito's Recommended Spots in Okayama",
            'date': '岡山県オススメ60スポット',
            'link': 'https://go-out.github.io/hirokiito/'
        }
    }
]

// 地図にポップアップを追加
map.on('load', () => {
    for (const heaed of heaedJson) {
        new mapboxgl.Popup({
            closeOnClick: false,
            className: "goout"
        })
            .setLngLat(heaed.LngLat)
            .setHTML(`
            <strong>${heaed.html.title}</strong><br>
            <a href="${heaed.html.link}" target="_blank">
            ${heaed.html.date}
            </a>
            `)
            .addTo(map)
    };
});