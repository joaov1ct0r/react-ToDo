const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
