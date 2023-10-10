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


  

module.exports = { getData, addData, getDataUsers };
