const { resultsMocks } = require ('../utils/mocks/results');

class CalculatorService {
    async getResults(){
        const results = await Promise.resolve(resultsMocks);
        return results || [];
    }

    async getResult(){
        const result = await Promise.resolve(resultsMocks[0]);
        return result || {};

    }
}

module.exports = CalculatorService;