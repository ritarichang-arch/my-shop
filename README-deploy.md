# 拾衣選物上線方式

這是一個靜態網站，直接部署整個資料夾即可。

## 最快分享方式：Netlify Drop

1. 到 https://app.netlify.com/drop
2. 登入或註冊 Netlify
3. 把這個專案資料夾拖進頁面
4. 等待部署完成
5. Netlify 會給你一個公開網址，可以直接分享給朋友或上游

## 要上傳的檔案

- index.html
- styles.css
- app.js
- netlify.toml

## 注意

商品資料會在網站打開時從 Pabili 上游網站同步。若上游網站允許跨站讀取，商品會自動更新；若暫時讀不到，頁面會使用內建商品資料。
