## 目錄Table of Contents
- [Vue-Router](#Vue-Router)
- [components 父組件和子組件](#components-父組件和子組件)
- [composables-組合式函數](#composables-組合式函數)
- [webpack](#webpack)
- [SCSS/SASS](#SCSS/SASS)

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
+-- vue-router@4.2.5<br/>
+-- vue@3.4.0<br/>
+-- webpack-cli@5.1.4<br/>
`-- webpack@5.89.0<br/>

把vue-template-compiler刪掉 速度變快很多。

        npm uninstall vue-template-compiler

## Vue-Router

1.  確保您已經安裝 Vue Router
2.  創建一個路由器（router）實例，並在 Vue 3 專案中使用它。在您的專案中，可以建立一個 `router.js` 或 `router/index.js`
3.  在 Vue 3 專案的入口檔案（通常是 `main.js`）中，將路由器引入並將其連接到 Vue 實例：
4.  在您的 Vue 組件中，您可以使用路由器（router）來連結不同的路由。例如，使用 `<router-link>` 來創建鏈接到不同路由

####  router-view 是用來顯示匹配到的路由組件內容的地方。當使用 router-link 點擊路由時，匹配到的組件會在這裡被渲染顯示。
        <template>
            <!-- Vue 模板部分 -->
            <h1>Vue yoyoyo</h1>
            <NavigationLinks /> <!-- 引入導航列組件 -->
            
            <div>
              <router-view></router-view> <!--提供了一個動態的容器，根據路由的變化，動態地呈現不同的內容。-->
            </div>
        </template>

## components 父組件和子組件
在 Vue3 中，要在父組件中使用子組件 `<NavigationLinks />`，需要確保以下幾點：

1.  **子組件檔案位置正確**：首先，確保 `NavigationLinks.vue` 檔案位於您指定的路徑中，通常是在 `components` 資料夾內。
    
2.  **導入並註冊子組件**：在父組件中，您需要使用 `import` 將子組件導入，並在父組件的 `components` 選項中註冊該子組件。
    
3.  **在模板中使用子組件**：將子組件的名稱作為標籤在父組件的模板中使用，例如 `<NavigationLinks />`。

## composables-組合式函數
### setup()
setup() 函數是一個特殊的鉤子，它替代了 Vue 2 中的 data、computed、methods 等選項。在 setup() 中，您可以進行以下操作：

定義和訪問響應式數據：使用 ref、reactive 等方法定義響應式數據。例如，您使用 useCounter Composable 創建了 counter 變數，該變數中包含了 count 屬性和 increment、decrement 方法。

返回數據：將您想要在模板中使用的數據和方法作為對象返回。在您的示例中，counter 對象被返回，使您可以在模板中使用 counter.count、counter.increment 和 counter.decrement。

訪問外部變量或屬性：setup 函數內部可以訪問外部作用域中的變量和屬性，並且可以在組件中使用這些值。

監聽生命周期鉤子和事件：在 setup 中也可以使用 onMounted、onUpdated、onUnmounted 等生命周期鉤子，以及註冊事件監聽器等功能。

### ref
ref 是 Composition API 提供的一個函式，用於創建一個響應式的變數。響應式變數是一種特殊類型的變數，在其值發生變化時，會自動通知使用到它的相關部分進行重新渲染。

使用 ref 函式可以將普通的 JavaScript 變數轉換為響應式變數。當您將變數傳遞給 ref 函式時，它會返回一個包裝後的對象，該對象包含一個名為 value 的屬性。您可以透過 value 屬性來訪問和修改這個響應式變數的值。

## webpack

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
