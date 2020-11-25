const express = require('express');
const app = express();

const { config } = require('./config/index')
const calculatorApi = require('./routes/calculator.js');

calculatorApi(app);

app.listen(config.port), function(){
    console.log(`Listening http://localhost:${config.port}`)
}