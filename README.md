# アイドルマスターポータル 非公式RSS

## 概要

[アイマスポータルのニュース一覧](https://idolmaster-official.jp/news)からJSONを取得し、RSS形式に変換することで、FeedlyやInoreaderなどのRSSリーダーで最新情報を取得することができるスクリプトです。

## 仕様

Node.JSで作成しており、公式サイトのCMSからトークンを取得後、そのトークンでニュース一覧を最大50件取得しています。

また、GitHub Actionsで毎日日本時間10時、12時、15時、20時、23時に取得し、公開しています。

## RSS取得先一覧

|シリーズ名|URL|
|---|---|
|すべて|[https://raw.githubusercontent.com/seril/imas-unofficial-rss/refs/heads/rss/all.xml](https://raw.githubusercontent.com/seril/imas-unofficial-rss/refs/heads/rss/all.xml)|
|アイドルマスター|[https://raw.githubusercontent.com/seril/imas-unofficial-rss/refs/heads/rss/allstars.xml](https://raw.githubusercontent.com/seril/imas-unofficial-rss/refs/heads/rss/allstars.xml)|
|シンデレラガールズ|[https://raw.githubusercontent.com/seril/imas-unofficial-rss/refs/heads/rss/cinderellagirls.xml](https://raw.githubusercontent.com/seril/imas-unofficial-rss/refs/heads/rss/cinderellagirls.xml)|
|ミリオンライブ！|[https://raw.githubusercontent.com/seril/imas-unofficial-rss/refs/heads/rss/millionlive.xml](https://raw.githubusercontent.com/seril/imas-unofficial-rss/refs/heads/rss/millionlive.xml)|
|SideM|[https://raw.githubusercontent.com/seril/imas-unofficial-rss/refs/heads/rss/sidem.xml](https://raw.githubusercontent.com/seril/imas-unofficial-rss/refs/heads/rss/sidem.xml)|
|シャイニーカラーズ|[https://raw.githubusercontent.com/seril/imas-unofficial-rss/refs/heads/rss/shinycolors.xml](https://raw.githubusercontent.com/seril/imas-unofficial-rss/refs/heads/rss/shinycolors.xml)|
|学園アイドルマスター|[https://raw.githubusercontent.com/seril/imas-unofficial-rss/refs/heads/rss/gakuen.xml](https://raw.githubusercontent.com/seril/imas-unofficial-rss/refs/heads/rss/gakuen.xml)|
|その他|[https://raw.githubusercontent.com/seril/imas-unofficial-rss/refs/heads/rss/other.xml](https://raw.githubusercontent.com/seril/imas-unofficial-rss/refs/heads/rss/other.xml)|


## 注意事項

- このスクリプトはあくまでも非公式なもので、アイドルマスターシリーズ及びバンダイナムコエンターテインメントとは一切関係ありません。問題が生じた際に公式に問い合わせするのはおやめください。
- このスクリプトを使用して生じた問題等は一切負いかねます。
- 権利の関係等で予告なく削除することがございますがあらかじめご了承ください。
