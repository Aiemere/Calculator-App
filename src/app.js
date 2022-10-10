document.addEventListener("DOMContentLoaded", () => {
const calcScreen = document.querySelector(".calcScreen")
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
const numbers = document.querySelectorAll(".numbers")


let x = expression.value
let x1 = x.toString()
let x2 = x1.split("")
x2.pop()
if(x2.length > 11){
    calcScreen.style.overflowX = "scroll"
}
let valuesArray = []
let indexArray = []
numbers.forEach(number => number.addEventListener("click",() => {
    setTimeout(() => {
        let value = expression.value
        let expx = value.split("+").join(",").split("−").join(",").split("×").
        join(",").split("÷").join(",").split(",")
        let exp1 = value.split("")
        //let expx1 = Array.from(expx)
        //let expx2 = expx1.map(num => num * 1)
        if(exp1.includes("+") == true){
            //let indexArray = []
            let exp2 = value.split("+")
            let from = Array.from(exp2)
            let from2 = from.pop()
            let exp3 = from2 * 1
            let index = expx.indexOf(from2,-1)
            indexArray.push(index)
            indexArray.forEach(num => {
                if(num == -1) {
                let z = indexArray.indexOf(num)
                indexArray.splice(z,1)
                }
            })
            let indexArraySlice = indexArray.slice(-2)
            console.log(expx)
            console.log(indexArray)
            console.log(indexArraySlice)
            if(isNaN(exp3) == false){
                if(index == indexArraySlice[0]){
                    valuesArray.pop()
                    indexArray.pop()
                    let slice1 = valuesArray.slice(-1) * 1
                    let exp4 = slice1 + exp3
                    valuesArray.push(exp4)
                    console.log(indexArray)
                    console.log(valuesArray)
                    
                }else if (index != indexArraySlice[0]){
                    let slice1 = valuesArray.slice(-1) * 1
                    let exp4 = slice1 + exp3
                    valuesArray.push(exp4)
                    console.log(valuesArray)
                    console.log(index)
                    console.log(expx)
                }
                
            }else if(isNaN(exp3) == true){
                console.log("exp3 is NaN")
            }
            console.log(valuesArray)
            //let from3 = from2.reduce((pv, cv) => pv - cv)
            //console.log(from3)
            //valuesArray.splice(0,1, exp4)
            //let from2 = from.map(num => num * 1)
        }
        if(exp1.includes("−") == true){
            //let indexArray = []
            let exp2 = value.split("−")
            let from = Array.from(exp2)
            let from2 = from.pop()
            let exp3 = from2 * 1
            let index = expx.indexOf(from2,-1)
            indexArray.push(index)
            indexArray.forEach(num => {
                if(num == -1) {
                let z = indexArray.indexOf(num)
                indexArray.splice(z,1)
                }
            })
            let indexArraySlice = indexArray.slice(-2)
            console.log(indexArray)
            console.log(`from2:${from2}, index: ${index}, indexArraySlice: ${indexArraySlice}`)
            console.log(index == indexArraySlice[0])
            console.log(expx)
            if(isNaN(exp3) == false){
                if(index == indexArraySlice[0]){
                    valuesArray.pop()
                    indexArray.pop()
                    let slice1 = valuesArray.slice(-1) * 1
                    let exp4 = slice1 - exp3
                    valuesArray.push(exp4)
                    console.log(valuesArray)
                }else if (index != indexArraySlice[0]){
                    let slice1 = valuesArray.slice(-1) * 1
                    let exp4 = slice1 - exp3
                    valuesArray.push(exp4)
                    console.log(valuesArray)
                }
                
            }else if(isNaN(exp3) == true){
                console.log("exp3 is NaN")
            }
            console.log(valuesArray)
        
        }
        if(exp1.includes("×") == true){
            //let indexArray = []
            let exp2 = value.split("×")
            let from = Array.from(exp2)
            let from2 = from.pop()
            let exp3 = from2 * 1
            let index = expx.indexOf(from2, -1)
            indexArray.push(index)
            indexArray.forEach(num => {
                if(num == -1) {
                let z = indexArray.indexOf(num)
                indexArray.splice(z,1)
                }
            })
            let indexArraySlice = indexArray.slice(-2)
            console.log(indexArray)
            if(isNaN(exp3) == false){
                if(index == indexArraySlice[0]){
                    valuesArray.pop()
                    indexArray.pop()
                    let slice1 = valuesArray.slice(-1) * 1
                    let exp4 = slice1 * exp3
                    valuesArray.push(exp4)
                    console.log(valuesArray)
                }else if (index != indexArraySlice[0]){
                    let slice1 = valuesArray.slice(-1) * 1
                    let exp4 = slice1 * exp3
                    valuesArray.push(exp4)
                    console.log(valuesArray)
                }
                
            }else if(isNaN(exp3) == true){
                console.log("exp3 is NaN")
            }
            console.log(valuesArray)
        
        }
        if(exp1.includes("÷") == true){
            //let indexArray = []
            let exp2 = value.split("÷")
            let from = Array.from(exp2)
            let from2 = from.pop()
            let exp3 = from2 * 1
            let index = expx.indexOf(from2, -1)
            indexArray.push(index)
            indexArray.forEach(num => {
                if(num == -1) {
                let z = indexArray.indexOf(num)
                indexArray.splice(z,1)
                }
            })
            let indexArraySlice = indexArray.slice(-2)
            console.log(indexArray)
            if(isNaN(exp3) == false){
                if(index == indexArraySlice[0]){
                    valuesArray.pop()
                    indexArray.pop()
                    let slice1 = valuesArray.slice(-1) * 1
                    let exp4 = slice1 / exp3
                    valuesArray.push(exp4)
                    console.log(valuesArray)
                }else if (index != indexArraySlice[0]){
                    let slice1 = valuesArray.slice(-1) * 1
                    let exp4 = slice1 / exp3
                    valuesArray.push(exp4)
                    console.log(valuesArray)
                }
                
            }else if(isNaN(exp3) == true){
                console.log("exp3 is NaN")
            }
            console.log(valuesArray)
        
        }
        /*if(exp1.includes("÷")){
            let exp2 = value.split("÷")
            let from = Array.from(exp2)
            /*let filterFrom = from.filter(num => num.includes("%"))
            let boo = filterFrom[0].split("%")
            boo.pop()
            let foo = boo[0] * 1
            let foo1 = foo / 100
            from.splice(0,1, foo1)
            console.log(foo1)
            console.log(from)
            
            let from2 = from.pop()
            let exp3 = from2 * 1
            if(isNaN(exp3) == false){
                let exp4 = valuesArray[0] / exp3
                valuesArray.splice(0,1, exp4)
                console.log(valuesArray[0])
            }else if(isNaN(exp3) == true){
                console.log("exp3 is NaN")
            }
        }*/else if(value.length >= 0 && exp1.includes("+","−","×","÷") == false){
            let value1 = value * 1
            let index = expx.indexOf(value)
            let indexArraySlice = indexArray.slice(-1)
            indexArray.push(index)
            if(isNaN(value1) == false){
                if(index == indexArraySlice[0]){
                    indexArray.pop()
                    valuesArray.splice(0,1, value1)
                }else if(index != indexArraySlice){
                    valuesArray.splice(0,1, value1)
                }
                //valuesArray.splice(0,1, value1)  
                console.log(valuesArray)   
                console.log(indexArray) 
            }else if(isNaN(value1) == true){
                console.log("value1 is NaN")
            }
           
        }
    },500)
       
    })
)

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
    valuesArray = []
    indexArray = []
})
del.addEventListener("click", () => {
    let exp = []
    let x = expression.value
    let x1 = x.toString()
    let x2 = x1.split("")
    let x5 = x2.pop()
    let x3 = x2.join("")
    console.log(x5)
    expression.setAttribute("value", x3) 
    result.setAttribute("value", "") 
    if (x5 !== "+" && x5 !== "−"  && x5 !== "×" && x5 !== "÷") {
        valuesArray.pop()
        console.log(valuesArray)
        console.log(x5 !== "−")
        result.setAttribute("value", valuesArray.slice(-1))
    }else if(x5 === "+" && x5 === "−" && x5 === "×" && x5 === "÷") {
        console.log(x5)
    }
        
     
})
equals.addEventListener("click", results)
function results() { 
    let lastValue = valuesArray.slice(-1)
    console.log(lastValue[0])
    result.setAttribute("value", lastValue[0])
    console.log(result.value)
    let expArray = []
    let exp = expression.value
    /*let w = exp.split("+")
    let z = Array.from(w)
    let checkPercentage = z.filter(num => num.includes("%"))
    if(checkPercentage === true){
        let map = checkPercentage.map(per => {
            let b = per.split("%") 
            let c = b[0] * 1 * 100 
            y.push(c)
            console.log(map)
        })
    }*/
       
    let exp4 = exp.split("")
    if(exp4.includes("+")){
        let exp2 = exp.split("+")
        let y = Array.from(exp2)
        let update = y.map(age => age * 1)
        let results = update.reduce((pre, cur) => pre + cur)
        if(isNaN(results) == true){
            console.log("NaN results returned")
        }else if(isNaN(results) == false){
            result.setAttribute("value", results)
        }

    }else if(exp4.includes("−")){
        let exp2 = exp.split("−")
        let y = Array.from(exp2)
        let update = y.map(age => age * 1)
        let results = update.reduce((pre, cur) => pre - cur)
        if(isNaN(results) == true){
            console.log("NaN results returned")
        }else if(isNaN(results) == false){
            result.setAttribute("value", results)
        }
    }else if(exp4.includes("×")){
        let exp2 = exp.split("×")
        let y = Array.from(exp2)
        let update = y.map(age => age * 1)
        let results = update.reduce((pre, cur) => pre * cur)
        if(isNaN(results) == true){
            console.log("NaN results returned")
        }else if(isNaN(results) == false){
            result.setAttribute("value", results)
        }
    }else if(exp4.includes("÷")){
        let exp2 = exp.split("÷")
        let y = Array.from(exp2)
        let update = y.map(age => age * 1)
        let results = update.reduce((pre, cur) => pre / cur)
        if(isNaN(results) == true){
            console.log("NaN results returned")
        }else if(isNaN(results) == false){
            result.setAttribute("value", results)
        }
    }/*else if(exp4.includes("%")){
        console.log(exp4)
        /*let y = Array.from(exp2)
        let update = y.map(age => age * 1)
        let result = update.reduce((pre, cur) => pre / cur)
        console.log(result)
    }*/
    
    //console.log(typeof(expArray));
}



















































})
