const mysql = require('mysql2');

// Kết nối đến cơ sở dữ liệu MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'lacdaustore',
});

connection.connect(function (err) {
  if (err) {
    console.error('Lỗi kết nối: ' + err.stack);
    return;
  }
  console.log('Kết nối thành công với MySQL');
});

// Phương thức để lấy dữ liệu từ cơ sở dữ liệu
function getData() {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users'; // Thay thế "ten_bang" bằng tên bảng của bạn
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
}



// Phương thức để lấy dữ liệu từ cơ sở dữ liệu
function getDataUsers(email, password) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE email=? and password=?'; // Thay thế "ten_bang" và "column1, column2" bằng tên bảng và các cột của bạn
    connection.query(query, [email, password], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      // console.log(results);
      resolve(results);
    });
  });
}


 // Phương thức để thêm dữ liệu vào cơ sở dữ liệu
function addData(data) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO student (Name, Email, Phone) VALUES (?, ?, ?)'; // Thay thế "ten_bang" và "column1, column2" bằng tên bảng và các cột của bạn
      connection.query(query, [data.column1Value, data.column2Value, data.column3Value], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  }


   // Phương thức để thêm dữ liệu vào cơ sở dữ liệu
function createAccount(data) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO users (username, email, password, authority_id) VALUES (?, ?, ?, ?)'; // Thay thế "ten_bang" và "column1, column2" bằng tên bảng và các cột của bạn
    connection.query(query, [data.username, data.email, data.password, data.authority_id], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
}

function createEmailInformation(data) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO information (email) VALUES (?)'; 
    connection.query(query, [data.email], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
}

function getInformation(email) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM information WHERE email=?;'
    connection.query(query, [email], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      // console.log(results);
      resolve(results);
    });
  });
}


function updateInformation(data) {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE information SET address=?, province=?, phone=? WHERE email=?;'
    connection.query(query, [data.address, data.province, data.phone, data.email], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      // console.log(results);
      resolve(results);
    });
  });
}

function updateUsernameUsers(data) {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE users SET username=? WHERE email=?;'
    connection.query(query, [data.username, data.email], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      // console.log(results);
      resolve(results);
    });
  });
}

function changePassword(data) {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE users SET password=? WHERE email=?;'
    connection.query(query, [data.newpassword, data.email], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      // console.log(results);
      resolve(results);
    });
  });
}


function createNewAccount(data) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO users (username, email, password, authority_id) VALUES (?, ?, ?, ?)'; // Thay thế "ten_bang" và "column1, column2" bằng tên bảng và các cột của bạn
    connection.query(query, [data.username, data.email, data.password, data.authority_id], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
}



function selectOneAccountById(id) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE id=?;'
    connection.query(query, [id], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      // console.log(results);
      resolve(results);
    });
  });
}


function updateUsers(data) {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE users SET username=?, email=?, password=?, authority_id=? WHERE id=?;'
    connection.query(query, [data.username, data.email, data.password, data.authority_id, data.id], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      // console.log(results);
      resolve(results);
    });
  });
}
function updateEmailInformation(data_update_infor) {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE information SET email=? WHERE id=?;'
    connection.query(query, [data_update_infor.email, data_update_infor.id], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      // console.log(results);
      resolve(results);
    });
  });
}

function getIdIdformation(email) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT id FROM information WHERE email=?;'
    connection.query(query, [email], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      // console.log(results);
      resolve(results);
    });
  });
}

function deleteUsers(email) {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM users WHERE email=?;'
    connection.query(query, [email], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      // console.log(results);
      resolve(results);
    });
  });
}

function deleteInformation(email) {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM information WHERE email=?;'
    connection.query(query, [email], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      // console.log(results);
      resolve(results);
    });
  });
}

function getDataLotChuot() {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM lot_chuot ORDER BY gia_tien ASC, ma_san_pham DESC'; 
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
}

function getDataLotChuot_chuDe(chu_de_key) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM lot_chuot WHERE chu_de_key=? ORDER BY gia_tien ASC, ma_san_pham DESC'; 
    connection.query(query,[chu_de_key], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
}

function selectOneLot_chuotById(id) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM lot_chuot WHERE id=?;'
    connection.query(query, [id], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      // console.log(results);
      resolve(results);
    });
  });
}

function selectOneLot_chuotByMaSanPham(ma_san_pham) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM lot_chuot WHERE ma_san_pham=?;'
    connection.query(query, [ma_san_pham], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      // console.log(results);
      resolve(results);
    });
  });
}


function addToCart(ma_san_pham, email, anh, ten, gia_tien) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO cart(ma_san_pham,email, anh, ten, gia_tien) VALUES (?,?,?,?,?)'; 
    connection.query(query, [ma_san_pham,email,anh, ten, gia_tien], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
}


function showCart(email) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * from cart WHERE email=?'; 
    connection.query(query, [email], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
}

function countCart(email) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT count(*) as so_luong from cart  WHERE email=?'; 
    connection.query(query, [email], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
}

function sumCart(email) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT sum(gia_tien) as gia_tien from cart  WHERE email=?'; 
    connection.query(query, [email], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
}

function findProductCart(email, ma_san_pham) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT count(*) as number from cart WHERE email=? and ma_san_pham=?'; 
    connection.query(query, [email, ma_san_pham], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
}







  

module.exports = {connection, getData, addData, getDataUsers, createAccount, createEmailInformation, getInformation, updateInformation, updateUsernameUsers, changePassword, createNewAccount, selectOneAccountById, updateUsers, updateEmailInformation, getIdIdformation, deleteUsers, deleteInformation, getDataLotChuot, getDataLotChuot_chuDe, selectOneLot_chuotById, selectOneLot_chuotByMaSanPham,addToCart,showCart,countCart,sumCart,findProductCart};
