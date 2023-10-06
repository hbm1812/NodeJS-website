const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Cài đặt template engine EJS
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // Middleware để xử lý dữ liệu gửi lên từ biểu mẫu
app.use(express.static(path.join(__dirname,'views')));


// Sử dụng controller
const mainController = require('./controllers/mainController');
app.use('/', mainController);

app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});

