const express = require('express');

const app = express();

const { config } = require('./config/index')

app.get('/healthcheck', function(req, res){
    res.send('calculator-api is up');
});

app.get('/healthcheck/json', function(req, res){
    res.json({calculator_api: 'is up'});
});

app.listen(config.port), function(){
    console.log(`Listening http://localhost:${config.port}`)
}