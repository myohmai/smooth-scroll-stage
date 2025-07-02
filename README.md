# Smooth Scroll Stage (ポートフォリオ作品)

このプロジェクトはGSAPとScrollTriggerを使用して実装したスクロールアニメーションのデモです。
ポートフォリオのスキルの紹介欄として作成しました。スクロールすることでアイコン、タイトル、説明、SVGアニメーションが変化します。

## 使用技術

- HTML / SCSS (Sass)
- JavaScript (ES Modules)
- GSAP (ScrollTrigger, ScrollToPlugin, registerEffect)
- Vite（ビルド＆開発用）

## 構成ポイント

- ScrollTriggerのトリガーの位置を動的に取得。
- 文章の長さや画面の大きさに応じて動的にスクロール量が変化。
- 画面のどの位置をスクロールしても文章がスクロールされる擬似スクロールの実装
- セクションごとのリンク、アイコン、タイトルの表示切り替えの制御
- セクションごとに背景のグラデーションとSVGアニメーションの切り替え
- レスポンシブ対応(portraitとlandscapeでの切り替え)＆アクセシビリティ考慮(aria-labelなど)

## 開発環境での動作方法

```bash
npm install
npm run dev