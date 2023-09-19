const mysql = require('mysql2');

// Kết nối đến cơ sở dữ liệu MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'QLSV',
});
connection.connect(function (err) {
    if (err) {
      console.error('Lỗi kết nối: ' + err.stack);
      return;
    }
    console.log('Kết nối thành công với MySQL');
  });