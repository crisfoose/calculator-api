const express = require('express');
const app = express();
const parser = require('body-parser');

const { config } = require('./config/index')
const calculatorApi = require('./routes/calculator.js');

app.use(parser.json());
calculatorApi(app);

app.listen(config.port), function(){
    console.log(`Listening http://localhost:${config.port}`)
}