'use strict'

const osakaKita = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'tags': 'spot',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.49882344601633, 34.70251955199873]
            },
            'properties': {
                'title': '阪急梅田コンコース',
                'address': '阪急うめだ本店の阪急電車側、人々が行き交うコンコースを眺められる場所。',
                'date': 'More Info',
                'href': 'relax/?id=spot&area=osaka&name=hankyu-umeda',
                'youtube': 'qzIy_qtpNh8',
                'zoom': 17.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.49015201516642, 34.70454139923444]
            },
            'properties': {
                'title': '中自然の森',
                'address': '「自然との共存」をテーマに開発された、緑にあふれたやすらぎの場所',
                'date': '',
                'zoom': 17.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.49247137036144, 34.69864019314251]
            },
            'properties': {
                'title': 'OSAKA GARDEN CITY',
                'address': '「自然との共存」をテーマに開発された、緑にあふれたやすらぎの場所',
                'date': '',
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.52321201539763, 34.71184263555778]
            },
            'properties': {
                'title': '櫻宮御旅所',
                'address': '境内にある「渡辺綱・駒つなぎの樟」と呼ばれるクスノキの大樹は、大阪府史蹟名勝天然記念物第一号',
                'date': '',
                'zoom': 17.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.52089606493735, 34.71124351717242]
            },
            'properties': {
                'title': '飛翔橋',
                'address': '他に例のない二重のアーチ橋（ニールセン・ローゼ桁）の歩行者専用橋',
                'date': '',
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'park',
            'feature': [
                {
                    'month': 3,
                    'text': '3月下旬~4月上旬、桜並木が咲き誇る'
                },
                {
                    'month': 4,
                    'text': '3月下旬~4月上旬、桜並木が咲き誇る'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.5213657152636, 34.7023205956932]
            },
            'properties': {
                'title': '毛馬桜之宮公園',
                'address': '大川の流れに沿ったプロムナード 全長4.2kmのリバーサイドパーク',
                'iconSize': ['kita/icon/miyakojima.gif', '3.5rem', '3.5rem'],
                'date': 'More Info',
                'href': 'osaka/vr/?area=kita&name=sakuranomiya',
                'zoom': 14
            }
        },
        {
            'type': 'Feature',
            'tags': 'bicycle',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.52344652245236, 34.70539531335592]
            },
            'properties': {
                'title': 'レンタサイクル グリーンフラッグ 桜ノ宮店',
                'address': '営業時間 平日5:30~24:15 土日祝7時~19時 | 利用料 1日 150円',
                'date': '',
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'feature': [
                {
                    'month': 4,
                    'text': '例年4月中旬、春日神社・下福島公園・阪神野田駅前広場などで「ふじ」の花が見頃を迎える'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.47983788186522, 34.68980343022029]
            },
            'properties': {
                'title': '福島区野田',
                'address': '春日社周辺は、福島区の花「野田藤」発祥の地',
                'iconSize': ['kita/icon/fukushima.gif', '3.5rem', '3.5rem'],
                'date': '',
                'zoom': 15
            }
        },
        {
            'type': 'Feature',
            'tags': 'park',
            'feature': [
                {
                    'month': 5,
                    'text': '例年5月中旬~下旬、北区の花が咲き誇る「バラ園」が春の見頃を迎える'
                },
                {
                    'month': 10,
                    'text': '例年10月中旬~11月上旬、北区の花が咲き誇る「バラ園」が秋の見頃を迎える'
                },
                {
                    'month': 11,
                    'text': '例年10月中旬~11月上旬、北区の花が咲き誇る「バラ園」が秋の見頃を迎える'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.50788864110478, 34.692395405365495]
            },
            'properties': {
                'title': '中之島公園',
                'address': '堂島川と土佐掘川にはさまれた緑あふれる都心のオアシス<br>芝生広場の先にある剣先噴水は、10時～20時30分までの毎時0分・30分に約5分間放水する',
                'iconSize': ['kita/icon/kita.png', '3.5rem', '3.5rem'],
                'date': '',
                'zoom': 15.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'bicycle',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.53325636893396, 34.75198041554677]
            },
            'properties': {
                'title': 'レンタサイクル 阪急上新庄駐輪センターはこべ館',
                'address': '営業時間 6:30～22:00 年末年始休 | ◆普通車◆ 1日1回利用 320円',
                'date': '',
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'feature': [
                {
                    'month': 3,
                    'text': '3月下旬から4月上旬、東淀川区の花「こぶし」が桜より少し早い早春に開花する'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.52918504347852, 34.74086344550958]
            },
            'properties': {
                'title': '東淀川区',
                'address': '大阪市市の北東部最北端、淀川と神崎川に挟まれた閑静な住宅街',
                'iconSize': ['kita/icon/hyodogawa.png', '3rem', '3rem'],
                'date': 'More Info',
                'href': 'osaka/vr/?area=kita&name=higashi-yodogawa',
                'zoom': 14
            }
        },
        {
            'type': 'Feature',
            'tags': 'bicycle',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.48272530466483, 34.738223239605254]
            },
            'properties': {
                'title': 'レンタサイクル 駅リンくん 新大阪店',
                'address': '営業時間 6:30～21:00 年末年始休 | 1回利用（翌日の10時まで）500円',
                'date': '',
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'bicycle',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.46940910661692, 34.71220704104989]
            },
            'properties': {
                'title': 'レンタサイクル 駅リンくん 塚本店',
                'address': '営業時間 6:30～21:00 年末年始休 | 1回利用（翌日の10時まで）500円',
                'date': '',
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'bicycle',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.46940910661692, 34.71220704104989]
            },
            'properties': {
                'title': 'レンタサイクル 駅リンくん 塚本店',
                'address': '営業時間 6:30～21:00 年末年始休 | 1回利用（翌日の10時まで）500円',
                'date': '',
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'vr',
            'feature': [
                {
                    'month': 1,
                    'text': '区内の公園や「大野川緑陰道路」などで、西淀川区の花「サザンカ」が咲き誇る'
                },
                {
                    'month': 12,
                    'text': '区内の公園や「大野川緑陰道路」などで、西淀川区の花「サザンカ」が咲き誇る'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.45671120382073, 34.71068501127959]
            },
            'properties': {
                'title': '淀川区・西淀川区',
                'address': '淀川と神崎川に挟まれた中州の地域<br>淀川区の東端に大阪の玄関口「新大阪駅」があり、西淀川区の西端は大阪湾に面する',
                'iconSize': ['kita/icon/nyodo.gif', '3.5rem', '3.5rem'],
                'date': 'More Info',
                'href': 'osaka/vr/?area=kita&name=nishi-yodogawa',
                'zoom': 14.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4449331455768, 34.70832661888589]
            },
            'properties': {
                'title': '大阪マスジド',
                'address': 'パキスタン・インドネシア・エジプト・スーダンなど、世界各国にルーツを持つイスラム教徒が集う西日本最大級のモスク',
                'date': '',
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'bicycle',
            'geometry': {
                'type': 'Point',
                'coordinates': [135.48272530466483, 34.738223239605254]
            },
            'properties': {
                'title': 'レンタサイクル 阪急三国駐輪センター',
                'address': '営業時間 6:30～22:00 年末年始休 | ◆普通車◆ 1日1回利用 320円',
                'date': '',
                'zoom': 16.5
            }
        },
        {
            'type': 'Feature',
            'tags': 'draft',
            'feature': [
                {
                    'month': 4,
                    'text': '例年4月頃、アメリカフウ（紅葉葉楓）の樹が花期を迎える'
                },
                {
                    'month': 10,
                    'text': '例年10月上旬～11月上旬、アメリカフウ（紅葉葉楓）が紅葉する'
                },
                {
                    'month': 11,
                    'text': '例年10月上旬～11月上旬、アメリカフウ（紅葉葉楓）が紅葉する'
                }
            ],
            'geometry': {
                'type': 'Point',
                'coordinates': [135.4908352966768, 34.75406864163798]
            },
            'properties': {
                'title': 'リーニュ・ブランシュの庭',
                'address': '彫刻家マルタ・パンによる「都市と自然の美しい調和」をテーマとした３つの作品が展示されている、近現代彫刻作品の美術館「スキュルチュール江坂」をとりまく庭',
                'date': '',
                'zoom': 15.5
            }
        }
    ]
}
