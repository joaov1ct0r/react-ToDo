const express = require('express');

let router = express.Router();

const bodyParser = require('body-parser');

const db = require('../model/db.js');

router.get('/all', bodyParser.json(), (req, res) => {
    let request = db.allToDo(function (result) {
        res.send(JSON.stringify(result));
    });
});

router.post('/new', bodyParser.json(), (req, res) => {
    let { title } = req.body;

    toDos.push({ title });

    res.send('Tarefa adicionada com sucesso');
});

router.put('/edit/:index', bodyParser.json(), (req, res) => {
    let { index } = req.params;

    let { title } = req.body;

    toDos[index].title = title;

    res.send('Tarefa alterada com sucesso');
});

router.delete('/delete/:index', bodyParser.json(), (req, res) => {
    let { index } = req.params;

    delete toDos[index];

    res.send('Tarefa deletada com sucesso');
});

module.exports = router;
