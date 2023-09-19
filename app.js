const express = require('express');
const app = express();
const port = 3000;

// Cài đặt template engine EJS
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // Middleware để xử lý dữ liệu gửi lên từ biểu mẫu

// Sử dụng controller
const mainController = require('./controllers/mainController');
app.use('/', mainController);

app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});
