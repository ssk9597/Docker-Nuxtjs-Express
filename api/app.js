const express = require('express');
const app = express();

// routing_file
const indexRouter = require('./routes/index');

// routing
app.use('/', indexRouter);

// サーバーを起動する部分
app.listen(18080, function () {
  console.log('http://localhost:18080');
});
