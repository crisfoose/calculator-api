var basicOperations = {

    sum: function sum(){        
        return(parseInt(arguments[0])+parseInt(arguments[2]));
    },
    subtraction: function subtraction(){
        return(parseInt(arguments[0])-parseInt(arguments[2]));
    },
    multiplication: function multiplication(){
        return(parseInt(arguments[0])*parseInt(arguments[2]));
    },
    division: function division(){
        return(parseInt(arguments[0])/parseInt(arguments[2]));
    }

}

module.exports = basicOperations;