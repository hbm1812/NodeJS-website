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
    const data_cart = await dataModel.showCart(req.session.email);
    const count_cart = await dataModel.countCart(req.session.email);
    const tong_gia_tien = await dataModel.sumCart(req.session.email);
    // console.log({data_user});
    res.render('trang-chu', { data_user,data_cart,count_cart,tong_gia_tien });


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
    const data_cart = await dataModel.showCart(req.session.email);
    const count_cart = await dataModel.countCart(req.session.email);
    const tong_gia_tien = await dataModel.sumCart(req.session.email);
    // console.log({data_user, data_information});
    res.render('tai-khoan', { data_user, data_information,data_cart,count_cart,tong_gia_tien });


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
    res.redirect('/sua-tai-khoan?id=' + req.body.id); 
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


// Route để hiển thị trang lot chuot
router.get('/lot-chuot', async (req, res) => {
  const data_LotChuot = await dataModel.getDataLotChuot();
  let chu_de_key_current ="none";
  let count_lot_chuot = await dataModel.getCountLotChuot();

  if (req.session.loggedin) {
    const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    const data_cart = await dataModel.showCart(req.session.email);
    const count_cart = await dataModel.countCart(req.session.email);
    const tong_gia_tien = await dataModel.sumCart(req.session.email);
    // console.log({data_LotChuot});
    res.render('lot-chuot', { data_user, data_LotChuot,chu_de_key_current, data_cart, count_cart, tong_gia_tien, count_lot_chuot });


  } else {
    // Not logged in
    // response.send('Please login to view this page!');
    res.render('lot-chuot', {data_LotChuot,chu_de_key_current, count_lot_chuot});
    // console.log({chu_de_key_current});
  }
  res.end();
});


router.get('/lot-chuot-chu-de', async (req, res) => {
  let chu_de_key_current = req.query.chu_de;
  const data_LotChuot = await dataModel.getDataLotChuot_chuDe(chu_de_key_current);
  let count_lot_chuot = await dataModel.getCountLotChuot();
  if (req.session.loggedin) {
    const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    const data_cart = await dataModel.showCart(req.session.email);
    const count_cart = await dataModel.countCart(req.session.email);
    const tong_gia_tien = await dataModel.sumCart(req.session.email);
    
    // console.log({data_LotChuot});
    res.render('lot-chuot', { data_user,chu_de_key_current, data_LotChuot,data_cart, count_cart, tong_gia_tien, count_lot_chuot});


  } else {
    //  console.log({chu_de_key_current});
    res.render('lot-chuot', {data_LotChuot,chu_de_key_current, count_lot_chuot});
  }
  res.end();
});

// hiển thị trang chi tiết lót chuột
router.get('/chi-tiet-lot-chuot', async (req, res) => {
  var id = req.query.id;
  req.session.id = id;
  let data_one_lot_chuot = await dataModel.selectOneLot_chuotById(id);
  if (req.session.loggedin) {
    
    const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    const data_cart = await dataModel.showCart(req.session.email);
    const count_cart = await dataModel.countCart(req.session.email);
    const tong_gia_tien = await dataModel.sumCart(req.session.email);
    // console.log(data_cart);
    // console.log(count_cart);
    // console.log(tong_gia_tien);
    res.render('chi-tiet-lot-chuot', { data_user, data_one_lot_chuot, data_cart, count_cart, tong_gia_tien });


  } else {
    // Not logged in
    // console.log({data_one_lot_chuot});
    res.render('chi-tiet-lot-chuot', { data_one_lot_chuot });
    // response.send('Please login to view this page!');
  }
  res.end();
});




router.get('/cart', async (req, res) => {
  if (req.session.loggedin) {
    const data_cart =await dataModel.showCart(req.session.email);
    const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    // console.log({data_user});
    const count_cart = await dataModel.countCart(req.session.email);
    const tong_gia_tien = await dataModel.sumCart(req.session.email);
    let data_information = await dataModel.getInformation(req.session.email);
    res.render('cart', { data_user,data_cart,count_cart, tong_gia_tien, data_information});


  } else {
    // Not logged in
    
  }
  res.end();
});

