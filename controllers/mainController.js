const express = require('express');
const mysql = require('mysql2');
const router = express.Router();
const dataModel = require('../models/dataModel');


const session = require('express-session');
const path = require('path');


const { body, validationResult } = require('express-validator');


const validationRules_users = [
  body('username').isLength({ min: 5 }).withMessage('Tên ít nhất 5 ký tự'),
  body('email').isEmail().withMessage('Email không hợp lệ'),
  body('password').isLength({ min: 5 }).withMessage('Mật khẩu ít nhất có 5 ký tự'),
];



// Route để hiển thị dữ liệu
router.get('/', async (req, res) => {
  try {
    const data = await dataModel.getData(); // Gọi phương thức từ Model
    res.render('trang-chu'); // Hiển thị dữ liệu bằng template engine EJS
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình lấy dữ liệu');
  }
});

// Route để hiển thị trang đăng nhập
router.get('/dang-nhap', (req, res) => {
  var message = req.session.message;
  delete req.session.message;
  res.render('dang-nhap', { message }); // Truyền thông báo từ session

  // res.render('dang-nhap');

});
// Route để hiển thị trang đăng ký
router.get('/dang-ky', (req, res) => {
  res.render('dang-ky');
});

//login
router.post('/dang-nhap', (req, res) => {

  // Capture the input fields
  let email = req.body.email;
  let password = req.body.password;

  // kiểm tra email và password không được bỏ trống
  if (email && password) {
    // Execute SQL query that'll select the account from the database based on the specified username and password
    dataModel.connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function (error, results, fields) {
      // If there is an issue with the query, output the error
      if (error) throw error;

      // nếu tài khoản tồn tại
      if (results.length > 0) {

        req.session.loggedin = true;
        req.session.email = email;
        req.session.password = password;

        if (results[0].authority_id == 2) {
          // Redirect to home page
          res.redirect('/trang-chu');
        }
        if (results[0].authority_id == 1) {
          res.redirect('/quan-ly');
        }

      } else {
        req.session.message = 'Email hoặc mật khẩu không đúng.';
        res.redirect('/dang-nhap');
        // res.status(403).send({
        //   message: "Tài khoản hoặc mật khẩu không đúng."
        // });
        // res.end();
      }
      res.end();
    });
  } else {
    req.session.message = 'Hãy điền đầy đủ thông tin.';
    res.redirect('/dang-nhap');

  }
});

// Route để hiển thị trang chủ
router.get('/trang-chu', async (req, res) => {

  if (req.session.loggedin) {

    const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    // console.log({data_user});
    res.render('trang-chu', { data_user });


  } else {
    // Not logged in
    // response.send('Please login to view this page!');
    res.render('trang-chu');
  }
  res.end();
});

//logout
router.get('/dang-xuat', (req, res) => {
  if (req.session.loggedin) {
    // console.log({data_user});
    req.session.loggedin = false;
    res.redirect('/trang-chu');


  } else {
    res.render('trang-chu');
  }
  res.end();
});



// Route để hiển thị trang tài khoản
router.get('/tai-khoan', async (req, res) => {
  if (req.session.loggedin) {
    const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    let data_information = await dataModel.getInformation(req.session.email);
    // console.log({data_user, data_information});
    res.render('tai-khoan', { data_user, data_information });


  } else {
    // Not logged in
    // response.send('Please login to view this page!');
    res.render('trang-chu');
  }
  res.end();
});

// Route register
router.post('/dang-ky', validationRules_users, async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // return res.status(withMessage).json({ errors: errors.array() });
      return res.send(errors);
    }
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let authority_id = 2;
    // const { username, email, password } = req.body; // Lấy dữ liệu từ biểu mẫu gửi lên
    let data = { username, email, password, authority_id };
    await dataModel.createAccount(data); // Gọi phương thức từ Model để thêm dữ liệu
    await dataModel.createEmailInformation(data);
    res.redirect('/dang-nhap'); // Chuyển hướng về trang chính sau khi thêm dữ liệu
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình thêm dữ liệu');
  }
});


//cập nhật thông tin
router.post('/cap-nhat-thong-tin', async (req, res) => {
  try {
    let username = req.body.username;
    let email = req.session.email;
    let address = req.body.address;
    let province = req.body.province;
    let phone = req.body.phone;
    // const { username, email, password } = req.body; // Lấy dữ liệu từ biểu mẫu gửi lên
    let data = { username, email, address, province, phone };
    await dataModel.updateInformation(data);
    await dataModel.updateUsernameUsers(data);

    res.redirect('/tai-khoan');
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình thêm dữ liệu');
  }
});

