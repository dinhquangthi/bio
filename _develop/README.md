# Template

## Introduction

### 環境

- npm
- ^node 14.15.0 (LTS)

### HTML 制作

- pug  
  https://pugjs.org/api/getting-started.html

### CSS

- PostCSS

### Javascript

- es2016 / React

---

## 使い方

### インストール

```
npm install
```

### ウォッチ開始

```
npm start
```

### 簡易ビルド

```
npm run build
```

速度を確保するためフルビルドとは分けています。  
基本 watch で確認後に build で納品用が出来ます。

### フルビルド

```
npm run build:all
```

watch を経由せず完全な納品用ファイルをいきなり作る場合はこちら

### 固有パッケージの導入には --save-dev を付けて下さい。

```
npm install *** --save-dev
```

---

## config

- 書き出し先のパスを設定します。  
  場所は、package.json -> config  
  基本的に変更の必要は無いですが、public_html を htdocs にしたり、assets を common にしたりは  
  臨機応変に。  
  サブディレクトリがある場合 `例）***.com/directory/` も同場所で。

- postCSS の vw や rem 等の基準になる値を、`postcss.config`で調整

- あとは
  `npm install` -> `npm start` で watch。  
  十分になったら、  
  `npm run build`  
  アップロード前には必ず build してください。

- icon-font `_develop/src/css/_config/_fonts.css` は、  
  `src/assets/fonts/`に svg を保存し、  
  `npm run build:icon`を手動実行してください。  
  (watch すると毎回 hash が変わってしまうため、マニュアル制御にしました。)

- 画像は
  `src/images/` 内へ。  
  その内部はそのまま public_html/assets/images 内にコピーされます。

- 静的ファイル（JSON、ico 等）は全て、  
  `src/static_files/` 内へ。  
  その内部はそのまま public_html/assets/内にコピーされます。  
  特例でルートに置きたい場合のみ(favicon.ico など)　直接 `public_html` において下さい。
