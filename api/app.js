const express = require('express');
const app = express();

// HTTPリクエストを受け取る部分
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// サーバーを起動する部分
app.listen(18080, function () {
  console.log('http://localhost:18080');
});
