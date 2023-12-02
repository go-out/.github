map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        // デバイスの位置の変更に応じて位置情報を更新
        trackUserLocation: true,
        // デバイスが向いている方向を矢印で描画
        showUserHeading: true
    })
);

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.FullscreenControl());
