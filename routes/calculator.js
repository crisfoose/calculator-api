const express = require('express');
const CalculatorService = require('../services/calculatorServices');


function calculatorApi(app){
    const router = express.Router();
    app.use("/api/calculator", router);

    const calculatorService = new CalculatorService();

    router.get("/", async function(req, res, next){
        try{
            const operations = await calculatorService.getResult();

            res.status(200).json({
                message: 'operation results',
                data: operations
            });
        }catch (err){
            next(err);
        }
    });

    router.post("/", async function(req, res, next){
        try{
            const operations = await calculatorService.getResult();

            res.status(200).json({
                message: 'operation results',
                data: operations
            });
        }catch (err){
            next(err);
        }
    });
}

module.exports = calculatorApi;