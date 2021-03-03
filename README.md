<h1 align="center">
  <a href="https://kidsandbeer.com/" target="_blank">Addition Project Mobile Web App</a>
</h1>

# Page


# Installation

<b>yarn は npm よりだいぶ速いので</b> yarn を使いましょう

```bash
# 1. yarn toolをインストール(あれば飛ばす)
brew install yarn

# 2. 依存環境をインストール
yarn install
```

# Vscode Extensions
- Prettier - Code formatter (必須)
- Vetur (必須)
- VueDX (推奨)

# Start

```bash
# .env.localはgitから除外されるので、サンプルからコピーする
cp .env.example .env.local
yarn serve
```

# About Vite

<p>Webpack はプロジェクトが大きくなるとだいぶ遅くなるし、vscode 暴走しがち。</p>
<p>このプロジェクトは次世代の frontend 構築ツール Vite を使用</p>

```bash
# 環境変数
old: process.env.variable_name
new: import.meta.env.variable_name
# 設定ファイル
./vite.config.ts
```

[Vite Document](https://vitejs.dev/)

# About Library

- UI: [Vant UI](https://youzan.github.io/vant/v3/#/en-US)
- Vue: [Vue3](https://v3.vuejs.org/guide/introduction.html)
- 状態管理: [Vuex](https://next.vuex.vuejs.org/)
- Vue full typescirpt サポート: [vuex-module-decorators](https://qiita.com/tsrnk/items/fd95c3d8013d0795a260) vuex 4.0 フル Typescirpt の実装は自分でいちいち定義しないといけないため、このライブリーを使うと無敵になる。
- 通信: [axios](https://github.com/axios/axios)

# Directory
```bash
├── dist                        # ビルドしたもの 
├── public                      # 静的リソース置く場所、webpackベースのプロジェクトと違ってindex.htmlここにない
└── src                         # ソースルート 
    ├── assets                  # 画像、音声、フォントなど、ただし、多量の場合ビルドしたBundleサイズが膨大になるため、Clouldに置くのはおすすめ
    ├── components              # 全プロジェクトコンポーネントはここに置く、
    ├── layout                  # UI全体のLayoutテンプレートはここに置く、基本認証不要の画面用のレイアウトと認証必須の画面用のレイアウト
    ├── models                  # データやり取り用のモデルはここに置く
    ├── router                  # ルーティング設定はここに
    ├── services                # 各種サービスクラスはここに置く
    │   └── api                 # API通信用クラス
    ├── stores                  # Vuexの状態管理クラスはmodulesの下に置く
    │   └── modules
    ├── utils                   # ツールクラス例：文字列処理(string.util.ts)、UI処理(ui.util.ts)
    └── views                   # 画面のコンポーネントはこの下に置く
```

# Rules
- 型安全のため、極力typescriptを使用
- 単一原則でUI層は基本UIことのみやる、API通信や業務ロジックは基本 Storeで処理する。  UI <=> Store <=> Service
- 親子関係のコンポーネントはPropertyでデータのやり取りはOKだが、それ以上の階層は基本 Store経由でやる
- Store層は基本一つの画面で一つのStore、Globalで使用する状態はroot storeに入れる。マスターなど汎用のデータは 単独のstoreに入れて基本読み込み専用
- API呼び出しはServiceに入れ、SingletonかつStateless (状態の保持は不可)。
- Browserの機能使う層は直接API呼び出しではない、Wrapを定義して使う。例：localStoreageService、sessionStorageService、cookieService
- マジックナンバーを避けましょう。constやenumを積極的に使用する
-　あちこちImportのパスを避けるため、 各フォルダの下にindex.tsを作成し、そこからexportする。それを使用する