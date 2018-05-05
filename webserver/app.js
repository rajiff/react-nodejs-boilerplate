const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('./appconfig');
const logger = require('./logger');

console.log('Config value for mongo ', config.MONGO_URL);

let app = express();

// Configure morgan to log your requests, with a standard date & time format
morgan.token('time', (req, res) => new Date().toISOString());
app.use(morgan('[:time] :remote-addr :method :url :status :res[content-length] :response-time ms'));

// Setup bodyParsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static hosting of webapp
let staticPath = path.resolve(__dirname, 'dist');
console.log("[*] Setting Static path to [", staticPath, "]");
app.use(express.static(staticPath));

// Catch all route
app.use((req, res) => {
	logger.error(`Request resource ${req.method} ${req.url} not fulfilled ..!`)
	return res.status(404).send("Requested resource not found..!");
});

module.exports = app;