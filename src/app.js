document.addEventListener("DOMContentLoaded", () => {
const expression = document.querySelector("#expression")
const result = document.querySelector("#result")
const pi = document.querySelector("#pie")
const squareRoot = document.querySelector("#squareRoot")
const squared = document.querySelector("#squared")
const openingBracket = document.querySelector("#openingBracket")
const closingBracket = document.querySelector("#closingBracket")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const division = document.querySelector("#division")
const ac = document.querySelector("#ac")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const multiplication = document.querySelector("#multiplication")
const modulus = document.querySelector("#modulus")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const addition = document.querySelector("#addition")
const minus = document.querySelector("#minus")
const period = document.querySelector("#period")
const zero = document.querySelector("#zero")
const del = document.querySelector("#del")
const equals = document.querySelector("#equals")

console.log(expression.value)



one.addEventListener("click", () =>{
   expression.setAttribute("value", expression.value + 1)
})
two.addEventListener("click", () =>{
    expression.setAttribute("value", expression.value + 2)
})
three.addEventListener("click", () =>{
    expression.setAttribute("value", expression.value + 3)
})
four.addEventListener("click", () =>{
    expression.setAttribute("value", expression.value + 4)
})
five.addEventListener("click", () =>{
    expression.setAttribute("value", expression.value + 5)
})
six.addEventListener("click", () =>{
    expression.setAttribute("value", expression.value + 6)
})
seven.addEventListener("click", () =>{
    expression.setAttribute("value", expression.value + 7)
})
eight.addEventListener("click", () =>{
    expression.setAttribute("value", expression.value + 8)
})
nine.addEventListener("click", () =>{
    expression.setAttribute("value", expression.value + 9)
})
zero.addEventListener("click", () =>{
    expression.setAttribute("value", expression.value + 0)
})
period.addEventListener("click", () =>{
    expression.setAttribute("value", expression.value + ".")
})
addition.addEventListener("click", () =>{
    expression.setAttribute("value", expression.value + "+")
})
minus.addEventListener("click", () =>{
    expression.setAttribute("value", expression.value + "−")
})
multiplication.addEventListener("click", () =>{
    expression.setAttribute("value", expression.value + "×")   
})
division.addEventListener("click", () =>{
    expression.setAttribute("value", expression.value + "÷")
})
modulus.addEventListener("click", () =>{
    expression.setAttribute("value", expression.value + "%")
})
openingBracket.addEventListener("click", () =>{
    expression.setAttribute("value", expression.value + "(")
})
closingBracket.addEventListener("click", () =>{
    expression.setAttribute("value", expression.value + ")")
})
pi.addEventListener("click", () =>{
    expression.setAttribute("value", expression.value + "π")
})
squareRoot.addEventListener("click", () =>{
    expression.setAttribute("value", expression.value + "√")
})
squared.addEventListener("click", () =>{
    expression.setAttribute("value", expression.value + "^")
})
ac.addEventListener("click", () => {
    expression.setAttribute("value", "")
    result.setAttribute("value", "")
})
del.addEventListener("click", () => {
    let exp = []
    let x = expression.value
    let x1 = x.toString()
    let x2 = x1.split("")
    x2.pop()
    let x3 = x2.join("")
    console.log(x3)
    expression.setAttribute("value", x3)   
})




















































})
