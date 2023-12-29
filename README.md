
PS D:\webpack> npm list<br/>
webpack@ D:\webpack<br/>
+-- axios@1.6.3<br/>
+-- babel-loader@9.1.3<br/>
+-- css-loader@6.8.1<br/>
+-- express@4.18.2<br/>
+-- html-webpack-plugin@5.6.0<br/>
+-- sass-loader@13.3.3<br/>
+-- sass@1.69.6<br/>
+-- style-loader@3.3.3<br/>
+-- vue-loader@16.8.3<br/>
+-- vue@3.4.0<br/>
+-- webpack-cli@5.1.4<br/>
`-- webpack@5.89.0<br/>

把vue-template-compiler刪掉 速度變快很多。

        npm uninstall vue-template-compiler


Webpack 是一個非常強大且廣泛使用的前端打包工具，具有許多常用的功能。以下是一些 Webpack 常見的功能和用途：

1. 模組打包： Webpack 可以將多個前端資源（如 JavaScript、CSS、圖片等）視為模組，並將其打包成較小、更有效的 bundle 檔案，以加速網站載入速度。

2. 載入器 (Loaders)： 載入器允許 Webpack 處理非 JavaScript 檔案。例如，使用 babel-loader 可以將 ES6/ES7 JavaScript 轉換為瀏覽器支持的 JavaScript，使用 sass-loader 可以將 SCSS/Sass 檔案轉換為 CSS。

3. 插件 (Plugins)： Webpack 的插件系統提供了許多功能強大的插件，如 HtmlWebpackPlugin 可以自動生成 HTML 文件，MiniCssExtractPlugin 可以將 CSS 提取成單獨的文件，CleanWebpackPlugin 可以在每次建構前清理輸出目錄等。

4. 熱模組替換 (Hot Module Replacement, HMR)： 在開發模式下，Webpack 提供 HMR 功能，可以實現在應用程式運行時，無需刷新整個頁面，即時更新修改過的模組，加快開發速度。

5. 代碼分割 (Code Splitting)： Webpack 可以將程式碼分割成更小的塊，使得網站在運行時只載入必要的部分，減少初始加載時間。

6. 靜態資源管理： Webpack 可以處理靜態資源，如圖片、字型等，並將它們優化、壓縮，或將小圖片轉換為 Data URLs。

7. 多環境配置： 可以根據不同環境（開發、生產等）提供不同的設定，如使用不同的插件、載入器、變數替換等。

8. 代碼壓縮和優化： 在生產模式下，Webpack 可以壓縮 JavaScript、CSS 和其他資源，並且可以進行樹搬移動、死代碼消除等優化操作。

9. 擴展性和自定義性： Webpack 可以通過配置文件進行高度定制，以滿足各種特定的項目需求，並支持許多自定義插件和載入器。


這個選項告訴 Webpack 以開發模式進行打包，生成的 bundle 將保留原始的程式碼結構、不進行壓縮和優化等操作，方便開發者進行調試和開發。

    npx webpack --mode development

這個選項告訴 Webpack 以生產模式進行打包，生成的 bundle 將進行壓縮、優化等操作，以減少檔案大小並提升效能。

    npx webpack --mode production
