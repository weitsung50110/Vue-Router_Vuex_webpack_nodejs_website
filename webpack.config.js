// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader'); // 引入 VueLoaderPlugin
const webpack = require('webpack');

module.exports = {
  // 入口檔案，這裡是您的應用程式入口點
  entry: './src/index.js',

  // 輸出的 bundle 檔案設定
  output: {
    filename: 'bundle.js', // 打包後的檔名
    path: path.resolve(__dirname, 'dist'), // 打包後的路徑，此處設定為 dist 目錄
  },

  // 設定處理各種不同檔案的規則
  module: {
    rules: [
      {
        test: /\.vue$/, // 匹配 .vue 檔案
        loader: 'vue-loader' // 使用 vue-loader 處理 Vue 單文件元件
      },
      {
        test: /\.scss$/, // 匹配 .scss 檔案
        use: [
          'style-loader', // 將編譯後的 CSS 以 <style> 插入到 HTML 文件中
          'css-loader', // 解析 CSS 檔案後，將其轉換為 CommonJS 模塊
          'sass-loader' // 將 SCSS 轉換為 CSS
        ]
      },
      {
        test: /\.js$/, // 匹配 .js 檔案
        exclude: /node_modules/, // 排除 node_modules 目錄下的檔案
        use: {
          loader: 'babel-loader', // 使用 babel-loader 處理 JavaScript 檔案
        },
      },
    ]
  },

  // 插件配置，用於執行各種額外任務，比如生成 HTML 文件和處理 Vue 檔案
  plugins: [
    // 生成 HTML 文件
    new HtmlWebpackPlugin({
      template: './src/index.html', // 使用 HtmlWebpackPlugin 生成 HTML 檔案
    }),

    // 添加 VueLoaderPlugin，用於處理 .vue 檔案
    new VueLoaderPlugin(),

    // 定義全域變數，這裡定義了兩個 Vue 的全域變數
    new webpack.DefinePlugin({
      '__VUE_OPTIONS_API__': true,
      '__VUE_PROD_DEVTOOLS__': false,
    }),
  ],

  // 解析模組時應該尋找的擴展名和模組別名配置
  resolve: {
    extensions: ['.js', '.vue'], // 定義可以省略的擴展名
    alias: {
        'vue': 'vue/dist/vue.esm-bundler.js',
    },
  },
};