router.get('/chi-tiet-lot-chuot-buy-now', async (req, res) => {
  if (req.session.loggedin) {
    var ma_san_pham = req.query.ma_san_pham;
    const data_product = await dataModel.selectOneLot_chuotByMaSanPham(ma_san_pham);
    const data_cart =await dataModel.showCart(req.session.email);
    const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    // console.log({data_user});
    const count_cart = await dataModel.countCart(req.session.email);
    const tong_gia_tien = await dataModel.sumCart(req.session.email);
    let data_information = await dataModel.getInformation(req.session.email);
    res.render('buy-now', { data_user,data_cart,count_cart, tong_gia_tien,data_information,data_product  });


  } else {
    // Not logged in
    var ma_san_pham = req.query.ma_san_pham;
    const data_product = await dataModel.selectOneLot_chuotByMaSanPham(ma_san_pham);
    // response.send('Please login to view this page!');
    res.render('buy-now', {data_product});
  }
  res.end();
});

// thêm vào giỏ hàng ở trang chi tiết lót chuột
router.post('/cart', async (req, res) => {

  try {
    let ma_san_pham= req.query.ma_san_pham;
    let anh = req.query.anh;
    let ten = req.query.ten;
    let gia_tien = req.query.gia_tien;
    
    // const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    // let data_one_lot_chuot = await dataModel.selectOneLot_chuotById(req.query.id);
    const findProductCart = await dataModel.findProductCart(req.session.email,ma_san_pham);
    
    // console.log(findProductCart);
    if (findProductCart[0].number > 0){
      
      // console.log('Có dữ liệu trong truy vấn.');
      // message = "Sản phẩm đã trong giỏ hàng";
    } else{
      // console.log('Không có dữ liệu trong truy vấn.');
      //  message = "Thêm sản phẩm vào giỏ hàng thành công";
      await dataModel.addToCart(ma_san_pham,req.session.email, anh, ten, gia_tien);
      
    }

    // let users_id = await dataModel.getIdUsersByEmail(email);
    res.redirect('/chi-tiet-lot-chuot?id='+req.query.id); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình thêm dữ liệu');
  }
  
});

//thêm vào giỏ hàng từ trang lót chuột
router.post('/cart-2', async (req, res) => {

  try {
    let ma_san_pham= req.query.ma_san_pham;
    let anh = req.query.anh;
    let ten = req.query.ten;
    let gia_tien = req.query.gia_tien;
    
    // const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    // let data_one_lot_chuot = await dataModel.selectOneLot_chuotById(req.query.id);
    const findProductCart = await dataModel.findProductCart(req.session.email,ma_san_pham);
    
    // console.log(findProductCart);
    if (findProductCart[0].number > 0){
      
      // console.log('Có dữ liệu trong truy vấn.');
      // message = "Sản phẩm đã trong giỏ hàng";
    } else{
      // console.log('Không có dữ liệu trong truy vấn.');
      //  message = "Thêm sản phẩm vào giỏ hàng thành công";
      await dataModel.addToCart(ma_san_pham,req.session.email, anh, ten, gia_tien);
      
    }

    // let users_id = await dataModel.getIdUsersByEmail(email);
    res.redirect('/lot-chuot'); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình thêm dữ liệu');
  }
  
});


//cập nhật thông tin
router.post('/dat-hang', async (req, res) => {
  try {
    let email = req.body.email;
    let ho_ten = req.body.ho_ten;
    let phone = req.body.phone;
    let adress = req.body.adress;
    let ma_san_pham = req.body.ma_san_pham;
    let so_luong = req.body.amount;
    let tong_tien = req.body.tong_tien;
    let phuong_thuc_thanh_toan = "Thanh toán khi nhận hàng";
    let trang_thai = "Chờ xác nhận";
    // const { username, email, password } = req.body; // Lấy dữ liệu từ biểu mẫu gửi lên
    let data = { email, ho_ten, phone, adress, ma_san_pham, so_luong, tong_tien, phuong_thuc_thanh_toan, trang_thai };
    console.log(data);
    // await dataModel.updateInformation(data);
    // await dataModel.updateUsernameUsers(data);

    res.redirect('/cart?ma_san_pham='+ma_san_pham);
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình thêm dữ liệu');
  }
});



