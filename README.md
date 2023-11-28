# Custom Map with Mapbox GL JSs
Mapbox GL JS[^1] を 使った カスタム地図 の 作り方

[^1]: Mapbox GL JS は、WebGLを用いて インタラクティブマップをレンダリングする JavaScriptライブラリ です。
アカウントを作成し、アクセストークンを取得すると、Mapboxを使ってカスタム地図が制作できます。

[クイックスタート](https://docs.mapbox.com/jp/mapbox-gl-js/overview/)
* アカウントを作成し、アクセストークン [^2] と スタイルURL [^3] を取得
* HTMLファイル の head に、JavaScript と CSS を設定
* HTMLファイルの BODY内に次のコードを記述

## [マップを表示](https://docs.mapbox.com/jp/mapbox-gl-js/example/simple-map/)
```
<div id="map"></div>
<script>
mapboxgl.accessToken = 'アクセストークン';

let center = [マップの開始位置の座標],
    css = 'スタイルURL',
    zoom = '初期に表示する地図のズームレベル';

const map = new mapboxgl.Map({
    container: 'map',
    center: center,
    style: css,
    pitch: 0,
    bearing: 0,
    zoom: zoom,
    scrollZoom: true,
    attributionControl: false
});
</script>
```

[^2]: [はじめてのMapbox](https://docs.mapbox.com/jp/help/getting-started/)
[^3]: [Styles API](https://docs.mapbox.com/api/maps/styles/)

### [マップの開始位置の座標 = [lng(経度), lat(緯度)]](https://docs.mapbox.com/help/glossary/lat-lon/)

| [ズームレベル](https://docs.mapbox.com/jp/help/glossary/zoom-level/)[^4]  | 見える範囲 |
|:------------|:---------|
| ***0***     | 地球 |
| ***3***     | 大陸 |
| ***4***     | 大きな島 |
| ***6***     | 	大きな川 |
| ***10***     | 幹線道路 |
| ***15***     | ビル |
| ***22***     | 最も高いズームレベル |

[^4]: 地図上に表示される世界の範囲を決定する23段階の値

### [ピッチとベアリングの設定](https://docs.mapbox.com/jp/mapbox-gl-js/example/set-perspective/)

***

### [アトリビューションコントロールの既定値を変更](https://docs.mapbox.com/jp/mapbox-gl-js/example/attribution-position/)[^5]
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

[^5]: [Markers and controls](https://docs.mapbox.com/mapbox-gl-js/api/markers/)
___

[スクロールズームの無効化](https://docs.mapbox.com/jp/mapbox-gl-js/example/disable-scroll-zoom/)
```
map.scrollZoom.disable();
```