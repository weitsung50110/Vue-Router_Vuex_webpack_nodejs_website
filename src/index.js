// src/index.js

import { greet } from './greeting'; // 從 greeting.js 檔案中引入 greet 函式

//greet('Webpack'); // 使用 greet 函式並傳入 'Webpack' 參數

/*
const message = greet('wei');
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<p>${message}</p>`; */

document.getElementById('showText').addEventListener('click', () => {
  const userInput = document.getElementById('userInput').value; // 獲取使用者輸入的文字
  const message = greet(userInput); // 使用 greet 函式並傳入使用者輸入的文字
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `<p>${message}</p>`; // 在網頁上顯示使用者輸入的文字
});