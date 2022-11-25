const express = require('express');
const router = require('./router');

const json = express.json();
const app = express();

app.use(json);
app.use(router);



module.exports = app;