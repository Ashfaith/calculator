const numbers = document.querySelectorAll(".number");
let currentNumberDisplay = document.querySelector(".workingNumber");
const clear = document.querySelector(".clear");
let previousNumberDisplay = document.querySelector(".previousNumber");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");


class Calculator {
    constructor(currentNumber = '', previousNumber = ''){
        this.currentNumber = currentNumber;
        this.previousNumber = previousNumber;
        this.operator = '';
    }

    clear() {
        currentNumberDisplay.innerText = '';
        previousNumberDisplay.innerText = '';
        this.currentNumber = '';
    }

    appendNumbers(number) {
        if (number === "." & this.currentNumber.includes(".")){ 
            return;
        } else {
            this.currentNumber += number;
            currentNumberDisplay.innerText = this.currentNumber;
            console.log(this.currentNumber);    
        }   
    }

    numberChange() {
        this.previousNumber = this.currentNumber;
        previousNumberDisplay.innerText = this.previousNumber + this.operator;
        this.currentNumber = '';
        currentNumberDisplay.innerText = '';
    }

    operation(operator) {
        this.operator = operator;
        this.numberChange()
    }
    
    calculation() {
        let a = Number(this.currentNumber);
        let b = Number(this.previousNumber);

        if (this.operator === "/" && b === 0){
            console.log('Dividing by 0 not possible');
            return;
        } else {
            let calcType = {
                '+': a + b,
                '-': a - b,
                'x': a * b,
                '/': a / b,
            }
            this.currentNumber = calcType[this.operator];
            this.previousNumber = '';
            previousNumberDisplay.innerText = '';
            currentNumberDisplay.innerText = this.currentNumber
            console.log(calcType[this.operator]);
        }
    }
}

const calculator = new Calculator();

numbers.forEach(number => {
    number.addEventListener('click', () => {
        // console.log(number.innerText);
        calculator.appendNumbers(number.innerText);
        // currentNumberDisplay.append(number.innerText);
        
    });
});

clear.addEventListener('click', () => {
    calculator.clear();
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        calculator.operation(operator.innerText);
        console.log(operator.innerText);
    });
});

equals.addEventListener('click', () => {
    calculator.calculation();
});