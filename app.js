const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const session = require('express-session');
const ejs = require("ejs");

// Cài đặt template engine EJS
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // Middleware để xử lý dữ liệu gửi lên từ biểu mẫu
app.use(express.static(path.join(__dirname,'views')));


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
const router = express.Router();


// Sử dụng controller
const mainController = require('./controllers/mainController');
app.use('/', mainController);

app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});



