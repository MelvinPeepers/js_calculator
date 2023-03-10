const screenDisplay = document.querySelector(".screen")
const buttons = document.querySelectorAll("button");


// console.log(screenDisplay)
// console.log(buttons)

let calculation = []
let accumlativeCalculation 

function calculate(button) {
    // console.log(button)
    const value = button.textContent

    if (value === "Clear"){
        calculation = []
        screenDisplay.textContent = "."
    } else if (value === "=") {
        screenDisplay.textContent = eval(accumlativeCalculation)
    } else {
        calculation.push(value)
        accumlativeCalculation = calculation.join("")
        screenDisplay.textContent = accumlativeCalculation
    }
    


    // console.log(calculation)
}

buttons.forEach(button => button.addEventListener("click", () => calculate(button)))
