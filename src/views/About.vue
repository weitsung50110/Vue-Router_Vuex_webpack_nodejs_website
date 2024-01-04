<!-- views/About.vue -->
<template>
    <!-- Vue 模板部分 -->
    <div>{{ message }}</div> <!-- 顯示 message 變數的內容 -->
    <input type="text" id="userInput" placeholder="請輸入文字" class="form-control"> <!-- 文字輸入框 -->
    <button id="showText" v-on:click="sendData()" class="btn btn-primary">顯示文字</button> <!-- 按鈕用於顯示文字 -->
    <div id="txt">{{ txt }}</div> <!-- 顯示 txt 變數的內容 -->

    
</template>

<script>
import { greet_about } from '../composables/greeting'; // 引入 greeting.js 中的 greet 函式
const axios = require('axios'); // 引入 axios 庫

export default {
  data() {
    return {
      message: 'Hello from about!', // message 變數的初始值
      txt: 'about' // txt 變數的初始值
    };
  },
  methods: {
    sendData() {
      // 獲取使用者輸入的文字
      const userInput = document.getElementById('userInput').value;

      // 使用 greet 函式並傳入使用者輸入的文字
      const message = greet_about(userInput);

      // 使用 Axios 發送 POST 請求到後端
      axios.post('/api/data', { text: message })
        .then(response => {
          this.txt = response.data.text; // 更新 txt 為後端返回的文字
        })
        .catch(error => {
          console.error('錯誤：', error); // 處理錯誤情況
        });
    }
  }
};
</script>

<style scoped>
/* 可以放置您的樣式 */
</style>
