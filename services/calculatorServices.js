const { resultsMocks } = require ('../utils/mocks/results');
const basicCalculator = require('../utils/functions/basicCalculator')

class CalculatorService {
    async getResults(){
        const results = await Promise.resolve(resultsMocks);
        return results || [];
    }

    async getResult(){
        const result = await Promise.resolve(resultsMocks[0]);
        return result || {};
    }

    async getValorSum(array){
        const result = await Promise.resolve(basicCalculator.sum(array));
        return result || {};
    }

    async getValorRes(array){
        const result = await Promise.resolve(basicCalculator.subtraction(array));
        return result || {};
    }

    async getValorMult(array){
        const result = await Promise.resolve(basicCalculator.multiplication(array));
        return result || {};
    }

    async getValorDiv(array){
        const result = await Promise.resolve(basicCalculator.division(array));
        return result || {};
    }

}

module.exports = CalculatorService;