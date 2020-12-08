// **** global variables ****
const digits = document.querySelectorAll('.digit');
const ops = document.querySelectorAll('.operator');
const maintenance = document.querySelectorAll('.maintenance');
const equals = document.querySelectorAll('#equals');
const clear = document.querySelectorAll('#clear');
let displayWindow = document.getElementById('window')
let operandOne = "";
let operandTwo = "";
let operator = "";
let result = "";

// **** display ****
let display = function(input){
    displayWindow.textContent = displayWindow.textContent + input;
    if (operator != "" && operandTwo == ""){
        return displayWindow.textContent = "";
    } else if (result != "" && operandTwo != "" || result == "0"){
            return displayWindow.textContent = result;
    }
}

// **** setting numbers & operator ****
let operands = function(input){
    if (operator == ""){
        operandOne = operandOne + input;
        console.log(operandOne);
    } else {
        operandTwo = operandTwo + input;
        console.log(operandTwo);
    };
    return operandOne && operandTwo;
}

let operatorSelector = function(selection){
    operator = selection;
}

// **** erasing ****
let adjust = function(){
    displayWindow.textContent = "";
    operandOne = "";
    operandTwo = "";
    operator = "";
    result = "";
}

// **** arithmetic functions ****
let operate = function(operator, operandOne, operandTwo){
    if (operator == '+'){
        result = (add(Number(operandOne), Number(operandTwo)));
    } else if (operator  == '-'){
        result = subtract(Number(operandOne), Number(operandTwo));
    } else if (operator  == '*'){
        result = multiply(Number(operandOne), Number(operandTwo));
    } else if (operator  == '/'){
        result = divide(Number(operandOne), Number(operandTwo));
    }
    display(result)
    console.log(result);
}

let add = function(n1, n2){
    return n1 + n2;
}

let subtract = function(n1, n2){
    return n1 - n2;
}

let multiply = function(n1, n2){
    return n1 * n2;
}

let divide = function(n1, n2){
    if (n2 == 0){
        return "stop that ya dingus >:(";
    } else {
        return n1 / n2;
    }
}

// **** event listeners ****
digits.forEach(digit => {
    digit.addEventListener('click', (e) =>{
        operands(e.target.textContent);
        display(e.target.textContent);
    });
})

ops.forEach(op => {
    op.addEventListener('click', (e) =>{
        if (operator == ""){
            operatorSelector(e.target.textContent);
            display();
        } else {
            operate(operator, operandOne, operandTwo);
            operatorSelector(e.target.textContent);
            operandOne = result;
            operandTwo = ""
        }
    })
})

clear.forEach(gbye => {
    gbye.addEventListener('click', (e) => {
        adjust(e);
    })
})

equals.forEach(eq => {
    eq.addEventListener('click', () => {
        operate(operator, operandOne, operandTwo);
        display(result);
    })
})