//quản lý lot chuột
// Route để hiển thị trang quản lý lót chuột
router.get('/quan-ly-lot-chuot', async (req, res) => {

  if (req.session.loggedin) {
    const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    // console.log({data_user});
    let data_lotChuot = await dataModel.getDataLotChuot();
    let count = await dataModel.getCountLotChuot();
    res.render('quan-ly-lot-chuot', { data_user, data_lotChuot, count });
  } else {
    // Not logged in
    // response.send('Please login to view this page!');
    res.render('trang-chu');
  }
  res.end();
});




// Route để hiển thị trang thêm lót chuột
router.get('/them-lot-chuot', async (req, res) => {
  if (req.session.loggedin) {
    const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    // console.log({data_user});
    let data_account = await dataModel.getData();
    res.render('them-lot-chuot', { data_user });
  } else {
    // Not logged in
    // response.send('Please login to view this page!');
    res.render('trang-chu');
  }
  res.end();
});

//Route thêm lót chuột
router.post('/them-lot-chuot', async (req, res) => {
  try {
    let tu_khoa = req.body.tu_khoa;
    let do_day = req.body.do_day;
    let chu_de_key = req.body.chu_de_key;
    let kich_thuoc = req.body.kich_thuoc;
    let ten= req.body.ten;
    let ma_san_pham = req.body.ma_san_pham;
    let anh = req.body.anh;
    let thong_so = req.body.thong_so;
    let dac_diem = req.body.dac_diem;
    let hang_san_xuat = req.body.hang_san_xuat;
    let gia_tien= req.body.gia_tien;
    let so_luong= req.body.so_luong;

    let data = { tu_khoa, do_day, chu_de_key, kich_thuoc, ten, ma_san_pham, anh, thong_so, dac_diem, hang_san_xuat, gia_tien, so_luong };
    // console.log(data);
    await dataModel.createNewLotChuot(data);

    // let users_id = await dataModel.getIdUsersByEmail(email);
    res.redirect('/them-lot-chuot'); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình thêm dữ liệu');
  }
});

// Route để hiển thị trang sửa lót chuột
router.get('/sua-lot-chuot', async (req, res) => {
  if (req.session.loggedin) {
    const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    // console.log({data_user});
    var id = req.query.id;
    let data_lotChuot = await dataModel.selectOneLot_chuotById(id);
    res.render('sua-lot-chuot', { data_user, data_lotChuot});
  } else {
    // Not logged in
    // response.send('Please login to view this page!');
    res.render('trang-chu');
  }
  res.end();
});


//sửa lót chuột
router.post('/sua-lot-chuot', async (req, res) => {
  try {
    let id = req.body.id;
    let tu_khoa = req.body.tu_khoa;
    let do_day = req.body.do_day;
    let chu_de_key = req.body.chu_de_key;
    let kich_thuoc = req.body.kich_thuoc;
    let ten= req.body.ten;
    let ma_san_pham = req.body.ma_san_pham;
    let anh = req.body.anh;
    let thong_so = req.body.thong_so;
    let dac_diem = req.body.dac_diem;
    let hang_san_xuat = req.body.hang_san_xuat;
    let gia_tien= req.body.gia_tien;
    let so_luong= req.body.so_luong;

    let data = { tu_khoa, do_day, chu_de_key, kich_thuoc, ten, ma_san_pham, anh, thong_so, dac_diem, hang_san_xuat, gia_tien, so_luong,id };
    // console.log(data);
    await dataModel.updateLotChuot(data);

    // let users_id = await dataModel.getIdUsersByEmail(email);
    res.redirect('/sua-lot-chuot?id='+id); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình thêm dữ liệu');
  }
});

//xóa lót chuột
router.get('/xoa-lot-chuot', async (req, res) => {
  try {
    let id = req.query.id;
    await dataModel.deleteLotChuot(id);
    res.redirect('/quan-ly-lot-chuot');
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình lấy dữ liệu');
  }
});


