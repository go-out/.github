'use strict'

// CSVファイルの情報をJSONに追加し、地図上にマーカーを追加
let submitJson = {
    'type': 'FeatureCollection',
    'features': []
}

// CSVファイルの情報をJSONに追加
async function csvtojson(csv) {
    const response = await fetch(csv);
    const text = await response.text();
    const data = text.trim().split('\n')
        .map(line => line.split(',').map(x => x.trim()))
        .map(marker => {
            let thisMarker = {
                'type': 'Feature',
                'tags': 'submit',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [marker[1], marker[2]]
                },
                'properties': {
                    'title': `${marker[1]},${marker[2]}`,
                    'address': marker[3].replace(/"/g, ''),
                    'date': marker[4].replace(/"/g, ''),
                    'timestamp': marker[0],
                    'zoom': 17.5,
                }
            };
            submitJson.features.push(thisMarker);
        });
};
