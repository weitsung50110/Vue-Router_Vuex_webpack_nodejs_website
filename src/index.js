// src/index.js

import { greet } from './greeting'; // 從 greeting.js 檔案中引入 greet 函式
import './styles.scss'; // 引入 SCSS 檔案
import './vue.js'; // 引入 SCSS 檔案

document.getElementById('showText').addEventListener('click', () => {
  const userInput = document.getElementById('userInput').value; // 獲取使用者輸入的文字
  const message = greet(userInput); // 使用 greet 函式並傳入使用者輸入的文字
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `<p>${message}</p>`; // 在網頁上顯示使用者輸入的文字

});
