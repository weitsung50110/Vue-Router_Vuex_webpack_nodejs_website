// src/index.js

//import { greet } from './greeting'; // 引入 greeting.js 中的 greet 函式
//const axios = require('axios');// 引入 axios 庫
import './styles.scss'; // 引入 SCSS 樣式文件


import { createApp } from 'vue';// 引入 Vue 的 createApp 函式
import AppMess from './app_mess.vue';// 引入 AppMess 元件

// 建立 Vue 應用程式
const app = createApp(AppMess); // 使用 createApp 創建 Vue 應用程式並傳入 AppMess 元件
//app.component('app-mess', AppMess);// 在 Vue 應用程式中註冊名為 'app-mess' 的元件
/*如果用component 你需要在.html中 加上<app-mess></app-mess> */

app.mount('#app_mess');// 將 Vue 應用程式掛載到 id 為 'app_mess' 的 HTML 元素上
