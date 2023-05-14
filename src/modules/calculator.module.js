import {Module} from '../core/module'

export class СalculatorModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        this.calculatorModule = document.createElement("div");
        this.inputNumber1 = document.createElement("input");
        this.inputNumber1.id = 'num1';
        this.operatorButton = document.createElement("div");
        this.operatorButton.id = 'operatorButton';
        this.plusButton = document.createElement("button");
        this.plusButton.id = 'plus';
        this.plusButton.setAttribute('onclick', "op='+'");
        this.plusButton.textContent = '+';
        this.minusButton = document.createElement("button");
        this.minusButton.id = 'minus';
        this.minusButton.setAttribute('onclick', "op='-'");
        this.minusButton.textContent = '-';
        this.timesButton = document.createElement("button");
        this.timesButton.id = 'times';
        this.timesButton.setAttribute('onclick', "op='*'");
        this.timesButton.textContent = 'x';
        this.divideButton = document.createElement("button");
        this.divideButton.id = 'divide';
        this.divideButton.setAttribute('onclick', "op='/'");
        this.divideButton.textContent = ':';
        this.inputNumber2 = document.createElement("input");
        this.inputNumber2.id = 'num2';
        this.resultButton = document.createElement("button");
        this.resultButton.setAttribute('onclick', "result()");
        this.resultButton.textContent = 'Итог';
        this.result = document.createElement("p");
        this.result.id = 'result';
        this.operatorButton.append(this.plusButton, this.minusButton, this.timesButton, this.divideButton);
        this.calculatorModule.append(this.inputNumber1, this.operatorButton, this.inputNumber2, this.resultButton, this.result);
        document.body.append(this.calculatorModule);
    }
}
let op;
function result() {
    let result;
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;    
    }
    document.getElementById('result').innerHTML = result
}