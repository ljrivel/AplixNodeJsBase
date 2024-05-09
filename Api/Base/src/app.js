
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const mainRouter = require('./routes/main.routes');

const app = express();

// Configuración
app.set('port', config.port);
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(mainRouter);

module.exports = app;
