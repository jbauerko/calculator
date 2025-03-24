let buffer = [0];
let useResult = false;

const operator_list = "+-x÷"
const display = document.querySelector("#display");
const btns = document.querySelector("#buttons");

function operate(a, operator, b) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case 'x':
            return a * b;
        case '÷':
            if (b == 0) {return NaN;}
            return a / b;
        default:
            return b;
    }
}

btns.addEventListener("click", (event) => {
    let target = event.target;

    if (target.id === "clear") {
        buffer = [0];
        useResult = false;
    } else if (target.classList.contains("operator")) {
        if (buffer.length === 1 && buffer[0] != 0) {
            buffer.push(target.textContent);
        } 
        useResult = false;
    } else if (target.classList.contains("digit")) {
        if (useResult) {
            buffer = [target.textContent];
            resultDisplayed = false;
        } else if (buffer[buffer.length-1] === 0) {
            buffer.pop();
            buffer.push(target.textContent);
        } else if (operator_list.includes(buffer[buffer.length-1])) {
            buffer.push(target.textContent);
        } else {
            buffer[buffer.length-1] = buffer[buffer.length-1] + target.textContent;
        }
    } else if (target.id === "equals") {
        if (buffer.length === 3) {
            buffer.push(operate(parseFloat(buffer[0]), buffer[1], parseFloat(buffer[2])));
            buffer.splice(0, 3);
            useResult = true;
        }
    }

    console.log(buffer);
    display.textContent = buffer.join(" ");
});
