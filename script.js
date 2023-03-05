class Calculator {
    constructor(prevOperandTextElement, currOperandTextElement) {
        this.prevOperandTextElement = prevOperandTextElement
        this.currOperandTextElement = currOperandTextElement
        this.clear()
    }

    clear() {
        this.currOperand = ''
        this.prevOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currOperand = this.currOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currOperand.includes('.')) return 
        this.currOperand = this.currOperand.toString() + number.toString()
    }

    choseOperation(operation) {
        if(this.currOperand === '') return
        if(this.prevOperand !== '') {
                this.compute()
        }
        this.operation = operation
        this.prevOperand = this.currOperand
        this.currOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.prevOperand)
        const curr = parseFloat(this.currOperand)

        if(isNaN(prev) || isNaN(curr)) return
        switch (this.operation){
            case '+':
                computation = prev + curr
                break;
            case '-':
                computation = prev - curr
                break;
            case '*':
                computation = prev * curr
                break;
            case '÷':
                computation = prev / curr
                break;
            default:
                return
        }
        this.currOperand = computation
        this.operation = undefined
        this.prevOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const intDigits = parseFloat(stringNumber.split('.'[0]))
        const decimalDigits = stringNumber.split('.')[1]
        let intDisplay
        if (isNaN(intDigits)) {
            intDisplay = ''
        } else {
            intDisplay = intDigits.toLocaleString('en', {maximumFractionDigits:0})
        }

        if (decimalDigits != null) {
            return `${intDisplay}.${decimalDigits}`
        } else {
            return intDisplay
        }
    }

    updateDisplay(){
        this.currOperandTextElement.innerText = this.getDisplayNumber(this.currOperand)
        if (this.operation != null) {
            this.prevOperandTextElement.innerText = `${this.getDisplayNumber(this.prevOperand)}${this.operation}`
        } else {
            this.prevOperandTextElement.innerText = ''
        }
    }
}


const numBtns = document.querySelectorAll('[data-number]');
const opBtns = document.querySelectorAll('[data-operation]');
const eqBtn = document.querySelector('[data-equals]');
const delBtn = document.querySelector('[data-delete]');
const clearAllBtn = document.querySelector('[data-all-clear]');

const prevOperandTextElement = document.querySelector('[data-prev-operand]');
const currOperandTextElement = document.querySelector('[data-curr-operand]');

const calculator = new Calculator(prevOperandTextElement, currOperandTextElement);

numBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

opBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.choseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

eqBtn.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

clearAllBtn.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

delBtn.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})