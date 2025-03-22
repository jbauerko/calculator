function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if (b === 0) {return undefined;}
    return a / b;
}

let arg1;
let arg2;
let operator;

function operate(arg1, arg2, operator) {
    if (operator === "+") {
        return add(arg1, arg2);
    } else if (operator === "-") {
        return subtract(arg1, arg2);
    } else if (operator === "*") {
        return multiply(arg1, arg2);
    } else {
        return divide(arg1, arg2);
    }
}
