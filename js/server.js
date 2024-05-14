const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000; 


const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'admin',
    password: '1234',
    database: 'studlog'
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;

   
    pool.query('SELECT * FROM studdetails WHERE Username = ? AND Password = ?', [username, password], (error, results) => {
        if (error) {
            return res.status(500).json({ success: false, message: 'Internal server error' });
        }

        if (results.length > 0) {
           
            return res.json({ success: true });
        } else {
           
            return res.json({ success: false, message: 'Invalid username or password' });
        }
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