//route hiển thị trang bàn phím cơ
router.get('/ban-phim-co', async (req, res) => {
  let the_loai_current = "ban-phim-co";
  const data_banPhim = await dataModel.getDataBanPhim_theLoai(the_loai_current);
  let count_ban_phim = await dataModel.getCountBanPhim(the_loai_current);
  if (req.session.loggedin) {
    const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    const data_cart = await dataModel.showCart(req.session.email);
    const count_cart = await dataModel.countCart(req.session.email);
    const tong_gia_tien = await dataModel.sumCart(req.session.email);
    
    // console.log({data_LotChuot});
    res.render('ban-phim', { data_user,the_loai_current, data_banPhim,data_cart, count_cart, tong_gia_tien, count_ban_phim});


  } else {
    //  console.log({chu_de_key_current});
    res.render('ban-phim', {data_banPhim,the_loai_current, count_ban_phim});
  }
  res.end();
});

//route hiển thị trang bàn phím giả cơ
router.get('/ban-phim-gia-co', async (req, res) => {
  let the_loai_current = "ban-phim-gia-co";
  let count_ban_phim = await dataModel.getCountBanPhim(the_loai_current);
  const data_banPhim = await dataModel.getDataBanPhim_theLoai(the_loai_current);
  if (req.session.loggedin) {
    const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    const data_cart = await dataModel.showCart(req.session.email);
    const count_cart = await dataModel.countCart(req.session.email);
    const tong_gia_tien = await dataModel.sumCart(req.session.email);
    
    // console.log({data_LotChuot});
    res.render('ban-phim', { data_user,the_loai_current, data_banPhim,data_cart, count_cart, tong_gia_tien, count_ban_phim});


  } else {
    //  console.log({chu_de_key_current});
    res.render('ban-phim', {data_banPhim,the_loai_current, count_ban_phim});
  }
  res.end();
});


// hiển thị trang chi tiết bàn phím
router.get('/chi-tiet-ban-phim', async (req, res) => {
  var id = req.query.id;
  req.session.id = id;
  let data_select_one_ban_phim = await dataModel.selectOneBanPhimById(id);
  if (req.session.loggedin) {
    
    const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    const data_cart = await dataModel.showCart(req.session.email);
    const count_cart = await dataModel.countCart(req.session.email);
    const tong_gia_tien = await dataModel.sumCart(req.session.email);
    // console.log(data_cart);
    // console.log(count_cart);
    // console.log(tong_gia_tien);
    res.render('chi-tiet-ban-phim', { data_user, data_select_one_ban_phim, data_cart, count_cart, tong_gia_tien });


  } else {
    // Not logged in
    // console.log({data_one_lot_chuot});
    res.render('chi-tiet-ban-phim', { data_select_one_ban_phim });
    // response.send('Please login to view this page!');
  }
  res.end();
});


// thêm vào giỏ hàng ở trang chi tiết bàn phím
router.post('/chi-tiet-ban-phim-add-to-cart', async (req, res) => {

  try {
    let ma_san_pham= req.query.ma_san_pham;
    let anh = req.query.anh;
    let ten = req.query.ten;
    let gia_tien = req.query.gia_tien;
    
    // const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    // let data_one_lot_chuot = await dataModel.selectOneLot_chuotById(req.query.id);
    const findProductCart = await dataModel.findProductCart(req.session.email,ma_san_pham);
    
    // console.log(findProductCart);
    if (findProductCart[0].number > 0){
      
      // console.log('Có dữ liệu trong truy vấn.');
      // message = "Sản phẩm đã trong giỏ hàng";
    } else{
      // console.log('Không có dữ liệu trong truy vấn.');
      //  message = "Thêm sản phẩm vào giỏ hàng thành công";
      await dataModel.addToCart(ma_san_pham,req.session.email, anh, ten, gia_tien);
      
    }

    // let users_id = await dataModel.getIdUsersByEmail(email);
    res.redirect('/chi-tiet-ban-phim?id='+req.query.id); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình thêm dữ liệu');
  }
  
});




// thêm vào giỏ hàng ở trang chi tiết bàn phím
router.get('/chi-tiet-ban-phim-buy-now', async (req, res) => {

  if (req.session.loggedin) {
    var ma_san_pham = req.query.ma_san_pham;
    const data_cart =await dataModel.showCart(req.session.email);
    const data_product = await dataModel.selectOneBanPhimByMaSanPham(ma_san_pham);
    const count_cart = await dataModel.countCart(req.session.email);
    const tong_gia_tien = await dataModel.sumCart(req.session.email);
    const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    let data_information = await dataModel.getInformation(req.session.email);
    // response.send('Please login to view this page!');
    res.render('buy-now', { data_user,data_cart,count_cart, tong_gia_tien,data_information,data_product });


  } else {
    // Not logged in
    var ma_san_pham = req.query.ma_san_pham;
    const data_product = await dataModel.selectOneBanPhimByMaSanPham(ma_san_pham);
    // response.send('Please login to view this page!');
    res.render('buy-now', {data_product});
  }
  res.end();
  
});


