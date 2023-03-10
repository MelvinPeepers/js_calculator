const buttons = document.querySelectorAll("button")
const screenDisplay = document.querySelectorAll(".display")

// console.log(buttons)

let calculation = []

function calculate(button) {
    // console.log(button)
    const value = button.textContent
    calculation.push(value)
    screenDisplay.textContent = calculation
    console.log(calculation)
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))