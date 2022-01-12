const express = require('express');

const routes = require('../services/controller/controllers');

const app = express();

const PORT = 3001;

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
