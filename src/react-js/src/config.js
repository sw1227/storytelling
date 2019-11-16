import React from "react";

const config = {
    style: "mapbox://styles/mapbox/navigation-guidance-night-v4",
    accessToken: "pk.eyJ1Ijoic3cxMjI3IiwiYSI6ImNrMnNxb2N0eTEwMnEzYmw0aHY4Nmo4c3IifQ.SkdDtqF53-ypvA9d4l9DbQ",
    theme: "light",
    alignment: "left",
    chapters: [
        {
            id: "about",
            title: "このページについて",
            location: {
                center: [127.7195, 26.217],
                zoom: 17.8,
                pitch: 45,
                bearing: 120,
            },
            component: (
                <p>
                    <a href="https://www.our-shurijo.org/index_ja.html">「OUR Shurijo: みんなの首里城デジタル復元プロジェクト」</a>
                    の途中経過として公開されている
                    <a href="https://sketchfab.com/3d-models/shuri-castle-shurijo-naha-okinawa-wip-45f901e4d6fa4192a6f329e35f2dc5b8">3次元モデル</a>
                    を地図上に表示しています。
                    <div style={{ border: "dotted 1px #0f0f0f ", padding: "4px", margin: "4px 0px" }}>
                        ※ ロードに少々時間がかかります
                        <br />
                        ※ PC推奨
                        （モバイルでは3Dモデルの色やスクロールに問題が生じる場合があります）
                    </div>
                    <a href="https://twitter.com/_sw1227_">本ページの作成者</a>はプロジェクトと無関係のため、<b>非公式の</b>Webサイトです。
                    <br />
                    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-related="_sw1227_" data-show-count="false">Tweet</a>
                    <a href="https://b.hatena.ne.jp/entry/" class="hatena-bookmark-button" data-hatena-bookmark-layout="basic-label-counter" data-hatena-bookmark-lang="ja" title="このエントリーをはてなブックマークに追加">
                        <img src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style={{border: "none"}} />
                    </a>
                    <br />
                    <b>↓ スクロールして閲覧を続ける</b>
                </p>
            ),
        },
        {
            id: "background",
            title: "背景",
            location: {
                center: [127.71905, 26.2175],
                zoom: 17.8,
                pitch: 60,
                bearing: 95,
            },
            component: (
                <p>
                    首里城は琉球王朝の王城でしたが、太平洋戦争中の沖縄戦によって破壊され、1992年に再建されました。
                    聖地のような存在として、戦後間もなくから再建は多くの人々の悲願だったと言われています。
                </p>
            ),
        },
        {
            id: "location",
            title: "立地",
            location: {
                center: [127.71062, 26.22361],
                zoom: 14.8,
                pitch: 60,
                bearing: -55,
            },
            component: (
                <p>
                    沖縄県那覇市の小高い丘陵地にある首里城公園は、かつて海外貿易の拠点であった那覇港や、那覇の町を見下ろしています。
                    標高はおよそ120mから130m程度です。
                </p>
            ),
        },
        {
            id: "style",
            title: "様式",
            location: {
                center: [127.719, 26.217],
                zoom: 17.8,
                pitch: 30,
                bearing: -43.2
            },
            component: (
                <p>
                    首里城は中国の城の影響を大きく受けており、門や各種の建築物は漆で朱塗りされています。屋根瓦には初期は高麗瓦、後に琉球瓦（赤瓦）が使われ、各部の装飾には国王の象徴である龍が多用されていました。
                </p>
            ),
        },
        {
            id: "fire",
            title: "2019年の火災",
            location: {
                center: [127.71945, 26.21685],
                zoom: 19.5,
                pitch: 50,
                bearing: -150
            },
            component: (
                <p>
                    2019年10月31日未明の火災で、正殿と北殿、南殿をはじめとする建屋の大部分が焼失しました。
                    火元は正殿1階の北東部分とほぼ断定されています。
                </p>
            ),
        },
        {
            id: "reconstruction",
            title: "デジタル復元",
            location: {
                center: [127.71915, 26.21700],
                zoom: 18.67,
                pitch: 60.00,
                bearing: 132.24,
            },
            component: (
                <p>
                    火災から間もなく、ボランティアのメンバーによって「OUR Shurijo: みんなの首里城デジタル復元プロジェクト」が立ち上げられました。
                    写真やビデオを用いた三次元復元技術による首里城の復元を目指しているとのことで、本ページもその途中経過として公開されているデータを利用しています。
                    プロジェクトの<a href="https://www.our-shurijo.org/index_ja.html">公式サイト</a>では今でも写真や動画を募集しています。

                    <br /><br />
                    <b>本ページの作成者</b>
                    <br />
                    <a href="https://sw1227.hatenablog.com/">ブログ</a>
                    <br />
                    <a href="https://twitter.com/_sw1227_?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-related="_sw1227_" data-show-count="false">Follow @_sw1227_</a>
                </p>
            ),
        }
    ]
};

export default config;
