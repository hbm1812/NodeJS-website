const express = require('express');
const mysql = require('mysql2');
const router = express.Router();
const dataModel = require('../models/dataModel');


const session = require('express-session');
const path = require('path');

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
  res.render('dang-nhap'); // Hiển thị trang thêm dữ liệu
});
// Route để hiển thị trang đăng ký
router.get('/dang-ky', (req, res) => {
  res.render('dang-ky'); // Hiển thị trang thêm dữ liệu
});

//login
router.post('/dang-nhap', function(req, res) {
  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'lacdaustore'
  });
	// Capture the input fields
	let email = req.body.email;
	let password = req.body.password;
	// Ensure the input fields exists and are not empty
	if (email && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.email = email;
        req.session.password=password;
				// Redirect to home page
        res.redirect('/trang-chu');
			} else {
				res.send('Incorrect email and/or Password!');
			}			
			res.end();
		});
	} else {
		res.send('Please enter email and Password!');
		res.end();
	}
});

// Route để hiển thị trang chủ
router.get('/trang-chu',async (req, res) => {
  
  if (req.session.loggedin) {
		// Output username
		// response.send('Welcome back, ' + request.session.email + '!');
        // connection.query('SELECT * FROM users WHERE email = ? ', [request.session.email], function(error, results, fields) {
            
        //     response.render('trang-chu',results);
        // })
        const data_user = await dataModel.getDataUsers(req.session.email,req.session.password);
        // console.log({data_user});
        res.render('trang-chu',{data_user});

        
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
router.get('/tai-khoan',async  (req, res) => {
  if (req.session.loggedin) {
        const data_user = await dataModel.getDataUsers(req.session.email,req.session.password);
        let data_information = await dataModel.getInformation(req.session.email);
        // console.log({data_user, data_information});
        res.render('tai-khoan',{data_user, data_information});

        
	} else {
		// Not logged in
		// response.send('Please login to view this page!');
        res.render('trang-chu');
	}
	res.end();
});

// Route register
router.post('/dang-ky', async (req, res) => {
  try {
    let username = req.body.username;
    let email = req.body.email;
	  let password = req.body.password;
    let authority_id =2;
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
    req.session.password=newpassword;
    res.redirect('/tai-khoan');

    
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình thêm dữ liệu');
  }
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
