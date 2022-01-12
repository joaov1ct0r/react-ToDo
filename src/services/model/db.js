const mysql = require('mysql2');

let db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'reactToDo'
});

let allToDo = callback => {
    let SQL = `SELECT * FROM toDos`;

    db.query(SQL, (err, result) => {
        if (err) {
            throw err;
        }
        callback(result);
    });
};
