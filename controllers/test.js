const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'lacdaustore'
});

const app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
const router = express.Router();

// http://localhost:3000/
app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/dang-nhap.html'));
});

// http://localhost:3000/auth
app.post('/dang-nhap', function(request, response) {
	// Capture the input fields
	let email = request.body.email;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (email && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.email = email;
				// Redirect to home page
				response.redirect('/trang-chu');
			} else {
				response.send('Incorrect email and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter email and Password!');
		response.end();
	}
});

// http://localhost:3000/home
router.get('/trang-chu', async(request, response)=> {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		// response.send('Welcome back, ' + request.session.email + '!');
        // connection.query('SELECT * FROM users WHERE email = ? ', [request.session.email], function(error, results, fields) {
            
        //     response.render('trang-chu',results);
        // })
        response.render('trang-chu',results);
        
	} else {
		// Not logged in
		// response.send('Please login to view this page!');
        response.render('trang-chu');
	}
	response.end();
});
module.exports = router;
app.listen(3000);