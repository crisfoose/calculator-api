const express = require('express');
const { operationsMocks } = require('../utils/mocks/results');

function calculatorApi(app){
    const router = express.Router();
    app.use("/api/calculator", router);

    router.get("/", async function(req, res, next){
        try{
            const operations = await Promise.resolve(operationsMocks);

            res.status(200).json({
                data: operations,
                message: 'operation results'
            })
        }catch{
            next(err);
        }
    });
}

module.exports = calculatorApi;