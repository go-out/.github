'use strict'

const youtube = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.49882344601633, 34.70251955199873]
            },
            'properties': {
                'title': '阪急百貨店梅田店コンコース',
                'address': 'ここにいるのにいないような気持ちになれる場所',
                'date': '',
                'tags': 'relax',
                'id': 'qzIy_qtpNh8',
                'zoom': 17.5,
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.41478295447018, 34.64411832595768]
            },
            'properties': {
                'title': '<a href="vr/?area=osaka&id=cycling&name=seaside-cosmo">シーサイドコスモ (コスモスクエア海浜緑地)</a>',
                'address': 'コスモスクエア駅のすぐ北側にある全長1.4kmにも及ぶ海辺の遊歩道',
                'date': '',
                'tags': 'park',
                'id': 'EoFg1eMWADg',
                'zoom': 15,
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.42081655887517, 34.633723800118446]
            },
            'properties': {
                'title': '<a href="vr/?area=osaka&id=cycling&name=port-town">南港ポートタウン</a>',
                'address': '大阪南港の人工島「咲洲（さきしま）」の中央部にある住宅地、ニュータウン。',
                'date': '',
                'tags': 'park',
                'id': '8az_VW2ssbs',
                'zoom': 15.5,
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4016286962231, 34.61486617414742]
            },
            'properties': {
                'title': '南港魚つり園護岸',
                'address': '大きな空と海を一望できる気持ちのいい場所',
                'date': '',
                'tags': 'relax',
                'id': '9DRiQ5CVcjE',
                'zoom': 15.5,
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.49237250787706, 34.6129733697545]
            },
            'properties': {
                'title': '住吉大社',
                'address': '全国に2300社ある住吉神社の総本社',
                'date': '',
                'tags': 'relax',
                'id': 'wbOguTvuV0Q',
                'zoom': 16.5,
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4883216199499, 34.611700718642865]
            },
            'properties': {
                'title': '住吉公園 心字池',
                'address': 'Sumiyoshi Park, Osaka, Japan',
                'date': '',
                'tags': 'park',
                'id': 'mkioDOspLbs',
                'zoom': 17.25,
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.48969770207242, 34.61317201110916]
            },
            'properties': {
                'title': '住吉公園 花と水の広場',
                'address': 'Sumiyoshi Park, Osaka, Japan',
                'date': '',
                'tags': 'park',
                'id': 'gfwP_viCeZg',
                'zoom': 17.5,
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.42955864449175, 34.6402632345294]
            },
            'properties': {
                'title': '<a href="vr/?area=osaka&id=cycling&name=container_berth">咲洲コンテナターミナル</a>',
                'address': '咲洲（さきしま）の東側一帯は、コンテナ埠頭と呼ばれるエリアの一部らしい',
                'date': '',
                'tags': 'vr',
                'id': 'rlfyH_v-fTk',
                'zoom': 14.5,
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.41497842130116, 34.63819701597478]
            },
            'properties': {
                'title': '大阪府咲洲庁舎（さきしまコスモタワー）',
                'address': '南港北（咲洲）にある高さ256.0m、地上55階・地下3階建ての超高層ビル',
                'date': '',
                'tags': 'relax',
                'id': '9E8UZio4SJM',
                'zoom': 17.25,
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.41350734785573, 34.63624539461653]
            },
            'properties': {
                'title': 'ATC（アジア太平洋トレードセンター）',
                'address': '何をする訳でもなく、ただぼーっと過ごした記録映像（25分36秒）',
                'date': '',
                'tags': 'relax',
                'id': 'O84LelQJNbA',
                'zoom': 16.5,
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.50183216544207, 34.61987240976515]
            },
            'properties': {
                'title': '万代池公園',
                'address': 'まんだいいけこうえん、ばんだいいけこうえん',
                'date': '<small class="mobile">スマートフォンのブラウザでは、360°映像が正しく再生されません。</small><br><small class="mobile">VR動画を見るには、YouTubeアプリを使用してください。</small>',
                'tags': 'park',
                'id': '-7DEl_jxuW8',
                'zoom': 16.5,
            }
        }
    ]
};

// IFrame Player API の読み込み
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var videoId;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        playerVars: {
            'playsinline': 1,
            'autoplay': 1,
            'controls': 0,
            'rel': 0
        }
    });
};

map.on('load', () => {
    for (const marker of youtube.features) {
        const el = document.createElement('div');
        el.className = marker.properties.tags;

        const url = `https://i.ytimg.com/vi/${marker.properties.id}/default.jpg`;
        el.style.backgroundImage = `url(${url})`;
        el.style.width = '5.5rem';
        el.style.height = '4rem';

        new mapboxgl.Marker(el, {
            offset: [0, 0]
        })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map)

        el.addEventListener('click', (e) => {
            map.flyTo({
                center: marker.geometry.coordinates,
                essential: true,
                zoom: marker.properties.zoom
            })

            const main = document.querySelector('main');
            main.hidden = false;

            player.loadVideoById({ videoId: marker.properties.id });

            const thisLatLng = document.querySelector('#latlng');
            const thisAddress = document.querySelector('#address');
            const thisDate = document.querySelector('#datetime');
            thisLatLng.innerHTML = marker.properties.title;
            thisAddress.innerHTML = marker.properties.address;
            thisDate.innerHTML = marker.properties.date;

            const mobileAll = document.querySelectorAll('.mobile');
            for (const mobile of mobileAll) {
                mobile.hidden = true;
            }

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                for (const mobile of mobileAll) {
                    mobile.hidden = false;
                }
            }
        })
    };
});
