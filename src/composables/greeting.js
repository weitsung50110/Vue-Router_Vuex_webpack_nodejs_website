// src/greeting.js

export const greet_about = (name) => { // 定義一個名為 greet 的函式，接收一個名稱參數
    console.log(`About Hello, ${name}!`); // 在控制台輸出問候語
    return `About Hello, ${name}!`;
};

export const greet_home = (name) => { // 定義一個名為 greet 的函式，接收一個名稱參數
    console.log(`Home Hello, ${name}!`); // 在控制台輸出問候語
    return `Home Hello, ${name}!`;
};

export const intro_about = () => { 
    console.log(`intro_about click!`); // 在控制台輸出問候語
    return `崴崴的Vue3數學網站是一個以Vue.js 3為基礎建立的數學相關網站，
    旨在提供使用者一個互動式且豐富的數學學習平台。該網站結合了Vue.js 3框架的特色，
    使得使用者可以輕鬆地瀏覽各種數學相關內容並進行互動學習。`;
};
