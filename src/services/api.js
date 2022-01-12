const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const PORT = 3001;

let toDos = [];

app.get('/all', bodyParser.json(), (req, res) => {
    res.send(JSON.stringify(toDos));
});

app.post('/new', bodyParser.json(), (req, res) => {
    let { title } = req.body;

    toDos.push({ title });

    res.send('Tarefa adicionada com sucesso');
});

app.put('/edit/:index', bodyParser.json(), (req, res) => {
    let { index } = req.params;

    let { title } = req.body;

    toDos[index].title = title;

    res.send('Tarefa alterada com sucesso');
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
