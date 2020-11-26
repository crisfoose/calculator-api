const express = require('express');
const CalculatorService = require('../services/calculatorServices');


function calculatorApi(app){
    const router = express.Router();
    app.use("/api/calculator", router);

    const calculatorService = new CalculatorService();

    router.post("/compoundOperation", async function(req, res, next){
        try{
            const operations = await calculatorService.getResults();

            res.status(200).json({
                message: 'Compound operation results',
                data: operations
            });
        }catch (err){
            next(err);
        }
    });
    
    router.post("/sum", async function(req, res, next){
        try{
            const operations = await calculatorService.getResult();

            res.status(200).json({
                message: 'sum results',
                data: operations
            });
        }catch (err){
            next(err);
        }
    });
    
    router.post("/subtraction", async function(req, res, next){
        try{
            const operations = await calculatorService.getResult();

            res.status(200).json({
                message: 'subtraction results',
                data: operations
            });
        }catch (err){
            next(err);
        }
    });

    router.post("/multiplication", async function(req, res, next){
        try{
            const operations = await calculatorService.getResult();

            res.status(200).json({
                message: 'multiplication results',
                data: operations
            });
        }catch (err){
            next(err);
        }
    });

    router.post("/division", async function(req, res, next){
        try{
            const operations = await calculatorService.getResult();

            res.status(200).json({
                message: 'division results',
                data: operations
            });
        }catch (err){
            next(err);
        }
    });

}

module.exports = calculatorApi;