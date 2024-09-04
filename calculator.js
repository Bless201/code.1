function calculate (a, b, operation)  {
    if (a === undefined || a === "" || b === undefined || b === "" ){
        return "error: input cannot be empty.";
    }

    if (typeof operation!== "string") {
        return "error: operation must be a string.";
    }

    if (b === 0 && (operation ==="divide" || operation === "/")){
        return "error: division by zero is not allowed.";
    }
    
    // calculation
    if (operation === 'add'){
        return a + b;
    } else if ( operation === 'subtract') {
        return a - b;
    } else if ( operation === 'multiply') {
        return a * b;

    } else if (operation === 'divide'){
        return a / b;
    } else {
        console.log("unknown")
    }

}

console.log(calculate(7,4, 'add'));
console.log(calculate(7,4, 'subtract'));
console.log(calculate(7,4, 'multiply'));
console.log(calculate(7,4, 'divide'));
