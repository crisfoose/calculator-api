const CalculatorService = require("../../services/calculatorServices");

const resultsMocks = [
    {
        operation: '3x4+4-1',
        result: 15
    },
    {
        operation: '1+2+3+4',
        result: 10
    },
    {
        operation: '3/3+3-3',
        result: 1
    }
];

class ResultServiceMock{
    async getResults(){
        return Promise.resolve(resultsMocks);
    }
}

module.exports = {
    resultsMocks,
    ResultServiceMock
}