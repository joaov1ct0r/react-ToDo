const express = require('express');

let router = express.Router();

const bodyParser = require('body-parser');

const db = require('../model/db.js');

const cors = require('cors');

router.use(cors());

router.get('/all', bodyParser.json(), (req, res) => {
    db.allToDo(function (result) {
        res.send(JSON.stringify(result));
    });
});

router.post('/new', bodyParser.json(), (req, res) => {
    let { title } = req.body;

    db.newToDo(title, function (result) {
        console.log(result);

        res.send('Tarefa adicionada com sucesso');
    });
});

router.put('/edit/:index', bodyParser.json(), (req, res) => {
    let { index } = req.params;

    let { title } = req.body;

    db.changeToDo(index, title, function (result) {
        console.log(result);

        res.send('Tarefa alterada com sucesso');
    });
});

router.delete('/delete/:index', bodyParser.json(), (req, res) => {
    let { index } = req.params;

    db.deleteToDo(index, function (result) {
        console.log(result);

        res.send('Tarefa deletada com sucesso');
    });
});

module.exports = router;
