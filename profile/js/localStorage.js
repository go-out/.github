'use strict'

let gooutArr = {
    'type': 'FeatureCollection',
    'features': []
}

/* localStorageから位置情報を取得 */
if (localStorage.getItem("goout")) {
    const gooutJSON = JSON.parse(localStorage.getItem('goout'));
    for (let i = 0; i < gooutJSON.length; i++) {
        const thisLongitude = gooutJSON[i].longitude;
        const thisLatitude = gooutJSON[i].latitude;
        const thisAddress = gooutJSON[i].address;
        const thisComment = gooutJSON[i].comment;
        const thisTimestamp = gooutJSON[i].timestamp;
        const thisCenter = [thisLongitude, thisLatitude];

        let yourMarker = {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': thisCenter,
            },
            'properties': {
                'title': `${thisLongitude}, ${thisLatitude}`,
                'address': thisAddress,
                'date': thisComment,
                'timestamp': thisTimestamp,
                'tags': 'submit',
            }
        }

        gooutArr.features.push(yourMarker);
    }
}