'use strict'

const osakaHokusetsu = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'tags': 'bicycle',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.62119206881914, 34.84962818220385]
            },
            'properties': {
                'title': 'レンタサイクル グリーンフラッグ 高槻店',
                'address': '営業時間 5:30~25:00 | 利用料 1日 100円',
                'date': '',
                'zoom': 16.5,
            }
        },
        {
            'type': 'Feature',
            'tags': 'park',
            'feature': [
                { 'month': 5 },
                { 'month': 6 }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.49860047791276, 34.81030253347209]
            },
            'properties': {
                'title': '千里東町公園',
                'address': '5月下旬〜6月上旬、千里の竹林（大阪みどりの百選）の新旧の葉が入れ替わる。',
                'date': '',
                'zoom': 16,
            }
        }
    ]
}