// src/index.js

//import { greet } from './greeting'; // 引入 greeting.js 中的 greet 函式
//const axios = require('axios');// 引入 axios 庫
import './styles.scss'; // 引入 SCSS 樣式文件


import { createApp } from 'vue';// 引入 Vue 的 createApp 函式
import AppMess from './app_mess.vue';// 引入 AppMess 元件

// 建立 Vue 應用程式
const app = createApp({});
app.component('app-mess', AppMess);// 在 Vue 應用程式中註冊名為 'app-mess' 的元件
app.mount('#app_mess');// 將 Vue 應用程式掛載到 id 為 'app_mess' 的 HTML 元素上

/* 
document.getElementById('showText').addEventListener('click', () => {
  sendData();
});

function sendData() {
  const userInput = document.getElementById('userInput').value; // 獲取使用者輸入的文字
  const message = greet(userInput); // 使用 greet 函式並傳入使用者輸入的文字

  // 使用 Axios 發送 POST 請求到後端
  axios.post('/api/data', { text: message })
    .then(response => {
      const appDiv = document.getElementById('app');
      appDiv.innerHTML = `<p>${response.data.text}</p>`; // 在網頁上顯示使用者輸入的文字
    })
    .catch(error => {
      console.error('錯誤：', error);
    });
}

*/