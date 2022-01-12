const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const PORT = 3001;

let toDos = {};

app.get('/all', bodyParser.json(), (req, res) => {
    res.send(JSON.stringify(toDos));
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
