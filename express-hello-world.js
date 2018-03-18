const express = require('express');
require("dotenv").config();
const app = express();

// const portGiven = process.argv[0];
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/time', (req, res) => {
    let time = new Date().toISOString();
    res.send(`Current time: ${time}`);
});

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});
