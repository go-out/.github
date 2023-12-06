# This is a Collection of Locations where visitors have visited this website.

このウェブサイトに投稿された 位置情報[^1] など を ウェブストレージ[^2] と CSV に保存し、このウェブサイトを訪れたみなさんがいた場所のコレクション[^3] を 制作します。

[^1]: トップページ の「I'm Here !」をクリックすると、[位置情報 API](https://developer.mozilla.org/ja/docs/Web/API/Geolocation_API) が [あなたの現在位置情報](profile/js/findme.js) を 取得します。  
プロフィールページでは、[Mapbox Geocoding API](https://docs.mapbox.com/jp/api/geocoding/) を使って場所を検索・ドラッグ可能マーカーの地理座標から位置情報(住所・場所名) を取得します。
[^2]: [ウェブストレージ API](https://developer.mozilla.org/ja/docs/Web/API/Web_Storage_API) は、ユーザーのローカル環境（ブラウザ）にデータを保存する仕組みです。  
ブラウザがプライベートモード・シークレットウインドウの場合や、閲覧履歴（キャッシュ）を消去した場合などは、ウェブストレージに保存されたデータは削除されます。
[^3]: トップページの地図には、[CSVをJSONに変換](profile/js/csvtojson.js) して 私（わたしたち）がいた場所 など を表示します。  
プロフィールページの地図には、ローカルストレージに保存されている あなたがいた場所のコレクション を表示します。