const assert = require('assert');
const proxyquire = require('proxyquire');

const { resultsMocks, ResultServiceMock } = require('../utils/mocks/results.js');
const testServer = require('../utils/testServer');

describe('routes - calculator', function(){
    const route = proxyquire('../routes/calculator',{
        '../services/calculatorServices': ResultServiceMock
    });

    const request = testServer(route);
    describe('GET /results', function(){
        it('should respond with status 200', function(done){
            request.post('/api/calculator/compoundOperation').expect(200,done);
        });              
    });
});

