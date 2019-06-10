const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'T3csup1838',
    database: 'medicos'
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }  else {
        console.log('DB is connected');
    }
});

module.exports = mysqlConnection;
