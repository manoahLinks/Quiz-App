const screen    = document.querySelector('#screen')
const equalTo   = document.querySelector('#equalto')
const cancel    = document.querySelector('#ac')
const clear     = document.querySelector('#clear')
const bracket   = document.querySelector('#bracket')
const operators = document.querySelectorAll('.operator')
const numbers   = document.querySelectorAll('.number')

// created an empty array to recieve all parameters for execution 
const operation = [];

// clear button and functionalities
clear.addEventListener('click', ()=>{

})

//  cancel button and functionalities
cancel.addEventListener('click', ()=>{
    screen.textContent= "";
    clearArray()
})

// equal to button and functionalities
equalTo.addEventListener('click',  ()=>{
    // creadted variable to take screen content
   let a = screen.textContent
    //saved screen content in operation array for execution    
   operation.push(a)

    // switch case to determine what type of operator 
    // is passed and what function to perform
   switch (operation[1]){
       case '+':
        // manipulation elements of operation array and transforming text to 
        // Number for maths functions
           let add = Number(operation[0]) + Number(operation[2])
            screen.textContent = add;
            break;
       case '*':
           let multiply = Number(operation[0]) * Number(operation[2])
           screen.textContent = multiply
            break;
       case '/':
           let divide = Number(operation[0]) / Number(operation[2])
           screen.textContent = divide
            break;
        case '-':
            let minus = Number(operation[0]) - Number(operation[2])    
            screen.textContent = minus
            break;     
   }
    // calling clear function to clear all elements 
    // in operation array after clicking equalto    
   clearArray()
   console.log(operation)

})

bracket.addEventListener('click', ()=>{
    bracket.toggleAttribute('value', ')')
    
})

let operatorArray = Array.from(operators)

operatorArray.forEach((operator)=>{
    // adding event listeners to each operator
    operator.addEventListener('click', function(){
        let a = document.querySelector('#screen').textContent
        // sending screen-content and clicked operator to operation array 
        operation.push(a)
        operation.push(operator.value)
        // clearing screen after clicking on a operator to 
        // give rrom for next numbers to be inserted
        screen.textContent = '';
    })
})


let numberArray = Array.from(numbers)

numberArray.forEach((number)=>{
    // adding event listeners to number buttons
    number.addEventListener('click', ()=>{
        screen.textContent += number.value 
    })
})

// clearArray function used in clearing the operations in the array
let clearArray = ()=>{
    // looping through the operation array and deleting the 
    // last element for in each iteration
    for(i = 0; i < operation.length + 2; i++){
        operation.pop()
    }
    console.log(operation)
}