const express = require('express');
const router = express.Router();
const dataModel = require('../models/dataModel');

// Route để hiển thị dữ liệu
router.get('/', async (req, res) => {
  try {
    const data = await dataModel.getData(); // Gọi phương thức từ Model
    res.render('trang-chu', { data }); // Hiển thị dữ liệu bằng template engine EJS
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình lấy dữ liệu');
  }
});
// Route để hiển thị trang chủ
router.get('/trang-chu', (req, res) => {
  res.render('trang-chu'); // Hiển thị trang thêm dữ liệu
});

// Route để hiển thị trang đăng nhập
router.get('/dang-nhap', (req, res) => {
  res.render('dang-nhap'); // Hiển thị trang thêm dữ liệu
});
// Route để hiển thị trang đăng ký
router.get('/dang-ky', (req, res) => {
  res.render('dang-ky'); // Hiển thị trang thêm dữ liệu
});




// Route để hiển thị trang thêm dữ liệu
router.get('/add', (req, res) => {
  res.render('add'); // Hiển thị trang thêm dữ liệu
});
// Route để xử lý yêu cầu thêm dữ liệu
router.post('/add', async (req, res) => {
  try {
    const { column1Value, column2Value, column3Value } = req.body; // Lấy dữ liệu từ biểu mẫu gửi lên
    const data = { column1Value, column2Value, column3Value };
    await dataModel.addData(data); // Gọi phương thức từ Model để thêm dữ liệu
    res.redirect('/'); // Chuyển hướng về trang chính sau khi thêm dữ liệu
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình thêm dữ liệu');
  }
});



// Xử lý yêu cầu GET tại /route
router.get('/edit/:id', async (req, res) => {
  try {
    const id = await req.params.data; // Lấy dữ liệu từ query parameter 'data'
    // res.send({result: req.params});
    res.render('edit', { id });
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình lấy dữ liệu');
  }
});



module.exports = router;
