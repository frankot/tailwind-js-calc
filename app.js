class Calc {
    constructor(previousText, currentText) {
        this.previousText = previousText
        this.currentText = currentText
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return //if the  input number is '.' and currentOperand str already have '.' stop func
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOpearation(operation) {
        if (this.currentOperand === '') return // if there is no current operation dont add operation symbol
        if (this.previousOperand !== '') {
            this.compute()
        }
        if (this.operation !== undefined) {
         this.operation = operation   
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const curr = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(curr)) return //if previous or current value is not a number  stop func
        switch (this.operation) {
            case '+':
                computation = prev + curr
                break
            case '-':
                computation = prev - curr
                break
            case '*':
                computation = prev * curr
                break
            case '÷':
                computation = prev / curr
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''


    }

    updateDisplay() {
        this.currentText.innerText = this.currentOperand
        if (this.operation != undefined) this.previousText.innerText = this.previousOperand + ' '+ this.operation
        else this.previousText.innerText = this.previousOperand
    }

}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const delButton = document.querySelector('[data-delete]')
const acButton = document.querySelector('[data-all-clear]')
const previousText = document.querySelector('[data-previous]')
const currentText = document.querySelector('[data-current]')

const calc = new Calc(previousText, currentText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.appendNumber(button.innerText)
        calc.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.chooseOpearation(button.innerText)
        calc.updateDisplay()
    })
})

acButton.addEventListener('click', button => {
    calc.clear()
    calc.updateDisplay()
})

equalsButton.addEventListener('click', button => {
    calc.compute()
    calc.updateDisplay()
})

delButton.addEventListener('click', button => {
    calc.delete()
    calc.updateDisplay()
})
