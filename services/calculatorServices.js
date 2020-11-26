const { resultsMocks } = require ('../utils/mocks/results');
const basicOperations = require('../utils/functions/basicCalculator')

class CalculatorService {
    async getResults(){
        const results = await Promise.resolve(resultsMocks);
        return results || [];
    }

    async getResult(){
        const result = await Promise.resolve(resultsMocks[0]);
        return result || {};

    }

    async getValor(){
        const result = await Promise.resolve(basicOperations);
        return result || [];

    }

}

module.exports = CalculatorService;