const express = require('express');
const rote = require('./rotes');

const app = express();

app.use(express.json());

app.use(rote);

app.listen(3000);