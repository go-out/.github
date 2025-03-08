mapboxgl.accessToken = 'pk.eyJ1IjoicGVodSIsImEiOiJja3R4Y3diNmIybTg5Mm9waWgwYTdsc3FyIn0.lVvnPZ3aa6332EaWJIxPaQ';

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
};

let style = 'mapbox://styles/pehu/ckx1e2xhw13kw14s4rjhaiv17',
    center = [getRandomInt(0, 360), getRandomInt(-90, 90)],
    bounds = null,
    zoom = getRandomInt(1.5, 3);

const map = new mapboxgl.Map({
    container: 'map',
    center: center,
    style: style,
    bearing: 0,
    pitch: 0,
    zoom: zoom,
    scrollZoom: 1,
    maxBounds: bounds,
    projection: 'mercator',
    attributionControl: false
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        // デバイスの位置の変更に応じて位置情報を更新
        trackUserLocation: true,
        // デバイスが向いている方向を矢印で描画
        showUserHeading: true
    }), 'bottom-right'
);
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');