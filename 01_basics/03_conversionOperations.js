// let score = "33"
let score = "33aaa"

// both are valid
//console.log(typeof score)
//console.log(typeof(score)) // as a method

// data conversion
let valueInNumber = Number(score)
//console.log(typeof valueInNumber); // number
//console.log(valueInNumber); // it will print NaN (not a number) but sill its type will be number

let Status = null

let statusInNumber = Number(Status) // convert the null to 0
//console.log(typeof statusInNumber) // number
//console.log(statusInNumber)  // 0


let booleanValue = true

let booleanInNumber = Number(booleanValue) // convert the true to 1 and false to 0
//console.log(typeof booleanInNumber) // number
//console.log(booleanInNumber)  // 1


let undefValue = undefined

let undefInNumber = Number(undefValue)
//console.log(typeof undefInNumber) // number
//console.log(undefInNumber)  // NaN


let strValue = "Eren Jeager"

let strInNumber = Number(strValue)
//console.log(typeof strInNumber) // number
//console.log(strInNumber)  // NaN


let num = 1
let numInBool = Boolean(num) // 1 to true and 0 to false
//console.log(numInBool)

// let str = ""
let str = "Eren"
let strInBool = Boolean(str)  // empty string to false and string to true
//console.log(strInBool)

let num2 = 12
let numInString = String(num2)
console.log(numInString)
console.log(typeof numInString)