//thêm vào giỏ hàng từ trang bàn phím
router.post('/ban-phim-co-add-to-cart', async (req, res) => {

  try {
    let ma_san_pham= req.query.ma_san_pham;
    let anh = req.query.anh;
    let ten = req.query.ten;
    let gia_tien = req.query.gia_tien;
    
    // const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    // let data_one_lot_chuot = await dataModel.selectOneLot_chuotById(req.query.id);
    const findProductCart = await dataModel.findProductCart(req.session.email,ma_san_pham);
    
    // console.log(findProductCart);
    if (findProductCart[0].number > 0){
      
      // console.log('Có dữ liệu trong truy vấn.');
      // message = "Sản phẩm đã trong giỏ hàng";
    } else{
      // console.log('Không có dữ liệu trong truy vấn.');
      //  message = "Thêm sản phẩm vào giỏ hàng thành công";
      await dataModel.addToCart(ma_san_pham,req.session.email, anh, ten, gia_tien);
      
    }

    // let users_id = await dataModel.getIdUsersByEmail(email);
    res.redirect('/ban-phim-co'); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình thêm dữ liệu');
  }
  
});



//thêm vào giỏ hàng từ trang bàn phím
router.post('/ban-phim-gia-co-add-to-cart', async (req, res) => {

  try {
    let ma_san_pham= req.query.ma_san_pham;
    let anh = req.query.anh;
    let ten = req.query.ten;
    let gia_tien = req.query.gia_tien;
    
    // const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    // let data_one_lot_chuot = await dataModel.selectOneLot_chuotById(req.query.id);
    const findProductCart = await dataModel.findProductCart(req.session.email,ma_san_pham);
    
    // console.log(findProductCart);
    if (findProductCart[0].number > 0){
      
      // console.log('Có dữ liệu trong truy vấn.');
      // message = "Sản phẩm đã trong giỏ hàng";
    } else{
      // console.log('Không có dữ liệu trong truy vấn.');
      //  message = "Thêm sản phẩm vào giỏ hàng thành công";
      await dataModel.addToCart(ma_san_pham,req.session.email, anh, ten, gia_tien);
      
    }

    // let users_id = await dataModel.getIdUsersByEmail(email);
    res.redirect('/ban-phim-gia-co'); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình thêm dữ liệu');
  }
  
});



//route hiển thị trang chuột cắm dây
router.get('/chuot-cam-day', async (req, res) => {
  let the_loai_current = "chuot-cam-day";
  const data_chuot = await dataModel.getDataChuot_theLoai(the_loai_current);
  let count_chuot= await dataModel.getCountChuot(the_loai_current);
  if (req.session.loggedin) {
    const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    const data_cart = await dataModel.showCart(req.session.email);
    const count_cart = await dataModel.countCart(req.session.email);
    const tong_gia_tien = await dataModel.sumCart(req.session.email);
    
    // console.log({data_LotChuot});
    res.render('chuot', { data_user,the_loai_current, data_chuot,data_cart, count_cart, tong_gia_tien, count_chuot});


  } else {
    //  console.log({chu_de_key_current});
    res.render('chuot', {data_chuot,the_loai_current, count_chuot});
  }
  res.end();
});


// hiển thị trang chi tiết chuột
router.get('/chi-tiet-chuot', async (req, res) => {
  var id = req.query.id;
  req.session.id = id;
  let data_select_one_chuot = await dataModel.selectOneChuotById(id);
  if (req.session.loggedin) {
    
    const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    const data_cart = await dataModel.showCart(req.session.email);
    const count_cart = await dataModel.countCart(req.session.email);
    const tong_gia_tien = await dataModel.sumCart(req.session.email);
   
    res.render('chi-tiet-chuot', { data_user, data_select_one_chuot, data_cart, count_cart, tong_gia_tien });


  } else {
    // Not logged in
    // console.log({data_one_lot_chuot});
    res.render('chi-tiet-chuot', { data_select_one_chuot });
    // response.send('Please login to view this page!');
  }
  res.end();
});

