
<template>
  <div class="col">
    <div class="alert alert-info mt-3">{{ message }}</div><!-- 顯示 message 變數的內容 -->
    <input type="text" id="userInput" placeholder="請輸入文字" class="form-control my-3"><!-- 文字輸入框 -->
    <button id="showText" v-on:click="sendData()" class="btn btn-primary">showText</button><!-- 按鈕用於顯示文字 -->
    <div class="mt-3" id="txt">{{ txt }}</div><!-- 顯示 txt 變數的內容 -->
  </div>
</template>

<script>
import { greet_home } from '../composables/greeting'; // 引入 greeting.js 中的 greet 函式
const axios = require('axios'); // 引入 axios 庫

export default {
  data() {
    return {
      message: 'Hello from Home!', // message 變數的初始值
      txt: 'Home' // txt 變數的初始值
    };
  },
  methods: {
    sendData() {
      // 獲取使用者輸入的文字
      const userInput = document.getElementById('userInput').value;

      // 使用 greet 函式並傳入使用者輸入的文字
      const message = greet_home(userInput);

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
