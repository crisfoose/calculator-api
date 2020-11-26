var basicCalculator = {

    sum: function sum(array){
        console.log(array);        
        return(array.value1+array.value2);
    },
    subtraction: function subtraction(array){
        console.log(array);        
        return(array.value1-array.value2);
    },
    multiplication: function multiplication(array){
        console.log(array);        
        return(array.value1*array.value2);
    },
    division: function division(array){
        console.log(array);        
        return(array.value1/array.value2);
    }

}

module.exports = basicCalculator;