//đổi mật khẩu
router.post('/doi-mat-khau', async (req, res) => {
  try {
    let currentpassword = req.body.currentpassword;
    let newpassword = req.body.newpassword;
    let renewpassword = req.body.renewpassword;
    let email = req.session.email;

    let data = { newpassword, email };
    await dataModel.changePassword(data);
    req.session.password = newpassword;
    res.redirect('/tai-khoan');


  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình thêm dữ liệu');
  }
});

// Route để hiển thị trang quản lý trang chủ
router.get('/quan-ly', async (req, res) => {

  if (req.session.loggedin) {
    const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    // console.log({data_user});
    res.render('quan-ly', { data_user });


  } else {
    // Not logged in
    // response.send('Please login to view this page!');
    res.render('trang-chu');
  }
  res.end();
});

// Route để hiển thị trang quản lý tài khoản
router.get('/quan-ly-tai-khoan', async (req, res) => {

  if (req.session.loggedin) {
    const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    // console.log({data_user});
    let data_account = await dataModel.getData();
    res.render('quan-ly-tai-khoan', { data_user, data_account });


  } else {
    // Not logged in
    // response.send('Please login to view this page!');
    res.render('trang-chu');
  }
  res.end();
});

// Route để hiển thị trang thêm tài khoản
router.get('/them-tai-khoan', async (req, res) => {
  if (req.session.loggedin) {
    const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    // console.log({data_user});
    let data_account = await dataModel.getData();
    res.render('them-tai-khoan', { data_user });
  } else {
    // Not logged in
    // response.send('Please login to view this page!');
    res.render('trang-chu');
  }
  res.end();
});



// them tai khoan
router.post('/them-tai-khoan', async (req, res) => {
  try {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let repassword = req.body.repassword;
    let authority_id = req.body.authority_id;
    if (password == repassword) {
      // const { username, email, password } = req.body; // Lấy dữ liệu từ biểu mẫu gửi lên
      let data = { username, email, password, authority_id };
      await dataModel.createNewAccount(data);
      await dataModel.createEmailInformation(data);
      res.redirect('/them-tai-khoan'); // Chuyển hướng về trang chính sau khi thêm dữ liệu
    }
    else{
      res.redirect('/them-tai-khoan'); 
    }

  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình thêm dữ liệu');
  }
});

// Route để hiển thị trang sửa tài khoản
router.get('/sua-tai-khoan', async (req, res) => {
  if (req.session.loggedin) {
    const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    // console.log({data_user});
    var id = req.query.id;
    req.session.id = id;
    let data_account_fix = await dataModel.selectOneAccountById(id);
    let email = data_account_fix[0].email;
    req.session.users_email = data_account_fix[0].email;
    let data_information = await dataModel.getInformation(email);
    req.session.information_id = data_information[0].id;
    res.render('sua-tai-khoan', { data_user, data_account_fix, data_information });
  } else {
    // Not logged in
    // response.send('Please login to view this page!');
    res.render('trang-chu');
  }
  res.end();
});


// them tai khoan
router.post('/sua-tai-khoan', async (req, res) => {
  try {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let authority_id = req.body.authority_id;
    let id = req.body.id;
    let information_id = req.session.information_id;
    let address = req.body.address;
    let province = req.body.province;
    let phone = req.body.phone;
    // const { username, email, password } = req.body; // Lấy dữ liệu từ biểu mẫu gửi lên
    let data = { username, email, password, authority_id, id };
    let data_update_infor = { email, address, province, phone }
    await dataModel.updateUsers(data);
    await dataModel.updateInformation(data_update_infor);

    // let users_id = await dataModel.getIdUsersByEmail(email);
    res.redirect('/sua-tai-khoan?id=' + req.body.id); // Chuyển hướng về trang chính sau khi thêm dữ liệu
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình thêm dữ liệu');
  }
});




router.get('/xoa-tai-khoan', async (req, res) => {
  try {
    let email = req.query.email;
    await dataModel.deleteUsers(email);
    await dataModel.deleteInformation(email);
    res.redirect('/quan-ly-tai-khoan');
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình lấy dữ liệu');
  }
});


// Route để hiển thị trang chủ
router.get('/lot-chuot', async (req, res) => {

  if (req.session.loggedin) {

    const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    // console.log({data_user});
    res.render('lot-chuot', { data_user });


  } else {
    // Not logged in
    // response.send('Please login to view this page!');
    res.render('lot-chuot');
  }
  res.end();
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






module.exports = router;
