// src/index.js

import { greet } from './greeting'; // 從 greeting.js 檔案中引入 greet 函式
import './styles.scss'; // 引入 SCSS 檔案
const axios = require('axios');



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

