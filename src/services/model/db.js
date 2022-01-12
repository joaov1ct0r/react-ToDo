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

let newToDo = (title, callback) => {
    let SQL = `INSERT INTO toDos (toDo) VALUES (?)`;

    db.query(SQL, title, (err, result) => {
        if (err) {
            throw err;
        }
        callback(result);
    });
};

let changeToDo = (index, title, callback) => {
    let SQL = `UPDATE toDos SET toDo = ? WHERE id = ?`;

    let params = [title, index];

    db.query(SQL, params, (err, result) => {
        if (err) {
            throw err;
        }
        callback(result);
    });
};

let deleteToDo = (index, callback) => {
    let SQL = `DELETE FROM toDos WHERE id = ?`;

    db.query(SQL, query, (err, result) => {
        if (err) {
            throw err;
        }
        callback(result);
    });
};

module.exports = {
    allToDo,
    newToDo,
    changeToDo,
    deleteToDo
};
