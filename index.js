import axios from "axios";
import RSS from "rss";
import fs from "fs";

// トークンを取得する関数
const fetchToken = async () => {
    try {
        const response = await axios.post(
            "https://cmsapi-frontend.idolmaster-official.jp/sitern/api/cmsbase/Token/get"
        );
        return response.data.data.token;
    } catch (error) {
        console.error("トークンの取得に失敗しました:", error);
        return null;
    }
};

// ニュースデータを取得する関数
const fetchNewsData = async (token, series) => {
    try {
        const data = `{"category":["NEWS"],"subcategory":[],"brand":["${series}"]}`;
        const response = await axios.get(
            `https://cmsapi-frontend.idolmaster-official.jp/sitern/api/idolmaster/Article/list?site=jp&ip=idolmaster&token=${token}&data=${data}&limit=50&start=0`
        );

        // デバッグ用
        // fs.writeFileSync("news.json", JSON.stringify(response.data, null, 2));
        
        return response.data.data.article_list || [];
    } catch (error) {
        console.error("ニュースデータの取得に失敗しました:", error);
        return [];
    }
};

const removeQueryParams = (url) => {
    if (!url) return null;
    return url.split("?")[0];
};

// RSSフィードを生成する関数
const generateRSS = async (seriesname, series, filename, token) => {
    if (!token) {
        console.error("トークンが取得できませんでした。");
        return;
    }

    const newsData = await fetchNewsData(token, series);
    if (newsData.length === 0) {
        console.error("ニュースデータが見つかりませんでした。");
        return;
    }

    // RSSフィードを生成
    const feed = new RSS({
        title: `(unofficial) ${seriesname} - アイマスポータルニュース`,
        description: "アイマスポータルのニュースをRSSで提供している非公式サイトです。",
        feed_url: `https://raw.githubusercontent.com/ogatomo21/idolmaster-unofficial-rss/refs/heads/rss/${filename}`,
        site_url: "https://idolmaster-official.jp/news",
        language: "ja",
        pubDate: new Date().toUTCString(),
    });

    // ニュースデータをフィードに追加
    newsData.forEach((news) => {
        feed.item({
            title: news.title,
            description: news.hashtag || news.title,
            url: news.url,
            date: new Date(news.startdate * 1000).toUTCString(),
            enclosure: news.thumbnail
                ? {
                    url: `https://cmsapi-frontend.idolmaster-official.jp/sitern/api/idolmaster/Image/get?path=${removeQueryParams(
                            news.thumbnail
                    )}`,
                }
                : undefined,
        });
    });

    // RSSフィードをXML形式で保存
    const xml = feed.xml({ indent: true });
    fs.writeFileSync(filename, xml);

    console.log(`RSSフィードが生成されました: ${filename}`);
};

// 実行
const token = await fetchToken();
generateRSS("総合", "", "all.xml", token);
generateRSS("アイドルマスター", "IDOLMASTER", "allstars.xml", token);
generateRSS("シンデレラガールズ", "CINDERELLAGIRLS", "cinderellagirls.xml", token);
generateRSS("ミリオンライブ！", "MILLIONLIVE", "millionlive.xml", token);
generateRSS("SideM", "SIDEM", "sidem.xml", token);
generateRSS("シャイニーカラーズ", "SHINYCOLORS", "shinycolors.xml", token);
generateRSS("学園アイドルマスター", "GAKUEN", "gakuen.xml", token);
generateRSS("その他", "OTHER", "other.xml", token);