// thêm vào giỏ hàng ở trang chi tiết chuột
router.post('/chi-tiet-chuot-add-to-cart', async (req, res) => {

  try {
    let ma_san_pham= req.query.ma_san_pham;
    let anh = req.query.anh;
    let ten = req.query.ten;
    let gia_tien = req.query.gia_tien;
    
    // const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    // let data_one_lot_chuot = await dataModel.selectOneLot_chuotById(req.query.id);
    const findProductCart = await dataModel.findProductCart(req.session.email,ma_san_pham);
    
    // console.log(findProductCart);
    if (findProductCart[0].number > 0){
      
      // console.log('Có dữ liệu trong truy vấn.');
      // message = "Sản phẩm đã trong giỏ hàng";
    } else{
      // console.log('Không có dữ liệu trong truy vấn.');
      //  message = "Thêm sản phẩm vào giỏ hàng thành công";
      await dataModel.addToCart(ma_san_pham,req.session.email, anh, ten, gia_tien);
      
    }

    // let users_id = await dataModel.getIdUsersByEmail(email);
    res.redirect('/chi-tiet-chuot?id='+req.query.id); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình thêm dữ liệu');
  }
  
});



// thêm vào giỏ hàng ở trang chi tiết chuột
router.get('/chi-tiet-chuot-buy-now', async (req, res) => {

  if (req.session.loggedin) {
    var ma_san_pham = req.query.ma_san_pham;
    const data_cart =await dataModel.showCart(req.session.email);
    const data_product = await dataModel.selectOneChuotByMaSanPham(ma_san_pham);
    const count_cart = await dataModel.countCart(req.session.email);
    const tong_gia_tien = await dataModel.sumCart(req.session.email);
    const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    let data_information = await dataModel.getInformation(req.session.email);
    // response.send('Please login to view this page!');
    res.render('buy-now', { data_user,data_cart,count_cart, tong_gia_tien,data_information,data_product });


  } else {
    // Not logged in
    var ma_san_pham = req.query.ma_san_pham;
    const data_product = await dataModel.selectOneChuotByMaSanPham(ma_san_pham);
    // response.send('Please login to view this page!');
    res.render('buy-now', {data_product});
  }
  res.end();
  
});




//thêm vào giỏ hàng từ trang chuột
router.post('/chuot-cam-day-add-to-cart', async (req, res) => {

  try {
    let ma_san_pham= req.query.ma_san_pham;
    let anh = req.query.anh;
    let ten = req.query.ten;
    let gia_tien = req.query.gia_tien;
    
    // const data_user = await dataModel.getDataUsers(req.session.email, req.session.password);
    // let data_one_lot_chuot = await dataModel.selectOneLot_chuotById(req.query.id);
    const findProductCart = await dataModel.findProductCart(req.session.email,ma_san_pham);
    
    // console.log(findProductCart);
    if (findProductCart[0].number > 0){
      
      // console.log('Có dữ liệu trong truy vấn.');
      // message = "Sản phẩm đã trong giỏ hàng";
    } else{
      // console.log('Không có dữ liệu trong truy vấn.');
      //  message = "Thêm sản phẩm vào giỏ hàng thành công";
      await dataModel.addToCart(ma_san_pham,req.session.email, anh, ten, gia_tien);
      
    }

    res.redirect('/chuot-cam-day'); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình thêm dữ liệu');
  }
  
});




//xóa 1 sản phẩm trong giỏ hàng
router.get('/delete-one-product-cart', async (req, res) => {
  try {
    let id = req.query.id;
    await dataModel.deleteOneProductInCart(id);
    res.redirect('/cart');
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình lấy dữ liệu');
  }
});


//xóa toàn bộ giỏ hàng
router.get('/delete-all-cart', async (req, res) => {
  try {
    let email = req.query.email;
    await dataModel.deleteAllCart(email);
    res.redirect('/cart');
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi trong quá trình lấy dữ liệu');
  }
});

module.exports = router;
