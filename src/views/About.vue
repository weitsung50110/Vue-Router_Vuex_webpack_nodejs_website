<!-- views/About.vue -->
<template>
  <!-- Vue 模板部分 -->
  <!-- 使用栅格系统的 row 和 col-md-6 类创建居中的列 -->
  <div class="col">
    <!-- 创建一个信息提示框样式的元素，用于显示 message 变量的内容 -->
    <div class="alert alert-info mt-3">{{ message }}</div>
    
    <!-- 创建一个输入框，使用 form-control 类进行样式设置 -->
    <input type="text" id="userInput" placeholder="請輸入文字" class="form-control my-3">
    <button id="showText" v-on:click="sendData()" class="btn btn-primary">showText</button>
    <button id="showText" v-on:click="intro_go()" class="btn btn-primary">Introduction</button>
    
    <!-- 用于显示 txt 变量的内容，添加了一些上边距 -->
    <div class="mt-3" id="txt">{{ txt }}</div>
  </div>
</template>

<script>
import { greet_about, intro_about } from '../composables/greeting'; // 引入 greeting.js 中的 greet 函式
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
    },
    intro_go(){
      this.message = intro_about();
    }
  }
};
</script>

<style scoped>
/* 可以放置您的樣式 */
</style>
