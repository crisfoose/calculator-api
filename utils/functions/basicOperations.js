const { response } = require('express');
const interface = require('readline-sync');

do{
    console.log("1.-Sum");
    console.log("2.-subtraction");
    console.log("3.-multiplication");
    console.log("4.-Division");
    console.log("5.-Exit");
    response = interface.question("Select an Operation");

    if(response != "5"){
        const var1 = interface.question("Input first number");
        const var2 = interface.question("Input second number");        
    }

    switch(response){
        case "1":
            var result = parseInt(var1) + parseInt(var2);
            console.log("Result is: "+ result);
            break;
        case "2":
            var result = parseInt(var1) - parseInt(var2);
            console.log("Result is: "+ result);
            break;   
        case "3":
            var result = parseInt(var1) * parseInt(var2);
            console.log("Result is: "+ result);
            break;    
        case "4":
            var result = parseInt(var1) / parseInt(var2);
            console.log("Result is: "+ result);
            break; 
        default:
            break;
    }

    interface.question("Press Intro to Continue...");

}while(response != "5");