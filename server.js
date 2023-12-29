const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

// 設定解析 POST 請求的 bodyParser 中間件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 設置靜態資源目錄為/dist
app.use(express.static(path.join(__dirname, 'dist')));

// POST 請求的路由，用於處理來自前端的資料
app.post('/api/data', (req, res) => {
    const text = req.body.text; // 從前端取得傳送的文字
  
    // 在後端顯示該文字，並回傳給前端
    console.log('您傳送的文字是：', text);
    res.json({ text });
  });

// 設置主路由，返回打包後的HTML檔案
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 啟動Express伺服器
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
