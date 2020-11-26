var basicOperations = {

    sum: function sum(){
        return(arguments[0] + arguments[2]);
    },
    subtraction: function subtraction(){
        return(arguments[0] - arguments[2]);
    },
    multiplication: function multiplication(){
        return(arguments[0] * arguments[2]);
    },
    division: function division(){
        return(arguments[0] / arguments[2]);
    }


}

module.exports = basicOperations;