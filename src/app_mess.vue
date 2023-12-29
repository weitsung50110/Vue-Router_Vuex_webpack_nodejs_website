<template>
    <div>{{ message }}</div>
    <input type="text" id="userInput" placeholder="請輸入文字">
    <button id="showText" v-on:click="sendData()">顯示文字</button>
    <div id="app">{{txt}}</div> 
</template>

<script>
import { greet } from './greeting'; // 引入 greeting.js 中的 greet 函式
const axios = require('axios');// 引入 axios 庫

export default {
  data() {
    return {
      message: 'Hello from Vue!', // 將 message 設置為您希望顯示的文字
      txt:'6626'
    };
  },
  methods: {
    sendData() {
      const userInput = document.getElementById('userInput').value; // 獲取使用者輸入的文字
      const message = greet(userInput); // 使用 greet 函式並傳入使用者輸入的文字

      // 使用 Axios 發送 POST 請求到後端
      axios.post('/api/data', { text: message })
        .then(response => {
          this.txt = response.data.text; // 更新 message 為後端返回的文字
        })
        .catch(error => {
          console.error('錯誤：', error);
        });
    }
  }
};
</script>

<style scoped>
/* 可以放置您的樣式 */
</style>
