# Mapboxを用いて、カスタムデザイン地図をウェブページに表示する

[クイックスタート](https://docs.mapbox.com/jp/mapbox-gl-js/overview/)
* [Mapboxアカウント](https://account.mapbox.com/) を作成し、アクセストークン [^1] と スタイルURL [^2] を取得
* HTMLファイル の head に、JavaScript と CSS を設定
* HTMLファイルの BODY内に次のコードを記述

## [マップを表示](https://docs.mapbox.com/jp/mapbox-gl-js/example/simple-map/)
```
<div id="map"></div>

<script>
mapboxgl.accessToken = 'アクセストークン';

const css = 'スタイルURL',
    center = [マップの開始位置の座標],
    zoom = '初期に表示する地図のズームレベル';

const map = new mapboxgl.Map({
    container: 'map',
    style: css,
    center: center,
    pitch: 0,
    bearing: 0,
    zoom: 'zoom',
    scrollZoom: true,
    attributionControl: false
});
</script>
```

[^1]: [はじめてのMapbox](https://docs.mapbox.com/jp/help/getting-started/)
[^2]: [Styles API](https://docs.mapbox.com/api/maps/styles/)

### [マップの開始位置の座標 = [lng(経度), lat(緯度)]](https://docs.mapbox.com/help/glossary/lat-lon/)

| ズームレベル[^3] | 見える範囲           |
| :--------------- | :------------------- |
| ***0***          | 地球                 |
| ***3***          | 大陸                 |
| ***4***          | 大きな島             |
| ***6***          | 大きな川             |
| ***10***         | 幹線道路             |
| ***15***         | ビル                 |
| ***22***         | 最も高いズームレベル |

[^3]: [地図上に表示される世界の範囲を決定する23段階の値](https://docs.mapbox.com/jp/help/glossary/zoom-level/)

### [ピッチとベアリングの設定](https://docs.mapbox.com/jp/mapbox-gl-js/example/set-perspective/)

***

### [アトリビューションコントロールの既定値を変更](https://docs.mapbox.com/jp/mapbox-gl-js/example/attribution-position/)[^4]
[^4]: [Markers and controls](https://docs.mapbox.com/mapbox-gl-js/api/markers/)

```
attributionControl: false
```

カスタムAttributionを表示
```
map.addControl(new mapboxgl.AttributionControl({
    customAttribution: 'Map design by me'
}));
```
コントロールの既定位置を変更
```
map.addControl(new mapboxgl.AttributionControl(), 'bottom-left');
```

[マップナビゲーションコントロールの表示](https://docs.mapbox.com/jp/mapbox-gl-js/example/navigation/)
```
map.addControl(new mapboxgl.NavigationControl());
```

[現在ビューと全画面表示モードを切り替える](https://docs.mapbox.com/jp/mapbox-gl-js/example/fullscreen/)
```
map.addControl(new mapboxgl.FullscreenControl());
```

[現在位置を取得し、マップ上での現在位置を追跡](https://docs.mapbox.com/jp/mapbox-gl-js/example/locate-user/)
```
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
```
___

[スクロールズームの無効化](https://docs.mapbox.com/jp/mapbox-gl-js/example/disable-scroll-zoom/)
```
map.scrollZoom.disable();
```

地図に回転するアニメーションエフェクトを設定する
```
let userInteracting = 0;

function spinGlobe() {
  const zoom = map.getZoom();
  if (!userInteracting && zoom < 5) {
    let e = 5;
    if (zoom > 3) {
      e *= (5 - zoom) / 2
    }
    const lng = map.getCenter();
    lng.lng += e,
      map.easeTo({
        center: lng,
        easing: zoom => zoom
      })
  }
}
map.on("mousedown", () => { userInteracting = !0 }),
  map.on("dragstart", () => { userInteracting = !0 }),
  map.on("moveend", () => { spinGlobe() }),
  spinGlobe()
```

[Create a rotating globe](https://docs.mapbox.com/mapbox-gl-js/example/globe-spin/)

```
// Add the control to the map.
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    }), 'bottom-right'
);
```