class Calculator{
    constructor(previousOperand,currentOperand){
        this.previousOperand = previousOperand
        this.currentOperand = currentOperand
        this.clear
    }

    clear(){
        this.currentOperand = ""
        this.previousOperand = ""
        this.operations = undefined
    }
    delete(){

    }
    appendNumber(number){

    }
    chooseOperation(operations){

    }
    computer(){

    }
    updateDisplay(){

    }
}



const number = document.querySelectorAll("[data-number]")
const operations = document.querySelectorAll("[data-operation]")
const equal = document.querySelector("[data-equals]")
const del = document.querySelector("[data-delete]")
const allClear = document.querySelector("[data-all-clear]")
const previousOperand = document.querySelector("[data-previous-operand]")
const currentOperand = document.querySelector("[data-current-operand]")